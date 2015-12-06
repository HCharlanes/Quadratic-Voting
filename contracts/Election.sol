import "Organization";
contract Election{
    
    //Initialize variables
    address public organization;
    string public positionName;
    string public description;
    uint public startDate;
    uint public endDate;
    mapping (address => bool) public candidate;
    address[] public candidateProposals;


    function Election(address org, string pos, string desc, uint start, uint end){
        //Sanity Checks
        if (msg.sender != Organization(org).organizer() || start > end || start > now) {throw;}
        organization = org;
        positionName = pos;
        description = desc;
        startDate = start;
        endDate = end;
    }
    
    function runForElection(){
        
        //Sanity Checks
        if (!Organization(organization).members(msg.sender) || candidate[msg.sender]) {throw;}
        candidate[msg.sender] = true;
        string proposalName = positionName;
        string proposalDescription = positionName;
        address newProp = Organization(organization).makeProposal(proposalName,proposalDescription, startDate, endDate);
        candidateProposals.push(newProp);
    }
    
    function checkWinner() returns (address winProp){
        
        uint totalResult =  0;
        
        //iterate over all candidate proposals and see which one has the highest total.
        for (var i = 0; i < candidateProposals.length; i++){
            uint currentResult = Proposal(candidateProposals[i]).totalResult();
            if (currentResult > totalResult){
                totalResult = currentResult;
                address winningProp = candidateProposals[i];
            }
            return winningProp;
        }
    }
    
}
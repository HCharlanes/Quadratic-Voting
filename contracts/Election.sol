import "Organization";
contract Election{
    
    //Initialize variables
    address public organization;
    string public positionName;
    string public description;
    uint public startDate;
    uint public endDate;
    address[] public candidates;
    address[] public candidateProposals;


    function Election(address org, string pos, string desc, uint start, uint end){
        //Sanity Checks
        if (msg.sender != Organization(org).organizer() || start > end || or start > now) {throw;}
        organization = org;
        positionName = pos;
        description = desc;
        startDate = startDate;
        endDate = end;
    }
    
    function runForElection(){
        
        //Sanity Checks
        if (!Organization(organization).members(msg.sender) || candidates[msg.sender]) {throw;}
        candidates[] += msg.sender;
        string proposalName = positionName + "-" + string(msg.sender);
        newProp = Organization(organization).makeProposal(proposalName, startDate, endDate);
        candidateProposals[] = newProp;
    }
    
    function checkWinner(){
        
        //
    }
    
}
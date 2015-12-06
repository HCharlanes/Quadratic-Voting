import "Proposal";
contract Election{
    
    //Initialize variables
    bool test = false;
    uint Now = 5;
    address public organization;
    bytes32 public positionName;
    bytes32 public description;
    uint public startDate;
    uint public endDate;
    mapping (address => bool) public candidate;
    address[] public candidateProposals;

    function addCandidate(address can, address prop){
        candidate[can] = true;
        candidateProposals.push(prop);
    }
    
    function Election(bytes32 pos, bytes32 desc, uint start, uint end){
        //Sanity Checks
        //if (msg.sender != Organization(org).organizationOwner() || start > end || (start > now || (test == true && start > Now)) ) {throw;}
        organization = msg.sender;
        positionName = pos;
        description = desc;
        startDate = start;
        endDate = end;
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
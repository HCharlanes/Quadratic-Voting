//Quadractic
contract QuadracticVoting{
	function QuadraticVoting(){
	}

//Define the basic data Structures
	struct Voter{
		uint voteCount;
		bool yesOrNo;
	}
	struct Member{
		uint[] permisions;
	}
	struct Proposal {
		bytes32 name;
		bytes32 description;
		address contractID;
		uint yesVotes;
		uint noVotes;
		uint money;
		uint startDate;
		uint endDate;
		mapping (address => Voter) voters;
	}
	struct Organization{
		bytes32 name;
		uint voteCost;
		mapping (address => Member) members;
		mapping (uint => Proposal) proposals;
	}
    
    mapping (bytes32 => Organization) public organizations;
    
//Register an organization, and give the registering account admin access.
	function registerOrganization(bytes32 name, uint voteCost){
	    address administrator;
	    bytes32 organizationHash;
		organizationHash = sha256(name, msg.sender);
		Organization o = organizations[organizationHash];
		o.name = name;
		o.voteCost = voteCost;
	}
	function voteBuyer(){
	}
}
import "Proposal";

contract Organization {  // can be killed, so the owner gets sent the money in the end
	// Variables that define the organization
	address public organizationOwner;
	uint public base_tokens;
	uint public minNotice;

	//Variables that correspond to the state of an organization
	uint public numMembers;
	uint public numProposals;
	uint public proposalID;
	uint public token_count;
	mapping (address => bool) public members;
	mapping (address => uint) public balances;
	mapping (address => int) public propResults;
	mapping (uint => address) public proposals;
	
	//Fake time, testing purpose.
	uint public Now;

	//Events
	event NewMember(address _new); // so you can log the event
	event DeletedMember(address _old); // so you can log the event
	event Dispatch(uint amount);

	//Constructor
	function Organization(string name, uint basetokens, uint minNotice, address owner) {
		organizationOwner = owner;
		base_tokens = basetokens;
		token_count = 0;
		numMembers = 0;
		numProposals = 0;
		proposalID = 0;
	}

	//Fake time management
	function toTime(uint fakeTime) {
		Now = fakeTime;
	}

	
	
	function addMember(address newMember) {
		if(msg.sender != organizationOwner) { return; }
		members[newMember] = true;
		numMembers++;
		balances[newMember] = 0;
		giveTokens(base_tokens, newMember);
	}

	function removeMember(address member) {
		if(msg.sender != organizationOwner || !members[member]) { return; }
		members[member] = false;
		numMembers--;
		token_count -= balances[member];
		balances[member] = 0;
	}

	function giveTokens(uint amount, address dest) {
		token_count += amount;
		balances[dest] += amount;
	}

	//Create Proposal
	function makeProposal returns (uint ID) (string name, string description, uint startTime, uint endTime) {
		if( msg.sender != organizationOwner ) { return; }
		if( startTime < Now + minNotice ) { return; }
		address prop = new Proposal(name, description, startTime, endTime, msg.sender);
		proposals[proposalID] = prop;		
		propResults[prop] = -1;
		numProposals++;
		return proposalID;
		proposalID++;
	}


	function vote(bool vote, uint weight, address proposal) {

		if( !members[msg.sender] ) { return; }
		if( balances[msg.sender] < 1) { return; }
		if( weight < 1 ) { return; }
		if( weight*weight > balances[msg.sender] ) { return; }
		Proposal prop = Proposal(proposal);

		if( Now >= prop.startTime() && Now < prop.endTime() ) {
			balances[msg.sender] -= weight*weight;
			prop.vote(vote, weight, msg.sender);
		}
	}

	function dispatchBalance(address proposal) {
		Proposal p = Proposal(proposal);
		for(var i=0; i < p.nbVoters(); i++) {
			balances[p.voted(i)] += (p.bal() / p.nbVoters());	
		}
	}
	
	function getResult (address proposalAddress) {
		if (propResults[proposalAddress] != -1) { return; }
		Proposal p = Proposal(proposalAddress);
		if(now >= p.endTime() ){
			propResults[proposalAddress] = p.Results();
			dispatchBalance(proposalAddress);
			numProposals--;
			p.destroy();
		}
	}

	function destroy() {
		if (msg.sender == organizationOwner) { // without this funds could be locked in the contract forever!
			suicide(organizationOwner);
		}
	}

}

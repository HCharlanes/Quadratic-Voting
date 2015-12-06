import "Proposal";
import "Election";
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
	mapping (address => bool) public elections;
	address[] public proposals;
	mapping (address => uint) public proposalIDs;
	
	//Fake time, testing purpose.
	uint public Now;

	//Events
	event NewMember(address _new); // so you can log the event
	event DeletedMember(address _old); // so you can log the event
	event Dispatch(uint amount);

	//Constructor
	function Organization(bytes32 name, uint basetokens, uint minNotice, address owner) {
		organizationOwner = owner;
		base_tokens = basetokens;
		token_count = 0;
		numMembers = 0;
		numProposals = 0;
		proposalID = 0;
		proposals.push(0);
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
	function makeProposal(bytes32 name, bytes32 description, uint startTime, uint endTime)   returns(address prop)  {
		if( msg.sender != organizationOwner ) { return; }
		if( startTime < Now + minNotice ) { return; }
		proposalID++;
		prop = new Proposal(name, description, startTime, endTime, msg.sender);
		proposals.push(prop);		
		propResults[prop] = -1;
		numProposals++;
	}
	
	//Create Election
	function makeElection(bytes32 pos, bytes32 desc, uint start, uint end)   returns(address elect)  {
		if( msg.sender != organizationOwner || start < Now + minNotice || start > end) { throw; }
		address election  = new Election(pos, desc, start, end);
		elections[election] = true;
		return election;
	}
	
	function vote(bool vote, uint weight, address proposal) {

		if( !members[msg.sender] ) { return; }
		if( balances[msg.sender] < 1) { return; }
		if( weight < 1 ) { return; }
		if( weight*weight > balances[msg.sender] ) { return; }
		Proposal prop = Proposal(proposal);

		//if( Now >= prop.startTime() && Now < prop.endTime() ) {
			balances[msg.sender] -= weight*weight;
			prop.vote(vote, weight, msg.sender);
		//}
	}
function runForElection(address electAddr, bytes32 description){
        //Sanity Checks
        if (!members[msg.sender] || !elections[electAddr]) {throw;}
        bytes32 proposalName = Election(electAddr).positionName();
        bytes32 proposalDescription = description;
        address newProp = makeProposal(proposalName,proposalDescription, Election(electAddr).startDate(), Election(electAddr).endDate());
        Election(electAddr).addCandidate(msg.sender, newProp);
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
		//if(now >= p.endTime() ){
			propResults[proposalAddress] = p.Results();
			dispatchBalance(proposalAddress);
			numProposals--;
		//	p.destroy();
	//	}
	}

	function destroy() {
		if (msg.sender == organizationOwner) { // without this funds could be locked in the contract forever!
			suicide(organizationOwner);
		}
	}

}

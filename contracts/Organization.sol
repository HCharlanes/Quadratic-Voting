import "Proposal";

contract Organization {  // can be killed, so the owner gets sent the money in the end

	address public organizer;
	mapping (address => bool) public members;
	mapping (address => uint) public balances;
	mapping (address => int) public propResults;
	uint public numMembers;
	uint public token_count;
	uint public base_tokens = 100;
	uint public numProposals;
	uint public minNotice;
	address[] public proposals;
	uint public Now;

	event NewMember(address _new); // so you can log the event
	event DeletedMember(address _old); // so you can log the event
	event Dispatch(uint amount);

	function Organization() {
		organizer = msg.sender;		
		token_count = 0;
		numMembers = 0;
	}

	function toTime(uint fakeTime) {
		Now = fakeTime;
	}

	function makeProposal(string name, uint startTime, uint endTime) returns (address propAddr){
		if( msg.sender != organizer ) { return; }
		if( startTime < Now + minNotice ) { return; }
		address prop = new Proposal(name, startTime, endTime);
		proposals.push(prop);		
		propResults[prop] = -1;
		numProposals++;
		return prop;
	}

	function addMember(address newMember) {
		if(msg.sender != organizer) { return; }
		members[newMember] = true;
		numMembers++;
		balances[newMember] = 0;
		giveTokens(base_tokens, newMember);
	}

	function removeMember(address member) {
		if(msg.sender != organizer || !members[member]) { return; }
		members[member] = false;
		numMembers--;
		token_count -= balances[member];
		balances[member] = 0;
	}

	function giveTokens(uint amount, address dest) {
		token_count += amount;
		balances[dest] += amount;
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
	/*
	function getResult (address proposalAddress) {
		if (propResults[proposalAddress] != -1) { return; }
		Proposal p = Proposal(proposalAddress);
		if(now >= p.endTime() ){
			propResults[proposalAddress] = p.Results();
			dispatchBalance(proposalAddress);
			p.destroy();
		}
	}
	*/

	function destroy() {
		if (msg.sender == organizer) { // without this funds could be locked in the contract forever!
			suicide(organizer);
		}
	}

}

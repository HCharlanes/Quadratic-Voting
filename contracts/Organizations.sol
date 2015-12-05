import "Proposal";
contract Organizations {  // can be killed, so the owner gets sent the money in the end
uint public Now = now;
address public owner;
    function Organizations(){
        owner = msg.sender;
    }
struct Organization{
	string name;
	address organizer;
	mapping (address => bool) members;
	mapping (address => uint) balances;
	uint numMembers;
	uint token_count;
	uint base_tokens;
	uint numProposals;
	address[] proposals;
}
    Organization[] public organizations;
	event NewMember(address _new); // so you can log the event
	event DeletedMember(address _old); // so you can log the event
	
	function NewOrganization(string name, uint base_tokens) returns (uint Org){
		uint newOrg = 0;
		organizations[newOrg] = Organization(name, msg.sender, 0, 0, base_tokens, 0);
		return newOrg;
	}

	function makeProposal(string name, string description, uint starttime, uint endtime) {
		address prop = new Proposal(name, description, starttime, endtime);
		organizations[name].proposals.push(prop);
		organizations[name].numProposals++;
	}

	function addMember(string name, address newMember) {
		if(msg.sender != organizations[name].organizer) { return; }
		organizations[name].members[newMember] = true;
		organizations[name].numMembers++;
		organizations[name].balances[newMember] = 0;
		giveTokens(name, organizations[name].base_tokens, newMember);
	}

	function removeMember(string name, address member) {
		if(msg.sender != organizations[name].organizer || !organizations[name].members[member]) { return; }
		organizations[name].members[member] = false;
		organizations[name].numMembers--;
		organizations[name].token_count -= organizations[name].balances[member];
		organizations[name].balances[member] = 0;
	}

	function giveTokens(string name, uint amount, address dest) {
		organizations[name].token_count += amount;
		organizations[name].balances[dest] += amount;
	}

	function vote(string name, bool vote, uint weight, address proposal) {
		if( !organizations[name].members[msg.sender] ) { return; }
		if( organizations[name].balances[msg.sender] < 1) { return; }
		if( weight < 1 ) { return; }
		if( weight*weight > organizations[name].balances[msg.sender] ) { return; }
		Proposal prop = Proposal(proposal);

		if( Now >= prop.startTime() && Now < prop.endTime() ) {
			organizations[name].balances[msg.sender] -= weight*weight;
			prop.vote(vote, weight, msg.sender);
		}
	}

	function dispatchBalance(string name, address proposal) {
		Proposal p = Proposal(proposal);
		for(var i=0; i < p.nbVoters(); i++) {
			organizations[name].balances[p.voted(i)] += (p.bal() / p.nbVoters());	
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
	function toTime(uint fakeTime) {
		Now = fakeTime;

	}

	function destroy() {
		if (msg.sender == owner) { // without this funds could be locked in the contract forever!
			suicide(owner);
		}
	}
}
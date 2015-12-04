import "Proposal";
contract Organizations {  // can be killed, so the owner gets sent the money in the end
uint Now = now;
address owner;
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
	
	function NewOrganization(string name) returns (uint Org){
	   	uint newOrg = organizations.length;
		organizations[newOrg].name = name;
		organizations[newOrg].organizer = msg.sender;		
		organizations[newOrg].token_count = 0;
		organizations[newOrg].numMembers = 0;
		organizations[newOrg].numProposals = 0;
		return newOrg;
	}

	function makeProposal(uint orgNum, string name, string description, uint starttime, uint endtime) {
		address prop = new Proposal(orgNum, name, description, starttime, endtime);
		organizations[orgNum].proposals.push(prop);
		organizations[orgNum].numProposals++;
	}

	function addMember(uint orgNum,address newMember) {
		if(msg.sender != organizations[orgNum].organizer) { return; }
		organizations[orgNum].members[newMember] = true;
		organizations[orgNum].numMembers++;
		organizations[orgNum].balances[newMember] = 0;
		giveTokens(orgNum, organizations[orgNum].base_tokens, newMember);
	}

	function removeMember(uint orgNum, address member) {
		if(msg.sender != organizations[orgNum].organizer || !organizations[orgNum].members[member]) { return; }
		organizations[orgNum].members[member] = false;
		organizations[orgNum].numMembers--;
		organizations[orgNum].token_count -= organizations[orgNum].balances[member];
		organizations[orgNum].balances[member] = 0;
	}

	function giveTokens(uint orgNum, uint amount, address dest) {
		organizations[orgNum].token_count += amount;
		organizations[orgNum].balances[dest] += amount;
	}

	function vote(uint orgNum, bool vote, uint weight, address proposal) {
		if( !organizations[orgNum].members[msg.sender] ) { return; }
		if( organizations[orgNum].balances[msg.sender] < 1) { return; }
		if( weight < 1 ) { return; }
		if( weight*weight > organizations[orgNum].balances[msg.sender] ) { return; }
		Proposal prop = Proposal(proposal);

		if( Now >= prop.startTime() && Now < prop.endTime() ) {
			organizations[orgNum].balances[msg.sender] -= weight*weight;
			prop.vote(vote, weight, msg.sender);
		}
	}

	function dispatchBalance(uint orgNum, address proposal) {
		Proposal p = Proposal(proposal);
		for(var i=0; i < p.nbVoters(); i++) {
			organizations[orgNum].balances[p.voted(i)] += (p.bal() / p.nbVoters());	
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
		if (msg.sender == owner) { // without this funds could be locked in the contract forever!
			suicide(owner);
		}
	}
}
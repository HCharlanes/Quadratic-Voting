import "Proposal";

contract Organization {  // can be killed, so the owner gets sent the money in the end

	address public organizer;
	mapping (address => bool) public members;
	mapping (address => uint) public balances;
	uint public numMembers;
	uint public token_count;
	uint public base_tokens = 100;
	uint public numProposals;
	address[] public proposals;

	event NewMember(address _new); // so you can log the event
	event DeletedMember(address _old); // so you can log the event

	function Organization() {
		organizer = msg.sender;		
		token_count = 0;
		numMembers = 0;
	}

	function makeProposal(string name) {
		address prop = new Proposal(name);
		proposals.push(prop);
		numProposals++;
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

		balances[msg.sender] -= weight*weight;

		Proposal(proposal).vote(vote, weight, msg.sender);
	}

	// function buyTicket() public returns (bool success){
	// 	if (numRegistrants >= quota) { return false; }
	// 	registrantsPaid[msg.sender] = msg.value;
	// 	numRegistrants++;
	// 	Deposit(msg.sender, msg.value);
	// 	return true;
	// }

	// function changeQuota(uint newquota) public {
	// 	if (msg.sender != organizer) { return; }
	// 	quota = newquota;
	// }

	// function refundTicket(address recipient, uint amount) public returns (bool success){
	// 	if (msg.sender != organizer) { return false; }
	// 	if (registrantsPaid[recipient] == amount) { 
	// 		address myAddress = this;
	// 		if (myAddress.balance >= amount) { 
	// 			recipient.send(amount);
	// 			Refund(recipient, amount);
	// 			registrantsPaid[recipient] = 0;
	// 			numRegistrants--;
	// 			return true;
	// 		}
	// 	}
	// 	return false;
	// }

	function destroy() {
		if (msg.sender == organizer) { // without this funds could be locked in the contract forever!
			suicide(organizer);
		}
	}
}

contract Proposal {
	address owner;
	string public name;
	mapping (address => bool) public voted;
	uint public forVotes;
	uint public againstVotes;

	function Proposal(string newName) {
		owner = msg.sender;
		name = newName;
	}

	function vote(bool vote, uint weight, address member) {
		if(msg.sender != owner) { return; }
		voted[member] = true;
		if(vote) {
			forVotes += weight;
			return;
		}
		againstVotes += weight;
		return;
	}
}
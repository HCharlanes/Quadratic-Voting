contract Proposal {
	address owner;
	string public name;
	mapping (address => bool) public voted;
	uint public forVotes;
	uint public againstVotes;
	uint public startTime;
	uint public endTime;

	function Proposal(string newName) {
		owner = msg.sender;
		name = newName;
	}

	function vote(bool vote, uint weight, address member) {
		if(msg.sender != owner) { return; }
		if(now >= startTime && now <= endTime){
			voted[member] = true;
			if(vote) {
				forVotes += weight;
				return;
			}
			againstVotes += weight;
			return;
		}
	}
}

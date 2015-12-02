contract Proposal {
	address owner;
	string public name;
	string public description;
	mapping (address => bool) public voted;
	uint public voters;
	uint public funds;
	uint public forVotes;
	uint public againstVotes;
	uint public startTime;
	uint public endTime;

	function Proposal(string newName, string newDescription) {
		owner = msg.sender;
		name = newName;
		description = newDescription;
	}

	function vote(bool vote, uint weight, address member) {
		if(msg.sender != owner) { return; }
		if(now >= startTime && now <= endTime){
			voted[member] = true;
			voters++;
			funds += weight ** 2;
			if(vote) {
				forVotes += weight;
				return;
			}
			againstVotes += weight;
			return;
		}
	}
	function endVote() {
	    if (now >= block.timestamp){
	        uint averagePayment = funds/voters;
	        for (uint i = 0; i < voters; i++){
	            function do(){
	                
	            }
	        }
	    }
	}
}

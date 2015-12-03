contract Proposal {
	address owner;
	string public name;
	address[] public voted;
	uint public forVotes;
	uint public againstVotes;
	uint public bal;
	uint public startTime;
	uint public endTime;
	uint public nbVoters;
	uint public Now;


	function Proposal(string newName, uint startime, uint endtime) {
		owner = msg.sender;
		name = newName;
		startTime = startime;
		endTime = endtime;
	}

	function toTime(uint fakeTime) {
		Now = fakeTime;
	}

	function vote(bool vote, uint weight, address member) {
		if(msg.sender != owner) { return; }
		voted.push(member);
		bal += weight * weight;
		nbVoters++;
		if(vote) {
			forVotes += weight;
			return;
		}
		againstVotes += weight;
		return;
	}
	
	function Results() returns (int result) {
		if( Now < endTime ) { return; }
		if(forVotes > againstVotes)
		return 1;
		return 0;
	}
	
	function destroy() {
		if (msg.sender == owner) { // without this funds could be locked in the contract forever!
			suicide(owner);
		}
	}
}

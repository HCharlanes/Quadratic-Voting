contract Proposal {
	// var that defines the proposal
	address public creator;
	string public description;
	string public name;
	uint public startTime;
	uint public endTime;

	// states of the proposal
	address[] public voted;
	uint public forVotes;
	uint public againstVotes;
	uint public bal;
	uint public nbVoters;
	uint Now = now;


	function Proposal(string newName, string newDescription, uint startime, uint endtime) {
		creator = msg.sender;
		name = newName;
		startTime = startime;
		endTime = endtime;
		description = newDescription;
	}

	function toTime(uint fakeTime) {
		Now = fakeTime;

	}

	function vote(bool vote, uint weight, address member) {
		if(msg.sender != creator) { return; }

		voted.push(member);
		bal += weight * weight;
		nbVoters++;
		if(vote) {
			forVotes += weight;
			return;
		againstVotes += weight;
		return;
		}
	}
	
	//We should allow for a supermajority as well- return the ratio of forVotes to againstVotes and let the organization decides what that means
	function Results() returns (int result) {
		if( Now < endTime ) { return; }
		if(forVotes > againstVotes) {return 1;}
		if(forVotes <= againstVotes) {return 0;}

	}
	
	function totalResult() returns (uint result) {
		if( Now < endTime ) { return; }
		return forVotes - againstVotes;
	}

	function destroy() {
		if (msg.sender == creator) { // without this funds could be locked in the contract forever!
			suicide(creator);
		}
	}
}

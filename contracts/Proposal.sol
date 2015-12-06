contract Proposal {
	string public organization;
	address public owner;
	string public description;
	string public name;
	address[] public voted;
	uint public forVotes;
	uint public againstVotes;
	uint public bal;
	uint public startTime;
	uint public endTime;
	uint public nbVoters;
	uint Now = now;


	function Proposal(string orgName, string newName, string newDescription, uint startime, uint endtime) {
		organization = orgName;
		owner = msg.sender;
		name = newName;
		startTime = startime;
		endTime = endtime;
		description = newDescription;
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
		againstVotes += weight;
		return;
		}
	}
	
	//We should allow for a supermajority as well- return the ratio of forVotes to againstVotes and let the organization decides what that means
	function Results() returns (uint result) {
		if( Now < endTime ) { return; }
		if(forVotes > againstVotes)
		return forVotes/againstVotes;
	}
	
	function destroy() {
		if (msg.sender == owner) { // without this funds could be locked in the contract forever!
			suicide(owner);
		}
	}
}

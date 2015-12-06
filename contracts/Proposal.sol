contract Proposal {
	// var that defines the proposal
	address public organization;
	address public creator;
	bytes32 public description;
	bytes32 public name;
	uint public startTime;
	uint public endTime;

	// states of the proposal
	address[] public voted;
	uint public forVotes;
	uint public againstVotes;
	uint public bal;
	uint public nbVoters;
	int public result;
	uint Now = now;


	function Proposal(bytes32 newName, bytes32 newDescription, uint startime, uint endtime, address Creator) {
		organization = msg.sender;
		creator = Creator;
		name = newName;
		startTime = startime;
		endTime = endtime;
		description = newDescription;
	}

	function toTime(uint fakeTime) {
		Now = fakeTime;

	}

	function vote(bool vote, uint weight, address member) {
		if(msg.sender != organization) { return; }
		voted.push(member);
		bal += weight * weight;
		nbVoters++;
		if(vote) {
			forVotes += weight;
			return;}
		againstVotes += weight;
		return;
		
	}
	
	//We should allow for a supermajority as well- return the ratio of forVotes to againstVotes and let the organization decides what that means
	function Results() returns (int resulto) {
		//if( Now < endTime ) { return; }
		if(forVotes > againstVotes) {result = 1; return 1;}
		if(forVotes <= againstVotes) {result = 0; return 0;}
	}
	
	function totalResult() returns (uint result) {
		//if( Now < endTime ) { return; }
		return forVotes - againstVotes;
	}

	function destroy() {
		if (msg.sender == organization || msg.sender==creator) { // without this funds could be locked in the contract forever!
			suicide(creator);
		}
	}
}

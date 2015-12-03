import "Organization";
contract Proposal {
	address owner;
	string public description;
	string public name;
	address[] public voted;
	uint public forVotes;
	uint public againstVotes;
	uint public bal;
	uint public startTime;
	uint public endTime;
	uint public nbVoters;
	uint public Now;


	function Proposal(string newName, string newDescription, uint startime, uint endtime) {
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

{"filter":false,"title":"Proposal.sol","tooltip":"/contracts/Proposal.sol","undoManager":{"mark":3,"position":3,"stack":[[{"start":{"row":48,"column":2},"end":{"row":49,"column":0},"action":"insert","lines":["",""],"id":4},{"start":{"row":49,"column":0},"end":{"row":49,"column":1},"action":"insert","lines":["\t"]}],[{"start":{"row":49,"column":1},"end":{"row":50,"column":0},"action":"insert","lines":["",""],"id":5},{"start":{"row":50,"column":0},"end":{"row":50,"column":1},"action":"insert","lines":["\t"]}],[{"start":{"row":50,"column":1},"end":{"row":53,"column":2},"action":"insert","lines":["function totalResult() returns (uint result) {","\t\tif( Now < endTime ) { return; }","\t\treturn forVotes - againstVotes;","\t}"],"id":6}],[{"start":{"row":0,"column":0},"end":{"row":61,"column":0},"action":"remove","lines":["contract Proposal {","\tstring public organization;","\taddress public owner;","\tstring public description;","\tstring public name;","\taddress[] public voted;","\tuint public forVotes;","\tuint public againstVotes;","\tuint public bal;","\tuint public startTime;","\tuint public endTime;","\tuint public nbVoters;","\tuint Now = now;","","","\tfunction Proposal(string orgName, string newName, string newDescription, uint startime, uint endtime) {","\t\torganization = orgName;","\t\towner = msg.sender;","\t\tname = newName;","\t\tstartTime = startime;","\t\tendTime = endtime;","\t\tdescription = newDescription;","\t}","","\tfunction toTime(uint fakeTime) {","\t\tNow = fakeTime;","","\t}","","\tfunction vote(bool vote, uint weight, address member) {","\t\tif(msg.sender != owner) { return; }","","\t\tvoted.push(member);","\t\tbal += weight * weight;","\t\tnbVoters++;","\t\tif(vote) {","\t\t\tforVotes += weight;","\t\t\treturn;","\t\tagainstVotes += weight;","\t\treturn;","\t\t}","\t}","\t","\t//We should allow for a supermajority as well- return the ratio of forVotes to againstVotes and let the organization decides what that means","\tfunction Results() returns (uint result) {","\t\tif( Now < endTime ) { return; }","\t\tif(forVotes > againstVotes)","\t\treturn forVotes/againstVotes;","\t}","\t","\tfunction totalResult() returns (uint result) {","\t\tif( Now < endTime ) { return; }","\t\treturn forVotes - againstVotes;","\t}","\t","\tfunction destroy() {","\t\tif (msg.sender == owner) { // without this funds could be locked in the contract forever!","\t\t\tsuicide(owner);","\t\t}","\t}","}",""],"id":7},{"start":{"row":0,"column":0},"end":{"row":63,"column":0},"action":"insert","lines":["contract Proposal {","\t// var that defines the proposal","\taddress public creator;","\tstring public description;","\tstring public name;","\tuint public startTime;","\tuint public endTime;","","\t// states of the proposal","\taddress[] public voted;","\tuint public forVotes;","\tuint public againstVotes;","\tuint public bal;","\tuint public nbVoters;","\tuint Now = now;","","","\tfunction Proposal(string newName, string newDescription, uint startime, uint endtime) {","\t\tcreator = msg.sender;","\t\tname = newName;","\t\tstartTime = startime;","\t\tendTime = endtime;","\t\tdescription = newDescription;","\t}","","\tfunction toTime(uint fakeTime) {","\t\tNow = fakeTime;","","\t}","","\tfunction vote(bool vote, uint weight, address member) {","\t\tif(msg.sender != creator) { return; }","","\t\tvoted.push(member);","\t\tbal += weight * weight;","\t\tnbVoters++;","\t\tif(vote) {","\t\t\tforVotes += weight;","\t\t\treturn;","\t\tagainstVotes += weight;","\t\treturn;","\t\t}","\t}","\t","\t//We should allow for a supermajority as well- return the ratio of forVotes to againstVotes and let the organization decides what that means","\tfunction Results() returns (int result) {","\t\tif( Now < endTime ) { return; }","\t\tif(forVotes > againstVotes) {return 1;}","\t\tif(forVotes <= againstVotes) {return 0;}","","\t}","\t","\tfunction totalResult() returns (uint result) {","\t\tif( Now < endTime ) { return; }","\t\treturn forVotes - againstVotes;","\t}","","\tfunction destroy() {","\t\tif (msg.sender == creator) { // without this funds could be locked in the contract forever!","\t\t\tsuicide(creator);","\t\t}","\t}","}",""]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":24,"selection":{"start":{"row":20,"column":23},"end":{"row":20,"column":23},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":18,"state":"start","mode":"plugins/ethergit.solidity.language/solidity_mode"}},"timestamp":1449375933252,"hash":"6d1cd048490bbe86b85cb10189b3457d3e89f265"}
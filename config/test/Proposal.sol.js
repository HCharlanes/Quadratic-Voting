"use strict";

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var factory = function factory(Pudding) {
  // Inherit from Pudding. The dependency on Babel sucks, but it's
  // the easiest way to extend a Babel-based class. Note that the
  // resulting .js file does not have a dependency on Babel.

  var Proposal = (function (_Pudding) {
    _inherits(Proposal, _Pudding);

    function Proposal() {
      _classCallCheck(this, Proposal);

      _get(Object.getPrototypeOf(Proposal.prototype), "constructor", this).apply(this, arguments);
    }

    return Proposal;
  })(Pudding);

  ;

  // Set up specific data for this class.
  Proposal.abi = [{ "constant": true, "inputs": [], "name": "name", "outputs": [{ "name": "", "type": "string" }], "type": "function" }, { "constant": false, "inputs": [{ "name": "fakeTime", "type": "uint256" }], "name": "toTime", "outputs": [], "type": "function" }, { "constant": true, "inputs": [], "name": "endTime", "outputs": [{ "name": "", "type": "uint256" }], "type": "function" }, { "constant": true, "inputs": [], "name": "bal", "outputs": [{ "name": "", "type": "uint256" }], "type": "function" }, { "constant": true, "inputs": [], "name": "Now", "outputs": [{ "name": "", "type": "uint256" }], "type": "function" }, { "constant": false, "inputs": [{ "name": "vote", "type": "bool" }, { "name": "weight", "type": "uint256" }, { "name": "member", "type": "address" }], "name": "vote", "outputs": [], "type": "function" }, { "constant": true, "inputs": [], "name": "startTime", "outputs": [{ "name": "", "type": "uint256" }], "type": "function" }, { "constant": false, "inputs": [], "name": "destroy", "outputs": [], "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "uint256" }], "name": "voted", "outputs": [{ "name": "", "type": "address" }], "type": "function" }, { "constant": false, "inputs": [], "name": "Results", "outputs": [{ "name": "result", "type": "int256" }], "type": "function" }, { "constant": true, "inputs": [], "name": "forVotes", "outputs": [{ "name": "", "type": "uint256" }], "type": "function" }, { "constant": true, "inputs": [], "name": "nbVoters", "outputs": [{ "name": "", "type": "uint256" }], "type": "function" }, { "constant": true, "inputs": [], "name": "againstVotes", "outputs": [{ "name": "", "type": "uint256" }], "type": "function" }, { "inputs": [{ "name": "newName", "type": "string" }, { "name": "startime", "type": "uint256" }, { "name": "endtime", "type": "uint256" }], "type": "constructor" }];
  Proposal.binary = "606060405260405161047638038061047683398101604052805160805160a05191909201919060605160008054600160a060020a0319163317815584516001805492819052926020601f6002600019868816156101000201909516949094048401047fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf6908101939091608001908390106100e257805160ff19168380011785555b506100bb9291505b80821115610112576000815583016100a8565b50508160066000508190555080600760005081905550505050610360806101166000396000f35b828001600101855582156100a0579182015b828111156100a05782518260005055916020019190600101906100f4565b509056606060405236156100a35760e060020a600035046306fdde0381146100a55780630909d4d5146101005780633197cbb61461010b5780633d79d1c81461011457806344d4fd191461011d57806361ebccfd1461012657806378e979251461014d57806383197ef0146101565780638fbb38ff1461017e57806394f0873d146101c4578063bd108fd4146101db578063bfcddbbc146101e4578063d6b225be146101ed575b005b6101f6600180546020601f6002600019848616156101000201909316929092049182018190040260809081016040526060828152929190828280156102995780601f1061026e57610100808354040283529160200191610299565b6004356009556100a3565b61026460075481565b61026460055481565b61026460095481565b6100a360043560243560443560005433600160a060020a039081169116146102af576102aa565b61026460065481565b6100a360005433600160a060020a039081169116141561035e57600054600160a060020a0316ff5b61026460043560028054829081101561000257506000527f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace0154600160a060020a031681565b61026460075460095460009190101561034a575b90565b61026460035481565b61026460085481565b61026460045481565b60405180806020018281038252838181518152602001915080519060200190808383829060006004602084601f0104600302600f01f150905090810190601f1680156102565780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6060908152602090f35b820191906000526020600020905b81548152906001019060200180831161027c57829003601f168201915b505050505081565b60048054830190555b505050565b600280546001810180835582818380158290116102ef578183600052602060002091820191016102ef91905b8082111561034657600081556001016102db565b50505091909060005260206000209001600050805473ffffffffffffffffffffffffffffffffffffffff191683179055506005805483800201905560088054600101905582156102a15760038054830190556102aa565b5090565b60045460035411156101d8575060016101d8565b56";

  if ("0x04a30b0090dbb20561ad01ee84a96779256d22b9" != "") {
    Proposal.address = "0x04a30b0090dbb20561ad01ee84a96779256d22b9";

    // Backward compatibility; Deprecated.
    Proposal.deployed_address = "0x04a30b0090dbb20561ad01ee84a96779256d22b9";
  }

  Proposal.generated_with = "1.0.2";
  Proposal.contract_name = "Proposal";

  return Proposal;
};

// Nicety for Node.
factory.load = factory;

if (typeof module != "undefined") {
  module.exports = factory;
} else {
  // There will only be one version of Pudding in the browser,
  // and we can use that.
  window.Proposal = factory;
}
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
  Proposal.abi = [{ "constant": true, "inputs": [], "name": "creator", "outputs": [{ "name": "", "type": "address" }], "type": "function" }, { "constant": true, "inputs": [], "name": "name", "outputs": [{ "name": "", "type": "bytes32" }], "type": "function" }, { "constant": false, "inputs": [{ "name": "fakeTime", "type": "uint256" }], "name": "toTime", "outputs": [], "type": "function" }, { "constant": true, "inputs": [], "name": "organization", "outputs": [{ "name": "", "type": "address" }], "type": "function" }, { "constant": false, "inputs": [], "name": "totalResult", "outputs": [{ "name": "result", "type": "uint256" }], "type": "function" }, { "constant": true, "inputs": [], "name": "endTime", "outputs": [{ "name": "", "type": "uint256" }], "type": "function" }, { "constant": true, "inputs": [], "name": "bal", "outputs": [{ "name": "", "type": "uint256" }], "type": "function" }, { "constant": false, "inputs": [{ "name": "vote", "type": "bool" }, { "name": "weight", "type": "uint256" }, { "name": "member", "type": "address" }], "name": "vote", "outputs": [], "type": "function" }, { "constant": true, "inputs": [], "name": "result", "outputs": [{ "name": "", "type": "int256" }], "type": "function" }, { "constant": true, "inputs": [], "name": "description", "outputs": [{ "name": "", "type": "bytes32" }], "type": "function" }, { "constant": true, "inputs": [], "name": "startTime", "outputs": [{ "name": "", "type": "uint256" }], "type": "function" }, { "constant": false, "inputs": [], "name": "destroy", "outputs": [], "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "uint256" }], "name": "voted", "outputs": [{ "name": "", "type": "address" }], "type": "function" }, { "constant": false, "inputs": [], "name": "Results", "outputs": [{ "name": "resulto", "type": "int256" }], "type": "function" }, { "constant": true, "inputs": [], "name": "forVotes", "outputs": [{ "name": "", "type": "uint256" }], "type": "function" }, { "constant": true, "inputs": [], "name": "nbVoters", "outputs": [{ "name": "", "type": "uint256" }], "type": "function" }, { "constant": true, "inputs": [], "name": "againstVotes", "outputs": [{ "name": "", "type": "uint256" }], "type": "function" }, { "inputs": [{ "name": "newName", "type": "bytes32" }, { "name": "newDescription", "type": "bytes32" }, { "name": "startime", "type": "uint256" }, { "name": "endtime", "type": "uint256" }, { "name": "Creator", "type": "address" }], "type": "constructor" }];
  Proposal.binary = "6060604081905242600c5560a08061037583396101006040529051608051915160c05160e0516000805433600160a060020a03199182161782556001805490911690921790915560039390935560049190915560055560029190915561030b90819061006a90396000f3606060405236156100cf5760e060020a600035046302d05d3f81146100d157806306fdde03146100e35780630909d4d5146100ec57806323bd4d7a146100f75780632b57f777146101095780633197cbb6146101175780633d79d1c81461012057806361ebccfd1461012957806365372147146101505780637284e4161461015957806378e979251461016257806383197ef01461016b5780638fbb38ff146101ad57806394f0873d146101f3578063bd108fd414610213578063bfcddbbc1461021c578063d6b225be14610225575b005b61022e600154600160a060020a031681565b61024160035481565b600435600c556100cf565b61022e600054600160a060020a031681565b610241600854600754035b90565b61024160055481565b61024160095481565b6100cf60043560243560443560005433600160a060020a0390811691161461025957610254565b610241600b5481565b61024160025481565b61024160045481565b6100cf60005433600160a060020a039081169116148061019a5750600154600160a060020a0390811633909116145b1561030957600154600160a060020a0316ff5b61022e60043560068054829081101561000257506000527ff652222313e28459528d920b65115c16c04f3efc82aaedc97be59f3f377c0d3f0154600160a060020a031681565b6102416008546007546000919011156102f457506001600b819055610114565b61024160075481565b610241600a5481565b61024160085481565b600160a060020a03166060908152602090f35b6060908152602090f35b60088054830190555b505050565b600680546001810180835582818380158290116102995781836000526020600020918201910161029991905b808211156102f05760008155600101610285565b50505091909060005260206000209001600050805473ffffffffffffffffffffffffffffffffffffffff1916831790555060098054838002019055600a80546001019055821561024b576007805483019055610254565b5090565b6008546007541161011457600b819055610114565b56";

  if ("0x79b6bd6f9aec5d5dbdbe282516c14099b04e35c3" != "") {
    Proposal.address = "0x79b6bd6f9aec5d5dbdbe282516c14099b04e35c3";

    // Backward compatibility; Deprecated.
    Proposal.deployed_address = "0x79b6bd6f9aec5d5dbdbe282516c14099b04e35c3";
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
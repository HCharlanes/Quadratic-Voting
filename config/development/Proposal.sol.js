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
  Proposal.abi = [{ "constant": true, "inputs": [], "name": "creator", "outputs": [{ "name": "", "type": "address" }], "type": "function" }, { "constant": true, "inputs": [], "name": "name", "outputs": [{ "name": "", "type": "bytes32" }], "type": "function" }, { "constant": false, "inputs": [{ "name": "fakeTime", "type": "uint256" }], "name": "toTime", "outputs": [], "type": "function" }, { "constant": true, "inputs": [], "name": "organization", "outputs": [{ "name": "", "type": "address" }], "type": "function" }, { "constant": false, "inputs": [], "name": "totalResult", "outputs": [{ "name": "result", "type": "uint256" }], "type": "function" }, { "constant": true, "inputs": [], "name": "endTime", "outputs": [{ "name": "", "type": "uint256" }], "type": "function" }, { "constant": true, "inputs": [], "name": "bal", "outputs": [{ "name": "", "type": "uint256" }], "type": "function" }, { "constant": false, "inputs": [{ "name": "vote", "type": "bool" }, { "name": "weight", "type": "uint256" }, { "name": "member", "type": "address" }], "name": "vote", "outputs": [], "type": "function" }, { "constant": true, "inputs": [], "name": "description", "outputs": [{ "name": "", "type": "bytes32" }], "type": "function" }, { "constant": true, "inputs": [], "name": "startTime", "outputs": [{ "name": "", "type": "uint256" }], "type": "function" }, { "constant": false, "inputs": [], "name": "destroy", "outputs": [], "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "uint256" }], "name": "voted", "outputs": [{ "name": "", "type": "address" }], "type": "function" }, { "constant": false, "inputs": [], "name": "Results", "outputs": [{ "name": "result", "type": "int256" }], "type": "function" }, { "constant": true, "inputs": [], "name": "forVotes", "outputs": [{ "name": "", "type": "uint256" }], "type": "function" }, { "constant": true, "inputs": [], "name": "nbVoters", "outputs": [{ "name": "", "type": "uint256" }], "type": "function" }, { "constant": true, "inputs": [], "name": "againstVotes", "outputs": [{ "name": "", "type": "uint256" }], "type": "function" }, { "inputs": [{ "name": "newName", "type": "bytes32" }, { "name": "newDescription", "type": "bytes32" }, { "name": "startime", "type": "uint256" }, { "name": "endtime", "type": "uint256" }, { "name": "Creator", "type": "address" }], "type": "constructor" }];
  Proposal.binary = "6060604081905242600b5560a08061037183396101006040529051608051915160c05160e0516000805433600160a060020a03199182161782556001805490911690921790915560039390935560049190915560055560029190915561030790819061006a90396000f3606060405236156100c45760e060020a600035046302d05d3f81146100c657806306fdde03146100d85780630909d4d5146100e157806323bd4d7a146100ec5780632b57f777146100fe5780633197cbb6146101165780633d79d1c81461011f57806361ebccfd146101285780637284e4161461015057806378e979251461015957806383197ef0146101625780638fbb38ff146101a457806394f0873d146101ea578063bd108fd414610202578063bfcddbbc1461020b578063d6b225be14610214575b005b61021d600154600160a060020a031681565b61023060035481565b600435600b556100c4565b61021d600054600160a060020a031681565b610230600554600b546000919010156102f957610302565b61023060055481565b61023060095481565b6100c460043560243560443560005433600160a060020a0390811691161461023a575b505050565b61023060025481565b61023060045481565b6100c460005433600160a060020a03908116911614806101915750600154600160a060020a0390811633909116145b1561030557600154600160a060020a0316ff5b61021d60043560068054829081101561000257506000527ff652222313e28459528d920b65115c16c04f3efc82aaedc97be59f3f377c0d3f0154600160a060020a031681565b610230600554600b546000919010156102d557610302565b61023060075481565b610230600a5481565b61023060085481565b600160a060020a03166060908152602090f35b6060908152602090f35b6006805460018101808355828183801582901161027a5781836000526020600020918201910161027a91905b808211156102d15760008155600101610266565b50505091909060005260206000209001600050805473ffffffffffffffffffffffffffffffffffffffff1916831790555060098054838002019055600a80546001019055821561014b57600780548301905561014b565b5090565b60085460075411156102e957506001610302565b6008546007541161030257610302565b50600854600754035b90565b56";

  if ("0x9d97f46d958353cb6d54d08506d0a3d3b50eedb8" != "") {
    Proposal.address = "0x9d97f46d958353cb6d54d08506d0a3d3b50eedb8";

    // Backward compatibility; Deprecated.
    Proposal.deployed_address = "0x9d97f46d958353cb6d54d08506d0a3d3b50eedb8";
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
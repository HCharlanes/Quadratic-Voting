"use strict";

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var factory = function factory(Pudding) {
  // Inherit from Pudding. The dependency on Babel sucks, but it's
  // the easiest way to extend a Babel-based class. Note that the
  // resulting .js file does not have a dependency on Babel.

  var Election = (function (_Pudding) {
    _inherits(Election, _Pudding);

    function Election() {
      _classCallCheck(this, Election);

      _get(Object.getPrototypeOf(Election.prototype), "constructor", this).apply(this, arguments);
    }

    return Election;
  })(Pudding);

  ;

  // Set up specific data for this class.
  Election.abi = [{ "constant": true, "inputs": [], "name": "startDate", "outputs": [{ "name": "", "type": "uint256" }], "type": "function" }, { "constant": true, "inputs": [], "name": "organization", "outputs": [{ "name": "", "type": "address" }], "type": "function" }, { "constant": false, "inputs": [{ "name": "can", "type": "address" }, { "name": "prop", "type": "address" }], "name": "addCandidate", "outputs": [], "type": "function" }, { "constant": true, "inputs": [], "name": "description", "outputs": [{ "name": "", "type": "bytes32" }], "type": "function" }, { "constant": false, "inputs": [], "name": "checkWinner", "outputs": [{ "name": "winProp", "type": "address" }], "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "address" }], "name": "candidate", "outputs": [{ "name": "", "type": "bool" }], "type": "function" }, { "constant": true, "inputs": [], "name": "endDate", "outputs": [{ "name": "", "type": "uint256" }], "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "uint256" }], "name": "candidateProposals", "outputs": [{ "name": "", "type": "address" }], "type": "function" }, { "constant": true, "inputs": [], "name": "positionName", "outputs": [{ "name": "", "type": "bytes32" }], "type": "function" }, { "inputs": [{ "name": "pos", "type": "bytes32" }, { "name": "desc", "type": "bytes32" }, { "name": "start", "type": "uint256" }, { "name": "end", "type": "uint256" }], "type": "constructor" }];
  Election.binary = "606060408190526000805460ff19169055600560015560808061032d833960e06040529051905160a05160c05160028054600160a060020a031916331790556003939093556004919091556005556006556102cf8061005e6000396000f3606060405236156100775760e060020a60003504630b97bc86811461007957806323bd4d7a14610082578063594418ec146100945780637284e41614610105578063ad38867e1461010e578063bf4c988e146101fc578063c24a0f8b14610217578063c2c3e0a614610220578063d78ad57714610266575b005b61026f60055481565b610279600254600160a060020a031681565b610077600435602435600160a060020a0382166000908152600760205260409020805460ff191660019081179091556008805491820180825590919082818380158290116102965781836000526020600020918201910161029691905b808211156102cb57600081556001016100f1565b61026f60045481565b6102796000808080806008548110156101f55760088054829081101561000257527ff3f7a9fe364faab93b216da50a3214154f22a0a2b415b23a84c8169e8b636ee38150547f2b57f777000000000000000000000000000000000000000000000000000000006060908152600160a060020a039190911690632b57f7779060649060209060048187876161da5a03f11561000257505060405151925050808211156101f1576008805492948593811015610002575090527ff3f7a9fe364faab93b216da50a3214154f22a0a2b415b23a84c8169e8b636ee354600160a060020a03165b8094505b5050505090565b61026f60043560076020526000908152604090205460ff1681565b61026f60065481565b61027960043560088054829081101561000257506000527ff3f7a9fe364faab93b216da50a3214154f22a0a2b415b23a84c8169e8b636ee30154600160a060020a031681565b61026f60035481565b6060908152602090f35b60408051600160a060020a03929092168252519081900360200190f35b50505091909060005260206000209001600050805473ffffffffffffffffffffffffffffffffffffffff191683179055505050565b509056";

  if ("0xdf64c8913cbec3f9d46fce6ab11f6f192ce2be92" != "") {
    Election.address = "0xdf64c8913cbec3f9d46fce6ab11f6f192ce2be92";

    // Backward compatibility; Deprecated.
    Election.deployed_address = "0xdf64c8913cbec3f9d46fce6ab11f6f192ce2be92";
  }

  Election.generated_with = "1.0.2";
  Election.contract_name = "Election";

  return Election;
};

// Nicety for Node.
factory.load = factory;

if (typeof module != "undefined") {
  module.exports = factory;
} else {
  // There will only be one version of Pudding in the browser,
  // and we can use that.
  window.Election = factory;
}
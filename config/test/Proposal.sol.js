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
  Proposal.abi = [{ "constant": true, "inputs": [], "name": "name", "outputs": [{ "name": "", "type": "string" }], "type": "function" }, { "constant": false, "inputs": [{ "name": "vote", "type": "bool" }, { "name": "weight", "type": "uint256" }, { "name": "member", "type": "address" }], "name": "vote", "outputs": [], "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "address" }], "name": "voted", "outputs": [{ "name": "", "type": "bool" }], "type": "function" }, { "constant": true, "inputs": [], "name": "forVotes", "outputs": [{ "name": "", "type": "uint256" }], "type": "function" }, { "constant": true, "inputs": [], "name": "againstVotes", "outputs": [{ "name": "", "type": "uint256" }], "type": "function" }, { "inputs": [{ "name": "newName", "type": "string" }], "type": "constructor" }];
  Proposal.binary = "60606040526040516102ed3803806102ed8339810160405280510160605160008054600160a060020a0319163317815582516001805492819052926020601f6002600019868816156101000201909516949094048401047fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf69081019390916080019083901060bd57805160ff19168380011785555b5060ac9291505b8082111560ea57600081558301609b565b5050506101ff806100ee6000396000f35b828001600101855582156094579182015b82811115609457825182600050559160200191906001019060ce565b509056606060405260e060020a600035046306fdde03811461004757806361ebccfd146100a2578063aec2ccae146100d6578063bd108fd4146100f1578063d6b225be146100fa575b005b610103600180546020601f6002600019848616156101000201909316929092049182018190040260809081016040526060828152929190828280156101f75780601f106101cc576101008083540402835291602001916101f7565b6100456004356024356044356000543373ffffffffffffffffffffffffffffffffffffffff90811691161461018957610184565b61017160043560026020526000908152604090205460ff1681565b61017160035481565b61017160045481565b60405180806020018281038252838181518152602001915080519060200190808383829060006004602084601f0104600302600f01f150905090810190601f1680156101635780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6060908152602090f35b60048054830190555b505050565b73ffffffffffffffffffffffffffffffffffffffff81166000908152600260205260409020805460ff19166001179055821561017b576003805483019055610184565b820191906000526020600020905b8154815290600101906020018083116101da57829003601f168201915b50505050508156";

  if ("0x094c05749c2971d4296275b1d9e0ea715b24325a" != "") {
    Proposal.address = "0x094c05749c2971d4296275b1d9e0ea715b24325a";

    // Backward compatibility; Deprecated.
    Proposal.deployed_address = "0x094c05749c2971d4296275b1d9e0ea715b24325a";
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
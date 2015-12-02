"use strict";

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var factory = function factory(Pudding) {
  // Inherit from Pudding. The dependency on Babel sucks, but it's
  // the easiest way to extend a Babel-based class. Note that the
  // resulting .js file does not have a dependency on Babel.

  var Organization = (function (_Pudding) {
    _inherits(Organization, _Pudding);

    function Organization() {
      _classCallCheck(this, Organization);

      _get(Object.getPrototypeOf(Organization.prototype), "constructor", this).apply(this, arguments);
    }

    return Organization;
  })(Pudding);

  ;

  // Set up specific data for this class.
  Organization.abi = [{ "constant": true, "inputs": [{ "name": "", "type": "uint256" }], "name": "proposals", "outputs": [{ "name": "", "type": "address" }], "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "address" }], "name": "members", "outputs": [{ "name": "", "type": "bool" }], "type": "function" }, { "constant": false, "inputs": [{ "name": "member", "type": "address" }], "name": "removeMember", "outputs": [], "type": "function" }, { "constant": true, "inputs": [], "name": "base_tokens", "outputs": [{ "name": "", "type": "uint256" }], "type": "function" }, { "constant": true, "inputs": [], "name": "token_count", "outputs": [{ "name": "", "type": "uint256" }], "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "address" }], "name": "balances", "outputs": [{ "name": "", "type": "uint256" }], "type": "function" }, { "constant": true, "inputs": [], "name": "numProposals", "outputs": [{ "name": "", "type": "uint256" }], "type": "function" }, { "constant": true, "inputs": [], "name": "numMembers", "outputs": [{ "name": "", "type": "uint256" }], "type": "function" }, { "constant": true, "inputs": [], "name": "organizer", "outputs": [{ "name": "", "type": "address" }], "type": "function" }, { "constant": false, "inputs": [{ "name": "vote", "type": "bool" }, { "name": "weight", "type": "uint256" }, { "name": "proposal", "type": "address" }], "name": "vote", "outputs": [], "type": "function" }, { "constant": false, "inputs": [{ "name": "amount", "type": "uint256" }, { "name": "dest", "type": "address" }], "name": "giveTokens", "outputs": [], "type": "function" }, { "constant": false, "inputs": [], "name": "destroy", "outputs": [], "type": "function" }, { "constant": false, "inputs": [{ "name": "name", "type": "string" }], "name": "makeProposal", "outputs": [], "type": "function" }, { "constant": false, "inputs": [{ "name": "newMember", "type": "address" }], "name": "addMember", "outputs": [], "type": "function" }, { "inputs": [], "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "_new", "type": "address" }], "name": "NewMember", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "_old", "type": "address" }], "name": "DeletedMember", "type": "event" }];
  Organization.binary = "6060604052606460055560008054600160a060020a03191633178155600481905560035561081d806100316000396000f3606060405236156100ae5760e060020a6000350463013cf08b81146100b057806308ae4b0c146100f65780630b1ca49a146101115780631cdc044b1461015957806323b161ab1461016257806327e235e31461016b578063400e3949146101835780634698d1101461018c578063612032651461019557806361ebccfd146101a7578063790b7133146101da57806383197ef01461020c578063b72a707414610235578063ca6d56dc14610333575b005b61035460043560078054829081101561000257506000527fa66cc928b5edb82af9bd49922954155ab7b0942694bea4ce44661d9a8736c6880154600160a060020a031681565b61037160043560016020526000908152604090205460ff1681565b6100ae600435600054600160a060020a039081163390911614158061014f5750600160a060020a03811660009081526001602052604090205460ff16155b156103c657610351565b61037160055481565b61037160045481565b61037160043560026020526000908152604090205481565b61037160065481565b61037160035481565b610354600054600160a060020a031681565b6100ae60043560243560443533600160a060020a031660009081526001602052604090205460ff16151561049557610490565b6100ae6004356024355b6004805483019055600160a060020a0316600090815260026020526040902080549091019055565b6100ae600054600160a060020a039081163390911614156104f157600054600160a060020a0316ff5b6100ae6004808035906020019082018035906020019191908080601f0160208091040260200160405190810160405280939291908181526020018383808284375094965050505050505060006040516102ed80610530833960209101818152600e918101919091527f626f61726420656c656374696f6e00000000000000000000000000000000000060408281019190915251908190036060019082f09050600760005080548060010182818154818355818115116104f35760008390526104f3907fa66cc928b5edb82af9bd49922954155ab7b0942694bea4ce44661d9a8736c6889081019083015b8082111561052c576000815560010161031f565b6100ae600435600054600160a060020a039081163390911614610383575b50565b60408051600160a060020a03929092168252519081900360200190f35b60408051918252519081900360200190f35b600160a060020a0381166000908152600160208181526040808420805460ff191684179055600380549093019092556002905281205560055461035190826101e4565b600160a060020a03166000908152600160209081526040808320805460ff19169055600380546000190190556002909152812080546004805491909103905555565b33600160a060020a0390811660008181526002602052604080822080548780029003905580517f61ebccfd0000000000000000000000000000000000000000000000000000000081526004810188905260248101879052604481019390935251928416926361ebccfd926064808201939291829003018183876161da5a03f115610002575050505b505050565b33600160a060020a031660009081526002602052604090205460019010156104bc57610490565b60018210156104ca57610490565b33600160a060020a0316600090815260026020526040902054828002111561040857610490565b565b505050600092835250602090912001805473ffffffffffffffffffffffffffffffffffffffff1916909117905550600680546001019055565b50905660606040526040516102ed3803806102ed8339810160405280510160605160008054600160a060020a0319163317815582516001805492819052926020601f6002600019868816156101000201909516949094048401047fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf69081019390916080019083901060bd57805160ff19168380011785555b5060ac9291505b8082111560ea57600081558301609b565b5050506101ff806100ee6000396000f35b828001600101855582156094579182015b82811115609457825182600050559160200191906001019060ce565b509056606060405260e060020a600035046306fdde03811461004757806361ebccfd146100a2578063aec2ccae146100d6578063bd108fd4146100f1578063d6b225be146100fa575b005b610103600180546020601f6002600019848616156101000201909316929092049182018190040260809081016040526060828152929190828280156101a65780601f1061017b576101008083540402835291602001916101a6565b6100456004356024356044356000543373ffffffffffffffffffffffffffffffffffffffff9081169116146101bc576101b7565b61017160043560026020526000908152604090205460ff1681565b61017160035481565b61017160045481565b60405180806020018281038252838181518152602001915080519060200190808383829060006004602084601f0104600302600f01f150905090810190601f1680156101635780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6060908152602090f35b820191906000526020600020905b81548152906001019060200180831161018957829003601f168201915b505050505081565b60048054830190555b505050565b73ffffffffffffffffffffffffffffffffffffffff81166000908152600260205260409020805460ff1916600117905582156101ae5760038054830190556101b756";

  if ("0xc305c901078781c232a2a521c2af7980f8385ee9" != "") {
    Organization.address = "0xc305c901078781c232a2a521c2af7980f8385ee9";

    // Backward compatibility; Deprecated.
    Organization.deployed_address = "0xc305c901078781c232a2a521c2af7980f8385ee9";
  }

  Organization.generated_with = "1.0.2";
  Organization.contract_name = "Organization";

  return Organization;
};

// Nicety for Node.
factory.load = factory;

if (typeof module != "undefined") {
  module.exports = factory;
} else {
  // There will only be one version of Pudding in the browser,
  // and we can use that.
  window.Organization = factory;
}
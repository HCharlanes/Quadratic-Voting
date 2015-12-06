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
  Organization.abi = [{ "constant": true, "inputs": [{ "name": "", "type": "uint256" }], "name": "proposals", "outputs": [{ "name": "", "type": "address" }], "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "address" }], "name": "members", "outputs": [{ "name": "", "type": "bool" }], "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "address" }], "name": "propResults", "outputs": [{ "name": "", "type": "int256" }], "type": "function" }, { "constant": false, "inputs": [{ "name": "fakeTime", "type": "uint256" }], "name": "toTime", "outputs": [], "type": "function" }, { "constant": false, "inputs": [{ "name": "member", "type": "address" }], "name": "removeMember", "outputs": [], "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "address" }], "name": "proposalIDs", "outputs": [{ "name": "", "type": "uint256" }], "type": "function" }, { "constant": true, "inputs": [], "name": "base_tokens", "outputs": [{ "name": "", "type": "uint256" }], "type": "function" }, { "constant": true, "inputs": [], "name": "token_count", "outputs": [{ "name": "", "type": "uint256" }], "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "address" }], "name": "elections", "outputs": [{ "name": "", "type": "bool" }], "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "address" }], "name": "balances", "outputs": [{ "name": "", "type": "uint256" }], "type": "function" }, { "constant": true, "inputs": [], "name": "minNotice", "outputs": [{ "name": "", "type": "uint256" }], "type": "function" }, { "constant": true, "inputs": [], "name": "proposalID", "outputs": [{ "name": "", "type": "uint256" }], "type": "function" }, { "constant": true, "inputs": [], "name": "numProposals", "outputs": [{ "name": "", "type": "uint256" }], "type": "function" }, { "constant": false, "inputs": [{ "name": "proposalAddress", "type": "address" }], "name": "getResult", "outputs": [], "type": "function" }, { "constant": true, "inputs": [], "name": "Now", "outputs": [{ "name": "", "type": "uint256" }], "type": "function" }, { "constant": true, "inputs": [], "name": "numMembers", "outputs": [{ "name": "", "type": "uint256" }], "type": "function" }, { "constant": false, "inputs": [{ "name": "vote", "type": "bool" }, { "name": "weight", "type": "uint256" }, { "name": "proposal", "type": "address" }], "name": "vote", "outputs": [], "type": "function" }, { "constant": false, "inputs": [{ "name": "amount", "type": "uint256" }, { "name": "dest", "type": "address" }], "name": "giveTokens", "outputs": [], "type": "function" }, { "constant": false, "inputs": [], "name": "destroy", "outputs": [], "type": "function" }, { "constant": false, "inputs": [{ "name": "proposal", "type": "address" }], "name": "dispatchBalance", "outputs": [], "type": "function" }, { "constant": false, "inputs": [{ "name": "newMember", "type": "address" }], "name": "addMember", "outputs": [], "type": "function" }, { "constant": false, "inputs": [{ "name": "electAddr", "type": "address" }, { "name": "description", "type": "bytes32" }], "name": "runForElection", "outputs": [], "type": "function" }, { "constant": false, "inputs": [{ "name": "name", "type": "bytes32" }, { "name": "description", "type": "bytes32" }, { "name": "startTime", "type": "uint256" }, { "name": "endTime", "type": "uint256" }], "name": "makeProposal", "outputs": [{ "name": "prop", "type": "address" }], "type": "function" }, { "constant": true, "inputs": [], "name": "organizationOwner", "outputs": [{ "name": "", "type": "address" }], "type": "function" }, { "constant": false, "inputs": [{ "name": "pos", "type": "bytes32" }, { "name": "desc", "type": "bytes32" }, { "name": "start", "type": "uint256" }, { "name": "end", "type": "uint256" }], "name": "makeElection", "outputs": [{ "name": "elect", "type": "address" }], "type": "function" }, { "inputs": [{ "name": "name", "type": "bytes32" }, { "name": "basetokens", "type": "uint256" }, { "name": "minNotice", "type": "uint256" }, { "name": "owner", "type": "address" }], "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "_new", "type": "address" }], "name": "NewMember", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "_old", "type": "address" }], "name": "DeletedMember", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "amount", "type": "uint256" }], "name": "Dispatch", "type": "event" }];
  Organization.binary = "60606040526040516080806111f4833960e06040529051905160a05160c05160008054600160a060020a031916821781556001848155600682905560038290556004829055600591909155600b80549182018082559091908281838015829011608857818360005260206000209182019101608891905b8082111560bc57600081556001016076565b505050919090600052602060002090016000508054600160a060020a03191690555050505050611134806100c06000396000f35b509056606060405236156101275760e060020a6000350463013cf08b811461012957806308ae4b0c1461016f57806308d103f71461018a5780630909d4d5146101a25780630b1ca49a146101ad57806315c346eb146101f55780631cdc044b1461020d57806323b161ab1461021657806324ddc7601461021f57806327e235e31461023a5780632d87017c14610252578063371fa8541461025b578063400e394914610264578063446a37e01461026d57806344d4fd19146102995780634698d110146102a257806361ebccfd146102ab578063790b7133146102de57806383197ef014610311578063c34c356f1461033a578063ca6d56dc146104ad578063d2a888a4146104cf578063d655f99014610524578063e467fa2b14610551578063eba848cf14610563575b005b6105ad600435600b8054829081101561000257506000527f0175b7a638427703f0dbe7bb9bbf987a2551717b34e79f33b5b1008d1fa01db90154600160a060020a031681565b6105ca60043560076020526000908152604090205460ff1681565b6105ca60043560096020526000908152604090205481565b600435600d55610127565b610127600435600054600160a060020a03908116339091161415806101eb5750600160a060020a03811660009081526007602052604090205460ff16155b15610a0657610a48565b6105ca600435600c6020526000908152604090205481565b6105ca60015481565b6105ca60065481565b6105ca600435600a6020526000908152604090205460ff1681565b6105ca60043560086020526000908152604090205481565b6105ca60025481565b6105ca60055481565b6105ca60045481565b610127600435600160a060020a038116600090815260096020526040812054600019146105f2576105ee565b6105ca600d5481565b6105ca60035481565b61012760043560243560443533600160a060020a031660009081526007602052604081205460ff1615156109435761093d565b6101276004356024355b6006805483019055600160a060020a031660009081526008602052604090208054919091019055565b610127600054600160a060020a039081163390911614156105dc57600054600160a060020a0316ff5b6101276004355b8060005b81600160a060020a031663bfcddbbc6040518160e060020a0281526004018090506020604051808303816000876161da5a03f1156100025750506040515160ff8316101590506105de5781600160a060020a031663bfcddbbc6040518160e060020a0281526004018090506020604051808303816000876161da5a03f1156100025750506040805180517f3d79d1c80000000000000000000000000000000000000000000000000000000082529151919291633d79d1c89160048181019260209290919082900301816000876161da5a03f1156100025750506040805180517f8fbb38ff00000000000000000000000000000000000000000000000000000000825260ff86166004830152915193909104926008926000929091638fbb38ff91602481810192602092909190829003018187876161da5a03f1156100025750506040805151600160a060020a0316835260209390935250208054919091019055600101610345565b610127600435600054600160a060020a039081163390911614610a4b57610a48565b61012760043560243533600160a060020a03166000908152600760205260408120548190819060ff16158061051a5750600160a060020a0385168152600a602052604081205460ff16155b1561077457610002565b6105ad6004356024356044356064355b60008054600160a060020a0390811633909116146106a35761069b565b6105ad600054600160a060020a031681565b6105ad600435602435604435606435600080548190600160a060020a03908116339091161415806105995750600254600d540184105b806105a357508284115b1561099f57610002565b60408051600160a060020a03929092168252519081900360200190f35b60408051918252519081900360200190f35b565b505050565b600480546000190190555b5050565b81905080600160a060020a03166394f0873d6040518160e060020a0281526004018090506020604051808303816000876161da5a03f1156100025750506040805151600092835260096020529120556105e381610341565b5050506000928352506020808320909101805473ffffffffffffffffffffffffffffffffffffffff191684179055600160a060020a0383168252600990526040902060001990556004805460010190555b949350505050565b600254600d54018310156106b65761069b565b6005805460010190556040518590859085908590339061037580610a928339018086815260200185815260200184815260200183815260200182600160a060020a0316815260200195505050505050604051809103906000f0600b8054600181018083559293509091828183801582901161064a57600083905261064a907f0175b7a638427703f0dbe7bb9bbf987a2551717b34e79f33b5b1008d1fa01db99081019083015b80821115610770576000815560010161075c565b5090565b84600160a060020a031663d78ad5776040518160e060020a0281526004018090506020604051808303816000876161da5a03f1156100025750505060405180519060200150925083915061084d838387600160a060020a0316630b97bc866040518160e060020a0281526004018090506020604051808303816000876161da5a03f115610002575050506040518051906020015088600160a060020a031663c24a0f8b6040518160e060020a0281526004018090506020604051808303816000876161da5a03f115610002575050604051519050610534565b905084600160a060020a031663594418ec33836040518360e060020a0281526004018083600160a060020a0316815260200182600160a060020a03168152602001925050506000604051808303816000876161da5a03f115610002575050505050505050565b5033600160a060020a0390811660008181526008602052604080822080548780029003905580517f61ebccfd000000000000000000000000000000000000000000000000000000008152600481018890526024810187905260448101939093525184938416926361ebccfd926064828101939192829003018183876161da5a03f115610002575050505b50505050565b33600160a060020a0316600090815260086020526040902054600190101561096a5761093d565b60018310156109785761093d565b33600160a060020a031660009081526008602052604090205483800211156108b35761093d565b8585858560405161032d80610e0783390180858152602001848152602001838152602001828152602001945050505050604051809103906000f0600160a060020a0381166000908152600a60205260409020805460ff191660011790559695505050505050565b600160a060020a0381166000908152600760209081526040808320805460ff191690556003805460001901905560089091528120805460068054919091039055555b50565b600160a060020a0381166000908152600760209081526040808320805460ff191660019081179091556003805482019055600890925282209190915554610a4890826102e8566060604081905242600c5560a08061037583396101006040529051608051915160c05160e0516000805433600160a060020a03199182161782556001805490911690921790915560039390935560049190915560055560029190915561030b90819061006a90396000f3606060405236156100cf5760e060020a600035046302d05d3f81146100d157806306fdde03146100e35780630909d4d5146100ec57806323bd4d7a146100f75780632b57f777146101095780633197cbb6146101175780633d79d1c81461012057806361ebccfd1461012957806365372147146101505780637284e4161461015957806378e979251461016257806383197ef01461016b5780638fbb38ff146101ad57806394f0873d146101f3578063bd108fd414610213578063bfcddbbc1461021c578063d6b225be14610225575b005b61022e600154600160a060020a031681565b61024160035481565b600435600c556100cf565b61022e600054600160a060020a031681565b610241600854600754035b90565b61024160055481565b61024160095481565b6100cf60043560243560443560005433600160a060020a0390811691161461025957610254565b610241600b5481565b61024160025481565b61024160045481565b6100cf60005433600160a060020a039081169116148061019a5750600154600160a060020a0390811633909116145b1561030957600154600160a060020a0316ff5b61022e60043560068054829081101561000257506000527ff652222313e28459528d920b65115c16c04f3efc82aaedc97be59f3f377c0d3f0154600160a060020a031681565b6102416008546007546000919011156102f457506001600b819055610114565b61024160075481565b610241600a5481565b61024160085481565b600160a060020a03166060908152602090f35b6060908152602090f35b60088054830190555b505050565b600680546001810180835582818380158290116102995781836000526020600020918201910161029991905b808211156102f05760008155600101610285565b50505091909060005260206000209001600050805473ffffffffffffffffffffffffffffffffffffffff1916831790555060098054838002019055600a80546001019055821561024b576007805483019055610254565b5090565b6008546007541161011457600b819055610114565b56606060408190526000805460ff19169055600560015560808061032d833960e06040529051905160a05160c05160028054600160a060020a031916331790556003939093556004919091556005556006556102cf8061005e6000396000f3606060405236156100775760e060020a60003504630b97bc86811461007957806323bd4d7a14610082578063594418ec146100945780637284e41614610105578063ad38867e1461010e578063bf4c988e146101fc578063c24a0f8b14610217578063c2c3e0a614610220578063d78ad57714610266575b005b61026f60055481565b610279600254600160a060020a031681565b610077600435602435600160a060020a0382166000908152600760205260409020805460ff191660019081179091556008805491820180825590919082818380158290116102965781836000526020600020918201910161029691905b808211156102cb57600081556001016100f1565b61026f60045481565b6102796000808080806008548110156101f55760088054829081101561000257527ff3f7a9fe364faab93b216da50a3214154f22a0a2b415b23a84c8169e8b636ee38150547f2b57f777000000000000000000000000000000000000000000000000000000006060908152600160a060020a039190911690632b57f7779060649060209060048187876161da5a03f11561000257505060405151925050808211156101f1576008805492948593811015610002575090527ff3f7a9fe364faab93b216da50a3214154f22a0a2b415b23a84c8169e8b636ee354600160a060020a03165b8094505b5050505090565b61026f60043560076020526000908152604090205460ff1681565b61026f60065481565b61027960043560088054829081101561000257506000527ff3f7a9fe364faab93b216da50a3214154f22a0a2b415b23a84c8169e8b636ee30154600160a060020a031681565b61026f60035481565b6060908152602090f35b60408051600160a060020a03929092168252519081900360200190f35b50505091909060005260206000209001600050805473ffffffffffffffffffffffffffffffffffffffff191683179055505050565b509056";

  if ("0xf86de9c491a43a19419288f96a75079d4b9b19c6" != "") {
    Organization.address = "0xf86de9c491a43a19419288f96a75079d4b9b19c6";

    // Backward compatibility; Deprecated.
    Organization.deployed_address = "0xf86de9c491a43a19419288f96a75079d4b9b19c6";
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
"use strict";

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var factory = function factory(Pudding) {
  // Inherit from Pudding. The dependency on Babel sucks, but it's
  // the easiest way to extend a Babel-based class. Note that the
  // resulting .js file does not have a dependency on Babel.

  var OrganizationsFactory = (function (_Pudding) {
    _inherits(OrganizationsFactory, _Pudding);

    function OrganizationsFactory() {
      _classCallCheck(this, OrganizationsFactory);

      _get(Object.getPrototypeOf(OrganizationsFactory.prototype), "constructor", this).apply(this, arguments);
    }

    return OrganizationsFactory;
  })(Pudding);

  ;

  // Set up specific data for this class.
  OrganizationsFactory.abi = [{ "constant": true, "inputs": [], "name": "factoryManager", "outputs": [{ "name": "", "type": "address" }], "type": "function" }, { "constant": false, "inputs": [], "name": "destroy", "outputs": [], "type": "function" }, { "constant": false, "inputs": [{ "name": "addrOrganization", "type": "address" }], "name": "DeleteOrganization", "outputs": [], "type": "function" }, { "constant": false, "inputs": [{ "name": "name", "type": "bytes32" }, { "name": "basetokens", "type": "uint256" }, { "name": "minNotice", "type": "uint256" }], "name": "NewOrganization", "outputs": [], "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "uint256" }], "name": "organizations", "outputs": [{ "name": "", "type": "address" }], "type": "function" }, { "constant": true, "inputs": [], "name": "numOrganizations", "outputs": [{ "name": "", "type": "uint256" }], "type": "function" }, { "constant": true, "inputs": [], "name": "organizationID", "outputs": [{ "name": "", "type": "uint256" }], "type": "function" }, { "inputs": [], "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "_new", "type": "address" }], "name": "NewMember", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "_old", "type": "address" }], "name": "DeletedMember", "type": "event" }];
  OrganizationsFactory.binary = "606060405260008054600160a060020a031916331781556001818155600291909155600380549182018082559091908281838015829011605f57818360005260206000209182019101605f91905b80821115608f5760008155600101604d565b505050919090600052602060002090016000508054600160a060020a0319169055506114e2806100936000396000f35b509056606060405236156100615760e060020a6000350463032b5a73811461006357806383197ef014610075578063a55920861461009e578063dd6e2f7b14610113578063e792dd8a146101a8578063e9fca3e5146101ee578063f0317111146101f7575b005b610200600054600160a060020a031681565b610061600054600160a060020a039081163390911614156102ea57600054600160a060020a0316ff5b6100616004357fe467fa2b000000000000000000000000000000000000000000000000000000006060908152600160a060020a0382169063e467fa2b906064906020906004816000876161da5a03f11561000257505060405151600160a060020a0390811633909116149050610282576102e7565b61006160043560243560443560008383833360606111f6806102ec8339018085815260200184815260200183815260200182600160a060020a03168152602001945050505050604051809103906000f090506003600050805480600101828181548183558181151161021d5781836000526020600020918201910161021d91905b8082111561027e5760008155600101610194565b61020060043560038054829081101561000257506000527fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85b0154600160a060020a031681565b61021360015481565b61021360025481565b600160a060020a03166060908152602090f35b6060908152602090f35b505050919090600052602060002090016000815473ffffffffffffffffffffffffffffffffffffffff1916841790915560018054810181556002805490910190819055600160a060020a038416825260046020526040909120555050505050565b5090565b60408051600180546000190190557f83197ef00000000000000000000000000000000000000000000000000000000081529051600160a060020a038316916383197ef0916004828101926000929190829003018183876161da5a03f115610002575050505b50565b5660606040526040516080806111f6833960e06040529051905160a05160c05160008054600160a060020a031916821781556001848155600682905560038290556004829055600591909155600b80549182018082559091908281838015829011608857818360005260206000209182019101608891905b8082111560bc57600081556001016076565b505050919090600052602060002090016000508054600160a060020a03191690555050505050611136806100c06000396000f35b509056606060405236156101275760e060020a6000350463013cf08b811461012957806308ae4b0c1461016f57806308d103f71461018a5780630909d4d5146101a25780630b1ca49a146101b157806315c346eb146101f95780631cdc044b1461021157806323b161ab1461021a57806324ddc7601461022357806327e235e31461023e5780632d87017c14610256578063371fa8541461025f578063400e394914610268578063446a37e01461027157806344d4fd191461029d5780634698d110146102a657806361ebccfd146102af578063790b7133146102e257806383197ef014610317578063c34c356f14610340578063ca6d56dc146104b3578063d2a888a4146104d5578063d655f9901461052a578063e467fa2b14610557578063eba848cf14610569575b005b6105b3600435600b8054829081101561000257506000527f0175b7a638427703f0dbe7bb9bbf987a2551717b34e79f33b5b1008d1fa01db90154600160a060020a031681565b6105d060043560076020526000908152604090205460ff1681565b6105d060043560096020526000908152604090205481565b610127600435600d8190555b50565b610127600435600054600160a060020a03908116339091161415806101ef5750600160a060020a03811660009081526007602052604090205460ff16155b15610629576101ae565b6105d0600435600c6020526000908152604090205481565b6105d060015481565b6105d060065481565b6105d0600435600a6020526000908152604090205460ff1681565b6105d060043560086020526000908152604090205481565b6105d060025481565b6105d060055481565b6105d060045481565b610127600435600160a060020a03811660009081526009602052604081205460001914610a2c57610313565b6105d0600d5481565b6105d060035481565b61012760043560243560443533600160a060020a031660009081526007602052604081205460ff16151561088c57610886565b6101276004356024355b6006805483019055600160a060020a03811660009081526008602052604090208054830190555b5050565b610127600054600160a060020a03908116339091161415610a9257600054600160a060020a0316ff5b6101276004355b8060005b81600160a060020a031663bfcddbbc6040518160e060020a0281526004018090506020604051808303816000876161da5a03f1156100025750506040515160ff831610159050610a275781600160a060020a031663bfcddbbc6040518160e060020a0281526004018090506020604051808303816000876161da5a03f1156100025750506040805180517f3d79d1c80000000000000000000000000000000000000000000000000000000082529151919291633d79d1c89160048181019260209290919082900301816000876161da5a03f1156100025750506040805180517f8fbb38ff00000000000000000000000000000000000000000000000000000000825260ff86166004830152915193909104926008926000929091638fbb38ff91602481810192602092909190829003018187876161da5a03f1156100025750506040805151600160a060020a031683526020939093525020805491909101905560010161034b565b610127600435600054600160a060020a0390811633909116146105e2576101ae565b61012760043560243533600160a060020a03166000908152600760205260408120548190819060ff1615806105205750600160a060020a0385168152600a602052604081205460ff16155b156108e857610002565b6105b36004356024356044356064355b60008054600160a060020a0390811633909116146106c4576106bc565b6105b3600054600160a060020a031681565b6105b3600435602435604435606435600080548190600160a060020a039081163390911614158061059f5750600254600d540184105b806105a957508284115b1561079557610002565b60408051600160a060020a03929092168252519081900360200190f35b60408051918252519081900360200190f35b600160a060020a0381166000908152600760209081526040808320805460ff1916600190811790915560038054820190556008909252822091909155546101ae90826102ec565b600160a060020a03166000908152600760209081526040808320805460ff19169055600380546000190190556008909152812080546006805491909103905555565b5050506000928352506020808320909101805473ffffffffffffffffffffffffffffffffffffffff191684179055600160a060020a0383168252600990526040902060001990556004805460010190555b949350505050565b600254600d54018310156106d7576106bc565b6005805460010190556040518590859085908590339061037580610a948339018086815260200185815260200184815260200183815260200182600160a060020a0316815260200195505050505050604051809103906000f0600b8054600181018083559293509091828183801582901161066b57600083905261066b907f0175b7a638427703f0dbe7bb9bbf987a2551717b34e79f33b5b1008d1fa01db99081019083015b80821115610791576000815560010161077d565b5090565b8585858560405161032d80610e0983390180858152602001848152602001838152602001828152602001945050505050604051809103906000f0600160a060020a0381166000908152600a60205260409020805460ff191660011790559695505050505050565b5033600160a060020a0390811660008181526008602052604080822080548780029003905580517f61ebccfd000000000000000000000000000000000000000000000000000000008152600481018890526024810187905260448101939093525184938416926361ebccfd926064828101939192829003018183876161da5a03f115610002575050505b50505050565b33600160a060020a031660009081526008602052604090205460019010156108b357610886565b60018310156108c157610886565b33600160a060020a031660009081526008602052604090205483800211156107fc57610886565b84600160a060020a031663d78ad5776040518160e060020a0281526004018090506020604051808303816000876161da5a03f115610002575050506040518051906020015092508391506109c1838387600160a060020a0316630b97bc866040518160e060020a0281526004018090506020604051808303816000876161da5a03f115610002575050506040518051906020015088600160a060020a031663c24a0f8b6040518160e060020a0281526004018090506020604051808303816000876161da5a03f11561000257505060405151905061053a565b905084600160a060020a031663594418ec33836040518360e060020a0281526004018083600160a060020a0316815260200182600160a060020a03168152602001925050506000604051808303816000876161da5a03f115610002575050505050505050565b505050565b81905080600160a060020a03166394f0873d6040518160e060020a0281526004018090506020604051808303816000876161da5a03f115610002575050604080515160009283526009602052912055610a8481610347565b600480546000190190555050565b566060604081905242600c5560a08061037583396101006040529051608051915160c05160e0516000805433600160a060020a03199182161782556001805490911690921790915560039390935560049190915560055560029190915561030b90819061006a90396000f3606060405236156100cf5760e060020a600035046302d05d3f81146100d157806306fdde03146100e35780630909d4d5146100ec57806323bd4d7a146100f75780632b57f777146101095780633197cbb6146101175780633d79d1c81461012057806361ebccfd1461012957806365372147146101505780637284e4161461015957806378e979251461016257806383197ef01461016b5780638fbb38ff146101ad57806394f0873d146101f3578063bd108fd414610213578063bfcddbbc1461021c578063d6b225be14610225575b005b61022e600154600160a060020a031681565b61024160035481565b600435600c556100cf565b61022e600054600160a060020a031681565b610241600854600754035b90565b61024160055481565b61024160095481565b6100cf60043560243560443560005433600160a060020a0390811691161461025957610254565b610241600b5481565b61024160025481565b61024160045481565b6100cf60005433600160a060020a039081169116148061019a5750600154600160a060020a0390811633909116145b1561030957600154600160a060020a0316ff5b61022e60043560068054829081101561000257506000527ff652222313e28459528d920b65115c16c04f3efc82aaedc97be59f3f377c0d3f0154600160a060020a031681565b6102416008546007546000919011156102f457506001600b819055610114565b61024160075481565b610241600a5481565b61024160085481565b600160a060020a03166060908152602090f35b6060908152602090f35b60088054830190555b505050565b600680546001810180835582818380158290116102995781836000526020600020918201910161029991905b808211156102f05760008155600101610285565b50505091909060005260206000209001600050805473ffffffffffffffffffffffffffffffffffffffff1916831790555060098054838002019055600a80546001019055821561024b576007805483019055610254565b5090565b6008546007541161011457600b819055610114565b56606060408190526000805460ff19169055600560015560808061032d833960e06040529051905160a05160c05160028054600160a060020a031916331790556003939093556004919091556005556006556102cf8061005e6000396000f3606060405236156100775760e060020a60003504630b97bc86811461007957806323bd4d7a14610082578063594418ec146100945780637284e41614610105578063ad38867e1461010e578063bf4c988e146101fc578063c24a0f8b14610217578063c2c3e0a614610220578063d78ad57714610266575b005b61026f60055481565b610279600254600160a060020a031681565b610077600435602435600160a060020a0382166000908152600760205260409020805460ff191660019081179091556008805491820180825590919082818380158290116102965781836000526020600020918201910161029691905b808211156102cb57600081556001016100f1565b61026f60045481565b6102796000808080806008548110156101f55760088054829081101561000257527ff3f7a9fe364faab93b216da50a3214154f22a0a2b415b23a84c8169e8b636ee38150547f2b57f777000000000000000000000000000000000000000000000000000000006060908152600160a060020a039190911690632b57f7779060649060209060048187876161da5a03f11561000257505060405151925050808211156101f1576008805492948593811015610002575090527ff3f7a9fe364faab93b216da50a3214154f22a0a2b415b23a84c8169e8b636ee354600160a060020a03165b8094505b5050505090565b61026f60043560076020526000908152604090205460ff1681565b61026f60065481565b61027960043560088054829081101561000257506000527ff3f7a9fe364faab93b216da50a3214154f22a0a2b415b23a84c8169e8b636ee30154600160a060020a031681565b61026f60035481565b6060908152602090f35b60408051600160a060020a03929092168252519081900360200190f35b50505091909060005260206000209001600050805473ffffffffffffffffffffffffffffffffffffffff191683179055505050565b509056";

  if ("0xa3ff7e9700007af8ee662476b2212cf8bd5b501c" != "") {
    OrganizationsFactory.address = "0xa3ff7e9700007af8ee662476b2212cf8bd5b501c";

    // Backward compatibility; Deprecated.
    OrganizationsFactory.deployed_address = "0xa3ff7e9700007af8ee662476b2212cf8bd5b501c";
  }

  OrganizationsFactory.generated_with = "1.0.2";
  OrganizationsFactory.contract_name = "OrganizationsFactory";

  return OrganizationsFactory;
};

// Nicety for Node.
factory.load = factory;

if (typeof module != "undefined") {
  module.exports = factory;
} else {
  // There will only be one version of Pudding in the browser,
  // and we can use that.
  window.OrganizationsFactory = factory;
}
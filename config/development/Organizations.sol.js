"use strict";

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var factory = function factory(Pudding) {
  // Inherit from Pudding. The dependency on Babel sucks, but it's
  // the easiest way to extend a Babel-based class. Note that the
  // resulting .js file does not have a dependency on Babel.

  var Organizations = (function (_Pudding) {
    _inherits(Organizations, _Pudding);

    function Organizations() {
      _classCallCheck(this, Organizations);

      _get(Object.getPrototypeOf(Organizations.prototype), "constructor", this).apply(this, arguments);
    }

    return Organizations;
  })(Pudding);

  ;

  // Set up specific data for this class.
  Organizations.abi = [{ "constant": false, "inputs": [{ "name": "name", "type": "string" }, { "name": "base_tokens", "type": "uint256" }], "name": "NewOrganization", "outputs": [{ "name": "Org", "type": "uint256" }], "type": "function" }, { "constant": false, "inputs": [{ "name": "fakeTime", "type": "uint256" }], "name": "toTime", "outputs": [], "type": "function" }, { "constant": false, "inputs": [{ "name": "orgNum", "type": "uint256" }, { "name": "proposal", "type": "address" }], "name": "dispatchBalance", "outputs": [], "type": "function" }, { "constant": true, "inputs": [], "name": "Now", "outputs": [{ "name": "", "type": "uint256" }], "type": "function" }, { "constant": false, "inputs": [{ "name": "orgNum", "type": "uint256" }, { "name": "amount", "type": "uint256" }, { "name": "dest", "type": "address" }], "name": "giveTokens", "outputs": [], "type": "function" }, { "constant": false, "inputs": [{ "name": "orgNum", "type": "uint256" }, { "name": "member", "type": "address" }], "name": "removeMember", "outputs": [], "type": "function" }, { "constant": false, "inputs": [{ "name": "orgNum", "type": "uint256" }, { "name": "newMember", "type": "address" }], "name": "addMember", "outputs": [], "type": "function" }, { "constant": false, "inputs": [], "name": "destroy", "outputs": [], "type": "function" }, { "constant": true, "inputs": [], "name": "owner", "outputs": [{ "name": "", "type": "address" }], "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "uint256" }], "name": "organizations", "outputs": [{ "name": "name", "type": "string" }, { "name": "organizer", "type": "address" }, { "name": "numMembers", "type": "uint256" }, { "name": "token_count", "type": "uint256" }, { "name": "base_tokens", "type": "uint256" }, { "name": "numProposals", "type": "uint256" }], "type": "function" }, { "constant": false, "inputs": [{ "name": "orgNum", "type": "uint256" }, { "name": "vote", "type": "bool" }, { "name": "weight", "type": "uint256" }, { "name": "proposal", "type": "address" }], "name": "vote", "outputs": [], "type": "function" }, { "constant": false, "inputs": [{ "name": "orgNum", "type": "uint256" }, { "name": "name", "type": "string" }, { "name": "description", "type": "string" }, { "name": "starttime", "type": "uint256" }, { "name": "endtime", "type": "uint256" }], "name": "makeProposal", "outputs": [], "type": "function" }, { "inputs": [], "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "_new", "type": "address" }], "name": "NewMember", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "_old", "type": "address" }], "name": "DeletedMember", "type": "event" }];
  Organizations.binary = "60606040524260005560018054600160a060020a031916331790556114d8806100286000396000f3606060405236156100985760e060020a60003504630705ac80811461009a5780630909d4d51461018b578063124107481461019657806344d4fd191461033d57806360eb178f146103465780636be7658b146103cc57806374d0a6761461045b57806383197ef0146104a35780638da5cb5b146104cc578063e792dd8a146104de578063eb47099d146105af578063ee08034514610607575b005b6040805160206004803580820135601f81018490048402850184019095528484526107f29491936024939092918401919081908401838280828437509496505093359350505050600280546000916001820191859190839081101561000257508352600982027f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace0183506000016000509080519060200190828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106108d957805160ff19168380011785555b506109099291505b80821115610a075760008155600101610177565b600435600055610098565b6100986004356024358060005b81600160a060020a031663bfcddbbc6040518160e060020a0281526004018090506020604051808303816000876161da5a03f1156100025750506040515160ff831610159050610e735781600160a060020a031663bfcddbbc6040518160e060020a0281526004018090506020604051808303816000876161da5a03f1156100025750506040805180517f3d79d1c80000000000000000000000000000000000000000000000000000000082529151919291633d79d1c89160048181019260209290919082900301816000876161da5a03f115610002575050506040518051906020015004600260005085815481101561000257506040805160009283527f8fbb38ff00000000000000000000000000000000000000000000000000000000815260ff85166004820152905160098802600080516020611478833981519152019291600160a060020a03871691638fbb38ff91602481810192602092909190829003018187876161da5a03f1156100025750506040805151600160a060020a031683526020939093525020805490910190556001016101a3565b6107f260005481565b6100986004356024356044355b8160026000508481548110156100025760008290526009026000805160206114b88339815191520180549092019091558054839190859081101561000257600160a060020a0393909316600090815260099390930260008051602061147883398151915201602052506040909120805490910190555050565b6100986004356024356002805483908110156100025750600052600080516020611438833981519152600983020154600160a060020a03908116339091161415806104515750600280548390811015610002575050600160a060020a03811660009081526000805160206114588339815191526009840201602052604090205460ff16155b15610b6f5761049f565b6100986004356024356002805483908110156100025750600052600080516020611438833981519152600983020154600160a060020a039081163390911614610a7e575b5050565b610098600154600160a060020a03908116339091161415610e7957600154600160a060020a0316ff5b610804600154600160a060020a031681565b61082160043560028054829081101561000257506000526000805160206114b88339815191526009909102908101546000805160206114988339815191528201546000805160206114388339815191528301547f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ad48401547f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ad58501547f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace90950194600160a060020a0392909216939186565b6100986004356024356044356064356000600260005085815481101561000257505033600160a060020a031681526000805160206114588339815191526009860201602052604081205460ff161515610c7f57610e6c565b60408051602060046024803582810135601f81018590048502860185019096528585526100989583359593946044949392909201918190840183828082843750506040805160209735808a0135601f81018a90048a0283018a019093528282529698976064979196506024919091019450909250829150840183828082843750949650509335935050608435915050600085858585856040516105bc80610e7c8339018086815260200180602001806020018581526020018481526020018381038352878181518152602001915080519060200190808383829060006004602084601f0104600302600f01f150905090810190601f16801561071d5780820380516001836020036101000a031916815260200191505b508381038252868181518152602001915080519060200190808383829060006004602084601f0104600302600f01f150905090810190601f1680156107765780820380516001836020036101000a031916815260200191505b50975050505050505050604051809103906000f090506002600050868154811015610002576000919091526009027f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ad6018054600181018083558281838015829011610a0b57600083815260209020610a0b918101908301610177565b60408051918252519081900360200190f35b60408051600160a060020a03929092168252519081900360200190f35b60408051600160a060020a0387166020820152908101859052606081018490526080810183905260a0810182905260c0808252875460026001821615610100026000190190911604908201819052819060e0820190899080156108c55780601f1061089a576101008083540402835291602001916108c5565b820191906000526020600020905b8154815290600101906020018083116108a857829003601f168201915b505097505050505050505060405180910390f35b8280016001018555821561016f579182015b8281111561016f5782518260005055916020019190600101906108eb565b50503360026000508281548110156100025760008281526009820260008051602061143883398151915201805473ffffffffffffffffffffffffffffffffffffffff1916909417909355815481101561000257600981026000805160206114b8833981519152018390558154811015610002576009810260008051602061149883398151915201839055815481101561000257600981027f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ad501929092558054859250839081101561000257505050600981027f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ad4019290925550919050565b5090565b505050600092835250602090912001805473ffffffffffffffffffffffffffffffffffffffff191682179055600280548790811015610002576000919091526009027f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ad50180546001019055505050505050565b6001600260005083815481101561000257600160a060020a03841660009081526009919091026000805160206114588339815191520160205260409020805460ff19169092179091558054839081101561000257600082815260099190910260008051602061149883398151915201805460010190558154909190849081101561000257600160a060020a0384168352600902600080516020611478833981519152016020526040822091909155805461049f9184918290811015610002576000919091526009027f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ad4015483610353565b6000600260005083815481101561000257600160a060020a0384168352600902600080516020611458833981519152016020526040909120805460ff19169055805483908110156100025760008290526009026000805160206114988339815191520180546000190190558054839081101561000257600160a060020a0383166000908152600991909102600080516020611478833981519152016020528154604090912054919084908110156100025760008281526009919091026000805160206114b8833981519152018054939093039092558054849081101561000257600160a060020a039390931682525060099190910260008051602061147883398151915201602052604081205550565b600160026000508681548110156100025733600160a060020a0316600090815260099190910260008051602061147883398151915201602052604090205491909110159050610ccd57610e6c565b6001831015610cdb57610e6c565b6002805486908110156100025733600160a060020a0316600090815260099190910260008051602061147883398151915201602052604090205484800211159050610d2557610e6c565b81905080600160a060020a03166378e979256040518160e060020a0281526004018090506020604051808303816000876161da5a03f115610002575050604051516000541080159150610db8575080600160a060020a0316633197cbb66040518160e060020a0281526004018090506020604051808303816000876161da5a03f115610002575050604051516000541090505b15610e6c57828302600260005086815481101561000257600160a060020a03338116600081815260099390930260008051602061147883398151915201602052604080842080549690960390955584517f61ebccfd000000000000000000000000000000000000000000000000000000008152600481018a90526024810189905260448101919091529351908516936361ebccfd93506064808201939291829003018183876161da5a03f115610002575050505b5050505050565b50505050565b5600606060405242600b600050556040516105bc3803806105bc83398101604052805160805160a05160c05160e051939492830193919092019190600085815560018054600160a060020a0319163317815585516003805493819052926020600293821615610100026000190190911692909204601f9081018390047fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85b908101939091908901908390106100e957805160ff19168380011785555b506101199291505b8082111561019a57600081556001016100c0565b505050505050506103ee806101ce6000396000f35b828001600101855582156100b8579182015b828111156100b85782518260005055916020019190600101906100fb565b50506008829055600981905582516002805460008290529091602060018316156101000260001901909216839004601f9081018390047f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace9081019390919088019083901061019e57805160ff19168380011785555b506100d49291506100c0565b5090565b8280016001018555821561018e579182015b8281111561018e5782518260005055916020019190600101906101b056606060405236156100b95760e060020a600035046306fdde0381146100bb5780630909d4d51461011857806323bd4d7a146101235780633197cbb61461012c5780633d79d1c81461013557806361ebccfd1461013e5780637284e4161461016657806378e97925146101bf57806383197ef0146101c85780638da5cb5b146101f05780638fbb38ff1461020257806394f0873d14610248578063bd108fd41461025f578063bfcddbbc14610268578063d6b225be14610271575b005b61027a60038054602060026001831615610100026000190190921691909104601f810182900490910260809081016040526060828152929190828280156103305780601f1061030557610100808354040283529160200191610330565b600435600b556100b9565b6102e860005481565b6102e860095481565b6102e860075481565b6100b960043560243560443560015433600160a060020a03908116911614610338575b505050565b61027a600280546020601f600019600184161561010002019092168390049182018190040260809081016040526060828152929190828280156103305780601f1061030557610100808354040283529160200191610330565b6102e860085481565b6100b960015433600160a060020a03908116911614156103ec57600154600160a060020a0316ff5b6102f2600154600160a060020a031681565b6102f260043560048054829081101561000257506000527f8a35acfbc15ff81a39ae7d344fd709f28e8600b4aa8c65c6b64bfe7fe36bd19b0154600160a060020a031681565b6102e8600954600b546000919010156103d3575b90565b6102e860055481565b6102e8600a5481565b6102e860065481565b60405180806020018281038252838181518152602001915080519060200190808383829060006004602084601f0104600302600f01f150905090810190601f1680156102da5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6060908152602090f35b600160a060020a03166060908152602090f35b820191906000526020600020905b81548152906001019060200180831161031357829003601f168201915b505050505081565b600480546001810180835582818380158290116103785781836000526020600020918201910161037891905b808211156103cf5760008155600101610364565b50505091909060005260206000209001600050805473ffffffffffffffffffffffffffffffffffffffff1916831790555060078054838002019055600a805460010190558215610161576005805483019055610161565b5090565b600654600554111561025c57506006546005540461025c565b56405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acf405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ad0405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ad1405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ad2405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ad3";

  if ("0xc305c901078781c232a2a521c2af7980f8385ee9" != "") {
    Organizations.address = "0xc305c901078781c232a2a521c2af7980f8385ee9";

    // Backward compatibility; Deprecated.
    Organizations.deployed_address = "0xc305c901078781c232a2a521c2af7980f8385ee9";
  }

  Organizations.generated_with = "1.0.2";
  Organizations.contract_name = "Organizations";

  return Organizations;
};

// Nicety for Node.
factory.load = factory;

if (typeof module != "undefined") {
  module.exports = factory;
} else {
  // There will only be one version of Pudding in the browser,
  // and we can use that.
  window.Organizations = factory;
}
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
  Proposal.abi = [{ "constant": true, "inputs": [], "name": "name", "outputs": [{ "name": "", "type": "string" }], "type": "function" }, { "constant": false, "inputs": [{ "name": "fakeTime", "type": "uint256" }], "name": "toTime", "outputs": [], "type": "function" }, { "constant": true, "inputs": [], "name": "organization", "outputs": [{ "name": "", "type": "uint256" }], "type": "function" }, { "constant": true, "inputs": [], "name": "endTime", "outputs": [{ "name": "", "type": "uint256" }], "type": "function" }, { "constant": true, "inputs": [], "name": "bal", "outputs": [{ "name": "", "type": "uint256" }], "type": "function" }, { "constant": false, "inputs": [{ "name": "vote", "type": "bool" }, { "name": "weight", "type": "uint256" }, { "name": "member", "type": "address" }], "name": "vote", "outputs": [], "type": "function" }, { "constant": true, "inputs": [], "name": "description", "outputs": [{ "name": "", "type": "string" }], "type": "function" }, { "constant": true, "inputs": [], "name": "startTime", "outputs": [{ "name": "", "type": "uint256" }], "type": "function" }, { "constant": false, "inputs": [], "name": "destroy", "outputs": [], "type": "function" }, { "constant": true, "inputs": [], "name": "owner", "outputs": [{ "name": "", "type": "address" }], "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "uint256" }], "name": "voted", "outputs": [{ "name": "", "type": "address" }], "type": "function" }, { "constant": false, "inputs": [], "name": "Results", "outputs": [{ "name": "result", "type": "uint256" }], "type": "function" }, { "constant": true, "inputs": [], "name": "forVotes", "outputs": [{ "name": "", "type": "uint256" }], "type": "function" }, { "constant": true, "inputs": [], "name": "nbVoters", "outputs": [{ "name": "", "type": "uint256" }], "type": "function" }, { "constant": true, "inputs": [], "name": "againstVotes", "outputs": [{ "name": "", "type": "uint256" }], "type": "function" }, { "inputs": [{ "name": "orgNum", "type": "uint256" }, { "name": "newName", "type": "string" }, { "name": "newDescription", "type": "string" }, { "name": "startime", "type": "uint256" }, { "name": "endtime", "type": "uint256" }], "type": "constructor" }];
  Proposal.binary = "606060405242600b600050556040516105bc3803806105bc83398101604052805160805160a05160c05160e051939492830193919092019190600085815560018054600160a060020a0319163317815585516003805493819052926020600293821615610100026000190190911692909204601f9081018390047fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85b908101939091908901908390106100e957805160ff19168380011785555b506101199291505b8082111561019a57600081556001016100c0565b505050505050506103ee806101ce6000396000f35b828001600101855582156100b8579182015b828111156100b85782518260005055916020019190600101906100fb565b50506008829055600981905582516002805460008290529091602060018316156101000260001901909216839004601f9081018390047f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace9081019390919088019083901061019e57805160ff19168380011785555b506100d49291506100c0565b5090565b8280016001018555821561018e579182015b8281111561018e5782518260005055916020019190600101906101b056606060405236156100b95760e060020a600035046306fdde0381146100bb5780630909d4d51461011857806323bd4d7a146101235780633197cbb61461012c5780633d79d1c81461013557806361ebccfd1461013e5780637284e4161461016657806378e97925146101bf57806383197ef0146101c85780638da5cb5b146101f05780638fbb38ff1461020257806394f0873d14610248578063bd108fd41461025f578063bfcddbbc14610268578063d6b225be14610271575b005b61027a60038054602060026001831615610100026000190190921691909104601f810182900490910260809081016040526060828152929190828280156103305780601f1061030557610100808354040283529160200191610330565b600435600b556100b9565b6102e860005481565b6102e860095481565b6102e860075481565b6100b960043560243560443560015433600160a060020a03908116911614610338575b505050565b61027a600280546020601f600019600184161561010002019092168390049182018190040260809081016040526060828152929190828280156103305780601f1061030557610100808354040283529160200191610330565b6102e860085481565b6100b960015433600160a060020a03908116911614156103ec57600154600160a060020a0316ff5b6102f2600154600160a060020a031681565b6102f260043560048054829081101561000257506000527f8a35acfbc15ff81a39ae7d344fd709f28e8600b4aa8c65c6b64bfe7fe36bd19b0154600160a060020a031681565b6102e8600954600b546000919010156103d3575b90565b6102e860055481565b6102e8600a5481565b6102e860065481565b60405180806020018281038252838181518152602001915080519060200190808383829060006004602084601f0104600302600f01f150905090810190601f1680156102da5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6060908152602090f35b600160a060020a03166060908152602090f35b820191906000526020600020905b81548152906001019060200180831161031357829003601f168201915b505050505081565b600480546001810180835582818380158290116103785781836000526020600020918201910161037891905b808211156103cf5760008155600101610364565b50505091909060005260206000209001600050805473ffffffffffffffffffffffffffffffffffffffff1916831790555060078054838002019055600a805460010190558215610161576005805483019055610161565b5090565b600654600554111561025c57506006546005540461025c565b56";

  if ("0xd6f084ee15e38c4f7e091f8dd0fe6fe4a0e203ef" != "") {
    Proposal.address = "0xd6f084ee15e38c4f7e091f8dd0fe6fe4a0e203ef";

    // Backward compatibility; Deprecated.
    Proposal.deployed_address = "0xd6f084ee15e38c4f7e091f8dd0fe6fe4a0e203ef";
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
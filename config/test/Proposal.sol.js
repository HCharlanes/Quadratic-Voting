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
  Proposal.abi = [{ "constant": true, "inputs": [], "name": "name", "outputs": [{ "name": "", "type": "string" }], "type": "function" }, { "constant": false, "inputs": [{ "name": "fakeTime", "type": "uint256" }], "name": "toTime", "outputs": [], "type": "function" }, { "constant": true, "inputs": [], "name": "endTime", "outputs": [{ "name": "", "type": "uint256" }], "type": "function" }, { "constant": true, "inputs": [], "name": "bal", "outputs": [{ "name": "", "type": "uint256" }], "type": "function" }, { "constant": true, "inputs": [], "name": "Now", "outputs": [{ "name": "", "type": "uint256" }], "type": "function" }, { "constant": false, "inputs": [{ "name": "vote", "type": "bool" }, { "name": "weight", "type": "uint256" }, { "name": "member", "type": "address" }], "name": "vote", "outputs": [], "type": "function" }, { "constant": true, "inputs": [], "name": "description", "outputs": [{ "name": "", "type": "string" }], "type": "function" }, { "constant": true, "inputs": [], "name": "startTime", "outputs": [{ "name": "", "type": "uint256" }], "type": "function" }, { "constant": false, "inputs": [], "name": "destroy", "outputs": [], "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "uint256" }], "name": "voted", "outputs": [{ "name": "", "type": "address" }], "type": "function" }, { "constant": false, "inputs": [], "name": "Results", "outputs": [{ "name": "result", "type": "uint256" }], "type": "function" }, { "constant": true, "inputs": [], "name": "forVotes", "outputs": [{ "name": "", "type": "uint256" }], "type": "function" }, { "constant": true, "inputs": [], "name": "nbVoters", "outputs": [{ "name": "", "type": "uint256" }], "type": "function" }, { "constant": true, "inputs": [], "name": "againstVotes", "outputs": [{ "name": "", "type": "uint256" }], "type": "function" }, { "inputs": [{ "name": "orgNum", "type": "uint256" }, { "name": "newName", "type": "string" }, { "name": "newDescription", "type": "string" }, { "name": "startime", "type": "uint256" }, { "name": "endtime", "type": "uint256" }], "type": "constructor" }];
  Proposal.binary = "606060405260405161058538038061058583398101604052805160805160a05160c05160e051939492830193919092019190600085815560018054600160a060020a0319163317815585516003805493819052926020600293821615610100026000190190911692909204601f9081018390047fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85b908101939091908901908390106100e257805160ff19168380011785555b506101129291505b8082111561019357600081556001016100b9565b505050505050506103be806101c76000396000f35b828001600101855582156100b1579182015b828111156100b15782518260005055916020019190600101906100f4565b50506008829055600981905582516002805460008290529091602060018316156101000260001901909216839004601f9081018390047f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace9081019390919088019083901061019757805160ff19168380011785555b506100cd9291506100b9565b5090565b82800160010185558215610187579182015b828111156101875782518260005055916020019190600101906101a956606060405236156100ae5760e060020a600035046306fdde0381146100b05780630909d4d51461010d5780633197cbb6146101185780633d79d1c81461012157806344d4fd191461012a57806361ebccfd146101335780637284e4161461015b57806378e97925146101b457806383197ef0146101bd5780638fbb38ff146101e557806394f0873d1461022b578063bd108fd414610242578063bfcddbbc1461024b578063d6b225be14610254575b005b61025d60038054602060026001831615610100026000190190921691909104601f810182900490910260809081016040526060828152929190828280156103005780601f106102d557610100808354040283529160200191610300565b600435600b556100ae565b6102cb60095481565b6102cb60075481565b6102cb600b5481565b6100ae60043560243560443560015433600160a060020a03908116911614610308575b505050565b61025d600280546020601f600019600184161561010002019092168390049182018190040260809081016040526060828152929190828280156103005780601f106102d557610100808354040283529160200191610300565b6102cb60085481565b6100ae60015433600160a060020a03908116911614156103bc57600154600160a060020a0316ff5b6102cb60043560048054829081101561000257506000527f8a35acfbc15ff81a39ae7d344fd709f28e8600b4aa8c65c6b64bfe7fe36bd19b0154600160a060020a031681565b6102cb600954600b546000919010156103a3575b90565b6102cb60055481565b6102cb600a5481565b6102cb60065481565b60405180806020018281038252838181518152602001915080519060200190808383829060006004602084601f0104600302600f01f150905090810190601f1680156102bd5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6060908152602090f35b820191906000526020600020905b8154815290600101906020018083116102e357829003601f168201915b505050505081565b600480546001810180835582818380158290116103485781836000526020600020918201910161034891905b8082111561039f5760008155600101610334565b50505091909060005260206000209001600050805473ffffffffffffffffffffffffffffffffffffffff1916831790555060078054838002019055600a805460010190558215610156576005805483019055610156565b5090565b600654600554111561023f57506006546005540461023f565b56";

  if ("0x5ab615677a677cff24cfba3cfea55c1e70a588eb" != "") {
    Proposal.address = "0x5ab615677a677cff24cfba3cfea55c1e70a588eb";

    // Backward compatibility; Deprecated.
    Proposal.deployed_address = "0x5ab615677a677cff24cfba3cfea55c1e70a588eb";
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
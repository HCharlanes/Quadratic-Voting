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
  Proposal.abi = [{ "constant": true, "inputs": [], "name": "creator", "outputs": [{ "name": "", "type": "address" }], "type": "function" }, { "constant": true, "inputs": [], "name": "name", "outputs": [{ "name": "", "type": "string" }], "type": "function" }, { "constant": false, "inputs": [{ "name": "fakeTime", "type": "uint256" }], "name": "toTime", "outputs": [], "type": "function" }, { "constant": false, "inputs": [], "name": "totalResult", "outputs": [{ "name": "result", "type": "uint256" }], "type": "function" }, { "constant": true, "inputs": [], "name": "endTime", "outputs": [{ "name": "", "type": "uint256" }], "type": "function" }, { "constant": true, "inputs": [], "name": "bal", "outputs": [{ "name": "", "type": "uint256" }], "type": "function" }, { "constant": false, "inputs": [{ "name": "vote", "type": "bool" }, { "name": "weight", "type": "uint256" }, { "name": "member", "type": "address" }], "name": "vote", "outputs": [], "type": "function" }, { "constant": true, "inputs": [], "name": "description", "outputs": [{ "name": "", "type": "string" }], "type": "function" }, { "constant": true, "inputs": [], "name": "startTime", "outputs": [{ "name": "", "type": "uint256" }], "type": "function" }, { "constant": false, "inputs": [], "name": "destroy", "outputs": [], "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "uint256" }], "name": "voted", "outputs": [{ "name": "", "type": "address" }], "type": "function" }, { "constant": false, "inputs": [], "name": "Results", "outputs": [{ "name": "result", "type": "int256" }], "type": "function" }, { "constant": true, "inputs": [], "name": "forVotes", "outputs": [{ "name": "", "type": "uint256" }], "type": "function" }, { "constant": true, "inputs": [], "name": "nbVoters", "outputs": [{ "name": "", "type": "uint256" }], "type": "function" }, { "constant": true, "inputs": [], "name": "againstVotes", "outputs": [{ "name": "", "type": "uint256" }], "type": "function" }, { "inputs": [{ "name": "newName", "type": "string" }, { "name": "newDescription", "type": "string" }, { "name": "startime", "type": "uint256" }, { "name": "endtime", "type": "uint256" }], "type": "constructor" }];
  Proposal.binary = "606060405242600a600050556040516105d73803806105d783398101604052805160805160a05160c05192840193919091019160008054600160a060020a031916331781558451600280549281905291602060018216156101000260001901909116839004601f9081018290047f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace90810193929091908901908390106100dc57805160ff19168380011785555b5061010c9291505b8082111561018f57600081556001016100b4565b505050505050610414806101c36000396000f35b828001600101855582156100ac579182015b828111156100ac5782518260005055916020019190600101906100ee565b505060038290556004819055825160018054600082905290916020600283851615610100026000190190931692909204601f9081018390047fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf69081019390919088019083901061019357805160ff19168380011785555b506100c89291506100b4565b5090565b82800160010185558215610183579182015b828111156101835782518260005055916020019190600101906101a556606060405236156100b95760e060020a600035046302d05d3f81146100bb57806306fdde03146100cd5780630909d4d5146101275780632b57f777146101325780633197cbb61461014a5780633d79d1c81461015357806361ebccfd1461015c5780637284e4161461018457806378e97925146101df57806383197ef0146101e85780638fbb38ff1461021057806394f0873d14610256578063bd108fd41461026e578063bfcddbbc14610277578063d6b225be14610280575b005b610289600054600160a060020a031681565b61029c60028054602060018216156101000260001901909116829004601f8101829004909102608090810160405260608281529291908282801561033f5780601f106103145761010080835404028352916020019161033f565b600435600a556100b9565b61030a600454600a546000919010156104065761040f565b61030a60045481565b61030a60085481565b6100b960043560243560443560005433600160a060020a03908116911614610347575b505050565b61029c600180546020601f60026000198486161561010002019093169290920491820181900402608090810160405260608281529291908282801561033f5780601f106103145761010080835404028352916020019161033f565b61030a60035481565b6100b960005433600160a060020a039081169116141561041257600054600160a060020a0316ff5b61028960043560058054829081101561000257506000527f036b6384b5eca791c62761152d0c79bb0604c104a5fb6f4eb0703f3154bb3db00154600160a060020a031681565b61030a600454600a546000919010156103e25761040f565b61030a60065481565b61030a60095481565b61030a60075481565b600160a060020a03166060908152602090f35b60405180806020018281038252838181518152602001915080519060200190808383829060006004602084601f0104600302600f01f150905090810190601f1680156102fc5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6060908152602090f35b820191906000526020600020905b81548152906001019060200180831161032257829003601f168201915b505050505081565b600580546001810180835582818380158290116103875781836000526020600020918201910161038791905b808211156103de5760008155600101610373565b50505091909060005260206000209001600050805473ffffffffffffffffffffffffffffffffffffffff1916831790555060088054838002019055600980546001019055821561017f57600680548301905561017f565b5090565b60075460065411156103f65750600161040f565b6007546006541161040f5761040f565b50600754600654035b90565b56";

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
// App component - represents the whole app
App = React.createClass({
      mixins: [ReactMeteorData],

      getInitialState: function() {
        return {
          contract: undefined,
          data: undefined,
          field: ''
        };
      },

      getMeteorData() {
        return {
          block: EthBlocks.latest.number
        }
      },

      componentDidMount: function() {
        this.createContract()
      },

      onSetStorage(event) {
        var that = this
        let {
          contract, field
        } = this.state

        event.preventDefault();

        contract.set(field, {
          from: web3.eth.accounts[0]
        })
      },

      onFieldChange(event) {
        this.setState({
          field: event.target.value
        });
      },

      createContract() {
        console.log('createContract')
        var that = this;
        var simpleStorage = SimpleStorage.new({
          data: SimpleStorage.bytecode,
          from: web3.eth.accounts[0]
        }, function(err, myContract) {
          if (!err) {
            // NOTE: The callback will fire twice!
            // Once the contract has the transactionHash property set and once its deployed on an address.

            // e.g. check tx hash on the first call (transaction send)
            if (!myContract.address) {
              console.log(myContract.transactionHash) // The hash of the transaction, which deploys the contract

              // check address on the second call (contract deployed)
            } else {
              var event = myContract.ValueSet({}, function(error, result) {
                if (!error) {
                  var msg = "Raw event: " + JSON.stringify(result) + "\nEvent type : " + result.event + "\nEvent value: " + JSON.stringify(result.args);
                  console.log(msg)
                  that.setState({
                    data: result.args.newValue.toString(10)
                  });
                }
              });

              console.log(myContract.address) // the contract address
              that.setState({
                contract: myContract,
              });
            }
            // Note that the returned "myContractReturned" === "myContract",
            // so the returned "myContractReturned" object will also get the address set.
          }
        });
      },

  render() {

    let {contract, data, field} = this.state;

    return (
      <div className="container">
        <header>
          <h1>App</h1>
        </header>
      <h2>Current Block: {this.data.block}</h2>
      <br></br>
      <h2>Contract: {contract ? this.state.contract.address : ''}</h2>
      <br></br>
      <form onSubmit={this.onSetStorage}>
        Set value:
        <input type="text" name="value" value={field} onChange={this.onFieldChange}></input>
        <input type="submit"></input>
      </form>      
      <h3>Data: {data}</h3>   
      </div>
    );
  }
});


// CheckboxGroup = React.createClass({
//   render() {
//     return(
//       <div>
//         <MyCheckbox bite=true />
//         <MyCheckbox bite=false />
//         <MyCheckbox bite=false />
//       </div>
//       )
//   }
// })

// MyCheckbox = React.createClass({
//   render() {
//     x = this.props.bite;
//     return(
//       <input checked={this.props.bite} />
//     )
//   }
// })







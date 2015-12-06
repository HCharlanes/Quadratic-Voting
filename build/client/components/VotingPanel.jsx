VotingPanel = React.createClass({

	getInitialState: function() {
		return {
			weight: 1 
		};
	},

	vote(choice) {
		let {proposalAddress, organizationAddress} = this.props;
		let {weight} = this.state;
		var organization = Organization.at(organizationAddress);
		organization.Vote().watch(function(err, res) {
			if (err) {
				console.log(err)
			} else {
				console.log(res)
			}
		})
		organization.vote(choice, weight, proposalAddress, {from: web3.eth.accounts[0]}, function(err, val) {
			console.log('err',err)
			console.log('val',val)
		})
	},

	onChangeWeight(event) {
		this.setState({
			weight: Math.max(1, event.target.value)
		});
	},

	onYes(event) {
		event.preventDefault();
		this.vote(true)
	},

	onNo(event) {
		event.preventDefault();
		this.vote(false)
	},



	render() {

		let {weight} = this.state;
		let {proposalAddress, organizationAddress} = this.props;

		console.log("get contract");
		var proposal = Proposal.at(proposalAddress);
		var organization = Organization.at(organizationAddress);
		var disabled = (weight > Number(organization.balances(web3.eth.accounts[0]).toString(10)))

		return (
			<div>
				<h2>{proposal.name()}</h2>
				<br></br>
				<input type="number" value={weight} onChange={this.onChangeWeight} ></input>
				<br></br>
				<label>{"Price: " + (weight * weight)}</label>
				<br></br>
				<input type="button" value="Yes" onClick={this.onYes} disabled={disabled}></input>
				<input type="button" value="No" onClick={this.onNo} disabled={disabled}></input>
			</div>
		);
	}

});
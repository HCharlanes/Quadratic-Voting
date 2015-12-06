ProposalList = React.createClass({
	getInitialState: function() {
		return {
			field: ''
		};
	},

	onFieldChange(event) {
		this.setState({
			field: event.target.value 
		});
	},

	onNewProposal(event) {
		event.preventDefault();

		let {organizationAddress} = this.props;
		let {field} = this.state;

		console.log("new proposal")

		var myContract = Organization.at(organizationAddress);
		myContract.makeProposal(field, Math.floor(Date.now() / 1000) + 1, 2000000000000000, {
						from: web3.eth.accounts[0]
		});

	},

     renderListElements(proposalList) {
     	let {organizationAddress} = this.props;

     	if(proposalList.length == 0) {
     		return (
			<div>
				<h1>Empty</h1>
			</div>
			)
     	}

     	componentList = proposalList.map(function(proposal, index) {
     		return (
     			<ProposalRow proposal={proposal} key={index} organizationAddress={organizationAddress} />
     		)
     	})

     	return(
	     		<div className="row">
		     		<ul>
		     			{componentList}
		     		</ul>
		     	</div>
     	)
     },

	render: function() {
		let {field} = this.state;		
		let {organizationAddress} = this.props;

		var organization = Organization.at(organizationAddress)
		var proposals = [];
		for (i = 0; i < organization.numProposals(); i++) {
			console.log('push')
			proposals.push(Proposal.at(organization.proposals(i)));
		}

		return (
			<div>
				{this.renderListElements(proposals)}	
				<form onSubmit={this.onNewProposal}>
			        New proposal:
			        <input type="text" name="value" value={field} onChange={this.onFieldChange}></input>
			        <input type="submit"></input>
			    </form> 
			</div>
		);
	}

});
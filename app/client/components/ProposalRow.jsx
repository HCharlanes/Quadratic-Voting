ProposalRow = React.createClass({

	onVote() {
		FlowRouter.go('/orgs/' + this.props.organizationAddress + '/proposals/' + this.props.proposal.address)
	},

	render: function() {
		let {proposal} = this.props;

		var now = Math.floor(Date.now() / 1000);

		return (
			<li>
				<div className="col-1-3">
					<h3>{proposal.name()}</h3>
				</div>
				<div className="col-1-3">
					{"Votes: " + proposal.nbVoters().toString(10)}
				</div>
				<div className="col-1-3">
					<i className="icon-bell"></i>
					<span>{"Start: " + moment.unix(proposal.startTime()).format()} </span>
				</div>
				<div className="col-3">
					{" End: " + moment.unix(proposal.endTime()).format()}
				</div>
				<input type="button" onClick={this.onVote} value="Vote" enabled={now >= proposal.startTime() && now < proposal.endTime()} />
			</li>
		);
	}

});
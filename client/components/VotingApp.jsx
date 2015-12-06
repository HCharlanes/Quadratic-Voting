VotingApp = React.createClass({

	onClick(event) {
		event.preventDefault();
		console.log('click')
		FlowRouter.go('/vote')
	},

	render: function() {

		return (
			<div>
				<h1>VotingApp</h1>
				<VotingPanel description="Buy more pizza" />
			</div>
		);
	}

});
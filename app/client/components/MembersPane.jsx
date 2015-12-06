MembersPane = React.createClass({

	getInitialState: function() {
		return {
			field: ''
		};
	},

	onAddMember(event) {
		event.preventDefault();
		var organization = Organization.at(this.props.organizationAddress)
		organization.addMember(this.state.field, {from: web3.eth.accounts[0]})
	},

	onFieldChange(event) {
		this.setState({
			field: event.target.value
		});
	},

	render() {

		let {field} = this.state;

		return (
		<form onSubmit={this.onAddMember}>
	        Set value:
	        <input type="text" name="value" value={field} onChange={this.onFieldChange}></input>
	        <input type="submit"></input>
	      </form>      
		);
	}

});
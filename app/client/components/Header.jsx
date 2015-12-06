Header = React.createClass({

	renderTokenCount() {
		var organization = Organization.at(this.props.organization);
		console.log(organization.members(web3.eth.accounts[0]));
		if(!organization.members(web3.eth.accounts[0])) {
			return(<div></div>)
		}
		return(
			organization.balances(web3.eth.accounts[0]).toString(10) + "£"
		)
	},

	render: function() {
		if(!this.props.organization) {
			return( <nav></nav>)
		}
		return (
			<nav>
			    <ul>
			        <li>
			            <a href={"/orgs/" + this.props.organization + "/proposals"}>
			                <span>Proposals</span>
			            </a>
			            <a href={"/orgs/" + this.props.organization + "/members"}>
			                <span>Members</span>
			            </a>
			        </li>
			        <li>
			        	<a>
			        		<span>{this.renderTokenCount()}</span>
			        	</a>
			        </li>
			    </ul>
			</nav>
		);
	}

});
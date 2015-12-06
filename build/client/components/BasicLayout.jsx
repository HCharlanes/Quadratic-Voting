BasicLayout = React.createClass({
	render() {
		return(
		<div>	
			<div className="dapp-grid"></div>
			<header className="dapp-header">
				{this.props.header}
			</header>

			<div className="dapp-flex-content">

			    <main className="dapp-content">
			    	{this.props.content}
			    </main>

			</div>

			<footer className="dapp-footer">

			</footer>
		</div>
		)
	}
})
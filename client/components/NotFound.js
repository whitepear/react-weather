var React = require('react');

function NotFound(props) {
	return (
		<div className="container">
			<div className="row">
				<div className="col-xs-12">
					<div className="notfound-status">404</div>
					<div className="notfound-sub-status">The resource you requested does not exist.</div>
				</div>
			</div>			
		</div>
	)
}

module.exports = NotFound;
import React from 'react';
import ReactDOM from 'react-dom';
import { Grid, Row, Col } from 'react-bootstrap';

// main app
const App = () => {
	return (
		<div>
			<Grid>
				<Row className="show-grid">
					<Col xs={12} md={8}>
						<p>HELLO WORLD</p>
					</Col>
					<Col xs={6} md={4}>
						<p>hello world</p>
					</Col>
				</Row>
				<Row>
					<Col xs={6} md={4}>
						<p>Marco!</p>
					</Col>
					<Col xs={12} md={8}>
						<p>Polo...</p>
					</Col>
				</Row>
			</Grid>
		</div>
	);
};

ReactDOM.render(<App />, document.getElementById('app'))
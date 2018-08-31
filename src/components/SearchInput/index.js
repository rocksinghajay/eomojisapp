import React,{ PureComponent, Fragment } from 'react';

import PropTypes from "prop-types";

import { Input, Row, Col, Container  } from 'reactstrap';

export default class SearchInput extends PureComponent {

	handleChange = event => {

		this.props.textChange(event)
	}

	render(){

		return(
 	
			<Fragment>
				<Container>
					<Row>
						<Col sm={8} className="search-input">
								 <Input 
									 type="text" 
									 placeholder="Searh Your Favourtie Here..."
									 valid 
									 onChange={this.handleChange}
								 />
						</Col>
					</Row>
				</Container>
			</Fragment>
			);
	}
}

SearchInput.propTypes = {
	textChange : PropTypes.func
}
import React,{ PureComponent, Fragment } from 'react';

import PropTypes from "prop-types";

import {  Form, Input, Row, Col, Container  } from 'reactstrap';

export default class SearchInput extends PureComponent {

	handleChange = event => {

		this.props.textChange(event)
	}

	render(){

		return(
 	
			<Fragment>
				<Container>
					<Row>
						<Col sm={6} className="search-input">
								 <Input 
									 type="text" 
									 className="text-center " 
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
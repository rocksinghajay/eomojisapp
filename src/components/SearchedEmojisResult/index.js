import React, { PureComponent, Fragment } from 'react'

import { Container  } from 'reactstrap';

import PropTypes from 'prop-types'
import Clipboard from "clipboard";

import EmojisResult from '../EmojisResult'

export default class SearchedEmojisResult extends PureComponent {

	componentDidMount() {

		this.clipboard = new Clipboard(".copy-to-clipboard")
	}

	componentWillUnmount() {

		this.clipboard.destroy();
	}


	render(){

		return(
				<Container className="text-center">

				{
					this.props.emojisData.map( data => {

						return(

							<EmojisResult
							symbol={data.symbol}
							key={data.title}
							title={data.title}
						/>
							)
						
					})
				}

				</Container>
			)
	}
}

SearchedEmojisResult.propTypes = {

	emojisData : PropTypes.array
}
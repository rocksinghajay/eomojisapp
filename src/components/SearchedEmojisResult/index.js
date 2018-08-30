import React, { PureComponent, Fragment } from 'react'

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
				<Fragment>

				{
					this.props.emojisData.map( data => {

						<EmojisResult
							symbol={data.symbol}
							key={data.title}
							title={data.title}
						/>
					})
				}

				</Fragment>
			)
	}
}

SearchedEmojisResult.propTypes = {

	emojisData : PropTypes.array
}
import React, { PureComponent, Fragment } from 'react'

import PropTypes from 'prop-types'

export default class EmojisResult extends PureComponent {

	render(){

		const codePointHex = this.props.symbol.codePointAt(0).toString(16)
		const src = `//cdn.jsdelivr.net/emojione/assets/png/${codePointHex}.png`;

		return(
				<div data-clipboard-text={this.props.symbol}>
					<img src={src}  alt={this.props.title}/>
					<span>{this.props.title}</span>
					<span>Click to copy emoji</span>
				</div>
			)
	}
}

EmojisResult.propTypes = {

	title: PropTypes.string,
	symbol: PropTypes.string,

}


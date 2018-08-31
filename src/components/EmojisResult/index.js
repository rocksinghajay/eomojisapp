import React, { PureComponent } from 'react'

import PropTypes from 'prop-types'

import { Input, Row, Col, Container  } from 'reactstrap';


export default class EmojisResult extends PureComponent {

	render(){

		const codePointHex = this.props.symbol.codePointAt(0).toString(16);
		const src = `//cdn.jsdelivr.net/emojione/assets/png/${codePointHex}.png`;

		return(
				
				<ul 
					data-clipboard-text={this.props.symbol}
					className="emojis-list"
				>
				<li className="emojis-item">
					<img src={src}  alt={this.props.title}/>
					<span>{this.props.title}</span>
					</li>
				</ul>
				
						
			)
	}
}

EmojisResult.propTypes = {

	title: PropTypes.string,
	symbol: PropTypes.string,

}

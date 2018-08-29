import React,{PureComponent,Fragment} from 'react';

import { Button, Container, Row, Col } from 'reactstrap';

export default class Header extends PureComponent {

	render(){

		return(

			<Fragment>
				<Container>
					<Row>
						<Col>
							<header>
								<h2 className="text-center heading">Search Your Favourite Emojis</h2>
							</header>
						</Col>
					</Row>
				</Container>
			</Fragment>
			);
	}
}
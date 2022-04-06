import { Component } from 'react';
import { Button } from '@mui/material';

export default class Product extends Component {
	render() {
		return (
			<div>
				<h3>{this.props.name}</h3>
				<p>{this.props.category}</p>
				<p>{this.props.price}</p>
				<Button variant='outlined'>Adicionar</Button>
			</div>
		);
	}
}

import { Component } from 'react';
import { Button } from '@mui/material';

export default class Product extends Component {
	render() {
		return (
			<div key={this.props.id} id={this.props.id}>
				<h3>{this.props.name}</h3>
				<p>{this.props.category}</p>
				<p>{this.props.price}</p>

				<Button
					onClick={
						!this.props.cart
							? () => this.props.addProduct(this.props.id)
							: () => this.props.removeProduct(this.props.id)
					}
					variant='outlined'>
					{!this.props.cart ? 'Adicionar' : 'Remover'}
				</Button>
			</div>
		);
	}
}

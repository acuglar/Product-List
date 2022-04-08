import { Component } from 'react';
import { Button } from '@mui/material';

export default class Product extends Component {
	render() {
		const { id, name, category, price, cart, addProduct, removeProduct } =
			this.props;
		return (
			<div key={id} id={id}>
				<h3>{name}</h3>
				<p>{category}</p>
				<p>{price}</p>

				<Button
					onClick={!cart ? () => addProduct(id) : () => removeProduct(id)}
					variant='outlined'>
					{!cart ? 'Adicionar' : 'Remover'}
				</Button>
			</div>
		);
	}
}

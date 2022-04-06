import './App.css';
import { Component } from 'react';
import MenuContainer from './components/MenuContainer';
import { Input, Button } from '@mui/material';

export default class App extends Component {
	state = {
		name: '',
		products: [
			{ id: 1, name: 'Hamburguer', category: 'Sanduíches', price: 7.99 },
			{ id: 2, name: 'X-Burguer', category: 'Sanduíches', price: 8.99 },
			{ id: 3, name: 'X-Salada', category: 'Sanduíches', price: 10.99 },
			{ id: 4, name: 'Big Kenzie', category: 'Sanduíches', price: 16.99 },
			{ id: 5, name: 'Guaraná', category: 'Bebidas', price: 4.99 },
			{ id: 6, name: 'Coca', category: 'Bebidas', price: 4.99 },
			{ id: 7, name: 'Fanta', category: 'Bebidas', price: 4.99 },
		],
		filteredProducts: [],
		currentSale: { total: 0, saleDetails: [] },
	};

	filterProducts = () => {
		const { name, products } = this.state;
		const re = new RegExp(name, 'i');
		this.setState({
			filteredProducts: products.filter(product => re.test(product.name)),
		});
	};

	render() {
		return (
			<div className='App'>
				<main className='App-main'>
					<div>
						<Input
							onChange={e => this.setState({ name: e.target.value })}
							autoFocus={true}
						/>
						<Button onClick={this.filterProducts} variant='contained'>
							Pesquisar
						</Button>
					</div>
					<MenuContainer
						products={
							this.state.filteredProducts.length
								? this.state.filteredProducts
								: this.state.products
						}
					/>
				</main>
			</div>
		);
	}
}

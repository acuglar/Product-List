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
			{ id: 4, name: 'Big-big', category: 'Sanduíches', price: 16.99 },
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

	addProduct = productId => {
		const { products, currentSale } = this.state;
		const findedProduct = products.find(product => product.id === productId);

		if (currentSale.saleDetails.includes(findedProduct)) {
			return;
		}

		this.setState({
			currentSale: {
				saleDetails: [...currentSale.saleDetails, findedProduct],
				total: currentSale.total + findedProduct.price,
			},
		});
	};

	removeProduct = productId => {
		const { products, currentSale } = this.state;
		const findedProduct = products.find(product => product.id === productId);

		const saleDetailsExcludedProductId = currentSale.saleDetails.filter(
			product => product.id !== productId,
		);

		this.setState({
			currentSale: {
				saleDetails: saleDetailsExcludedProductId,
				total: currentSale.total - findedProduct.price,
			},
		});
	};

	render() {
		const { products, filteredProducts, currentSale } = this.state;
		return (
			<div className='App'>
				<main className='App-main'>
					<div className='search-container'>
						<Input
							onChange={e => this.setState({ name: e.target.value })}
							autoFocus={true}
						/>
						<Button onClick={this.filterProducts} variant='contained'>
							Pesquisar
						</Button>
					</div>
					<MenuContainer
						products={filteredProducts.length ? filteredProducts : products}
						addProduct={this.addProduct}
					/>
					<div className='cart'>
						<div>
							<h2>SubTotal: {+currentSale.total.toFixed(2)}</h2>
						</div>
						<MenuContainer
							products={currentSale.saleDetails}
							removeProduct={this.removeProduct}
							cart={true}
						/>
					</div>
				</main>
			</div>
		);
	}
}

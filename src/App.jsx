import './App.css';
import { Component } from 'react';
import MenuContainer from './components/MenuContainer';
import { Input, Button } from '@mui/material';

export default class App extends Component {
	state = {
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
	render() {
		return (
			<div className='App'>
				<main className='App-main'>
					<div>
						<Input autoFocus={true} />
						<Button variant='contained'>Pesquisar</Button>
					</div>
					<MenuContainer products={this.state.products} />
				</main>
			</div>
		);
	}
}

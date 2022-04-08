import { Component } from 'react';
import Product from '../Product';
import './style.css';
export default class MenuContainer extends Component {
	render() {
		const { products, addProduct, removeProduct, cart } = this.props;
		return (
			<div className='products-container'>
				{products.map((product, index) => (
					<Product
						key={index}
						id={product.id}
						name={product.name}
						category={product.category}
						price={product.price}
						addProduct={addProduct}
						removeProduct={removeProduct}
						cart={cart}
					/>
				))}
			</div>
		);
	}
}

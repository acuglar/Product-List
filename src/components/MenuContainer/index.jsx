import { Component } from 'react';
import Product from '../Product';
import './style.css';
export default class MenuContainer extends Component {
	render() {
		return (
			<div className='products-container'>
				{this.props.products.map((product, index) => (
					<Product
						key={index}
						id={product.id}
						name={product.name}
						category={product.category}
						price={product.price}
						addProduct={this.props.addProduct}
						cart={this.props.cart}
					/>
				))}
			</div>
		);
	}
}

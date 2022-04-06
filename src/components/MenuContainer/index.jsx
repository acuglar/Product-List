import { Component } from 'react';
import Product from '../Product';

export default class MenuContainer extends Component {
	render() {
		return (
			<div>
				{this.props.products.map((product, index) => (
					<Product
						key={index}
						name={product.name}
						category={product.category}
						price={product.price}
					/>
				))}
			</div>
		);
	}
}

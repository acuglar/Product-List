import { Component } from 'react';

export default class Product extends Component {
	render() {
		return (
			<div>
				<h3>{this.props.name}</h3>
				<p>{this.props.category}</p>
				<p>{this.props.price}</p>
				<button>Adicionar</button>
			</div>
		);
	}
}

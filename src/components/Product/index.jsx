import { Component } from 'react';

export default class Product extends Component {
	render() {
		return (
			<div>
				<h2>{this.props.name}</h2>
				<p>{this.props.category}</p>
				<p>{this.props.price}</p>
				<button>Adicionar</button>
			</div>
		);
	}
}

import './App.css';
import { Component } from 'react';
import MenuContainer from './components/MenuContainer';

export default class App extends Component {
	render() {
		return (
			<div className='App'>
				<header className='App-header'>
					<MenuContainer />
				</header>
			</div>
		);
	}
}

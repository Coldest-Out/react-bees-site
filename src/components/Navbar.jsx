import React from 'react';
import { Link } from 'react-router-dom';
import { MenuItems } from './MenuItems';
import './NavbarStyles.css';

export class NavbarView extends React.Component {
	state = { clicked: false };

	handleClick = () => {
		this.setState({ clicked: !this.state.clicked })
	}

	render() {
		return (
			<nav className='NavbarItems'>
				<h1 className='navbar-logo'>Hive.Heroes</h1>

				<div className='menu-icons' onClick={this.handleClick}>
					<i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
				</div>

				<ul className='nav-menu'>
					{MenuItems.map((item, index) => {
						return (
							<li key={index}>
								<Link className={item.cName} href="/">
									<i className={item.icon}></i>
									{item.title}
								</Link>
							</li>
						);
					})}
					<button>Sign Up</button>

				</ul>

			</nav>
		)
	}
}
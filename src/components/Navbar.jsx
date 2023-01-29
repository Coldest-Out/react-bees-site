import React from 'react';
import { Link } from 'react-router-dom';
import { MenuItems } from './MenuItems';
import './NavbarStyles.css';

export class NavbarView extends React.Component {
	render() {
		return (
			<nav className='NavbarItems'>
				<h1 className='navbar-logo'>Hive Heroes</h1>

				<ul className='nav-menu'>
					{MenuItems.map((item, index) => {
						return (
							<li key={index}>
								<Link href="/">
									<i className={item.icon}></i>
									{item.title}
								</Link>
							</li>
						);
					})}

				</ul>

			</nav>
		)
	}
}
import React from 'react';
import { Link } from 'react-router-dom';

export class NavbarView extends React.Component {
	render() {
		return (
			<nav className='navbarItems'>
				<h1 className='navbar-logo'>Bees.Shield</h1>

				<ul className='nav-menu'>
					<li>
						<Link>
							<i className='fa-solid fa-house-user'></i>
							Home
						</Link>
					</li>
				</ul>

			</nav>
		)
	}
}
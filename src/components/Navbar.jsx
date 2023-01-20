import React from "react";
import "./NavbarStyles.css";

export function NavbarView() {
	return (
		<nav className="NavbarItems">
			<h1 className="navbar-logo">Buzzy.Bees</h1>
			<ul className="nav-menu">
				<li>
					<Link><i class="fa-solid fa-house-user"></i>Home</Link>
				</li>
			</ul>
		</nav>
	)
}

export default NavbarView;
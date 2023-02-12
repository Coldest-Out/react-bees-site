import Hero from "../components/Hero";
import Info from "../components/Info";
import { NavbarView } from "../components/Navbar";

function Home() {
	return (
		<>
			<NavbarView />
			<Hero
				cName='hero'
				heroImg='src/assets/bee8.jpg'
				title='Join the movement and become a HiveHero today!'
				text='Hiving a sweet-life, one flower at a time.'
				buttonText='Learn More'
				url='/'
				btnClass='show'
			/>
			<Info />
		</>
	)
}

export default Home;
import Hero from "../components/Hero";
import Info from "../components/Info";
import Cards from "../components/Cards";
import { NavbarView } from "../components/Navbar";
import Footer from "../components/Footer";
import HomeImg from "../assets/bee8.jpg";

function Home() {
	return (
		<>
			<NavbarView />
			<Hero
				cName='hero'
				heroImg={HomeImg}
				title='Join the movement and become a HiveHero today!'
				text='Hiving a sweet-life, one flower at a time.'
				buttonText='Learn More'
				url='/'
				btnClass='show'
			/>
			<Info />
			<Cards />
			<Footer />
		</>
	)
}

export default Home;
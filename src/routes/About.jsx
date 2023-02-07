import { NavbarView } from "../components/Navbar";
import Hero from "../components/Hero";
import AboutImg from '../assets/bee5.jpg'

function About() {
	return (
		<>
			<NavbarView />
			<Hero
				cName='hero'
				heroImg={AboutImg}
				title='Join the movement and become a HiveHero today!'
				text='Hiving a sweet-life, one flower at a time.'
				buttonText='Learn More'
				url='/'
				btnClass='show'
			/>
		</>
	)
}

export default About;
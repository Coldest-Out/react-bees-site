import { NavbarView } from "../components/Navbar";
import Hero from "../components/Hero";
import AboutImg from '../assets/bee5.jpg'
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";

function About() {
	return (
		<>
			<NavbarView />
			<Hero
				cName='hero-mid'
				heroImg={AboutImg}
				title="What's all the Buzz? Who are Hive Heroes?"
				//text='Hiving a sweet-life, one flower at a time.'
				//buttonText='Learn More'
				//url='/'
				btnClass='hide'
			/>
			<AboutUs />
			<Footer />
		</>
	)
}

export default About;
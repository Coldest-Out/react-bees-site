import { NavbarView } from "../components/Navbar";
import Hero from "../components/Hero";
import ContactImg from '../assets/bee2.jpg'

function Contact() {
	return (
		<>
			<NavbarView />
			<Hero
				cName='hero-mid'
				heroImg={ContactImg}
				title="Contact"
				//text='Hiving a sweet-life, one flower at a time.'
				//buttonText='Learn More'
				//url='/'
				btnClass='hide'
			/>
		</>
	)
}

export default Contact;
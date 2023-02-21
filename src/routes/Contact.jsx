import { NavbarView } from "../components/Navbar";
import Hero from "../components/Hero";
import ContactImg from '../assets/bee2.jpg'
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

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
			<ContactForm />
			<Footer />
		</>
	)
}

export default Contact;
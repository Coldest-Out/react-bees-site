import { NavbarView } from "../components/Navbar";
import Hero from "../components/Hero";
import ServiceImg from '../assets/bee7.jpg'

function Service() {
	return (
		<>
			<NavbarView />
			<Hero
				cName='hero-mid'
				heroImg={ServiceImg}
				title="Services"
				//text='Hiving a sweet-life, one flower at a time.'
				//buttonText='Learn More'
				//url='/'
				btnClass='hide'
			/>
		</>
	)
}

export default Service;
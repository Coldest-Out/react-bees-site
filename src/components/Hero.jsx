import './HeroStyles.css';

function Hero(props) {
	return (
		<>
			<div className={props.cName}>
				<img width='100px' height='100px'
					src={props.heroImg}></img>
				<h1>Join the movement to save bumble bees and become a HiveHero today!</h1>
				<p>"Hiving a sweet-life, one flower at a time."</p>
				<p>"Make the most out of every buzz-zing moment."</p>
				<p>"Bee-lieve in the power of pollen."</p>
				<a href='/'>
					Learn More
				</a>
			</div>
		</>
	)
}

export default Hero;
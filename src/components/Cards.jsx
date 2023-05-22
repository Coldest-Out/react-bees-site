import "./CardsStyles.css";
import CardsData from "./CardsData";
import CardImage1 from "../assets/bee6.jpg";
import CardImage2 from "../assets/honey3.jpg";
import CardImage3 from "../assets/bee4.jpg";

function Cards() {
	return (
		<div className="cards">
			<h1>Lorem.1</h1>
			<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis ducimus quidem ad beatae, omnis fugiat impedit nostrum tenetur quasi repellat tempore minus voluptatem quam hic sequi ratione dignissimos aut non!</p>
			<div className="card-card">

				<CardsData
					image={CardImage1}
					heading="Psuedo Heading"
					text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
					tempor incididunt ut labore et dolore magna aliqua. Mattis ullamcorper velit 
					sed ullamcorper. Est ante in nibh mauris. Arcu odio ut sem nulla pharetra diam sit. 
					Pretium viverra suspendisse potenti nullam. Purus non enim praesent elementum facilisis 
					leo."
				/>

				<CardsData
					image={CardImage2}
					heading="Psuedo Heading"
					text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
					sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
					Mattis ullamcorper velit sed ullamcorper. Est ante in nibh mauris. 
					Arcu odio ut sem nulla pharetra diam sit. Pretium viverra suspendisse 
					potenti nullam. Purus non enim praesent elementum facilisis leo."
				/>

				<CardsData
					image={CardImage3}
					heading="Psuedo Heading"
					text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
					sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
					Mattis ullamcorper velit sed ullamcorper. Est ante in nibh mauris. 
					Arcu odio ut sem nulla pharetra diam sit. Pretium viverra suspendisse 
					potenti nullam. Purus non enim praesent elementum facilisis leo."
				/>

			</div>
		</div>
	)
}

export default Cards;
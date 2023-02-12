import Bumblebee1 from "../assets/bee1.jpg";
import Bumblebee2 from "../assets/bee3.jpg";
import Bumblebee3 from "../assets/bee9.jpg";
import Bumblebee4 from "../assets/bee10.jpg";
import "./InfoStyles.css";

const Info = () => {
	return (
		<div className="Info">
			<h1>The Power of Bumblebees</h1>
			<p>"Bee-lieve in the power of pollen."</p>

			<div className="first-info">
				<div className="des-text">
					<h2>The Power of Pollen</h2>
					<p>Bumblebees are essential pollinators that play a vital role in the ecosystem. They are known for their fuzzy, black-and-yellow bodies and their ability to pollinate a wide variety of plants, including many important crops such as tomatoes, blueberries, and apples. However, bumblebee populations have been declining in recent years due to a combination of factors, including habitat loss, pesticide use, and climate change.</p>
				</div>

				<div className="image">
					<img alt="img" src={Bumblebee3}></img>
					<img alt="img" src={Bumblebee4}></img>
				</div>
			</div>
		</div>
	);
}

export default Info;
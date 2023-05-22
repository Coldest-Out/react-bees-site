import Bumblebee1 from "../assets/bee1.jpg";
import Bumblebee2 from "../assets/bee3.jpg";
import Bumblebee3 from "../assets/bee9.jpg";
import Bumblebee4 from "../assets/bee10.jpg";
import InfoData from "./InfoData";
import "./InfoStyles.css";

const Info = () => {
	return (
		<div className="Info">
			<h1>The Power of Bumblebees</h1>
			<p>"Bee-lieve in the power of pollen."</p>

			< InfoData
				className="first-info"
				heading="The Power of Pollen"
				text="Bumblebees are essential pollinators that play a vital role in the ecosystem. 
				They are known for their fuzzy, black-and-yellow bodies and their ability to pollinate 
				a wide variety of plants, including many important crops such as tomatoes, blueberries, 
				and apples. However, bumblebee populations have been declining in recent years due to a 
				combination of factors, including habitat loss, pesticide use, and climate change."
				img1={Bumblebee3}
				img2={Bumblebee4}
			/>

			< InfoData
				className="first-info-reverse"
				heading="Bumblebees bring Balance"
				text="Protection and conservation of bumblebees is crucial for maintaining the health of 
				our ecosystems and preserving our food supply. Bumblebees are not only important for the 
				pollination of wildflowers, but they are also key pollinators of many important crops. 
				Without them, our food supply would be greatly impacted. In addition, bumblebees play a 
				crucial role in maintaining the biodiversity of ecosystems by pollinating a wide variety 
				of plant species."
				img1={Bumblebee1}
				img2={Bumblebee2}
			/>
		</div>
	);
}

export default Info;
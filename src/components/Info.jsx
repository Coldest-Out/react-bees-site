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

			< InfoData />
		</div>
	);
}

export default Info;
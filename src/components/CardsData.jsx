import "./CardsStyles.css";
//import CardImage from "../assets/bee6.jpg";

function CardsData(props) {
	return (
		<div className="card-table">
			<div className="c-img">
				<img src={props.image} alt="image" />
			</div>

			<h4>{props.heading}</h4>
			<p>{props.text}</p>
		</div>
	);
}

export default CardsData;
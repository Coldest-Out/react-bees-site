import "./ContactFormStyles.css";

function ContactForm() {
	return (
		<div className="form-container">
			<h1>Send us a BuzzMail!</h1>
			<form action="">
				<input placeholder="Name" type="text" />
				<input placeholder="Email" type="email" />
				<input placeholder="Subject" type="text" />
				<textarea placeholder="Message" id="" rows="4"></textarea>
				<button>Send Message</button>
			</form>
		</div>
	);
}

export default ContactForm;
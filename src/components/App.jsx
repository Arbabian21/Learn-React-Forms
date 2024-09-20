import React, { useState } from "react";

function App() {
	const [inputText, setInputText] = useState();
	const [headingText, setHeadingText] = useState("");

	function handleChange(event) {
		setInputText(event.target.value);
	}

	function handleSubmit(event) {
		setHeadingText(inputText);

		event.preventDefault();
	}

	return (
		<div className="container">
			<h1>Hello {headingText}</h1>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					placeholder="What's your name?"
					onChange={handleChange}
					value={inputText}
				/>
				<button type="submit">Submit</button>
			</form>
		</div>
	);
}

export default App;

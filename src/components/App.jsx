import React, { useState } from "react";

function App() {
	const [inputText, setInputText] = useState();
	const [isSubmitted, setIsSubmitted] = useState(false);

	function handleChange(event) {
		setInputText(event.target.value);
	}

	function handleSubmit() {
		setIsSubmitted(true);
	}

	return (
		<div className="container">
			<h1>Hello {isSubmitted && inputText}</h1>
			<input
				type="text"
				placeholder="What's your name?"
				onChange={handleChange}
				value={inputText}
			/>
			<button onClick={handleSubmit}>Submit</button>
		</div>
	);
}

export default App;

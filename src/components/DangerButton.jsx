import React, { Component } from "react";
import Button from "./Button/Button"; // Import a component from another file

class DangerButton extends Component {
	render() {
		return <Button color="red" />;
	}
}

export default DangerButton;

import React, { Component } from "react";

import Signin from "../sign-in/Signin";
import Signup from "../sign-up/Signup";

import "./form-styles.scss";

export default class Form extends Component {
	render() {
		return (
			<div className="Form m-auto h-75 text-light row ">
				<Signin />
				<Signup />
			</div>
		);
	}
}

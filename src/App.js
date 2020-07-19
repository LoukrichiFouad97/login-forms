import React, { Component } from "react";

import Form from "./components/form/form";
import { auth } from "./db/firebase";

import "./App.css";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			user: {},
		};
	}

	componentDidMount() {
		this.authListener();
		console.log(this.state.user);
	}

	authListener = () => {
		auth.onAuthStateChanged((user) => {
			if (user) {
				this.setState({ user: user });
			} else {
				this.setState({ user: null });
			}
		});
	};

	signOut = () => {
		auth.signOut();
	};

	render() {
		return (
			<div className="App">
				{this.state.user ? (
					<button className="sign-in" onClick={this.signOut}>
						Sign-in
					</button>
				) : (
					<Form />
				)}
			</div>
		);
	}
}

export default App;

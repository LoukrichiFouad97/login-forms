import React, { Component } from "react";

import {
	auth,
	signInWithGoogle,
	signInWithTwitter,
	singInWithFacebook,
} from "../../db/firebase";

export default class Signin extends Component {
	constructor(props) {
		super(props);
		this.state = { email: "", password: "" };
	}

	handleChange = (e) => {
		const { name, value } = e.target;
		this.setState({ [name]: value });
		console.log(this.state);
	};

	handleSubmit = async (e) => {
		e.preventDefault();
		const { email, password } = this.state;

		auth
			.signInWithEmailAndPassword(email, password)
			.then((u) => console.log(u.user))
			.catch((err) => console.log(err));
		this.setState({ email: "", password: "" });
	};

	render() {
		return (
			<div className="col-md-6 col   p-2 d-flex flex-column justify-content-center align-items-center">
				<form className="w-75" onSubmit={this.handleSubmit}>
					<h1 className="mb-4">Sign-in</h1>
					<div className="form-group">
						<label htmlFor="email">Email address</label>
						<input
							type="email"
							name="email"
							value={this.state.email}
							className="form-control"
							id="email"
							placeholder="Enter email"
							onChange={this.handleChange}
						/>
					</div>
					<div className="form-group">
						<label htmlFor="password">Password</label>
						<input
							type="password"
							name="password"
							value={this.state.password}
							className="form-control"
							id="password"
							placeholder="Password"
							onChange={this.handleChange}
						/>
					</div>
					<button type="submit" className="btn btn-danger w-50">
						Sign-in
					</button>
				</form>
				<div className="my-3">Or</div>
				<div className="buttons d-flex flex-column w-75">
					<button
						className="btn btn-primary mb-1"
						style={{ background: "#DB4437" }}
						onClick={signInWithGoogle}
					>
						<i className="fab fa-google mr-2"></i>
						Google
					</button>
					<button
						className="btn btn-primary mb-1"
						style={{ background: "#3b5998" }}
						onClick={singInWithFacebook}
					>
						<i className="fab fa-facebook mr-2"></i>
						Facebook
					</button>
					<button
						className="btn btn-primary mb-1"
						style={{ background: "#00acee" }}
						onClick={signInWithTwitter}
					>
						<i className="fab fa-twitter mr-2"></i>
						Twitter
					</button>
				</div>
			</div>
		);
	}
}

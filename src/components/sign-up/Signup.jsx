import React, { Component } from "react";
import { auth } from "../../db/firebase";

export default class Signup extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: "",
			password: "",
			confirmPassword: "",
		};
	}

	handleChange = (e) => {
		e.preventDefault();
		const { name, value } = e.target;
		this.setState({ [name]: value });
	};

	handleSubmit = (e) => {
		e.preventDefault();

		const { email, password, confirmPassword } = this.state;

		if (password !== confirmPassword) {
			alert("Passwords doesn't match. Please Enter the same password");
			return;
		}

		auth
			.createUserWithEmailAndPassword(email, password)
			.then((res) => console.log(res))
			.catch((err) => {
				console.log(err);
			});

		this.setState({ email: "", password: "", confirmPassword: "" });
	};

	render() {
		const { email, password, confirmPassword } = this.state;

		return (
			<div className="col-md-6 col p-2 d-flex flex-column justify-content-center align-items-center">
				<form className="w-75" onSubmit={this.handleSubmit}>
					<h1 className="mb-4">Sign-up</h1>

					<div className="form-group">
						<label htmlFor="email">Email address</label>
						<input
							type="email"
							name="email"
							value={email}
							onChange={this.handleChange}
							className="form-control"
							id="email"
							placeholder="Enter email"
							required
						/>
					</div>

					<div className="form-group">
						<label htmlFor="password">Password</label>
						<input
							type="password"
							name="password"
							value={password}
							onChange={this.handleChange}
							className="form-control"
							id="password"
							placeholder="Password"
							required
						/>
					</div>

					<div className="form-group">
						<label htmlFor="confirmPassword">Confirm Password</label>
						<input
							type="password"
							name="confirmPassword"
							value={confirmPassword}
							onChange={this.handleChange}
							className="form-control"
							id="confirmPassword"
							placeholder="Password"
							required
						/>
					</div>
					<button type="submit" className="btn btn-danger w-50">
						Sign-up
					</button>
				</form>
			</div>
		);
	}
}

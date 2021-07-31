import React from 'react';

class Register extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
			name: ''
		}
	}

	onNameChange = (event) => {
		this.setState({ name: event.target.value })
	}

	onEmailChange = (event) => {
		this.setState({ email: event.target.value })
	}

	onPasswordChange = (event) => {
		this.setState({ password: event.target.value })
	}

	onSubmitSignIn = () => {
		let flag = false;
		fetch('https://mighty-everglades-07960.herokuapp.com/register', {
			method: 'post',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				email: this.state.email,
				password: this.state.password,
				name: this.state.name
			})
		})
			.then(response => response.json())
			.then(user => {
				if (user.id) {
					this.props.loadUser(user);
					this.props.onRouteChange('signin');
					alert("Registered Successfully");
					flag = true;
				}
				if(flag===false){
					alert("Registeration failed! Please try again!");
				}
			})

	}
	
	render() {
		return (
			<article id="form" className="br2 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
				<main className="pa4 white-80">
					<div className="measure">
						<fieldset className="ba b--transparent ph0 mh0">
							<legend className="f2 fw6 ph0 mh0">Register</legend>
							<div className="mt3">
								<label className="db fw6 lh-copy f5" htmlFor="name">Name</label>
								<input 
									className="pa2 input-reset ba bg-transparent white-80 hover-bg-dark-gray w-100" 
									type="text" 
									name="name"
									onChange={this.onNameChange}
								/>
							</div>
							<div className="mt3">
								<label className="db fw6 lh-copy f5" htmlFor="email-address">Email</label>
								<input 
									className="pa2 input-reset ba bg-transparent white-80 hover-bg-dark-gray w-100" 
									type="email" 
									name="email-address"
									onChange={this.onEmailChange}
								/>
							</div>
							<div className="mv3">
								<label className="db fw6 lh-copy f5" htmlFor="password">Password</label>
								<input 
									className="b pa2 input-reset ba bg-transparent white-80 hover-bg-dark-gray w-100" 
									type="password" 
									name="password"
									onChange={this.onPasswordChange}
								/>
							</div>
						</fieldset>
						<div className="">
							<input
								onClick={this.onSubmitSignIn}
								className="b ph3 pv2 input-reset ba bg-transparent white grow pointer f6 dib"
								type="submit"
								value="Register"
							/>
						</div>
					</div>
				</main>
			</article>
		);
	}

}

export default Register;
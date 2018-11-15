import React, { Component } from 'react';

import './styles.scss';

class ConfirmEmail extends Component {
	constructor(props) {
		super(props)

		try {
			this.user = props.location.state.user;
		} catch {
			this.user = null;
		}

		if (!this.user) {
			this.props.history.push('/');
		}
	}

	render() {
		return (
			<div className="container flex flex-column p-5 page-confrim-email">
				<h1 className="text-center pb-4">Email Verification Needed</h1>

				<h4 className="text-center pt-4 mb-5">
					We sent an email at <b><em>{(this.user) ? this.user.email : null}</em></b> to verify your account.<br />
					Didn't receive any email? Try checking your spam folder or send yourself another<br />
					verification email.<br /><br />
					If the above email is not the right one, you may change it <a href="" target="__blank"><em>here</em></a>
				</h4>

				<button type="button" className="col-6 btn btn-primary btn-block btn-lg mx-auto py-4">I've confirmed my email</button>

				<b className="col-4 d-block mx-auto my-5 text-center"><a className="resend-v-email" href="" target="__blank"><em>Resend verification email</em></a></b>
			</div>
		);
	}
}

export default ConfirmEmail;
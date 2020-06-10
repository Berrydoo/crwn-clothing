import React from "react";

import "./signIn.styles.scss";

import FormInput from "../../components/form-input/form-input.component";

export default class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState({ email: "", password: "" });
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    render() {
        return (
            <div className="signIn">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <FormInput
                        label="email"
                        name="email"
                        type="email"
                        value={this.state.email}
                        required
                        handleChange={this.handleChange.bind(this)}
                    />
                    <FormInput
                        label="password"
                        name="password"
                        type="password"
                        value={this.state.password}
                        required
                        onChange={this.handleChange.bind(this)}
                    />
                    <input type="submit" value="Submit Form" />
                </form>
            </div>
        );
    }
}

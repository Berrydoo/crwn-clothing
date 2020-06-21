import React from "react";

import "./signIn.styles.scss";

import { signInWithGoogle } from "../../firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

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
                    <div className="buttons">
                        <CustomButton type="submit">Submit</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                            Sign in with Google
                        </CustomButton>
                    </div>
                </form>
            </div>
        );
    }
}

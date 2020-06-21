import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

import Header from "./components/header/header.component";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shoppage/shoppage.component";
import SignInSignUpPage from "./pages/signInSignUp/signInSignUpPage.component";
import { auth } from "./firebase/firebase.utils";

class App extends React.Component {
    unsubscribeFromAuth = null;

    constructor() {
        super();
        this.state = {
            currentUser: null,
        };
    }

    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
            this.setState({ currentUser: user });
        });
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render() {
        return (
            <div>
                <Header currentUser={this.state.currentUser} />
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/shop" component={ShopPage} />
                    <Route exact path="/signIn" component={SignInSignUpPage} />
                </Switch>
            </div>
        );
    }
}

export default App;

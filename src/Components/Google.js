import React, { Component, Fragment } from 'react';
import GoogleLogin from 'react-google-login';
import './css/maing.css';

const CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENTID;

export default class Google extends Component {

    state = {
        isLoggedIn: false,
        userId: '',
        name: '',
        email: '',
        hasError: false,
        errorMessage: ''
    }

    componetClicked = () =>  {}

    responseGoogle = response => {
        if(response.error) {
            this.setState({ hasError: true, errorMessage: response.error.message});            
        }
        else {
            if(response.status !== "unknown") {
                this.setState( {
                    isLoggedIn: true,
                    userId: response.userId,
                    name: response.name,
                    email: response.email,
                })
            }
        }  
    }

    componentDidCatch(error, info) {        
        this.setState({ hasError: true, errorMessage: "Something went wrong." });
        // error logging
        console.log(error);
    }

    handleError(e) {
        // check different e.status to handle errors

        if(e && e.status !== "unknown") {
            this.setState({ hasError: true, errorMessage: "Error connecting to Google" });  
        }              
    }

    render() {
        let googleContent;

        if (this.state.hasError) {
            // You can render any custom fallback UI
            return <h4>{this.state.errorMessage}</h4>;
        }
        
        if(this.state.isLoggedIn){
            googleContent = (
                <div className="google-content">
                    <h4>Welcome {this.state.name}</h4>
                    <p>Email: {this.state.email}</p>
                </div>
            );
        } else {
            googleContent = (
                <GoogleLogin 
                clientId={CLIENT_ID}
                onSuccess={this.responseGoogle }
				onFailure={this.handleError }
				cookiePolicy={ 'single_host_origin' }
				responseType='code,token'
                ></GoogleLogin>

                //scope="user_posts" 
            );
        }

        return (
            <Fragment>
                {googleContent}
            </Fragment>
        )
    }
}

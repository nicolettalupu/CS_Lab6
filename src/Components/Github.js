import React from 'react';
import GithubLogin from 'react-github-login';

const CLIENT_ID = process.env.REACT_APP_GITUB_CLIENTID;

function handleLoginFailure(response) {
    alert('Failed to log in')
}
export const  Github  = ({ displayData }) => {
    const login = (response) => {
        displayData(response);
    }

    return (
        <div>
            <GithubLogin
                clientId={CLIENT_ID}
                onSuccess={ login }
                onFailure={ handleLoginFailure }
                cookiePolicy={ 'single_host_origin' }
                responseType='code,token'
            />
        </div>
    )
}
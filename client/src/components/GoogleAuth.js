import React from 'react';

class GoogleAuth extends React.Component {
    componentDidMount () {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '508808759831-2flde0ng2o67ctv3m6m4no7a6nbjpudm.apps.googleusercontent.com',
                scope: 'email'
            });
        });
    }
    
    render () {
        return <div>Google Auth</div>;
    }
}

export default GoogleAuth;
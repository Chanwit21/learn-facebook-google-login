import React from 'react';
import { GoogleLogin } from 'react-google-login';

function Test1() {
  const responseGoogle = (response) => {
    console.log(response);
  };

  return (
    <div>
      <GoogleLogin
        clientId='684198466107-poqu69vu8e9vaorbal2v969qghe3cc5v.apps.googleusercontent.com'
        buttonText='Login'
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
      />
    </div>
  );
}

export default Test1;

import React from 'react';
import FacebookLogin from 'react-facebook-login';

function TestReactFacebookLogin() {
  const responseFacebook = (response) => {
    console.log(response);
  };
  return (
    <div>
      <FacebookLogin appId='375623747555872' autoLoad={true} fields='name,email,picture' callback={responseFacebook} />
    </div>
  );
}

export default TestReactFacebookLogin;

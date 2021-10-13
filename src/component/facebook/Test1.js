import React from 'react';
import { FacebookProvider, Login } from 'react-facebook';
import { useState } from 'react';

function Test1() {
  const [error, setError] = useState('');
  console.log(error);
  const handleResponse = (data) => {
    console.log(data);
  };
  const handleError = (error) => {
    setError(error);
  };

  return (
    <div>
      <FacebookProvider appId='375623747555872'>
        <Login onCompleted={handleResponse} onError={handleError}>
          {({ loading, handleClick, error, data }) => (
            <span onClick={handleClick}>
              Login via Facebook
              {loading && <span>Loading...</span>}
            </span>
          )}
        </Login>
      </FacebookProvider>
    </div>
  );
}

export default Test1;

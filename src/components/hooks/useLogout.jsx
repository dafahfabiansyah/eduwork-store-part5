import React from 'react';
import { GoogleLogin } from 'react-google-login';
const clientID = '62931102438-6u0inouulvu673sbrlnpghfirjd0vi0f.apps.googleusercontent.com';

const useLogout = () => {
  const onSuccess = () => {
    console.log('Logout Success');
  };
  return (
    <div>
      <GoogleLogin clientId={clientID} buttonText="Logout" onSuccess={onSuccess} cookiePolicy={'single_host_origin'} isSignedIn={true} />
    </div>
  );
};

export default useLogout;

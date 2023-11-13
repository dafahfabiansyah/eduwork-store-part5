import { useGoogleLogin as googleLogin } from 'react-google-login';

const useGoogleLogin = () => {
  const clientId = '62931102438-6u0inouulvu673sbrlnpghfirjd0vi0f.apps.googleusercontent.com'; // Replace with your Google API Client ID
  const { signIn } = googleLogin({
    onSuccess: (response) => {
      // Handle successful Google login
      console.log('Google login success', response);
    },
    onFailure: (error) => {
      // Handle Google login failure
      console.error('Google login failure', error);
    },
    clientId,
    isSignedIn: true, // Force prompt to select Google account
  });

  return { signIn };
};

export default useGoogleLogin;

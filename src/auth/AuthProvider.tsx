import { PropsWithChildren } from 'react';
import { Auth0Provider } from '@auth0/auth0-react';
import appConfig from '../config/appConfig';
import { useNavigate } from 'react-router-dom';


const AuthProvider = (props: PropsWithChildren<{}>) => {
  const navigate = useNavigate()
    const onRedirectCallback = (appState: any) => {
        navigate(appState?.returnTo || `/code-editor`)
    }

  return (
    <Auth0Provider
      domain={appConfig.auth0Domain}
      clientId={appConfig.auth0ClientId}
      redirectUri={window.location.origin}
      onRedirectCallback={onRedirectCallback}
    >
      {props.children}
    </Auth0Provider>
  );
};

export default AuthProvider;

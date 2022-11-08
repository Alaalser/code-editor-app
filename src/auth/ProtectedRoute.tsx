import { withAuthenticationRequired } from '@auth0/auth0-react';
import{  PropsWithChildren } from 'react';
import Loading from '../components/common/loading/Loading';

const ProtectedRoute = ({ component }: PropsWithChildren<{ [key: string]: any }>) => {
  const MyProtectedComponent = withAuthenticationRequired(component, {
    onRedirecting: () => <Loading />,
  });
  return <MyProtectedComponent  />;
};

export default ProtectedRoute;

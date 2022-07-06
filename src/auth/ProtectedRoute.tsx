import { withAuthenticationRequired } from '@auth0/auth0-react';
import{ ComponentType, PropsWithChildren } from 'react';
import Loading from '../components/common/loading/Loading';

const ProtectedRoute = (props: PropsWithChildren<{ [key: string]: any }>) => {
  const { children, ...args } = props;
  const MyProtectedComponent = withAuthenticationRequired(children as unknown as ComponentType, {
    onRedirecting: () => <Loading />,
  });
  return <MyProtectedComponent {...args} />;
};

export default ProtectedRoute;

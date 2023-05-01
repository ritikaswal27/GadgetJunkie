import React, { useContext } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const UserContext = React.createContext();

export const UserProvider = ({ children }) => {
  const { loginWithRedirect, isLoading, logout, user } = useAuth0();

  // const [myUser, setMyUser] = useState(null);

  // useEffect(() => {
  //   setMyUser(user);
  // }, [user]);

  /*
useEffect(() => {
  if (isAuthenticated) {
    setMyUser(user);
  } else {
    setMyUser(false);
  }
}, [isAuthenticated, isLoading, user]);
*/

  return (
    <UserContext.Provider
      value={{ loginWithRedirect, logout, myUser: user, isLoading }}
    >
      {children}
    </UserContext.Provider>
  );
};
// make sure use
export const useUserContext = () => {
  return useContext(UserContext);
};

import { useContext, useState, useEffect, createContext } from "react";
import { account } from "../appwriteConfig";
import { ID } from "appwrite";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [userAuth, setUserAuth] = useState(null);

  useEffect(() => {
    checkUserStatus();
  }, []);

  const loginUser = async (userInfo) => {
    setLoading(true);
    try {
      let response = await account.createEmailPasswordSession(
        userInfo.email,
        userInfo.password
      );
      console.log(response);
      let accountDetails = await account.get();
      setUserAuth(accountDetails);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  const logoutUser = () => {
    account.deleteSession("current");
    setUserAuth(null);
  };

  const registerUser = async (userInfo) => {
    setLoading(true);
    try {
      let response = await account.create(
        ID.unique(),
        userInfo.email,
        userInfo.password
      );

      let response1 = await account.createEmailPasswordSession(
        userInfo.email,
        userInfo.password
      );
      console.log(response);
      let accountDetails = await account.get();
      setUserAuth(accountDetails);
    } catch (error) {
      console.log(error);
    }

    setLoading(false);
  };

  const checkUserStatus = async () => {
    try {
      let accountDetails = await account.get();
      setUserAuth(account);
    } catch (error) {}
    setLoading(false);
  };

  const contextData = {
    userAuth,
    loginUser,
    logoutUser,
    registerUser,
    loginUser,
  };
  return (
    <AuthContext.Provider value={contextData}>
      {loading ? <p>Loading...</p> : children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthContext;

import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";

import AppNavigator from "./app/Navigation/AppNavigation";
import UserContext from "./app/Context/UserContext";

export default function App() {
  const [currentUser, setCurrentUser] = useState({});
  return (
    <UserContext.Provider value={{currentUser, setCurrentUser}}>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </UserContext.Provider>
  );
}

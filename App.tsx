import React from 'react';
import AppWrapper from './AppWrapper';
import { NavigationContainer } from '@react-navigation/native';
//import { store } from "./src/redux/store";

function App(): JSX.Element {
  return (
    //<Provider store={store}>
      <NavigationContainer>
        <AppWrapper />
      </NavigationContainer>
    //</Provider>
  );
}

export default App;

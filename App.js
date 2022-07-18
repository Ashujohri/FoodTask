import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
// import Header from './src/Components/screens/header';
import RootNavigator from './src/Components/RootNavigator';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import RootReducer from './src/redux/RootReducer';

const store = createStore(RootReducer);

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        {/* <Header /> */}
        <RootNavigator />
      </NavigationContainer>
    </Provider>
  );
};

export default App;

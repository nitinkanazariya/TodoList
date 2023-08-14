import {LogBox} from 'react-native';
import React from 'react';
import StackScreen from './Src/Navigation/Stack/Stack';
LogBox.ignoreAllLogs();

const App = () => {
  return <StackScreen />;
};

export default App;

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { StatusBar } from 'react-native'
import React from 'react'
import AppNavigator from './src/navigation/AppNavigator'
import { PaperProvider } from 'react-native-paper'
import { SafeAreaProvider } from 'react-native-safe-area-context';

const App = () => {

  return (
    <PaperProvider>
      <SafeAreaProvider>
        <StatusBar
          animated={true}
          backgroundColor="#DDEDF3"
          barStyle={'dark-content'}
        />
        <AppNavigator />
      </SafeAreaProvider>
    </PaperProvider>
  )
}

export default App
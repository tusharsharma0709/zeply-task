import React, {useState, useEffect} from 'react'
import { createNativeStackNavigator} from '@react-navigation/native-stack'
import { StatusBar } from 'expo-status-bar';
import Dashboard from './Components/Dashboard/Dashboard';
import Address from './Components/Address/AdressSearch'
import Btcunspent from './Components/Address/BtcUnspent';
import Addressbalance from './Components/Address/AddressBalance';
import Output from './Components/Transaction/Output'
import * as LocalAuthentication from 'expo-local-authentication'
import { BackHandler } from 'react-native';
import ConfirmTrans from './Components/Address/ConfirmTransaction'



const Stack= createNativeStackNavigator()

export default function App() {
  const [isBiometricSupported, setIsBiometricSupported]= useState(false);
  const [isAuthenticated, setIsAuthenticated]= useState(false);


  function onAuthenticate(){
    const auth = LocalAuthentication.authenticateAsync({
      promptMessage: 'Authenticated with Touch ID',
      fallbackLabel: 'Enter Password',
    });
   
      console.log(result);

  }

  return (
    <NavigationContainer>
      <StatusBar style="light" />

      <Stack.Navigator
          initialRouteName={isAuthenticated==true?'dashboard':onAuthenticate()}
          screenOptions={{
            headerShown: false
          }}>
            
            {/* dashboard*/}
                <Stack.Screen
                  name="dashboard"
                  component={Dashboard}
                  options={{headerShown: false}}
                />
               
            {/* Address Screen */}
                <Stack.Screen
                  name="address"
                  component={Address}
                  options={{headerShown: true, title: 'Address Search',headerStyle: {backgroundColor: '#0A0F14'},headerTintColor: '#fff',headerTitleAlign:"center"}}
                />

         

            {/* Transaction Detail Screen */}
                <Stack.Screen
                  name="confirmtransaction"
                  component={ConfirmTrans}
                  options={{headerShown: true, title: 'Confirmed Transactions',headerStyle: {backgroundColor: '#0A0F14'},headerTintColor: '#fff',headerTitleAlign:"center"}}
                />


            

            {/* Total BTC Unspent Screen */}
               <Stack.Screen
                name="btcunspent"
                component={Btcunspent}
                options={{headerShown: true, title: 'Total BTC Unspent',headerStyle: {backgroundColor: '#0A0F14'},headerTintColor: '#fff',headerTitleAlign:"center"}}
              />

            {/* Current Address Balance Screen */}
               <Stack.Screen
                name="addressbalance"
                component={Addressbalance}
                options={{headerShown: true, title: 'Current Address Balance',headerStyle: {backgroundColor: '#0A0F14'},headerTintColor: '#fff',headerTitleAlign:"center"}}
              />

             

              {/* Total Output Screen */}
              <Stack.Screen
                name="output"
                component={Output}
                options={{headerShown: true, title: 'Total BTC Output',headerStyle: {backgroundColor: '#0A0F14'},headerTintColor: '#fff',headerTitleAlign:"center"}}
              />

      </Stack.Navigator>

    </NavigationContainer>
    
  );
}


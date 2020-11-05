//https://reactnavigation.org/docs/getting-started/
import 'react-native-gesture-handler';

import React from 'react';
import { AppRegistry, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { AppComposite } from 'simicart';
import { ProductList } from 'simicart';

import { name as appName } from './app.json';

import App from './src/App';
import AppStateDisplay from './src/test_component/appStateDisplay.js';
import CatalogStateDisplay from './src/test_component/catalogStateDisplay.js';
import CartStateDisplay from './src/test_component/cartStateDisplay';
import UserStateDisplay from './src/test_component/userStateDisplay.js';
import CheckoutStateDisplay from './src/test_component/checkoutStateDisplay.js';
import { CategoryPage } from 'simicart';
import CustomStateDisplay from './src/test_component/customStateDisplay';
import counterSlice from './src/customReducer/counterSlice';

const Drawer = createDrawerNavigator();

function Index() {
  return (
    <NavigationContainer>
      <AppComposite customReducer={counterSlice}>
        <Drawer.Navigator>
          <Drawer.Screen name={'Moving product'} component={ProductList} />
          <Drawer.Screen name={'Custom'} component={CustomStateDisplay} />
          <Drawer.Screen name={'DemoCategory'} component={CategoryPage} />
          <Drawer.Screen name={'Cart'} component={CartStateDisplay} />
          <Drawer.Screen name={'App'} component={AppStateDisplay} />
          <Drawer.Screen name={'Catalog'} component={CatalogStateDisplay} />
          <Drawer.Screen name={'User'} component={UserStateDisplay} />
          <Drawer.Screen name={'Checkout'} component={CheckoutStateDisplay} />
        </Drawer.Navigator>
      </AppComposite>
    </NavigationContainer>
  );
}

AppRegistry.registerComponent(appName, () => Index);

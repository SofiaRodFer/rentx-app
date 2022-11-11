import React from 'react';

import { NavigationContainer } from '@react-navigation/native'
import { useAuth } from '../hooks/auth';

import { AppTabRoutes } from './app.tab.routes';
import { AuthRoutes } from './auth.routes';
import { Home } from '../screens/Home';

export function Routes() {
  const { user } = useAuth()

  return (
    <NavigationContainer>
      <Home />
      {/* {user ? <AppTabRoutes /> : <AuthRoutes />} */}
    </NavigationContainer>
  );
}
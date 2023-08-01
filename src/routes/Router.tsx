import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';

// Routes
import {AppStack} from './AppStack';
import {AuthStack} from './AuthStack';
import Loading from '../components/Loading';

export const Router = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      setIsLoggedIn(true);
    }, 4000);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <NavigationContainer>
      {/* {isLoggedIn ? <AppStack /> : <AuthStack />} */}
      <AuthStack />
    </NavigationContainer>
  );
};

import {BottomTab} from './src/navigation/BottomTabBar';
import React, {useEffect, useState} from 'react';

const AppWrapper = () => {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    /*
      The Splash Screen will be dislpayed until the mobile configs are loaded.
    */
    async function prepare() {
      setTimeout(() => setAppIsReady(true), 1000);
    }

    prepare();
  }, []);

  if (!appIsReady) {
    return <></>;
  }

  return (
    <>
      <BottomTab />
    </>
  );
};

export default AppWrapper;

"use client";

import { ReactNode, useEffect, useState } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store from "./index"; 
import {Persistor, persistStore} from "redux-persist";

const persistor: Persistor = persistStore(store);

interface ReduxProviderProps {
  children: ReactNode;
}

const ReduxProvider: React.FC<ReduxProviderProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true); // State to handle loading

  useEffect(() => {
      // Only render PersistGate when mounted in the client
      setIsLoading(false);
  }, []);

  return (
      <Provider store={store}>
          <PersistGate loading={isLoading} persistor={persistor}>
              {children}
          </PersistGate>
      </Provider>
  );
};

export default ReduxProvider;
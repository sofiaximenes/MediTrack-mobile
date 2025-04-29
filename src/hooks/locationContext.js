import React, { createContext, useContext } from 'react';
import useUserLocation from './useUserLocation';

const LocationContext = createContext();

export const LocationProvider = ({ children }) => {
  const { location, loading, errorMsg } = useUserLocation();

  return (
    <LocationContext.Provider value={{ location, loading, errorMsg }}>
      {children}
    </LocationContext.Provider>
  );
};

export const useLocation = () => useContext(LocationContext);

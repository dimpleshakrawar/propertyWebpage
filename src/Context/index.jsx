import { createContext, useContext, useState } from "react";

export const StoreContext = createContext();

const initialStore = {
  favData: [],
  propertyList: [],
};

export function StoreProvider({ children }) {
  const [store, setStore] = useState(initialStore);

  const setFavData = (payload) => {
    setStore((prevData) => ({
      ...prevData,
      favData: [payload, ...prevData.favData],
    }));
  };
  const setDeletedData = (payload) => {
    setStore((prevData) => ({
      ...prevData,
      favData: [payload],
    }));
  };

  const setPropertyList = (payload) => {
    setStore((prevData) => ({
      ...prevData,
      propertyList: [...payload],
    }));
  };
  const value = { store, setFavData, setDeletedData, setPropertyList };

  return (
    <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
  );
}

export function useStore() {
  return useContext(StoreContext);
}

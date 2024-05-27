import React, { createContext, useContext, useState, ReactNode } from "react";

export interface User {
  userName: string;
}

export interface Product {
  imagePath: string;
  title: string;
  price: number;
}

export interface GlobalContextType {
  isLogged: boolean;
  setIsLogged: React.Dispatch<React.SetStateAction<boolean>>;
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  loading: boolean;
  form: FormState;
  setForm: React.Dispatch<React.SetStateAction<FormState>>;
  cart: Product[];
  addToCart: (product: Product) => void;
}

export interface FormState {
  userName: string;
  password: string;
}

export interface GlobalProviderProps {
  children: ReactNode;
}

export const GlobalContext = createContext<GlobalContextType | undefined>(
  undefined
);

export const useGlobalContext = (): GlobalContextType => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error("useGlobalContext must be used within a GlobalProvider");
  }
  return context;
};

export const GlobalProvider: React.FC<GlobalProviderProps> = ({ children }) => {
  const [isLogged, setIsLogged] = useState<boolean>(false);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [form, setForm] = useState<FormState>({
    userName: "",
    password: "",
  });
  const [cart, setCart] = useState<Product[]>([]);
  const addToCart = (product: Product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const value = {
    isLogged,
    setIsLogged,
    user,
    setUser,
    loading,
    form,
    setForm,
    cart,
    addToCart,
  };

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};

export default GlobalProvider;

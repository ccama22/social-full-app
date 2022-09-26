import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "../firebaseConfig";
import { createContext, useContext, useEffect, useState } from "react";

//crear un proveedor y crear y devolver objetos
export const authContext = createContext();
export const useAuth = () => {
  const context = useContext(authContext);
  if (!context) throw new Error("There is not auth provider");
  return context;
};

export function AuthProvider({ children }) {
  // const user = {
  //   login: true,
  // };
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const signup = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password);
  const login = async (email, password) => {
    //devuelve un objeto de tipo credentials
    const userCredentials = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log(userCredentials);
  };
  const logout = () => signOut(auth);
  //retorna el usuario cada ves que cambia
  useEffect(() => {
    //cuando el usuario esta logueado me devuelve el objeto entero esta funcion y si no esta logueado devuelve null
    //
    //devuelve una funcion para poder cancelar la escucha
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  return (
    <authContext.Provider value={{ signup, login, user, logout, loading }}>
      {children}
    </authContext.Provider>
  );
}

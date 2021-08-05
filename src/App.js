import React, { useEffect } from "react";
import { useAuth } from "./contexts/AuthContext";
import Routes from "./Routes/Routes";



function App() {
  const {checkAuth} = useAuth()
  useEffect(() => {
    if(localStorage.getItem('token')){
      checkAuth()
    }
  }, [])

  return (
    <>
      <Routes />
    </>
  );
}

export default App;

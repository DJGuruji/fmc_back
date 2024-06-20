// App.js

import React, { useEffect } from 'react';
import HomeRouter from './Routes/HomeRouter';
// import AuthRouter from './Routes/AuthRouter';
// import AdminRouter from './Routes/AdminRouter';
// import useAuthStore from './useAuthStore';
import './App.css';

function App() {
  // const { isLogged, isAdmin, checkAuth } = useAuthStore();

  // useEffect(() => {
  //   checkAuth(); // Check if user is authenticated on component mount
  // }, [checkAuth]);

  return (
    <>
      {/* {isLogged ? (isAdmin ? <AdminRouter /> : <HomeRouter />) : <AuthRouter />} */}
      <HomeRouter></HomeRouter>
    </>
  );
}

export default App;

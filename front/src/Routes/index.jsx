import { Route, Routes as Routs } from "react-router";

import Login from "../Pages/Login";
import Cadastro from "../Pages/Cadastro";
import Dashboard from "../Pages/Dashboard";
import { Outlet, Navigate } from "react-router-dom";

const Routes = () => {
  const Auth = () => {
    const token = localStorage.getItem("tokenFullstack");
    return token ? <Dashboard /> : <Navigate to="/login" />;
  };

  return (
    <Routs>
      <Route path="/login" element={<Login />} />

      <Route element={<Auth />}>
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
      <Route path="/" element={<Cadastro />} />
    </Routs>
  );
};

export default Routes;

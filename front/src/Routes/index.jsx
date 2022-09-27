import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";

import Login from "../Pages/Login";
import Cadastro from "../Pages/Cadastro";
import Dashboard from "../Pages/Dashboard";

import { useContext, useState } from "react";

import { BodyContext } from "../Providers/Body";

const Routes = () => {
  const { authenticated, setAuthenthicated } = useContext(BodyContext);
  return (
    <>
      <BrowserRouter>
        {authenticated === false ? (
          <Route exact path="/login">
            <Login
              authenticated={authenticated}
              setAuthenthicated={setAuthenthicated}
            />
          </Route>
        ) : (
          <Route exact path="/dashboard">
            <Dashboard
              authenticated={authenticated}
              setAuthenthicated={setAuthenthicated}
            />
          </Route>
        )}

        <Route exact path="/">
          <Cadastro />
        </Route>
      </BrowserRouter>
    </>
  );
};

export default Routes;

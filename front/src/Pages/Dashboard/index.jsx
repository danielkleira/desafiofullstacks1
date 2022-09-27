import { Container } from "./style";
import { useState } from "react";
import * as React from "react";
import { BodyContext } from "../../Providers/Body";

import Header from "../../Components/Header";
import { useContext } from "react";
import Users from "../../Components/User";
import Contacts from "../../Components/Contact";

const Dashboard = () => {
  const { tab } = useContext(BodyContext);
  return (
    <Container>
      <Header />
      {tab === "usuarios" ? <Users/> : <Contacts/>}
    </Container>
  );
};

export default Dashboard;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import styled from "styled-components";
import { setAlert } from "../../redux/actions/alertAction";
import Button from "../../components/ui/Button";
import Card from "../../components/ui/Card";
import { Container } from "../../styles/shared/Container";
import Alert from "../../components/ui/Alert";
import { Description } from "../../styles/shared/Description";

import Menu from "../../components/ui/Menu";
import Select from "../../components/ui/Select";

import { AiOutlineUser, AiOutlineMail, AiOutlineLock } from "react-icons/ai";

import Form from "../../components/ui/Form";

const HomeContainer = styled.div`
  form > label > input,
  form > label > textarea {
    margin-bottom: 20px;
  }
`;

const Home = ({ setAlert }) => {
  const doSomething = (e) => {
    setAlert("Hello there", "success");
  };

  const handleChange = (value) => {
    console.log("Value for select: ", value);
  };

  return (
    <HomeContainer>
      <Container>
        <Menu style={{ height: "100px" }}>
          <Menu.Logo src="https://upload.wikimedia.org/wikipedia/commons/d/df/Img_logo_blue.jpg" />
          <Menu.ItemGroup>
            <Menu.Item to="/">Home</Menu.Item>
            <Menu.Item to="/about">About</Menu.Item>
            <Menu.Item to="/services">Service</Menu.Item>
          </Menu.ItemGroup>
        </Menu>
        <Button onClick={doSomething}>Alert</Button>
        <div style={{ width: 500, margin: "auto", marginTop: 20 }}></div>
      </Container>
      <Alert />
    </HomeContainer>
  );
};

export default connect(null, { setAlert })(Home);

{
  /* <Card>
            <Card.Image src="https://images.unsplash.com/photo-1598109503348-336dec2d39fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1045&q=80" />
            <Card.Title>Super Card</Card.Title>
            <Card.Body>This is a beautiful scenery</Card.Body>
            <Card.ButtonGroup>
              <Button color="grey">Cancel</Button>
              <Button color="primary">Confirm</Button>
            </Card.ButtonGroup>
          </Card> */
}

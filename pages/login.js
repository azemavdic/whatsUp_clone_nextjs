import { Button } from "@material-ui/core";
import Head from "next/head";
import styled from "styled-components";

const Login = () => {
  return (
    <Container>
      <Head>
        <title>Login</title>
      </Head>
      <LoginContainer>
        <Logo src='http://assets.stickpng.com/images/580b57fcd9996e24bc43c543.png' />
        <Button variant='outlined'>Prijavi sa sa Google računom</Button>
      </LoginContainer>
    </Container>
  );
};

export default Login;

const Container = styled.div``;

const LoginContainer = styled.div`
display: flex;
flex-direction: column;
`;

const Logo = styled.img`
height:200px;
width:200px;
margin-bottom: 50px;
`;

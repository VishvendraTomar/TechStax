import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Heading,
  Input,
  Text,
  VStack,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { Navigate } from "react-router-dom";

const LoginPage = () => {
  const initial = {
    email: "",
    password: "",
  };

  const [form, setForm] = useState(initial);
  const [isAuth, setToken] = useState(localStorage.getItem("token") || "");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.password.length === 0 || form.email.length === 0) {
      alert("Fill Your Login Form Properly!");
    } else {
      axios
        .post("https://good-pear-hippo-ring.cyclic.app/users/login", form)
        .then((res) => {
          alert(res.data.msg);
          localStorage.setItem("token", res.data.token);
          setToken(localStorage.getItem("token"));
        })
        .catch((error) => {
          alert("Login failed. Please check your credentials.");
        });

      setForm(initial);
    }
  };

  const { password, email } = form;

  if (isAuth) {
    return <Navigate to="/course" replace={true} />;
  }

  return (
    <Box
      p={22}
      boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px;"
      w={{ base: "70%", md: "30px" }}
      margin="0 auto"
      mt="100px"
      mb="100px"
      height={"300px"}
      width={"250px"}
    >
      <Heading textAlign="center" size="lg">
        Login Form
      </Heading>
      <form onSubmit={handleSubmit}>
        <VStack spacing={6} mt={8} align="center">
          <Input
            type="email"
            placeholder="Enter Your Email"
            name="email"
            onChange={handleChange}
            value={email}
          />
          <Input
            type="password"
            placeholder="Enter Your Password"
            onChange={handleChange}
            value={password}
            name="password"
          />
        </VStack>
        <Box mt={8} textAlign="center">
          <Button
            type="submit"
            w="150px"
            bg="black"
            color="#fff"
            _hover={{ bg: "yellow.500", color: "#000" }}
          >
            SUBMIT
          </Button>
        </Box>
        <Text mt={8} textAlign="center">
          Don't have an account?{" "}
          <ChakraLink href="SignUpPage" color="blue.500">
            Sign up
          </ChakraLink>
        </Text>
      </form>
    </Box>
  );
};

export default LoginPage;
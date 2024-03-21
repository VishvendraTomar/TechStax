import React, { useState } from "react";
import axios from "axios";
import {
  Box,
  Button,
  Heading,
  HStack,
  Input,
  VStack,
  Link as ChakraLink,
  FormControl,
  InputGroup,
  InputRightElement,
  IconButton,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons"; 
import { Link } from "react-router-dom";

const SignUpPage = () => {
  const initial = {
    name: "",
    email: "",
    gender: "",
    password: "",
    age: 0,
    city: "",
    is_married: false,
  };

  const [form, setForm] = useState(initial);

  const handleCheck = (e) => {
    setForm({ ...form, [e.target.name]: e.target.checked });
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.type === "number" ? +e.target.value : e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("https://good-pear-hippo-ring.cyclic.app/users/register", form)
      .then(res => {
        alert(res.data.msg);
        console.log(res.data);
      });

    setForm(initial);
  };

  const { name, email, gender, password, age, city, is_married } = form;

  return (
    <>
      <Box
        p={8}
        boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
        w={{ base: "70%", md: "380px" }}
        margin="0 auto"
        mt="30px"
        mb="20px"
        height={"500px"}
      >
        <Heading textAlign="center" size="lg">
          Sign Up Form
        </Heading>
        <form onSubmit={handleSubmit}>
          <VStack spacing={6} mt={8} alignItems="center"> 
            <FormControl>
              <Input
                required
                onChange={handleChange}
                name="name"
                type="text"
                placeholder="Enter Your Name"
              />
            </FormControl>
            <FormControl>
              <Input
                required
                onChange={handleChange}
                name="email"
                type="email"
                placeholder="Enter Your Email"
              />
            </FormControl>
            <FormControl>
              <Input
                required
                onChange={handleChange}
                name="gender"
                type="text"
                placeholder="Enter Your Gender"
              />
            </FormControl>
            <FormControl>
              <InputGroup>
                <Input
                  required
                  onChange={handleChange}
                  name="password"
                  type="password"
                  placeholder="Enter Your Password"
                />
                <InputRightElement width="4.5rem">
                 
                </InputRightElement>
              </InputGroup>
            </FormControl>
          </VStack>
          <Box mt="40px" textAlign="center">
            <Button
              type="submit"
              w="150px"
              bg="black"
              color="#fff"
              _hover={{ bg: "gray.600", color: "#fff" }}
            >
              SUBMIT
            </Button>
          </Box>
          <HStack mt={5} justifyContent="flex-end">
            <ChakraLink as={Link} to="/LoginPage" color="blue.500">
              Already have an account? Log in
            </ChakraLink>
          </HStack>
        </form>
      </Box>
    </>
  );

};

export default SignUpPage;
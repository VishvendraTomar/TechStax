import React from 'react'
import { Link } from 'react-router-dom'
import {styled} from "styled-components"
const Navbar = () => {
  return (
    <DIV>
        <Link to={"/home"}>Home</Link>
        <Link to={"/post"}>Post</Link>
        <Link to={"/signup"}>SignUp</Link>
        <Link to={"/login"}>Login</Link>
    </DIV>
  )
}

export default Navbar

const DIV=styled.div`
display: flex;
justify-content: space-around;


`
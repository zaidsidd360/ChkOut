import React from 'react'
import Styled from "styled-components"
import Logo from "../assets/logo.png"
import {BsSearch} from "react-icons/bs"
import {BsCart2} from "react-icons/bs"
import {BiUserCircle} from "react-icons/bi"

const Header = () => {
  return (
    <Nav>
        <ul>
            <li id='push'><img src={Logo} alt="Logo" width="120px" height="auto" /></li>
            <BsSearch className='searchIcon'/>
            <li id='rounded'><input type="search" /></li>
            <BsCart2 className='moveRight' size={"1.2em"}/>
            <li>Cart</li>
            <BiUserCircle className='moveRight' size={"1.4em"}/>
            <li>Account</li>
        </ul>
    </Nav>
  )
}

const Nav = Styled.nav`
    /* background-color: #99d08c; */
    /* max-width: 70%;
    margin-inline: auto; */
    
    ul {
        font-size: 1.3em;
        margin: 0;
        padding: 0;
        height: 5em;
        width: 100%;
        display: flex;
        align-items: center;
        list-style: none;
        li {
            margin-inline: 1em;
        }
        #push {
            margin-right: auto;
            margin-left: none;
        }
        li > input { 
            font-size: 0.7em;
            background: transparent;
            border: 1px solid #000;
            border-radius: 1.5em;
            outline: none;
            padding: 0.8em;
            padding-left: 3em;
            width: 5em;
            transition: all 0.5s ease-in-out;
        }
        li > input:focus {
            width: 20em;
        }
        li:hover {
            cursor: pointer;
        }
        .searchIcon {
            transform: translateX(2.5em);
            z-index: -1;
        }
        .moveRight {
            transform: translateX(0.7em);
        }
    }
`

export default Header

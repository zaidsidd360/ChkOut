import React from 'react'
import Styled from "styled-components"

const Header = () => {
  return (
    <Nav>
        <ul>
            <li id='push'>Logo</li>
            <li id='rounded'><input type="search" /></li>
            <li>Cart</li>
            <li>Account</li>
        </ul>
    </Nav>
  )
}

const Nav = Styled.nav`
    background-color: #44603d;
    
    ul {
        margin: 0;
        padding: 0;
        height: 4em;
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
    }
`

export default Header

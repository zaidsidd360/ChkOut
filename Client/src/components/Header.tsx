import React, { useEffect, useState } from 'react'
import Styled from "styled-components"
import Logo from "../assets/logo.png"
import {BsSearch} from "react-icons/bs"
import {BsCart2} from "react-icons/bs"
import {BiUserCircle} from "react-icons/bi"

const Header = () => {
    const [blurredNav, setBlurredNav] = useState(false);
    const changeBackground = () => {
        console.log(window.scrollY)
        if (window.scrollY >= 25) {
            setBlurredNav(true)
        } else {
            setBlurredNav(false)
        }
    }
    useEffect(() => {
      window.addEventListener("scroll", changeBackground)
      console.log(window.scrollY)
    })
    
  return (
    <Nav>
        <ul>
            <li id='push'><img src={Logo} alt="Logo" width="120px" height="auto" /></li>
            <li id='rounded'><BsSearch className='searchIcon'/><input type="search" autoFocus/></li>
            <li><BsCart2 className='mRight' size={"1.2em"}/><p>Cart</p></li>
            <li><BiUserCircle className='mRight' size={"1.4em"}/> <p>Account</p></li>
        </ul>
    </Nav>
  )
}

const Nav = Styled.nav`
    position: sticky;
    top: 0;
    z-index: 10;
    backdrop-filter: blur(20px);
    
    ul {
        font-size: 1.3em;
        margin: 0;
        padding: 0;
        height: 5em;
        width: 70%;
        display: flex;
        align-items: center;
        list-style: none;
        margin-inline: auto;
        
        li {
            z-index: 10;
            margin-inline: 1em;
            display: flex;
            align-items: center;
            
            &:hover {
                cursor: pointer;
            }

            input { 
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

            input:focus {
                width: 20em;
            }

            .searchIcon {
                transform: translateX(1.5em);
                z-index: -10;
            }

            .mRight {
                margin-right: 0.5em;
            }
        }

        #push {
            margin-right: auto;
            margin-left: none;
        }
        
    }
`

export default Header

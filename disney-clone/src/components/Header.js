import React from 'react'
import styled from 'styled-components'
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
} from "react-router-dom";
function Header() {
    return (
        <Nav>
            <Link to='/'><LogoImg src='./images/logo.svg' /></Link>
            <NavMenu>
                <Link to="/"><img src='./images/home-icon.svg' /><span>Home</span></Link>
                <a href="#"><img src='./images/search-icon.svg' /><span>Search</span></a>
                <a href="#"><img src='./images/watchlist-icon.svg' /><span>WatchList</span></a>
                <a href="#"><img src='./images/original-icon.svg' /><span>Originals</span></a>
                <a href="#"><img src='./images/movie-icon.svg' /><span>Movies</span></a>
                <a href="#"><img src='./images/series-icon.svg' /><span>Series</span></a>
            </NavMenu>
            <UserIcon>
                <a href=""><span>User</span><img src="./images/user.png" alt="" /></a>
            </UserIcon>
        </Nav>
    )
}

export default Header

const Nav = styled.nav`
    display:flex;
    align-items:center;
    justify-content:space-between;
   height:70px;
   background-color: #090b13;
   top: 0;
   left:0;
   right:0;
`

const LogoImg = styled.img`
        width:130px;
        padding:0 24px;
       
`
const NavMenu = styled.div`
    display:flex;
    flex:1;
    a {
        display:flex;
        align-items:center;
        color:#fff;
        padding:0 24px;
        position:relative;
    

    img {
        height:20px;
    }
    span {
        text-transform:uppercase;
        padding:0 5px;

        &:after {
            content: "";
            background-color: #fff;
            position:absolute;
            height:3px;
            left:26px;
            right:20px;
            bottom:-6px;
            opacity:0;
            transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
            transform: scale(0)
        }
    }
        &:hover  {
            span:after {
               opacity:1;
                transform: scale(1)
            }
        }
    }
`

const UserIcon = styled.div`

padding-right:24px;
display:flex;
align-items:center;
a{
    display:flex;
    align-tems:center;
    img {

        height:40px;
        border-radius:50%;
        }
        span {
            color: #fff;
            display:flex;
            align-items:center;
            padding-right:10px;
        }
}
`
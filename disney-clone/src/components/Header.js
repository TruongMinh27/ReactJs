import { React,useEffect } from 'react';
import styled from 'styled-components';
import {useDispatch,useSelector} from 'react-redux';
import { useNavigate } from "react-router-dom";
import { auth, provider} from '../firebase';
import { signInWithPopup } from 'firebase/auth';
import { selectUserName, setUserLoginDetails,selectUserPhoto, setUserSignOut } from '../features/user/userSlice';
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
} from "react-router-dom";
function Header() {
    const dispatch = useDispatch();
    const history = useNavigate();
    const userName = useSelector(selectUserName);
    const userPhoto = useSelector(selectUserPhoto);

    useEffect(()=>{
        auth.onAuthStateChanged( async(user)=> {
            if(user){
                setUser(user);
               
            }
        })
    },[userName]);

    const signWithGoogle = () => {
        if(!userName){

            signInWithPopup(auth,provider).then((result) => {
                setUser(result.user)
                history("/home");
            }).catch(error => console.log(error))
        }else if (userName) {
            auth.signOut()
            .then(()=>{
                dispatch(setUserSignOut());
                history('/');
            })
            .catch((err) => console.log(err))
        }
    }

    const setUser = (user)=>{
        dispatch(
            setUserLoginDetails({
                name: user.displayName,
                email:user.email,
                photo: user.photoURL,
            })
        )
    }
    return (
        <Nav>
            <Link to='/home'><LogoImg src='/images/logo.svg' /></Link>
            {!userName ? <Login onClick={signWithGoogle}>
                Login
            </Login> : <>
            <NavMenu>
                <Link to="/home"><img src='/images/home-icon.svg' /><span>Home</span></Link>
                <a href="#"><img src='/images/search-icon.svg' /><span>Search</span></a>
                <a href="#"><img src='/images/watchlist-icon.svg' /><span>WatchList</span></a>
                <a href="#"><img src='/images/original-icon.svg' /><span>Originals</span></a>
                <a href="#"><img src='/images/movie-icon.svg' /><span>Movies</span></a>
                <a href="#"><img src='/images/series-icon.svg' /><span>Series</span></a>
            </NavMenu>
               <SignOut>
                        <UserIcon>
                            <a><span>{userName}</span><img src={userPhoto} alt={userName} /></a>
                        </UserIcon>
                        <DropDown onClick={signWithGoogle}>
                            Sign out
                        </DropDown>
               </SignOut>
                </>}
        </Nav>
    )
}



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

    @media (max-width:992px){
        display:none;
    }
`

const UserIcon = styled.div`
padding-right:24px;
align-items:center;
position:relative;
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


&:hover {
    
}
`

const Login = styled.a`
    background-color:rgba(0,0,0,0.1);
    padding: 10px 24px;
    margin-right:25px;
    font-size:18px;
    border:2px solid #fff;
    border-radius:10px;
    letter-spacing:1.6px;
    text-transform:uppercase;
    cursor:pointer;
    transition:all 250ms;
    &:hover{
        background-color:rgba(249,249,249,0.4);
    }
`

const DropDown = styled.div`
        background-color:rgba(0,0,0,0.8);
        border:2px solid #fff;
        border-radius:4px;
        max-width:100px; 
       margin-top:8px;
       text-align:center;
       position:absolute;
       padding:4px 4px;
       right:20px;
       z-index:2;
       cursor:pointer;
       display:none;
       &:before{
           content:'';
           position:absolute;
           width: 0;
           height: 0;
           border-left: 10px solid transparent;
           border-right: 10px solid transparent;
           border-bottom: 9px solid #fff;
           top:-10px;
           right:12px;
           z-index:-1;
        }
        `
        const SignOut = styled.div`
           &:hover ${DropDown} {
               display:block; 
              
            }
        `
export default Header
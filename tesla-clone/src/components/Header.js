import React ,{useState} from 'react'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import {selectCars} from '../features/car/CarSlice';
import {useSelector} from 'react-redux'
function Header() {

  const [menuOpen, setMenuOpen] = useState(false)
  const cars = useSelector(selectCars)
  return (
    <Container>
     <a href="#"><img src="./images/logo.svg" alt="" /></a>
     <Menu>
      {cars && cars.map((car,index)=>(
       <a key={index} href="#">{car}</a>
      ))}
        <a href="#">Solar Roof</a>
        <a href="#">Solar Panels</a>
     </Menu>
     <RightMenu>
      <a href="#">Shop</a>
        <a href="#">Tesla Account</a>
        <CustomMenu onClick={()=>setMenuOpen(true)}/>
     </RightMenu>
      <SubMenu show={menuOpen}>
      <CloseWrap>
          <Close onClick={() => setMenuOpen(false)}  />
      </CloseWrap>
      <li><a href="">Existing Inventory</a></li>
      <li><a href="">Used Inventory</a></li>
      <li><a href="">Trade-in</a></li>
      <li><a href="">Cyber Truck</a></li>
        <li><a href="">Test Drive</a></li>
        <li><a href="">Insurance</a></li>
        <li><a href="">Roadster</a></li>
        <li><a href="">Semi</a></li>
        <li><a href="">Charging</a></li>
        <li><a href="">Powerwall</a></li>
        <li><a href="">Commercial Energy</a></li>
        <li><a href="">Utilities</a></li>
        <li><a href="">Find Us</a></li>
        <li><a href="">Support</a></li>
        <li><a href="">Investor Relations</a></li>
     </SubMenu>
    </Container>
  )
}

export default Header

const Container = styled.div`
  display:flex;
  position: fixed;
  align-items:center;
  justify-content:space-between;
  min-height: 60px;
  padding: 0 20px;
  top:0;
  left:0;
  right:0;
  z-index:1;
  

a {
  padding:0 16px;
}

  img {
    width:120px;
    height:12.25px;
  }
`

const Menu = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  //flex:1;
  
  
  a {
    padding: 0 10px;
    font-weight:600;
    flex-wrap:nowrap;
  }

  @media (max-width:768px) {
    display:none;
  }
`

const RightMenu = styled.div`
display:flex;
align-items:center;
  a {
    padding: 0 10px;
    font-weight:600;
    flex-wrap:nowrap;
  }
`
const CustomMenu = styled(MenuIcon)`
  cursor:pointer;
`
const SubMenu = styled.div`
  display:flex;
  flex-direction:column;
  position:fixed;
  background-color:#fff;
  width:300px;
  top:0;
  right:0;
  bottom:0;
  z-idex:2;
  transform: ${props => props.show ? 'translateX(0)' :' translateX(100%)'};
  transition: transform 0.2s;
  li {
    list-style:none;
    padding:0 15px;
    width:100%;
    display:flex;
  }

  a{
    display:flex;
    width:100%;
     align-items:flex-start;
      padding:10px 15px;
      border-radius:3px;
  }

  a:hover{
    background-color: rgb(0 , 0, 0 ,0.05)
    
  }
`

const CloseWrap = styled.div`
  display:flex;
  justify-content:flex-end;
  width:100%;
  align-items:center;
  height : 60px ;
  padding:10px 15px;
`

const Close = styled(CloseIcon)`
  cursor:pointer;
`
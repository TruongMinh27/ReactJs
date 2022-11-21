import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'

function Section({ title,decription,image,leftButton,rightButton }) {
  return (
    <Wrap bgImage={image}>
        <Fade bottom>
        <ItemText>
            <h1>{title}</h1>
              <p>{decription}</p>
        </ItemText>
        </Fade>
        <Button>
        <Fade bottom>
            <ButtonGroup>
                <LeftButton>
                      {leftButton}
                </LeftButton>
                  {rightButton &&
                   <RightButton>
                      {rightButton}
                  </RightButton>}
            </ButtonGroup>
        </Fade>
            <DownArrow src="./images/down-arrow.svg" />
        </Button>
    </Wrap>
  )
}

export default Section

const Wrap = styled.div`
    width:100vw;
    height:100vh;
    background-size:cover;
    background-position: center;
    background-repeat:no-repeat;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:center;
    background-image: ${props => `url("./images/${props.bgImage}")`};

`

const ItemText = styled.div`
    padding-top:15vh;
    text-align:center;

`

const ButtonGroup = styled.div`
    display: flex;
    margin-bottom:30px;
    @media (max-width:768px){
        flex-direction:column;
    }
`

const LeftButton = styled.div`
    background-color: rgb(23,26,32,0.8);
    color: #fff;
    width:256px;
    height:40px;
    display:flex;
    justify-content:center;
    align-items:center;
    border-radius:100px;
    text-align:center;
    font-size:12px;
    text-transform:uppercase;
    cursor:pointer;
    opacity:0.9;
    margin:5px;

`
const RightButton = styled(LeftButton)`
    color :#000;
    background-color:rgba(244, 244, 244, 0.65);
`

const DownArrow = styled.img`
    margin-top:20px;
    overflow-x:hidden;
    height:40px;
    animation:animateDown infinite 1.5s;
`

const Button = styled.div`

`
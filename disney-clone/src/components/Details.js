import React from 'react'
import styled from 'styled-components'
function Details() {
  return (
    <Container>
        <Background>
              <img src="https://image.tmdb.org/t/p/w1280//14QbnygCuTO0vl7CAFmPf1fgZfV.jpg" />
        </Background>
        <Logo>
              <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/DDFF0FDF457E092EE53149CE7DB5BD14CB97E27B92D2D087E7C687B4E3073DE2/scale?width=1440&aspectRatio=1.78"/>
        </Logo>

        <Controls>
            <PlayButton>
                  <img src="./images/play-icon-black.png"/>
                  <span>Play</span>
            </PlayButton>
            <TrailerButton>
                  <img src="./images/play-icon-white.png" />
                  <span>Trailer</span>
            </TrailerButton>
            <AddButton>
                <span>+</span>
            </AddButton>
            <GroupButton>
                  <img src="./images/group-icon.png" />
            </GroupButton>
        </Controls>
            <SubTitle>
                  2021 • 1 Season • Science Fiction, Action-Adventure, Buddy
            </SubTitle>
            <Decription>
                  Marvel Studios’ “The Falcon and The Winter Soldier” stars Anthony Mackie as Sam Wilson aka The Falcon, and Sebastian Stan as Bucky Barnes aka The Winter Soldier. The pair, who came together in the final moments of “Avengers: Endgame,” team up on a global adventure that tests their abilities—and their patience.
            </Decription>
    </Container>
  )
}

export default Details

const Container = styled.div`
    min-height:calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position:relative;
`

const Background = styled.div`
    position:fixed;
    left:0;
    right:0;
    top:0;
    bottom:0;
    z-index:-1;
    img{
        width:100%;
        height:100%;
        object-fit:cover;
        opacity:0.8;
    }
`

const Logo =styled.div`
   height:30vh;
   min-height:170px;
   width:35vw;
   min-width:200px;

   img{
    width:100%;
    height:100%;
    object-fit:contain;
   }
`

const Controls = styled.div`
   display:flex;
`

const PlayButton = styled.button`
    font-size:15px;
    display:flex;
    align-items:center;
    height:45px;
    border:none;
    border-radius:4px;
    padding:0 24px;
    margin-right:25px;
    text-transform:uppercase;
    letter-spacing:1.8px;
    cursor:pointer;
    &:hover{
        background: rgb(198, 198, 198);
        transition-duration: 0.2s;
    }
`

const TrailerButton = styled(PlayButton)`
    background: rgba(0, 0, 0, 0.3);
    border: 1px solid rgb(249, 249, 249);
    color: rgb(249, 249, 249);
`
const AddButton = styled.button`
    height:44px;
    width:44px;
    display:flex;
    align-items:center;
    justify-content:center;
    border-radius:50%;
    background-color:rgba(0,0,0,0.6);
    color:#fff;
    border:2px solid #fff;
    margin-right:16px;
    cursor:pointer;
    span {
        font-size:30px;
    }
`
const GroupButton = styled(AddButton)`

`

const SubTitle = styled.div`
    color:rgba(249,249,249);
    min-height:26px;
    font-size:15px;
    margin-top:20px;
`

const Decription = styled.div`
    color:rgba(249,249,249);
    line-height:1.4;
    font-size:20px;
    margin-top:16px;
`
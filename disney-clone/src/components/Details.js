import { collection, query, doc, getDoc, onSnapshot } from 'firebase/firestore'
import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectUserName } from '../features/user/userSlice'
import styled from 'styled-components'
import db from '../firebase'


function Details() {
    const userName = useSelector(selectUserName)
    const {id} = useParams()
    const [movie , setMovie] = useState()
    
    useEffect(()=>{
        getDoc(doc(db, "movies", id)).then(docSnap => {
            if (docSnap.exists()) {
                setMovie(docSnap.data())
            } else {
                console.log("No such document!");
            }
        })
       
    }, [userName])

console.log(movie);
  return (
    <Container>
        {movie && (
        <>
                  <Background>
                      <img src={movie.backgroundImg} />
                  </Background>
                  <Logo>
                      <img src={movie.titleImg} />
                  </Logo>

                  <Controls>
                      <PlayButton>
                          <img src="/images/play-icon-black.png" />
                          <span>Play</span>
                      </PlayButton>
                      <TrailerButton>
                          <img src="/images/play-icon-white.png" />
                          <span>Trailer</span>
                      </TrailerButton>
                      <AddButton>
                          <span>+</span>
                      </AddButton>
                      <GroupButton>
                          <img src="/images/group-icon.png" />
                      </GroupButton>
                  </Controls>
                  <SubTitle>
                      {movie.subTitle}
                  </SubTitle>
                  <Decription>
                      {movie.description}
                  </Decription>
        </>
        )}
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
    max-width:650px;
`
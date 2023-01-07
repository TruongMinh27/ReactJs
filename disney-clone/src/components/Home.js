import React , {useEffect} from 'react';
import styled from 'styled-components';
import ImageSlider from './ImageSlider';
import Viewers from './Viewers';
import Movies from './Movies';
import db from '../firebase';
import NewDisney from './NewDisney';
import Original from './Original';
import Trending from './Trending';
import { useDispatch,useSelector } from 'react-redux';
import { setMovies } from '../features/movies/moviesSlice';
import { selectUserName } from '../features/user/userSlice';
import { collection, onSnapshot, query } from 'firebase/firestore';
function Home() {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);

  useEffect(()=>{
    onSnapshot((collection(db,'movies')),(snapshot) => {
     let tempMovies = snapshot.docs.map((doc)=>{
        return  {id: doc.id, ...doc.data()}
     }) 

     dispatch(setMovies(tempMovies))
    })
  }, [userName])

  return (
    <Container>
        <ImageSlider/>
        <Viewers/>
      <Movies/>
      {/* <NewDisney/>
      <Original/>
      <Trending/> */}
      <></>
    </Container>
  )
}

export default Home

const Container = styled.main`
    min-height:calc(100vh - 70px);
    padding 0 calc(3.5vw - 5px);
    position:relative;
    overflow:hidden;
    color:#fff;
    &:before{
        background-image:url('./images/home-background.png');
        background-repeat:no-repeat;
        background-size:cover;
        background-position:center;
        background-attachment: fixed;
        content:'';
        position:absolute;
        top:0;
        left:0;
        right:0;
        bottom:0;
        z-index:-1;
    }
`
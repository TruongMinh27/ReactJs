import React from 'react'
import styled from 'styled-components'
function NewDisney() {
    return (
        <Container>
            <h4> New Disney+</h4>
            <Content>
                <Wrap>
                    <img src="https://image.tmdb.org/t/p/w500//14QbnygCuTO0vl7CAFmPf1fgZfV.jpg" />
                </Wrap>
                <Wrap>
                    <img src="https://image.tmdb.org/t/p/w500//14QbnygCuTO0vl7CAFmPf1fgZfV.jpg" />
                </Wrap>
                <Wrap>
                    <img src="https://image.tmdb.org/t/p/w500//14QbnygCuTO0vl7CAFmPf1fgZfV.jpg" />
                </Wrap>
                <Wrap>
                    <img src="https://image.tmdb.org/t/p/w500//14QbnygCuTO0vl7CAFmPf1fgZfV.jpg" />
                </Wrap>
                <Wrap>
                    <img src="https://image.tmdb.org/t/p/w500//14QbnygCuTO0vl7CAFmPf1fgZfV.jpg" />
                </Wrap>
                <Wrap>
                    <img src="https://image.tmdb.org/t/p/w500//14QbnygCuTO0vl7CAFmPf1fgZfV.jpg" />
                </Wrap>
                <Wrap>
                    <img src="https://image.tmdb.org/t/p/w500//14QbnygCuTO0vl7CAFmPf1fgZfV.jpg" />
                </Wrap>
                <Wrap>
                    <img src="https://image.tmdb.org/t/p/w500//14QbnygCuTO0vl7CAFmPf1fgZfV.jpg" />
                </Wrap>
            </Content>
        </Container>
    )
}



const Container = styled.div`
 
`

const Content = styled.div`
    display:grid;
    grid-gap:25px;
    grid-template-columns:repeat(4,minmax(0,1fr));
    @media(max-width:768px){
        grid-template-columns:repeat(1,minmax(0,1fr));
    }
`

const Wrap = styled.div`
    
    border-radius:10px;
    border:3px solid rgba(249,249,249,0);
    box-shadow:rgba(0 0 0 / 69%) 0px 26px 30px -10px, rgba(0 0 0 / 73%) 0px 16px 10px -10px;
    transition:all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;
    overflow:hidden;
    cursor:pointer;
img{
    width:100%;
    height:100%;
    object-fit:cover;
  
    }
&:hover{
 border:3px solid rgba(249,249,249,0.8);
 transform:scale(1.05);
  box-shadow:rgba(0 0 0 / 80%) 0px 40px 58px -16px, rgba(0 0 0 / 72%) 0px 30px 22px -10px;
}

  
`

export default NewDisney
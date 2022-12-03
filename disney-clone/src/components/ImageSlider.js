import React from 'react'
import styled from 'styled-components'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
function ImageSlider() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      autoplay: true,
      cssEase: "linear"
    };

  return (
    <Container {...settings}>
        <Wrap>
                <img src="./images/slider-badag.jpg" alt="" />
        </Wrap>
        <Wrap>
                <img src="./images/slider-badging.jpg" alt="" />
        </Wrap>

    </Container>
  )
}

export default ImageSlider

const Container = styled(Slider)`
    .slick-list{
      overflow:visible;
    }

    ul li button {
      &:before {
        color:white;
      }
    }

    li.slick-active button:before {
      color:white;
    }

    button {
      z-index:1;
    }
  
`

const Wrap = styled.div`
      cursor:pointer;
       img {
         width:100%;
         border: 4px solid transparent;
        border-radius:4px;
        box-shadow:rgba(0 0 0 / 69%) 0px 26px 30px -10px, rgba(0 0 0 / 73%) 0px 16px 10px -10px;
        transition:300ms;
        &:hover{
          border:4px solid rgba(249,249,249 ,0.8);
        }
       }
`
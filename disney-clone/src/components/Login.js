import React from 'react'
import styled from 'styled-components'
function Login() {
  return (
    <Container>
      <CTA>
        <CTALogoOne src='./images/cta-logo-one.svg' />
        <SignUp href='#'>
            GET ALLL HERE
        </SignUp>
        <Description>
                  Get Premier Access to Raya and the Last Dragon for an additional fee with a Disney+ Clone subscription. This website is made for educational purpose only. All rights reserved to ©Disney.
        </Description>
              <CTALogoTwo src='./images/cta-logo-two.png' />

      </CTA>
    </Container>
  )
}

export default Login

const Container =styled.div`
    min-height: calc(100vh - 70px);
    position:relative;
    display:flex;
    justify-content:center;
    align-items:top;
    &:before {
        background-image:url("./images/login-background.jpg");
        background-position:top;
        background-size:cover;
        background-repeat:no-repeat;
        content:'';
        position:absolute;
        top:0;
        left:0;
        right:0;
        bottom:0;
        z-index:-1;
    }
`

const CTA = styled.div`
    width:100%;
    max-width:650px;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    padding:0 24px;
`

const CTALogoOne = styled.img`
  
`

const SignUp = styled.a`
    width:100%;
    color:#fff;
    background-color:rgb(0, 99, 229);
    text-align:center;
    margin-top:12px;
    padding:16px 0;
    border-radius:4px;
    font-size:15px;
    font-weight:bold;
    transition:all 250ms;
    letter-spacing:1.8px;
    font-size:18px;
    &:hover {
        background-color: rgb(4, 131, 238);
    }
`

const Description = styled.p`
    text-align:center;
    letter-spacing:1.6px;
    margin-top:12px;
`

const CTALogoTwo = styled.img`
    width:90%;
    margin-top:25px;
`
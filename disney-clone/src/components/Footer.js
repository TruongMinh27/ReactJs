import React from 'react'
import styled from 'styled-components'
function Footer() {
  return (
    <Container>
       <a>Copyright @Nguyen Cao Truong Minh</a>     
    </Container>
  )
}

export default Footer

const Container = styled.div`
    height: 46px;
    background-color: transparent;
    margin: 10px 0px 10px 0px;
    padding: 0px 30px;
    a{
        line-height:46px;
        color:#595959;
    }
`

import React from 'react'
import styled from 'styled-components'
import Section from './Section'

function Home() {
  return (
    <Container>
        <Section 
        title= "Model 3"
        decription= "Oder Online for Touchless Delivery"
        image="model-3.jpg"
        leftButton="Custom Oder"
        rightButton="EXISTING INVENTORY"
        />
        <Section 
        title= "Model Y"
        decription= "Oder Online for Touchless Delivery"
        image="model-y.jpg"
        leftButton="Custom Oder"
        rightButton="EXISTING INVENTORY"
        />
        <Section 
        title= "Model S"
        decription= "Oder Online for Touchless Delivery"
        image="model-s.jpg"
        leftButton="Custom Oder"
        rightButton="EXISTING INVENTORY"
        />
        <Section 
        title= "Model X"
        decription= "Oder Online for Touchless Delivery"
        image="model-x.jpg"
        leftButton="Custom Oder"
        rightButton="EXISTING INVENTORY"
        />
        <Section 
        title= "Solar Panels"
        decription= "Lowest Cost Solar Panels in America"
        image="solar-panel.jpg"
        leftButton="Order Now"
        rightButton="Learn More"
        />
        <Section 
        title= "Solar Roof"
        decription= "Produce Clean Energy From Your Roof"
        image="solar-roof.jpg"
        leftButton="Order Now"
        rightButton="Learn More"
        />
        <Section 
        title= "Accessories"
        image="accessories.jpg"
        leftButton="Order Now"
        />
    </Container>
  )
}

export default Home

const Container = styled.div `
    height:100vh;
`
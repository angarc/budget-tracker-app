import React from 'react'
import styles from './HomePage.module.scss'
import { Container, Navbar, Nav, Jumbotron, Button } from 'react-bootstrap'

const homePage = () => {
  return (
    <div className='home-page'>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Budget Tracker</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="#home" className='active'>Home</Nav.Link>
              <Nav.Link href="#link" className='active'>What is Budget Tracker?</Nav.Link>
              <Nav.Link href="#link" className='active'>About</Nav.Link>
              <Nav.Link href="#link" className='active'>Pricing</Nav.Link>
              <Nav.Link href="#link" className='active'>Login</Nav.Link>
              <Nav.Link href="#link" className='active'>Register</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
      <Container>
        <Jumbotron className="mt-3">
          <h1>Tracking your budget has never been this easy.</h1> 
          <p>
            lead needed here
          </p>
          <Button variant="primary">Learn more</Button>
        </Jumbotron>
      </Container>
    </div>
  )
}


export default homePage;

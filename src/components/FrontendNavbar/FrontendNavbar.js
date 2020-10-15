import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const frontendNavbar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
      <Navbar.Brand href="#home">Budget Tracker</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#home" className='active'><Link to="/">Home</Link></Nav.Link>
            <Nav.Link href="#link" className='active'>What is Budget Tracker?</Nav.Link>
            <Nav.Link href="#link" className='active'>About</Nav.Link>
            <Nav.Link href="#link" className='active'>Pricing</Nav.Link>
            <Nav.Link href="#link" className='active'><Link to="/login">Login</Link></Nav.Link>
            <Nav.Link href="#link" className='active'><Link to="/register">Register</Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default frontendNavbar

import React from 'react'
import styles from './HomePage.module.scss'
import { Container, Jumbotron, Button } from 'react-bootstrap'
import {
  Link
} from "react-router-dom";

const homePage = () => {
  return (
    <div className='home-page'>
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

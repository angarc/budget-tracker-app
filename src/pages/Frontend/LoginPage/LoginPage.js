import React from 'react'
import { Container, Form, Button } from 'react-bootstrap'
import { loginUser } from '../../../requests/UserRequests'
import { Redirect } from 'react-router-dom'

class LoginPage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: '',
      redirect: false
    }
  }

  submit(evt) {
    evt.preventDefault()
    loginUser(this.state.email, this.state.password)
    .then(_ => {
      this.setState({redirect: true})
    })
    .catch(_ => {
      alert("not good")
    })
  }

  render() {
    return (
      <Container>
        <Form className='mt-5'>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control onChange={(evt) => this.setState({email: evt.target.value})} value={this.state.email} type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control onChange={(evt) => this.setState({password: evt.target.value})} value={this.state.password} type="password" placeholder="Password" />
          </Form.Group>

          {this.state.redirect && <Redirect to="/dashboard" />}
          <Button onClick={(evt) => this.submit(evt)} variant="primary" type="submit">
            Login
          </Button> 
        </Form>
      </Container>
    )
  }
}

export default LoginPage

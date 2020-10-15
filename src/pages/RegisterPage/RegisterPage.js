import React from 'react'
import { Container, Form, Button } from 'react-bootstrap'
import { registerUser } from '../../requests/UserRequests'
import { Redirect } from 'react-router-dom'

class RegisterPage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      username: "",
      password: "",
      passwordConfirmation: "",
      redirect: false
    }
  }

  submit(evt) {
    evt.preventDefault();
    registerUser(
      this.state.firstName, 
      this.state.lastName, 
      this.state.email, 
      this.state.username, 
      this.state.password, 
      this.state.passwordConfirmation
    )
    .then(_ => {
      this.setState({redirect: true})
    })
    .catch(error => {
      alert(error)
    })

  }

  render() {
    return (
      <Container>
        <Form className='mt-5'>
          <Form.Group controlId="formBasicFirstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control onChange={(evt) => this.setState({firstName: evt.target.value})} type="text" placeholder="Enter Your First Name" value={this.state.firstName}/>
          </Form.Group>

          <Form.Group controlId="formBasicLastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control onChange={(evt) => this.setState({lastName: evt.target.value})} type="text" placeholder="Enter Your Last Name" value={this.state.lastName}/>
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control onChange={(evt) => this.setState({email: evt.target.value})} type="email" placeholder="Enter email" value={this.state.email}/>
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control onChange={(evt) => this.setState({username: evt.target.value})} type="text" placeholder="Enter A Username" value={this.state.username}/>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control onChange={(evt) => this.setState({password: evt.target.value})} type="password" placeholder="Password" value={this.state.password}/>
          </Form.Group>

          <Form.Group controlId="formBasicPasswordConfirmation">
            <Form.Label>Password Confirmation</Form.Label>
            <Form.Control onChange={(evt) => this.setState({passwordConfirmation: evt.target.value})} type="password" placeholder="Confirm Your Password" value={this.state.passwordConfirmation}/>
          </Form.Group>

          {this.state.redirect && <Redirect to="/dashboard" />}
          <Button onClick={(evt) => this.submit(evt)} type="submit" variant="primary">
            Create My Account
          </Button> 
        </Form>
      </Container>
    )
  }
}

export default RegisterPage

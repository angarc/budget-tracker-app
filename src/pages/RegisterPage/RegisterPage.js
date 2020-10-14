import React from 'react'
import { Container, Form, Button } from 'react-bootstrap'
import { RAILS_URI } from '../../endpoints.js'
import axios from 'axios'

class RegisterPage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      username: "",
      password: "",
      passwordConfirmation: ""
    }
  }

  submit(evt) {
    evt.preventDefault();
    const formData = {
      user: {
        first_name: this.state.firstName,
        last_name: this.state.lastName,
        email: this.state.email,
        username: this.state.username,
        password: this.state.password,
        passwordConfirmation: this.state.passwordConfirmation
      }
    }
    axios.post(`${RAILS_URI}users`, formData)
    .then(response => {
      if (response.status === 200) {
        const authData = {
          auth: {
            email: this.state.email,
            password: this.state.password
          }
        }
        axios.post(`${RAILS_URI}user_token`, authData)
        .then(tokenResponse => {
          //console.log(tokenResponse.data.jwt);
        })
      }
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

          <Button onClick={(evt) => this.submit(evt)} type="submit" variant="primary">
            Create My Account
          </Button> 
        </Form>
      </Container>
    )
  }
}

export default RegisterPage

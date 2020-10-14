import { RAILS_URI } from '../endpoints.js'
import axios from 'axios'

export const registerUser = (firstName, lastName, email, username, password, passwordConfirmation) => {
  const formData = {
      user: {
        first_name: firstName,
        last_name: lastName,
        email: email,
        username: username,
        password: password,
        passwordConfirmation: passwordConfirmation
      }
    }
    axios.post(`${RAILS_URI}users`, formData)
    .then(response => {
      if (response.status === 200) {
        const authData = {
          auth: {
            email,
            password
          }
        }
        axios.post(`${RAILS_URI}user_token`, authData)
        .then(tokenResponse => {
          //console.log(tokenResponse.data.jwt);
        })
      }
    })
}

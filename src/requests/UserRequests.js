import { RAILS_URI } from '../endpoints.js'
import axios from 'axios'

export const loginUser = (email, password) => {
  return new Promise((resolve, reject) => {
    const formData = {
      auth: {
        email,
        password
      }
    }
    axios.post(`${RAILS_URI}user_token`, formData)
    .then(response => {
      localStorage.setItem('jwt', response.data.jwt)
      resolve()
    })
    .catch(error => {
      reject()
    })
  })
}

export const registerUser = (firstName, lastName, email, username, password, passwordConfirmation) => {
  return new Promise((resolve, reject) => {
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
      if (response.data.status === "ok") {
        const authData = {
          auth: {
            email,
            password
          }
        }
        axios.post(`${RAILS_URI}user_token`, authData)
        .then(tokenResponse => {
          localStorage.setItem('jwt', response.data.jwt)
          resolve()
        })
      } else if (response.data.status === "unprocessable_entity") {
        reject(response.data.error)
      }
    })
  })
}

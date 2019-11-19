import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { FullWidthFormWrapper, ActionButton, InputField, Text } from '../Components'
import axios from 'axios'

const Form = (props) => {
  const [email, setEmail] = useState('')
  const [emailValid, setEmailValid] = useState(false)
  const [showValid, setShowValid] = useState(false)
  const [response, setResponse ] = useState('')
  const [error, setError] = useState('')

  const handleChangeField = email => {
    setEmail(email)
  }

  const handleClickSubscribe = () => {
    setShowValid(true)
    setResponse('')
    setError('')
    const emailOK = props.validate(email)
    setEmailValid(emailOK)
    if (email.length < 1) setShowValid(false)
    if (emailOK) {
      handleSubscribeService()
    } else {
      email.length && setError('Please enter valid email')
    }
  }

  const handleSubscribeService = () => {
    let formData = new FormData()
    formData.append('email', email)
    axios({
      method: 'POST',
      url: 'http://localhost:8080/api/email.php',
      data: formData,
      config: { headers: { 'Content-Type': 'multipart/form-data' }}
    })
      .then(function (response) {
        console.log('response', response)
        const { statusText } = response
        setResponse(statusText)
      })
      .catch(function (error) {
        console.log('error', error)
        setError(`Invalid entry: ${email}`)
        setEmailValid(false) // manually set email to invalid
      })
  }

  return (
    <>
      <FullWidthFormWrapper>
        <InputField
          label={props.field}
          onChange={handleChangeField}
          valid={emailValid}
          showValid={showValid}
        />
        <ActionButton
          text={props.action}
          onClick={handleClickSubscribe}
          size='large'
        />
      </FullWidthFormWrapper>
      <Text error={!!error}>{ response || error }</Text>
    </>
  )
}

Form.propTypes = {
  field: PropTypes.string.isRequired,
  validate: PropTypes.func.isRequired,
  action: PropTypes.string.isRequired
}

export default Form
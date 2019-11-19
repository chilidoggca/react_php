import React from 'react'
import PropTypes from 'prop-types'
import { Button } from '@material-ui/core'

const ActionButton = (props) => {
  const handleClick = event => {
    event.preventDefault()
    console.log('event', event)
    props.onClick()
  }
  return (
    <Button
      variant='contained'
      color={props.color || 'primary'}
      onClick={handleClick}
      size={props.size || 'large'}
      fullWidth={props.fullWidth}
    >
      {props.text}
    </Button>
  )
}

ActionButton.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  size: PropTypes.string,
  fullWidth: PropTypes.bool
}

export default ActionButton
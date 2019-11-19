import React from 'react'
import { TextField } from '@material-ui/core'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  // cssOutlinedInput: {
  //   '&$cssFocused $notchedOutline': {
  //     borderColor: `${theme.palette.primary.main} !important`,
  //   }
  // },
  // cssFocused: {},
  notchedOutlineSuccess: {
    borderWidth: '2px',
    borderColor: '#00ee00 !important'
  },
  notchedOutlineDanger: {
    borderWidth: '2px',
    borderColor: '#ee0000 !important'
  }
})

const InputField = (props) => {
  const { classes } = props
  const handleChange = event => {
    event.preventDefault()
    props.onChange(event.target.value)
  }
  return (
    <TextField
      variant='outlined'
      InputProps={{
        classes: {
          notchedOutline: props.showValid
            ? props.valid
              ? classes.notchedOutlineSuccess
              : classes.notchedOutlineDanger
            : undefined
        },
        inputMode: "numeric"
      }}
      label={props.label}
      // value={props.value}
      onChange={handleChange}
      fullWidth={props.fullWidth}
    />
  )
}

InputField.propTypes = {
  classes: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  // value: PropTypes.string.isRequired, // we shall use uncontrolled text field
  onChange: PropTypes.func.isRequired,
  showValid: PropTypes.bool.isRequired,
  valid: PropTypes.bool.isRequired,
  fullWidth: PropTypes.bool
}

export default withStyles(styles)(InputField)
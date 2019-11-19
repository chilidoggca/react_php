import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  root: { 
    flexGrow: 1,
    padding: theme.spacing(2)
  },
  success: { color: '#00ee00' },
  danger: { color: '#ee0000' }
})

const Text = props => {
  const { classes, error } = props
  return (
    <div className={classes.root}>
      <div className={error ? classes.danger : classes.success}>
        {props.children}
      </div>
    </div>
  )
}

Text.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]).isRequired,
  error: PropTypes.bool
}

export default withStyles(styles)(Text)
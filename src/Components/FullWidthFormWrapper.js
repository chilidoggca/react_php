import React from 'react'
import { Grid } from '@material-ui/core'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  root: { 
    flexGrow: 1,
    padding: theme.spacing(2)
  }
})

const FullWidthFormWrapper = (props) => {
  const { classes, children } = props
  return (
    <div className={classes.root}>
      <Grid container spacing={3} justify='center' alignItems='center'>
        {
          children.map((child, idx) => (
            <Grid key={'form_wrapper_child_' + idx} item xs={12}>
              {React.cloneElement(child, { fullWidth: true })}
            </Grid>
          ))
        }
      </Grid>
    </div>
  )
}

FullWidthFormWrapper.propTypes = {
  classes: PropTypes.object,
  children: PropTypes.node.isRequired
}

export default withStyles(styles)(FullWidthFormWrapper)
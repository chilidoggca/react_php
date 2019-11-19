import React from 'react'
import { CssBaseline, Container } from '@material-ui/core'

const withMaxMediumContainer = (ChildComponent, props) => {
  return class extends React.Component {
    render = () => (
      <>
        <CssBaseline />
        <Container maxWidth='md'>
          <ChildComponent {...props} />
        </Container>
      </>
    )
  }
}

export {
  withMaxMediumContainer
}

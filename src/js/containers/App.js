
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
// import { selectReddit, fetchPostsIfNeeded, invalidateReddit } from '../actions'

class App extends Component {
  render() {
    return (
      <div>
        <h1>
          Hello World
        </h1>
      </div>
    )
  }
}

const mapStateToProps = state => {
}

export default connect(mapStateToProps)(App)
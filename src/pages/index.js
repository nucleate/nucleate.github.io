import React, { Component, PropTypes } from 'react'
import { page } from 'nucleate'

class Home extends Component {
  render () {
    return (
      <div>Home</div>
    )
  }
}

export default page({
  title: 'Home'
})(Home)

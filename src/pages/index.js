import React, { Component, PropTypes } from 'react'
import { page } from 'nucleate'

import DefaultLayout from '../layouts/Default'

class Home extends Component {
  render () {
    return (
      <DefaultLayout>
        <div>Home</div>
      </DefaultLayout>
    )
  }
}

export default page({
  title: 'Home'
})(Home)

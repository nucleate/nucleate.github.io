import React, { Component, PropTypes } from 'react'
import { connect, selectCurrentPage } from 'nucleate'

import DefaultLayout from './Default'

class TopicLayout extends Component {
  static propTypes = {
    children: PropTypes.node,
    currentPage: PropTypes.func
  }

  render () {
    const { children, currentPage } = this.props

    return (
      <DefaultLayout>
        <header>
          <h2>{currentPage.title}</h2>
        </header>
        <div>
          {children}
        </div>
      </DefaultLayout>
    )
  }
}

function select (state) {
  return {
    currentPage: selectCurrentPage(state)
  }
}

export default connect(select)(TopicLayout)

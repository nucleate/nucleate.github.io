import React, { Component, PropTypes } from 'react'
import { connect, selectCurrentPage } from 'nucleate'

const BASE_TITLE = 'Nucleate'

class BaseLayout extends Component {
  static propTypes = {
    children: PropTypes.node,
    title: PropTypes.string
  }

  render () {
    const { children, title } = this.props
    return (
      <html>
        <head>
          <meta charSet='utf-8' />
          <title>{BASE_TITLE + (title ? ` | ${title}` : '')}</title>
          <meta name='viewport' content='width=device-width' />
          <meta name='description' content='Nucleate' />

          <link href='//fonts.googleapis.com/css?family=Source+Sans+Pro:200,300,400,600,700,200italic,300italic,400italic,600italic,700italic' rel='stylesheet' type='text/css' />
          <link href='//fonts.googleapis.com/css?family=Merriweather:400,700' rel='stylesheet' type='text/css' />
          <link rel='stylesheet' href='/main.css' />
          <script async src='/bundle.js'></script>
        </head>
        <body>
          {children}
        </body>
      </html>
    )
  }
}

function select (state) {
  return {
    title: selectCurrentPage(state).title
  }
}

export default connect(select)(BaseLayout)

import React, { Component, PropTypes } from 'react'
import { connect, Link, selectCurrentPage } from 'nucleate'

import logo from '../img/nucleate-logo.svg'

class DefaultLayout extends Component {
  static propTypes = {
    children: PropTypes.node,
    currentPage: PropTypes.func
  }

  makeLink (path, title) {
    const { currentPage } = this.props

    const link = <Link to={path}>{title}</Link>
    return (
      currentPage.path === path
        ? <strong>{link}</strong>
        : link
    )
  }

  render () {
    const { children } = this.props

    return (
      <div className='wide-page-body'>
        <nav className='side-menu'>
          <Link to='/' className='nucleate-home-link'>
            <img className='nucleate-home-logo' src={logo} alt='Nucleate logo'/>
          </Link>
          <h3>
            <Link to='/' className='nucleate-home-link'>Nucleate</Link>
            <a className='github-link' href='https://github.com/nucleatejs/nucleate' target='_blank'>
              <i className='fa fa-github'></i>
            </a>
          </h3>
          <ul>
            <li>{this.makeLink('/getting-started', 'Getting Started')}</li>
            <li>{this.makeLink('/directory-structure', 'Directory Structure')}</li>
          </ul>
        </nav>
        <article id='content'>
          {children}
        </article>
      </div>
    )
  }
}

function select (state) {
  return {
    currentPage: selectCurrentPage(state)
  }
}

export default connect(select)(DefaultLayout)

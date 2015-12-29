import React from 'react';
import { Link } from 'nucleate';

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="container sidebar-sticky">
        <div className="sidebar-about">
          <h1>
            <Link to="/">Nucleate</Link>
          </h1>
          <p className="lead">A static site generator powered by React and webpack</p>
        </div>

        <nav className="sidebar-nav">
          <Link className="sidebar-nav-item" activeClassName="active" to="/">Home</Link>
          <Link className="sidebar-nav-item" activeClassName="active" to="/api">API</Link>
          <Link className="sidebar-nav-item" activeClassName="active" to="/api">Comparison</Link>
          <a className="sidebar-nav-item" href="https://github.com/nucleate/nucleate">GitHub</a>
        </nav>

        <p>
          Theme based on <a href="http://hyde.getpoole.com/">Hyde</a> by <a href="https://twitter.com/mdo">@mdo</a>
        </p>
      </div>
    </div>
  );
}

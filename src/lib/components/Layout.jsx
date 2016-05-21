import { Link } from 'nucleate';
import React, { Component, PropTypes } from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

import logo from 'lib/img/nucleate-logo.svg';
import styles from './Layout.module.css';

const DRAWER_WIDTH = 256;

function DrawerMenuItem(props) {
  return (
    <MenuItem
      innerDivStyle={{ padding: 0 }}
      type={null} // workaround for https://github.com/callemall/material-ui/issues/4008
      {...props}
    />
  );
}

function DrawerLink({ external, ...props }) {
  if (external) {
    return <a className={styles.drawerLink} target="_blank" {...props} />;
  }

  return <Link className={styles.drawerLink} activeClassName="active" {...props} />;
}
DrawerLink.propTypes = {
  external: PropTypes.bool,
};

class Layout extends Component {

  constructor(...args) {
    super(...args);
    this.mediaQueryChanged = this.mediaQueryChanged.bind(this);
    this.state = {
      drawerDocked: false,
      drawerOpen: false,
      mql: null,
    };
  }

  componentDidMount() {
    const mql = window.matchMedia('(min-width: 38em)');
    mql.addListener(this.mediaQueryChanged);
    this.setState({ drawerDocked: mql.matches, mql });
  }

  componentWillUnmount() {
    this.state.mql.removeListener(this.mediaQueryChanged);
  }

  mediaQueryChanged(mql) {
    this.setState({ drawerDocked: mql.matches });
  }

  render() {
    const { children } = this.props;
    const { drawerDocked, drawerOpen } = this.state;
    return (
      <div className={styles.container}>
        <AppBar
          onLeftIconButtonTouchTap={() => this.setState({ drawerOpen: !this.state.drawerOpen })}
          showMenuIconButton={!drawerDocked}
          style={{
            marginLeft: drawerDocked ? DRAWER_WIDTH : 0,
          }}
        />
        <Drawer
          docked={drawerDocked}
          open={drawerDocked || drawerOpen}
          width={DRAWER_WIDTH}
        >
          <AppBar
            showMenuIconButton={false}
            style={{
              padding: 0,
            }}
            title={
              <Link className={styles.drawerLink} to="/">
                <img className={styles.logo} alt="Nucleate Logo" src={logo} />
                Nucleate
              </Link>
            }
          />

          <DrawerMenuItem>
            <DrawerLink to="/">
              Home
            </DrawerLink>
          </DrawerMenuItem>

          <DrawerMenuItem>
            <DrawerLink to="/api">
              API
            </DrawerLink>
          </DrawerMenuItem>

          <DrawerMenuItem>
            <DrawerLink to="/comparison">
              Comparison
            </DrawerLink>
          </DrawerMenuItem>

          <DrawerMenuItem>
            <DrawerLink external href="https://github.com/nucleate/nucleate">
              GitHub
            </DrawerLink>
          </DrawerMenuItem>

        </Drawer>
        <div
          className={styles.content}
          style={{
            marginLeft: drawerDocked ? DRAWER_WIDTH : 0,
          }}
        >
          {children}
        </div>
      </div>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;

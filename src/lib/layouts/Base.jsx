import { Link } from 'nucleate';
import React, { Component, PropTypes } from 'react';
import muiThemeable from 'material-ui/styles/muiThemeable';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import { List } from 'material-ui/List';

import DrawerLink from 'lib/components/DrawerLink';
import logo from 'lib/img/nucleate-logo.svg';

const DRAWER_WIDTH = 256;

class BaseLayout extends Component {

  static defaultProps = {
    appBarShadow: true,
    contentPadding: '2em',
    drawerDockable: true,
  }

  constructor(props, context) {
    super(props, context);
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
    this.setState({ mql });
    this.mediaQueryChanged(mql);
  }

  componentWillUnmount() {
    this.state.mql.removeListener(this.mediaQueryChanged);
  }

  mediaQueryChanged(mql) {
    this.setState({ drawerDocked: mql.matches });
  }

  handleDrawerClose() {
    this.setState({ drawerOpen: false });
  }

  render() {
    const { appBarShadow, children, muiTheme } = this.props;
    const { drawerDocked, drawerOpen } = this.state;

    const isDrawerDocked = this.props.drawerDockable && drawerDocked;

    return (
      <div
        style={{
          display: 'flex',
          flex: '1',
        }}
      >
        <AppBar
          onLeftIconButtonTouchTap={
            () => this.setState({ drawerOpen: !this.state.drawerOpen })
          }
          showMenuIconButton={!isDrawerDocked}
          style={{
            marginLeft: isDrawerDocked ? DRAWER_WIDTH : 0,
            position: 'fixed',
          }}
          zDepth={appBarShadow ? 1 : 0}
        />
        <Drawer
          docked={isDrawerDocked}
          onRequestChange={
            open => this.setState({ drawerOpen: open })
          }
          open={isDrawerDocked || drawerOpen}
          width={DRAWER_WIDTH}
        >
          <AppBar
            showMenuIconButton={false}
            style={{
              padding: 0,
            }}
            title={
              <Link
                onTouchTap={() => this.handleDrawerClose()}
                style={{
                  // Inherit text color from AppBar theme
                  color: 'inherit',
                  display: 'flex',
                  paddingLeft: '16px',
                  paddingRight: '16px',
                  textDecoration: 'none',
                }}
                to="/"
              >
                <img
                  style={{
                    height: '2rem',
                    alignSelf: 'center',
                  }}
                  alt="Nucleate Logo"
                  src={logo}
                />
                Nucleate
              </Link>
            }
          />
          <List>
            <DrawerLink
              onTouchTap={() => this.handleDrawerClose()}
              to="/getting-started"
            >
              Getting Started
            </DrawerLink>
            <DrawerLink
              onTouchTap={() => this.handleDrawerClose()}
              to="/usage"
            >
              Usage
            </DrawerLink>
            <DrawerLink
              onTouchTap={() => this.handleDrawerClose()}
              to="/api"
            >
              API
            </DrawerLink>
            <DrawerLink
              onTouchTap={() => this.handleDrawerClose()}
              to="/comparison"
            >
              Comparison
            </DrawerLink>
            <DrawerLink
              external
              onTouchTap={() => this.handleDrawerClose()}
              to="https://github.com/nucleate/nucleate"
            >
              Github
            </DrawerLink>
          </List>
        </Drawer>
        <div
          style={{
            display: 'flex',
            flex: '1',
            marginLeft: isDrawerDocked ? DRAWER_WIDTH : 0,
            marginTop: muiTheme.appBar.height,
          }}
        >
          {children}
        </div>
      </div>
    );
  }
}

BaseLayout.propTypes = {
  appBarShadow: PropTypes.bool,
  children: PropTypes.node,
  drawerDockable: PropTypes.bool,
  muiTheme: PropTypes.object.isRequired,
};

export default muiThemeable()(BaseLayout);

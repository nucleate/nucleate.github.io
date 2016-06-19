import muiThemeable from 'material-ui/styles/muiThemeable';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'nucleate';
import React from 'react';

import logo from 'lib/img/nucleate-logo.svg';

export const meta = {
  layoutProps: {
    appBarShadow: false,
    contentPadding: '0',
    drawerDockable: false,
  },
};

export const component = muiThemeable()(({ muiTheme }) => (
  <div
    style={{
      alignItems: 'center',
      backgroundColor: muiTheme.appBar.color,
      display: 'flex',
      flex: '1',
      flexDirection: 'column',
      justifyContent: 'center',
    }}
  >
    <img
      style={{
        height: '10rem',
      }}
      alt="Nucleate Logo"
      src={logo}
    />
    <h1
      style={{
        color: muiTheme.palette.alternateTextColor,
        marginBottom: 0,
      }}
    >
      Nucleate
    </h1>
    <p
      style={{
        color: muiTheme.palette.alternateTextColor,
        marginLeft: '16px',
        marginRight: '16px',
      }}
    >
      A static site generator powered by{' '}
      <a
        href="https://facebook.github.io/react/"
        style={{ color: muiTheme.palette.alternateTextColor }}
        target="_blank"
      >
        React
      </a>
      {' '}
      and{' '}
      <a
        href="http://webpack.github.io/"
        style={{ color: muiTheme.palette.alternateTextColor }}
        target="_blank"
      >
        webpack
      </a>
    </p>
    <RaisedButton
      label={
        <Link
          style={{
            color: muiTheme.palette.textColor,
            paddingLeft: '16px',
            paddingRight: '16px',
            textDecoration: 'none',
          }}
          to="/getting-started"
        >
          Get Started
        </Link>
      }
      labelStyle={{
        display: 'block',
        padding: 0,
      }}
    />
  </div>
));

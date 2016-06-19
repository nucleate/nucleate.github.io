import 'normalize.css/normalize.css';

import * as colors from 'material-ui/styles/colors';
import { fade } from 'material-ui/utils/colorManipulator';
import React, { PropTypes } from 'react';
import {
  assets,
  includeRoute,
  includeRoutes,
} from 'nucleate';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Layout from 'lib/components/Layout';

export const getIndexRoute = includeRoute(require('route!./pages/'));
export const getChildRoutes = includeRoutes(require.context('route!./pages/', false));

import './index.module.css';

const theme = getMuiTheme({
  palette: {
    primary1Color: colors.deepPurple500,
    primary2Color: colors.deepPurple700,
    primary3Color: colors.grey400,
    accent1Color: colors.pinkA200,
    accent2Color: colors.grey100,
    accent3Color: colors.grey500,
    textColor: colors.darkBlack,
    alternateTextColor: colors.white,
    canvasColor: colors.white,
    borderColor: colors.grey300,
    disabledColor: fade(colors.darkBlack, 0.3),
    pickerHeaderColor: colors.cyan500,
    clockCircleColor: fade(colors.darkBlack, 0.07),
    shadowColor: colors.fullBlack,
  },
  userAgent: false,
});

const last = arr => arr.slice(-1)[0];

function Index({ children, routes }) {
  const { layoutProps = {} } = last(routes).meta;

  return (
    <html>
      <head>
        <title>Nucleate</title>
        <meta name="viewport" content="width=device-width" />
        {assets()}
      </head>
      <body>
        <MuiThemeProvider muiTheme={theme}>
          <Layout {...layoutProps}>
            {children}
          </Layout>
        </MuiThemeProvider>
      </body>
    </html>
  );
}

Index.propTypes = {
  children: PropTypes.node,
  routes: PropTypes.array.isRequired,
};

export const component = Index;

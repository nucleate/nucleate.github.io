import 'normalize.css/normalize.css';

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

function Index({ children }) {
  return (
    <html>
      <head>
        <title>Nucleate</title>
        <meta name="viewport" content="width=device-width" />
        {assets()}
      </head>
      <body>
        <MuiThemeProvider muiTheme={getMuiTheme({ userAgent: false })}>
          <Layout>{children}</Layout>
        </MuiThemeProvider>
      </body>
    </html>
  );
}

Index.propTypes = {
  children: PropTypes.node,
};

export const component = Index;

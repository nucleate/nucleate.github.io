import 'normalize.css/normalize.css';
import 'highlight.js/styles/default.css';

import * as colors from 'material-ui/styles/colors';
import { fade } from 'material-ui/utils/colorManipulator';
import React, { PropTypes } from 'react';
import {
  assets,
  includeRoute,
  includeRoutes,
} from 'nucleate';
import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import BaseLayout from 'lib/layouts/Base';

import './index.module.css';

const favicons = require.context('!!file?name=[name].[ext]!lib/favicons');

export const getIndexRoute = includeRoute(require('route!./pages/'));

export const getChildRoutes = includeRoutes(require.context('route!./pages/', false));

injectTapEventPlugin();

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
  const { layoutProps = {} } = last(routes).meta || {};

  /* eslint-disable max-len */
  return (
    <html lang="en">
      <head>
        <title>Nucleate</title>
        <link rel="apple-touch-icon" sizes="57x57" href={favicons('./apple-touch-icon-57x57.png')} />
        <link rel="apple-touch-icon" sizes="60x60" href={favicons('./apple-touch-icon-60x60.png')} />
        <link rel="apple-touch-icon" sizes="72x72" href={favicons('./apple-touch-icon-72x72.png')} />
        <link rel="apple-touch-icon" sizes="76x76" href={favicons('./apple-touch-icon-76x76.png')} />
        <link rel="apple-touch-icon" sizes="114x114" href={favicons('./apple-touch-icon-114x114.png')} />
        <link rel="apple-touch-icon" sizes="120x120" href={favicons('./apple-touch-icon-120x120.png')} />
        <link rel="apple-touch-icon" sizes="144x144" href={favicons('./apple-touch-icon-144x144.png')} />
        <link rel="apple-touch-icon" sizes="152x152" href={favicons('./apple-touch-icon-152x152.png')} />
        <link rel="apple-touch-icon" sizes="180x180" href={favicons('./apple-touch-icon-180x180.png')} />
        <link rel="icon" type="image/png" href={favicons('./favicon-16x16.png')} sizes="16x16" />
        <link rel="icon" type="image/png" href={favicons('./favicon-32x32.png')} sizes="32x32" />
        <link rel="icon" type="image/png" href={favicons('./favicon-96x96.png')} sizes="96x96" />
        <link rel="icon" type="image/png" href={favicons('./android-chrome-192x192.png')} sizes="192x192" />
        <link rel="manifest" href={favicons('./manifest.json')} />
        <link rel="mask-icon" href={favicons('./safari-pinned-tab.svg')} color="#5bbad5" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-title" content="Nucleate" />
        <meta name="application-name" content="Nucleate" />
        <meta name="viewport" content="width=device-width" />
        {assets()}
      </head>
      <body>
        <MuiThemeProvider muiTheme={theme}>
          <BaseLayout {...layoutProps}>
            {children}
          </BaseLayout>
        </MuiThemeProvider>
      </body>
    </html>
  );
  /* eslint-enable */
}

Index.propTypes = {
  children: PropTypes.node,
  routes: PropTypes.array.isRequired,
};

export const component = Index;

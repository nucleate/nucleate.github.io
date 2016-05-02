import 'lib/css/poole.css';
import 'lib/css/hyde.css';

import React, { PropTypes } from 'react';
import {
  assets,
  includeRoute,
  includeRoutes,
} from 'nucleate';
import Sidebar from 'lib/components/Sidebar';

export const getIndexRoute = includeRoute(require('route!./pages/'));
export const getChildRoutes = includeRoutes(require.context('route!./pages/', false));

function Index({ children }) {
  return (
    <html>
      <head>
        <title>Nucleate</title>
        {assets()}
      </head>
      <body>
        <Sidebar />
        <div className="content container">
          {children}
        </div>
      </body>
    </html>
  );
}

Index.propTypes = {
  children: PropTypes.node,
};

export const component = Index;

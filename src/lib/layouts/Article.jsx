import muiThemeable from 'material-ui/styles/muiThemeable';
import React, { PropTypes } from 'react';

import styles from './Article.module.css';

function ArticleLayout({ children, muiTheme }) {
  return (
    <div
      className={styles.article}
      style={{
        color: muiTheme.palette.textColor,
      }}
    >
      {children}
    </div>
  );
}

ArticleLayout.propTypes = {
  children: PropTypes.node,
  muiTheme: PropTypes.object.isRequired,
};

export default muiThemeable()(ArticleLayout);

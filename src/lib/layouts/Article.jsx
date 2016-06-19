import React, { PropTypes } from 'react';

function ArticleLayout({ children }) {
  return (
    <div
      style={{
        padding: '2em',
      }}
    >
      {children}
    </div>
  );
}

ArticleLayout.propTypes = {
  children: PropTypes.node,
};

export default ArticleLayout;

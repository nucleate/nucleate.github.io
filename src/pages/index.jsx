import React from 'react';

export const meta = {
  layoutProps: {
    drawerDockable: false,
  },
};

export const component = () => (
  <div>
    <h1>Nucleate</h1>
    <p>
      A static site generator powered by{' '}
      <a href="https://facebook.github.io/react/" target="_blank">React</a>{' '}
      and{' '}
      <a href="http://webpack.github.io/" target="_blank">webpack</a>
    </p>
  </div>
);

import { ListItem } from 'material-ui/List';
import muiThemeable from 'material-ui/styles/muiThemeable';
import { fade } from 'material-ui/utils/colorManipulator';
import { Link } from 'nucleate';
import React, { PropTypes } from 'react';

function DrawerListItem(props) {
  return <ListItem innerDivStyle={{ padding: 0 }} type={null} {...props} />;
}

function DrawerLink({ muiTheme, external, to, ...props }) {
  const styles = {
    activeStyle: {
      backgroundColor: fade(muiTheme.palette.textColor, 0.2),
    },
    style: {
      color: 'inherit',
      display: 'flex',
      padding: '16px',
      textDecoration: 'none',
    },
  };

  const link = external
    ? <a {...styles} href={to} target="_blank" {...props} />
    : <Link {...styles} className={styles.drawerLink} to={to} {...props} />;

  return <DrawerListItem value={to}>{link}</DrawerListItem>;
}
DrawerLink.propTypes = {
  external: PropTypes.bool,
  muiTheme: PropTypes.object.isRequired,
  to: PropTypes.string,
};

export default muiThemeable()(DrawerLink);

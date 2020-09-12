import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import ThemeToggleButton from '../ThemeToggleButton';

export const HEIGHT = 36;
export const PADDING = 8;

const useStyles = makeStyles(({ spacing, palette }) => ({
  container: {
    height: HEIGHT,
    padding: PADDING,
    backgroundColor: palette.background.paper,
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <ThemeToggleButton />
    </Box>
  );
};

export default Header;

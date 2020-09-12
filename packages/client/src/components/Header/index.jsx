import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import ThemeToggleButton from '../ThemeToggleButton';

export const HEIGHT = 52;

const useStyles = makeStyles(({ spacing, palette }) => ({
  container: {
    maxHeight: HEIGHT,
    padding: spacing(1),
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

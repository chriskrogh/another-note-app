import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

const SIZE = 350;
const BORDER_WIDTH = 1;

const useStyles = makeStyles(({ spacing, palette, breakpoints }) => ({
  container: {
    margin: spacing(1),
    backgroundColor: palette.background.paper,
    border: `${BORDER_WIDTH}px solid ${palette.primary.main}`,
    borderRadius: 8,
    minHeight: 200,
    width: SIZE,
    [breakpoints.down('sm')]: {
      width:
        window.innerWidth -
        (2 * spacing(2) + 4 * spacing(1) + 2 * BORDER_WIDTH),
    },
  },
}));

const LoadingNote = () => {
  const classes = useStyles();
  return <Box className={classes.container} />;
};

export default LoadingNote;

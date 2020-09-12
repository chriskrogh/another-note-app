import React, { useContext } from 'react';
import { withStyles, createStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import { ThemeContext } from '../../context/theme/state';
import LightTheme from '../../theme/light';
import DarkTheme from '../../theme/dark';

const styles = ({ spacing, palette, breakpoints }) =>
  createStyles({
    button: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: palette.text.primary,
    },
  });

function ThemeToggleButton({ classes }) {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    setTheme(theme.name === LightTheme.name ? DarkTheme : LightTheme);
  };

  return (
    <Button className={classes.button} onClick={toggleTheme}>
      <Brightness4Icon />
    </Button>
  );
}

export default withStyles(styles)(ThemeToggleButton);

import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    type: 'light',
    background: {
      default: '#fff',
      paper: 'rgb(245, 245, 245)',
    },
    text: {
      primary: 'rgb(30, 30, 30)',
      secondary: 'rgb(86, 86, 86)',
    },
    primary: {
      main: '#4834d4',
    },
    secondary: {
      main: '#22a6b3',
    },
    success: {
      main: '#2ed573',
    },
    error: {
      main: '#ff4757',
    },
  },
});

export default { ...theme, name: 'light' };

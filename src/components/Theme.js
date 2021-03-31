import { createMuiTheme } from '@material-ui/core/styles';

const articGrey = '#dddddd';
const blackSome = '#222831';
const greyish = '#30475e';
const pink = '#f05454';

export default createMuiTheme({
  palette: {
    common: {
      grey: `${greyish}`,
    },
    primary: {
      main: `${articGrey}`,
    },
    secondary: {
      main: `${pink}`,
    },
    tertiaryt:{
      main: `${pink}`
    }
  },
  typography: {
    tab: {
      fontFamily: 'Raleway',
      textTransform: 'none',
      fontWeight: 700,
      fontSize: '1rem',
    },
  },
});

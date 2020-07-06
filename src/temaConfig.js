import { createMuiTheme } from "@material-ui/core/styles";
import { lightGreen, blueGrey } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    primary: blueGrey,
    secondary: lightGreen,
  },
});

export default theme;


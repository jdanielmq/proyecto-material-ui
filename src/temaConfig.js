import { createMuiTheme } from "@material-ui/core/styles";
import { purple, lightGreen, blueGrey } from "@material-ui/core/colors";
import { deepOrange } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    primary: blueGrey,
    secondary: lightGreen,
  },
});

export default theme;
import { createTheme } from "@material-ui/core/styles";
import {
  black,
  deepPurple,
  amber,
  brown,
  orange,
} from "@material-ui/core/colors";
import { alpha, makeStyles } from "@material-ui/core/styles";

const theme = createTheme({
  components: {
    MuiTypography: {
      root: {
        fontFamily: "Emilys Candy",
      },
      variants: [
        {
          props: {
            variant: "body2",
          },
          style: {
            fontSize: 11,
          },
        },
        {
          props: {
            variant: "button",
          },
          style: {
            fontSize: 9,
          },
        },
        {
          props: {
            variant: "body1",
          },
          style: {
            fontSize: 25,
          },
        },
      ],
    },
  },
  palette: {
    primary: {
      main: "#F5DADF",
      // main: deepPurple[700],
    },

    secondary: {
      main: "#000000",
      contrastText: amber[900],
    },
  },
});

theme.overrides = {
  MuiButton: {
    root: {
      borderRadius: 15,
      textTransform: "none",
      fontSize: 20,
      fontFamily: "Emilys Candy",
    },
    containedPrimary: {
      "&:hover": {
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.primary.dark,
      },
    },
    containedSecondary: {
      fontWeight: 700,
    },
  },
};

export const useProductStyles = makeStyles((theme) => ({
  root: {
    display: "flex grow",
    maxHeight: "100%",
    minHeight: "100%",
    maxWidth: 500,
    minWidth: 200,
  },
  image: {
    minWidth: "100%",
    maxWidth: "100%",
    minHeight: 180,
    maxHeight: 400,
    position: "static",
    backgroundSize: "contain",
  },
  media: {
    display: "flex",
    height: "auto",
    // width: 100,
  },
  p: {
    color: "#0288d1",
    fontSize: 20,
    fontFamily: "Emilys Candy",
  },
  h4: {
    color: "#0288d1",
    fontSize: 20,
    fontFamily: "Emilys Candy",
  },
}));

export const useNavStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 4,
    marginBottom: 25,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default theme;

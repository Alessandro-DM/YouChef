import { createTheme } from "@material-ui/core/styles";
import {
  amber, blue, blueGrey, brown, common, cyan, deepOrange, deepPurple, green, grey, indigo, lightBlue, lightGreen, lime, orange, pink, purple, red, teal, yellow,
} from "@material-ui/core/colors";
import { alpha, makeStyles } from "@material-ui/core/styles";

const theme = createTheme({
  components: {
    MuiTypography: {
      root: {
        fontFamily: "Roboto",
      },
      variants: [
        {
          props: {
            variant: "body2",
          },
          style: {
            fontSize: 1,
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
      main: brown[600],
      contrastText: "#FFFFFF",
    },

    secondary: {
      main: "#000000",
      contrastText: blue,
    },
  },
});

theme.overrides = {
  MuiButton: {
    root: {
      borderRadius: 15,
      textTransform: "none",
      fontSize: 15,
      fontFamily: "Roboto",
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

export const useChefStyles = makeStyles((theme) => ({
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
  },
  p: {
    color: "white",
    fontSize: 12,
    fontFamily: "Roboto",
  },
  h3: {
    color: "white",
    fontSize: 20,
    fontFamily: "Roboto",
  },
  h4: {
    color: "black",
    fontSize: 40,
    fontFamily: "Roboto",
  },
}));

export const useNavStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 4,
    marginBottom: 25,
  },
  menuButton: {
    marginRight: theme.spacing(5),
  },
  title: {
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  // search: {
  //   position: "relative",
  //   borderRadius: theme.shape.borderRadius,
  //   backgroundColor: alpha(theme.palette.common.white, 0.15),
  //   "&:hover": {
  //     backgroundColor: alpha(theme.palette.common.white, 0.25),
  //   },
  //   marginLeft: 0,
  //   width: "100%",
  //   [theme.breakpoints.up("sm")]: {
  //     marginLeft: theme.spacing(1),
  //     width: "auto",
  //   },
  // },
  // searchIcon: {
  //   padding: theme.spacing(0, 2),
  //   height: "100%",
  //   position: "absolute",
  //   pointerEvents: "none",
  //   display: "flex",
  //   alignItems: "center",
  //   justifyContent: "center",
  // },
  // inputRoot: {
  //   color: "inherit",
  // },
  // inputInput: {
  //   padding: theme.spacing(1, 1, 1, 0),
  //   // vertical padding + font size from searchIcon
  //   paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
  //   transition: theme.transitions.create("width"),
  //   width: "100%",
  //   [theme.breakpoints.up("sm")]: {
  //     width: "12ch",
  //     "&:focus": {
  //       width: "20ch",
  //     },
  //   },
  // },
}));

export default theme;
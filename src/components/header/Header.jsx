import React from "react";
import {
  AppBar,
  Container,
  createTheme,
  makeStyles,
  MenuItem,
  Select,
  ThemeProvider,
  Toolbar,
  Typography,
} from "@material-ui/core";
import Colors from "../../constants/colors";
import { useNavigate } from "react-router-dom";

const usesStyles = makeStyles(() => ({
  title: {
    flex: 1,
    color: Colors.gold,
    fontFamily: "Lato",
    fontWeight: "bold",
    cursor: "pointer",
  },
}));

const Header = () => {
  const darkTheme = createTheme({
    palette: {
      primary: {
        main: Colors.white,
      },
      type: "dark",
    },
  });
  const classes = usesStyles();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar color="transparent" position="static">
        <Container>
          <Toolbar>
            <Typography
              onClick={handleClick}
              className={classes.title}
              variant="h6"
            >
              Cryptofy 📊
            </Typography>
            <Select
              variant="outlined"
              style={{
                width: 100,
                height: 40,
                marginRight: 15,
              }}
            >
              <MenuItem value={"INR"}>INR</MenuItem>
              <MenuItem value={"USD"}>USD</MenuItem>
            </Select>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
};

export default Header;

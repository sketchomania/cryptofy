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
import { CryptoState } from "../../CryptoContext";

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
        main: Colors.yellow,
      },
      type: "dark",
    },
  });
  const classes = usesStyles();
  const navigate = useNavigate();

  const { currency, setCurrency } = CryptoState();
  // console.log(currency);

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
              Cryptofy{" "}
              <span role="img" aria-label="Chart">
                📊
              </span>
            </Typography>
            <Select
              variant="outlined"
              style={{
                width: 100,
                height: 40,
                marginRight: 15,
              }}
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
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

import { makeStyles } from "@material-ui/core";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import Colors from "./constants/colors";
import Coinpage from "./pages/Coinpage";
import Homepage from "./pages/Homepage";

function App() {
  const useStyles = makeStyles(() => ({
    App: {
      backgroundColor: Colors.appDark,
      color: Colors.white,
      minHeight: "100vh",
    },
  }));

  const classes = useStyles();

  return (
    <BrowserRouter>
      <div className={classes.App}>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="coins" >
            <Route path=":id" element={<Coinpage />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

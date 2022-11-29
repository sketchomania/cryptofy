import { makeStyles } from "@material-ui/core";
import React from "react";
import Colors from "../../constants/colors";

const SelectButton = ({ children, selected, onClick }) => {
  const useStyles = makeStyles({
    selectButtonStyle: {
      border: "1px solid gold",
      borderRadius: 5,
      padding: 10,
      paddingLeft: 20,
      paddingRight: 20,
      fontFamily: "Lato",
      cursor: "pointer",
      backgroundColor: selected ? "gold" : "transparent",
      color: selected ? Colors.black : Colors.darkWhite,
      fontWeight: selected ? 700 : 500,
      "&:hover": {
        backgroundColor: Colors.yellow,
        color: Colors.black,
      },
      width: "22%",
      //   margin: 5,
    },
  });

  const classes = useStyles();

  return (
    <button onClick={onClick} className={classes.selectButtonStyle}>
      {children}
    </button>
  );
};

export default SelectButton;

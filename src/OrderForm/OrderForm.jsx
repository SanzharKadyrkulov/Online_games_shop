import {
  Button,
  Container,
  makeStyles,
  Snackbar,
  TextField,
} from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import React, { useState } from "react";
//   import Cards from "react-credit-cards";
import Cards from 'react-credit-cards';

import "react-credit-cards/es/styles-compiled.css";
import { useProducts } from "../contexts/ProductContext";
//   import { useGames } from "../../contexts/GameContext";
const useStyles = makeStyles((theme) => ({
  inps: {
    margin: "10px 0",
    borderBottom: "1px white solid",
  },
  inpColor: {
    color: "black",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    maxWidth: "400px",
    marginTop: "20px",
  },
  container: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    margin: "60px 0",
  },
  payBtn: {
    backgroundColor: "green",
    color: "white",
  },
}));
const Purchase = () => {
  const [open, setOpen] = useState(false);
  // const { toLibrary, history } = useGames();
  const { history } = useProducts()
  const classes = useStyles();
  const [cvc, setCvc] = useState("");
  const [expiry, setExpiry] = useState("");
  const [focus, setFocus] = useState("");
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleInputFocus = (e) => {
    setFocus(e.target.name);
  };

  const handleInputNumber = (e) => {
    if (e.target.value.length < 17) setNumber(e.target.value);
  };
  const handleInputExpiry = (e) => {
    if (e.target.value.length < 5) {
      setExpiry(e.target.value);
    }
  };
  const handleInputCvc = (e) => {
    if (e.target.value.length < 5) {
      setCvc(e.target.value);
    }
  };
  const handleInputName = (e) => {
    setName(e.target.value);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const curUser = JSON.parse(localStorage.getItem("user"));
  return (
    <div id="PaymentForm" className={classes.container} style={{ backgroundImage: 'url(https://mydesktopwalls.com/wp-content/uploads/2021/02/Mortal-Kombat-HD-Wallpaper.jpg)' }}>
      <Cards
        cvc={cvc}
        expiry={expiry}
        focused={focus}
        name={name}
        number={number}
      />
      <form className={classes.form}>
        <TextField
          className={classes.inps}
          required
          InputProps={{
            className: classes.inpColor,
          }}
          InputLabelProps={{
            style: { color: "white" },
          }}
          type="tel"
          name="number"
          placeholder="Card Number"
          onChange={(e) => handleInputNumber(e)}
          onFocus={(e) => handleInputFocus(e)}
        />
        <TextField
          className={classes.inps}
          required
          InputProps={{
            className: classes.inpColor,
          }}
          InputLabelProps={{
            style: { color: "#fff" },
          }}
          type="tel"
          name="expiry"
          placeholder="Card Expiry"
          onChange={(e) => handleInputExpiry(e)}
          onFocus={(e) => handleInputFocus(e)}
        />
        <TextField
          className={classes.inps}
          required
          InputProps={{
            className: classes.inpColor,
          }}
          InputLabelProps={{
            style: { color: "white" },
          }}
          type="tel"
          name="cvc"
          placeholder="Card Cvc"
          onChange={(e) => handleInputCvc(e)}
          onFocus={(e) => handleInputFocus(e)}
        />
        <TextField
          className={classes.inps}
          required
          InputProps={{
            className: classes.inpColor,
          }}
          InputLabelProps={{
            style: { color: "white" },
          }}
          type="tel"
          name="name"
          placeholder="Name"
          onChange={(e) => handleInputName(e)}
          onFocus={(e) => handleInputFocus(e)}
        />
        <Button
          className={classes.payBtn}
          onClick={() => {
            // toLibrary(curUser.cart);
            handleOpen();
            history.push('/thanks')
          }}
        >
          Pay
        </Button>
      </form>
      <Snackbar open={open} autoHideDuration={1500} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          Order successfully completed!
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Purchase;
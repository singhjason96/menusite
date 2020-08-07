import React, { useContext, useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import {
  FormControl,
  InputLabel,
  Input,
  FormControlLabel,
  Button,
  MenuItem,
  FormHelperText,
  Select,
  Typography
} from "@material-ui/core";
import firebase from "./Firebase";

const useStyles = makeStyles((theme) => ({
  formStyle: {
    width: "50%",
    marginRight: "auto",
    marginLeft: "auto",
  },
}));

export const FoodPage = () => {
  var [data, setData] = useState([]);
  var [name, setName] = useState("");
  var [price, setPrice] = useState();
  var [title, setTitle] = useState("");
  var [pic, setPic] = useState("");
  const classes = useStyles();

  const OnChangeName = (e) => {
    setName(e.target.value);
  };
  const OnChangePrice = (e) => {
    setPrice(e.target.value);
  };
  const OnTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const OnPicChange = (e) => {
    setPic(e.target.value);
  };

  let foodData = [];

  const onSubmit = () => {
    foodData.push({ itemName: name, itemPrice: price });
    setData(foodData);
    firebase.database().ref(`items/${new Date().getTime()}`).set({
      itemName: name,
      itemPrice: price,
      itemTitle: title,
      itemPic: pic,
    });
  };

  console.log("title", title);

  return (
    <>
    <Typography align="center" variant="h3">Add Item</Typography>
      <form className={classes.formStyle}>
        <FormControl>
          <InputLabel id="demo-simple-select-label"></InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={title}
            onChange={OnTitleChange}
          >
            <MenuItem value={"Beverage"}>Beverages</MenuItem>
            <MenuItem value={"Fish"}>Fish</MenuItem>
            <MenuItem value={"Other"}>Other</MenuItem>
          </Select>
        </FormControl>
        <FormControl margin="normal" required fullWidth>
          <InputLabel htmlFor="name">Name of Item</InputLabel>
          <Input id="name" name="name" value={name} onChange={OnChangeName} />
        </FormControl>
        <FormControl margin="normal" required fullWidth>
          <InputLabel htmlFor="name">Price</InputLabel>
          <Input
            id="price"
            name="price"
            value={price}
            onChange={OnChangePrice}
          />
        </FormControl>
        <FormControl margin="normal" required fullWidth>
          <InputLabel htmlFor="pic">Link Address of Pic</InputLabel>
          <Input id="pic" name="pic" value={pic} onChange={OnPicChange} />
        </FormControl>
        <Button onClick={onSubmit}>Submit</Button>
      </form>
    </>
  );
};

import React, { useEffect, useState } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import {
  Grid,
  Card,
  Typography,
  CardActions,
  CardContent,
  CardMedia,
  CardHeader,
  Paper,
} from "@material-ui/core";
import Container from "@material-ui/core/Container";
import {
  createStyles,
  makeStyles,
  Theme,
  createMuiTheme,
} from "@material-ui/core/styles";
import { foodData } from "../Data/FoodData";
import firebase from "../Data/Firebase";

const theme = createMuiTheme({
  spacing: 4,
});

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: 355,
      height: 355,
      margin: theme.spacing(1),
    },
    media: {
      height: 140,
    },
    contain: {
      display: "flex",
      flexDirection: "column",
      paddingLeft: "0px !important",
      paddingRight: "0px !important",
      ["@media (min-width:780px)"]: {
        display: "flex",
        flexDirection: "row",
      },
    },
    title: {
      fontSize: "1.8rem",
      fontFamily: "'Noto Sans', sans-serif",
      textAlign: "center",
      marginTop: "16px",
      marginBottom: "16px",
    },
    topCard: {
      display: "flex",
    },
  })
);

export default function SectionTwo() {
  const classes = useStyles();
  const [foodMenu, setFoodMenu] = useState([]);
  var itemTitles = ["Beverage", "Fish", "Other"];

  useEffect(() => {
    const ref = firebase.database().ref("/items/");
    ref.on("value", (snapshot) => {
      const dbMenu = snapshot.val();
      const dbClean = Object.values(dbMenu);
      setFoodMenu(dbClean);
    });
  }, []);

  console.log("food menu", foodMenu);

  return (
    <React.Fragment>
      <Typography className={classes.title}>Our Amazing Menu</Typography>
      <CssBaseline />
      {itemTitles.map((el) => {
        return (
          <>
            <Typography>{el}</Typography>
            <Container>
              {foodMenu.map((item) => {
                console.log(item.itemPic)
                return (
                  el === item.itemTitle && (
                    <Card xs={3}>
                      <Typography variant="h5">{item.itemName}</Typography>
                      <CardMedia image={item.itemPic}/>
                      <CardContent>${item.itemPrice}</CardContent>
                    </Card>
                  )
                );
              })}
            </Container>
          </>
        );
      })}
    </React.Fragment>
  );
}

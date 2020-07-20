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
  Paper
} from "@material-ui/core";
import Container from "@material-ui/core/Container";
import { createStyles, makeStyles, Theme, createMuiTheme } from "@material-ui/core/styles";
import { foodData } from "../Data/FoodData";
import firebase from '../Data/Firebase';

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
      height: 140
    },
    contain: {
        display: 'flex',
        flexDirection: 'column',
        paddingLeft: '0px !important',
        paddingRight: '0px !important',
        ['@media (min-width:780px)']: {
            display: 'flex',
            flexDirection: 'row',
        }
    },
    title: {
        fontSize: '1.8rem',
        fontFamily: "'Noto Sans', sans-serif",
        textAlign: 'center',
        marginTop: '16px',
        marginBottom: '16px',
    },
    topCard: {
      display: 'flex',
    }
  })
);

export default function SectionTwo() {
  const classes = useStyles();
  const [foodMenu, setFoodMenu] = useState([
    { name: "", price: "", img: "", descr: "" }
  ]);

  useEffect(() => {
    const ref = firebase.database().ref('/items/')
    ref.on('value', snapshot => {
      console.log("snapshot", snapshot.val())
    })
    var foodList = [];
    foodData.map(food => {
      var foodName = food.name;
      var foodPrice = food.price;
      var foodPic = food.image;
      var foodDescr = food.description;
      foodList.push({
        name: foodName,
        price: foodPrice,
        img: foodPic,
        descr: foodDescr
      });
      setFoodMenu(foodList);
    });
  }, []);

  {
      return (
        <React.Fragment>
        <CssBaseline />
        <Typography className={classes.title}>Our Amazing Menu</Typography>
        <Container maxWidth="100%" className={classes.contain}>

        {foodMenu.map((item) => {
            return (
            <Card className={classes.root}>
             <Container className={classes.topCard}>
             <CardHeader title={item.name} />
             <CardHeader title={item.price} />
             </Container>
              <CardMedia
                className={classes.media}
                title="Paella dish"
                image={item.img}
              />
              <CardContent>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                >
                  {item.descr}
                </Typography>
              </CardContent>
            </Card>
    
            )
        })}
        </Container>
      </React.Fragment>
        
      );

  }
}

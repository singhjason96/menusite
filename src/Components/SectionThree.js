import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import {
  Grid,
  Paper,
  Container,
  Card,
  CardContent,
  Divider
} from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },

    statements: {
      color: "#fff",
      fontSize: "5em",
      fontFamily: "'Noto Sans', sans-serif",
      textAlign: "center"
    },
    contain: {
      paddingLeft: "0px !important",
      paddingRight: "0px !important",
      background: "black",
      overflow: "hidden",
      background: "#4fb9c5",
      marginTop: "16px"
    },
    gridContain: {
      ["@media (min-width:780px)"]: {
      }
    },
    about: {
      fontFamily: "'Noto Sans', sans-serif",
      fontSize: ".85rem"
    },
    title: {
      fontSize: "2rem",
      fontWeight: "bold",
      textAlign: "left",
      marginTop: "8px"
    },
    overLay: {
      width: "100%",
      ["@media (min-width:780px)"]: {
        width: "100%",
        backgroundColor: "#fff",
        opacity: "0.7",
        float: "right",
        height: "100%"
      }
    },
    top: {
      float: "right"
    },
    pic: {
      width: "100%",
      backgroundImage:
          "url('https://i.ytimg.com/vi/jGVDyrLNRKk/maxresdefault.jpg')",
      backgroundSize: "cover",
      opacity: "0.7",
      ["@media (min-width:780px)"]: {
        justifyContent: "space-evenly",
        backgroundImage:
          "url('https://i.ytimg.com/vi/jGVDyrLNRKk/maxresdefault.jpg')",
        backgroundSize: "cover",
        opacity: "0.7",
        float: "left",
      }
    }
  })
);

export default function SectionThree() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="100%" className={classes.contain}>
        <Grid container className={classes.gridContain}>
          <Grid item xs={6} className={classes.top}>
            <Card className={classes.overLay} variant="outlined">
              <CardContent>
                <Typography
                  className={classes.title}
                  color="textSecondary"
                  gutterBottom
                >
                  About Us
                </Typography>
                <Divider />
                <Typography className={classes.about}>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.
                  Many desktop publishing packages and web page editors now use
                  Lorem Ipsum as their default model text, and a search for
                  'lorem ipsum' will uncover many web sites still in their
                  infancy. Various versions have evolved over the years,
                  sometimes by accident, sometimes on purpose (injected humour
                  and the like).
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={6} className={classes.pic}>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}

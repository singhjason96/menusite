import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    topBox: {
      backgroundColor: "#4fb9c5",
      height: "50vh",
      justifyContent: "space-evenly",
      backgroundImage:
        "url('https://d1ralsognjng37.cloudfront.net/1ba08c61-f131-4e5e-b65a-dadf9d6b9e9f')",
      backgroundSize: "cover",
      opacity: "0.7"
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
      background: "#4fb9c5"
    }
  })
);

export default function SectionOne() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="100%" className={classes.contain}>
        <Grid container className={classes.topBox}>
          <Grid container>
            <Grid item xs={6}>
              <Typography className={classes.statements}>Fish</Typography>
              <Typography className={classes.statements}>&</Typography>
              <Typography className={classes.statements}>Chips</Typography>
            </Grid>
          </Grid>

        </Grid>
      </Container>
    </React.Fragment>
  );
}

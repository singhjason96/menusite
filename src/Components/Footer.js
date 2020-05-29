import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import {
  Grid,
  Toolbar,
  Typography,
  AppBar,
  Container
} from "@material-ui/core";
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    footer: {
      backgroundColor: "#4fb9c5",
    },
    spacing: {
      justifyContent: "space-evenly"
    },
    contain: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    text: {
        textAlign: 'center',
        fontSize: '1.2em',
        fontWeight: "bold"
    }
  })
);

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.footer}>
        <Toolbar>
          <Grid container className={classes.spacing}>
            <Grid item>
              <Typography className={classes.text}>Contact Us</Typography>
              <Typography>555-555-5555</Typography>
            </Grid>
            <Grid item>
              <Typography className={classes.text}>Location</Typography>
              <Typography>123 Street Name</Typography>
              <Typography>City, Zip</Typography>
            </Grid>
            <Grid item>
              <Typography className={classes.text}>Follow Us</Typography>
              <Container className={classes.contain}>
              <FacebookIcon />
              <InstagramIcon />
              <TwitterIcon />
              </Container>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}

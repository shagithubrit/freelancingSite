import React, { useState } from "react";
import { AppBar } from "@material-ui/core";
import { Toolbar } from "@material-ui/core";
import { useScrollTrigger } from "@material-ui/core";
import { Tab } from "@material-ui/core";
import { Tabs } from "@material-ui/core";
import {Button} from "@material-ui/core";
// import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import logo from "../../assets/logo.svg";

function ElevationScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
  },
  logo: {
    height: "7em",
  },
  tabContainer: {
    marginLeft: "auto",
  },
  tab: {
    // this will add the styling props of theme from Theme.js
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: "25px"
  },
  button: {
    ...theme.typography.estimate,
    borderRadius : '50px',
    marginLeft :'50px',
    marginRight: '25px',
    height: '45px',
  }
}));

export default function Header(props) {
  const classes = useStyles();
  const [value, setValue]=useState(0);

  const handleChange=(e,value)=>{
    setValue(value);
  }

  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar position="fixed">
          <Toolbar disableGutters>
            <img alt="company logo" src={logo} className={classes.logo} />
            <Tabs value={value} onChange={handleChange} className={classes.tabContainer} indicatorColor='secondary'>
              <Tab className={classes.tab} label="Home"></Tab>
              <Tab className={classes.tab} label=" Services"></Tab>
              <Tab className={classes.tab} label="The Revolution"></Tab>
              <Tab className={classes.tab} label="About Us"></Tab>
              <Tab className={classes.tab} label="Contact Us"></Tab>
            </Tabs>
            <Button variant="contained" color="secondary" className={classes.button}>Free Estimate </Button>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </React.Fragment>
  );
}

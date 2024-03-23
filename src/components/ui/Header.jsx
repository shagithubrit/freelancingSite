// import React, { useEffect, useState } from "react";
// import { AppBar } from "@material-ui/core";
// import { Toolbar } from "@material-ui/core";
// import { useScrollTrigger } from "@material-ui/core";
// import { Tab } from "@material-ui/core";
// import { Tabs } from "@material-ui/core";
// import { Button } from "@material-ui/core";
// // import { Typography } from "@material-ui/core";
// import { makeStyles } from "@material-ui/core";
// import logo from "../../assets/logo.svg";
// import { Link } from "react-router-dom";
// import { Menu } from "@material-ui/core";
// import { MenuItem } from "@material-ui/core";
// import { useNavigate } from "react-router-dom";

// function ElevationScroll(props) {
//   const { children } = props;

//   const trigger = useScrollTrigger({
//     disableHysteresis: true,
//     threshold: 0,
//   });

//   return React.cloneElement(children, {
//     elevation: trigger ? 4 : 0,
//   });
// }

// const useStyles = makeStyles((theme) => ({
//   toolbarMargin: {
//     ...theme.mixins.toolbar,
//   },
//   logo: {
//     height: "8em",
//   },
//   logoContainer: {
//     padding: 0,
//     "&:hover": {
//       backgroundColor: "transparent",
//     },
//   },
//   tabContainer: {
//     marginLeft: "auto",
//   },
//   tab: {
//     // this will add the styling props of theme from Theme.js
//     ...theme.typography.tab,
//     minWidth: 10,
//     marginLeft: "25px",
//   },
//   button: {
//     ...theme.typography.estimate,
//     borderRadius: "50px",
//     marginLeft: "50px",
//     marginRight: "25px",
//     height: "45px",
//   },
//   menu: {
//     backgroundColor: theme.pallette.common.blue,
//     color: "white",
//     borderRadius: "0px",
//   },
//   menuItem: {
//     ...theme.typography.tab,
//     opacity: 0.7,
//     "&:hover": {
//       opacity: 1,
//     },
//   },
// }));

// export default function Header(props) {
//   const classes = useStyles();
//   // const theme = useTheme();
//   const [value, setValue] = useState(0);
//   const [anchorEl, setAnchorEl] = useState(null);
//   const [open, setOpen] = useState(false); // for the visibility of menu
//   const [selectedIndex, setSelectedIndex] = useState(0);
//   const navigate = useNavigate();

//   const handleChange = (e, value) => {
//     setValue(value);
//   };

//   // const handleMenuItemClick = (e, i) => {
//   //   setAnchorEl(null);
//   //   setOpenMenu(false);
//   //   setSelectedIndex(i);
//   // };
//   const handleMenuItemClick = (link) => {
//     setAnchorEl(null);
//     setOpen(false);
//     navigate(link); // Use history.push to navigate to the new link
//   };

//   const handleClick = (e) => {
//     setAnchorEl(e.currentTarget);
//     setOpen(true);
//   };

//   const handleClose = (e) => {
//     setAnchorEl(null);
//     setOpen(false);
//   };

//   const menuOptions = [
//     { name: "Services", link: "/services", activeIndex: 1, selectedIndex: 0 },
//     {
//       name: "Custom Software Development",
//       link: "/customsoftware",
//       activeIndex: 1,
//       selectedIndex: 1,
//     },
//     {
//       name: "iOS/Android App Development",
//       link: "/mobileapps",
//       activeIndex: 1,
//       selectedIndex: 2,
//     },
//     {
//       name: "Website Development",
//       link: "/websites",
//       activeIndex: 1,
//       selectedIndex: 3,
//     },
//   ];

//   // this is added to resolve the bug of random rendering of data from random tabPanels in tabs
//   useEffect(() => {
//     if (window.location.pathname === "/" && value !== 0) {
//       setValue(0);
//     } else if (window.location.pathname === "/services" && value !== 1) {
//       setValue(1);
//     } else if (window.location.pathname === "/revolution" && value !== 2) {
//       setValue(2);
//     } else if (window.location.pathname === "/about" && value !== 3) {
//       setValue(3);
//     } else if (window.location.pathname === "/contact" && value !== 4) {
//       setValue(4);
//     } else if (window.location.pathname === "/estimate" && value !== 5) {
//       setValue(5);
//     }
//   }, [value, selectedIndex]);

//   return (
//     <React.Fragment>
//       <ElevationScroll>
//         <AppBar position="fixed">
//           <Toolbar disableGutters>
//             <Button
//               disableRipple
//               component={Link}
//               to="/"
//               onClick={() => setValue(0)}
//               className={classes.logoContainer}
//             >
//               <img alt="company logo" src={logo} className={classes.logo} />
//             </Button>
//             <Tabs
//               value={value}
//               onChange={handleChange}
//               className={classes.tabContainer}
//               indicatorColor="secondary"
//             >
//               <Tab
//                 className={classes.tab}
//                 component={Link}
//                 to="/"
//                 label="Home"
//               ></Tab>
//               <Tab
//                 aria-owns={anchorEl ? "simple-menu" : undefined}
//                 aria-haspopup={anchorEl ? "true" : undefined}
//                 className={classes.tab}
//                 component={Link}
//                 onMouseOver={(event) => handleClick(event)}
//                 to="/services"
//                 label=" Services"
//               ></Tab>
//               <Tab
//                 className={classes.tab}
//                 component={Link}
//                 to="/revolution"
//                 label="The Revolution"
//               ></Tab>
//               <Tab
//                 className={classes.tab}
//                 component={Link}
//                 to="/about"
//                 label="About Us"
//               ></Tab>
//               <Tab
//                 className={classes.tab}
//                 component={Link}
//                 to="/contact"
//                 label="Contact Us"
//               ></Tab>
//             </Tabs>
//             <Button
//               variant="contained"
//               color="secondary"
//               className={classes.button}
//             >
//               Free Estimate{" "}
//             </Button>
//             <Menu
//               id="simple-menu"
//               anchorEl={anchorEl}
//               open={open}
//               onClose={handleClose}
//               // style={{ backgroundColor: theme.palette.common.blue }}
//               classes={{ paper: classes.menu }}
//               MenuListProps={{ onMouseLeave: handleClose }}
//               elevation={0}
//             >
//               {menuOptions.map((option, i) => (
//                 <MenuItem
//                   key={option.name}
//                   component={Link}
//                   to={option.link}
//                   classes={{ root: classes.menuItem }}
//                   onClick={() => handleMenuItemClick(option.link)}
//                   // selected={i === selectedIndex && value === 1}
//                   elevation={0}
//                 >
//                   {option.name}
//                 </MenuItem>
//               ))}
//             </Menu>
//           </Toolbar>
//         </AppBar>
//       </ElevationScroll>
//       <div className={classes.toolbarMargin} />
//     </React.Fragment>
//   );
// }
import React, { useEffect, useState } from "react";
import { AppBar } from "@material-ui/core";
import { Toolbar } from "@material-ui/core";
import { useScrollTrigger } from "@material-ui/core";
import { Tab } from "@material-ui/core";
import { Tabs } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import logo from "../../assets/logo.svg";
import { Link, withRouter } from "react-router-dom";
import { Menu } from "@material-ui/core";
import { MenuItem } from "@material-ui/core";

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
    height: "8em",
  },
  logoContainer: {
    padding: 0,
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  tabContainer: {
    marginLeft: "auto",
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: "25px",
  },
  button: {
    ...theme.typography.estimate,
    borderRadius: "50px",
    marginLeft: "50px",
    marginRight: "25px",
    height: "45px",
  },
  menu: {
    backgroundColor: theme.palette.primary.main,
    color: "white",
    borderRadius: "0px",
  },
  menuItem: {
    ...theme.typography.tab,
    opacity: 0.7,
    color: "white",
    "&:hover": {
      opacity: 1,
      backgroundColor: theme.palette.primary.dark,
    },
  },
  activeMenuItem: {
    opacity: 1,
    backgroundColor: theme.palette.primary.dark, // Darker color for active menu item
  },
}));

function Header(props) {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleChange = (e, value) => {
    setValue(value);
  };

  const handleMenuItemClick = (link, index) => {
    setAnchorEl(null);
    setOpen(false);
    setSelectedIndex(index);
    props.history.push(link);
  };

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
    setOpen(true);
  };

  const handleClose = (e) => {
    setAnchorEl(null);
    setOpen(false);
  };

  const menuOptions = [
    { name: "Services", link: "/services", activeIndex: 1, selectedIndex: 0 },
    {
      name: "Custom Software Development",
      link: "/customsoftware",
      activeIndex: 1,
      selectedIndex: 1,
    },
    {
      name: "iOS/Android App Development",
      link: "/mobileapps",
      activeIndex: 1,
      selectedIndex: 2,
    },
    {
      name: "Website Development",
      link: "/websites",
      activeIndex: 1,
      selectedIndex: 3,
    },
  ];

  useEffect(() => {
    // Get the current path and handle nav item UI once the route gets rendered
    const currentPath = window.location.pathname;

    switch (currentPath) {
      case "/":
        setValue(0);
        setSelectedIndex(0);
        break;
      case "/services":
        setValue(1);
        setSelectedIndex(0);
        break;
      case "/customsoftware":
        setValue(1);
        setSelectedIndex(1);
        break;
      case "/mobileapps":
        setValue(1);
        setSelectedIndex(2);
        break;
      case "/websites":
        setValue(1);
        setSelectedIndex(3);
        break;
      case "/revolution":
        setValue(2);
        setSelectedIndex(null);
        break;
      case "/about":
        setValue(3);
        setSelectedIndex(null);
        break;
      case "/contact":
        setValue(4);
        setSelectedIndex(null);
        break;
      case "/estimate":
        setValue(5);
        setSelectedIndex(null);
        break;
      default:
        break;
    }
  }, []);

  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar position="fixed">
          <Toolbar disableGutters>
            <Button
              disableRipple
              component={Link}
              to="/"
              onClick={() => setValue(0)}
              className={classes.logoContainer}
            >
              <img alt="company logo" src={logo} className={classes.logo} />
            </Button>
            <Tabs
              value={value}
              onChange={handleChange}
              className={classes.tabContainer}
              indicatorColor="secondary"
            >
              <Tab
                className={classes.tab}
                component={Link}
                to="/"
                label="Home"
              ></Tab>
              <Tab
                aria-owns={anchorEl ? "simple-menu" : undefined}
                aria-haspopup={anchorEl ? "true" : undefined}
                className={classes.tab}
                component={Link}
                onMouseOver={(event) => handleClick(event)}
                to="/services"
                label=" Services"
              ></Tab>
              <Tab
                className={classes.tab}
                component={Link}
                to="/revolution"
                label="The Revolution"
              ></Tab>
              <Tab
                className={classes.tab}
                component={Link}
                to="/about"
                label="About Us"
              ></Tab>
              <Tab
                className={classes.tab}
                component={Link}
                to="/contact"
                label="Contact Us"
              ></Tab>
            </Tabs>
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
            >
              Free Estimate{" "}
            </Button>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              classes={{ paper: classes.menu }}
              MenuListProps={{ onMouseLeave: handleClose }}
              elevation={0}
            >
              {menuOptions.map((option, i) => (
                <MenuItem
                  key={option.name}
                  classes={{
                    root: `${classes.menuItem} ${
                      i === selectedIndex && value === option.activeIndex
                        ? classes.activeMenuItem
                        : ""
                    }`,
                  }}
                  onClick={() => handleMenuItemClick(option.link, i)}
                  elevation={0}
                >
                  {option.name}
                </MenuItem>
              ))}
            </Menu>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </React.Fragment>
  );
}

export default withRouter(Header);

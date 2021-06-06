import React, { useState, useEffect, useContext } from "react";
import PropTypes, { func } from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import CssBaseline from "@material-ui/core/CssBaseline";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import db from "../firebase/firebase";
import { Grid } from "@material-ui/core";
import { CartContext } from "../cartcontext/CartContext";
import { CartProvider } from "../cartcontext/CartContext";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
  },
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  layout: {
    width: "auto",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    marginTop: "150px",
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end",
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));

export default function Offers() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [internetservices, setInternetServices] = useState([]);
  const [securityServices, setSecurityServices] = useState([]);
  const [cart, setCart] = useContext(CartContext);

  const addToCart = (el) => {
    setCart([...cart, el]);
    alert("Item Added To Cart");
  };

  useEffect(() => {
    fetchInternetServices();
    fetchSecuirtyServices();
  }, []);

  const fetchSecuirtyServices = async () => {
    db.collection("services")
      .where("type", "==", "security")
      .onSnapshot((snapshot) => {
        const listSecurityServices = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        console.log(listSecurityServices);
        setSecurityServices(listSecurityServices);
      });
    return securityServices;
  };

  const fetchInternetServices = async () => {
    db.collection("services")
      .where("type", "==", "internet")
      .onSnapshot((snapshot) => {
        const listInternetServices = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        console.log(listInternetServices);
        setInternetServices(listInternetServices);
      });
    return internetservices;
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const listInternetServices = internetservices.map((service) => {
    return (
      <TabPanel value={value} index={0}>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="flex-start"
          wrap="nowrap"
        >
          <Grid item direction="row" xs>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://lh3.googleusercontent.com/proxy/Z3ImZUseMiO8zsnh68Uj35hKleW30Jnz30yk6xWU5Esqm90quyE64I0WpfZAuvt-cnBNSj-tERbXZ6SHttzDbuzOhcFr9givBWNC4s9V0gLk6IIHRQ"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {service.company} - {service.package}
                  </Typography>
                  <Typography variant="body2" color="textPrimary" component="p">
                    Starting at {service.price} per month
                  </Typography>
                  <ul>
                    <li>Speeds: 25 MBPS</li>
                    <li>Free Wireless Router</li>
                  </ul>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  size="small"
                  color="primary"
                  onClick={() => addToCart(service)}
                >
                  Add To Cart
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </TabPanel>
    );
  });

  return (
    <CartProvider value={(internetservices, securityServices)}>
      <React.Fragment>
        {/* <CssBaseline /> */}
        {/* <main className={classes.layout}> */}
        {/* <AppBar position="static"> */}
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
          style={{ paddingLeft: "20px" }}
        >
          <Tab label="TV/Internet" {...a11yProps(0)} />
          <Tab label="Home Secuirty" {...a11yProps(1)} />
          <Tab label="Electric/Solar" {...a11yProps(2)} />
        </Tabs>
        {listInternetServices}
        {/* </AppBar> */}
        {/* {internetservices.map((service) => {
          return (
            <TabPanel value={value} index={0}>
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="flex-start"
                wrap="nowrap"
              >
                <Grid item direction="row" xs>
                  <Card className={classes.card}>
                    <CardActionArea>
                      <CardMedia
                        className={classes.media}
                        image="https://lh3.googleusercontent.com/proxy/Z3ImZUseMiO8zsnh68Uj35hKleW30Jnz30yk6xWU5Esqm90quyE64I0WpfZAuvt-cnBNSj-tERbXZ6SHttzDbuzOhcFr9givBWNC4s9V0gLk6IIHRQ"
                        title="Contemplative Reptile"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                          {service.company} - {service.package}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="textPrimary"
                          component="p"
                        >
                          Starting at {service.price} per month
                        </Typography>
                        <ul>
                          <li>Speeds: 25 MBPS</li>
                          <li>Free Wireless Router</li>
                        </ul>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <Button size="small" color="primary">
                        Add To Cart
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              </Grid>
            </TabPanel>
          );
        })} */}

        {securityServices.map((serv) => {
          return (
            <TabPanel value={value} index={1}>
              <Card className={classes.card}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image="https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/062014/screen_shot_2014-06-26_at_1.26.06_pm.png?itok=coNwSS2m"
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {serv.company}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textPrimary"
                      component="p"
                    >
                      Starting at {serv.price}
                    </Typography>
                    <ul>
                      <li>24/7 Surveallience </li>
                      <li>Free Amazon Alexa</li>
                    </ul>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary" onClick={setCart}>
                    Add To Cart
                  </Button>
                </CardActions>
              </Card>
            </TabPanel>
          );
        })}
        {/* <TabPanel value={value} index={1}>
          Item Three
        </TabPanel> */}
        <TabPanel value={value} index={2}>
          Item Three
        </TabPanel>
        {/* </main> */}
      </React.Fragment>
    </CartProvider>
  );
}

Offers.propTypes = {
  handleAddToCart: func,
};

import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Grid from "@material-ui/core/Grid";
import { CartContext } from "../cartcontext/CartContext";

const products = [
  { name: "Product 1", desc: "A nice thing", price: "$9.99" },
  { name: "Product 2", desc: "Another thing", price: "$3.45" },
  { name: "Product 3", desc: "Something else", price: "$6.51" },
  { name: "Product 4", desc: "Best thing of all", price: "$14.11" },
  { name: "Shipping", desc: "", price: "Free" },
];
const addresses = [
  "1 Material-UI Drive",
  "Reactville",
  "Anytown",
  "99999",
  "USA",
];
const payments = [
  //   { name: 'Card type', detail: 'Visa' },
  //   { name: 'Card holder', detail: 'Mr John Smith' },
  //   { name: 'Card number', detail: 'xxxx-xxxx-xxxx-1234' },
  //   { name: 'Expiry date', detail: '04/2024' },
];

const useStyles = makeStyles((theme) => ({
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: 700,
  },
  title: {
    marginTop: theme.spacing(2),
  },
}));
const classes = {};
export default function Review() {
  const [cart, setCart] = useContext(CartContext);
  console.log(cart);
  // const classes = useStyles();
  const products = cart;
  const renderCart = (cart) => {
    return products.map((item) => {
      console.log(item);
      return item;
    });
  };

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Review Information
      </Typography>
      {/* {renderCart} */}
      <List disablePadding>
        {products.map((product) => (
          <ListItem className={classes.listItem} key={product.company}>
            <ListItemText
              primary={product.company}
              secondary={product.package}
            />
            <Typography variant="body2">
              {product.price}.00 Per Month
            </Typography>
          </ListItem>
        ))}
      </List>
      <Grid container spacing={2}>
        {/* <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Shipping
          </Typography>
          <Typography gutterBottom>John Smith</Typography>
          <Typography gutterBottom>{addresses.join(', ')}</Typography>
        </Grid> */}
        <Grid item container direction="column" xs={12} sm={6}>
          {/* <Typography variant="h6" gutterBottom className={classes.title}>
            Payment details
          </Typography> */}
          {/* <Grid container>
            {payments.map((payment) => (
              <React.Fragment key={payment.name}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.detail}</Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid> */}
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

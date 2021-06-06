import React, { Fragment, useEffect, useState } from "react";
import PropTypes from "prop-types";
import db from "../firebase/firebase";
import { Typography, Box } from "@material-ui/core";

function Dashboard(props) {
  const [orders, setOrders] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    db.collection("orders").onSnapshot((snapshot) => {
      const listOrders = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      console.log(listOrders);
      setOrders(listOrders);
    });
    return orders;
  };

  return (
    <Fragment>
      <Box mt={4}>
        {orders.map((order) => {
          return (
            <Typography variant="subtitle1" gutterBottom>
              Your Orders
              <br />
              Order Number: {order.order_no}
              <br />
              Status: {order.status}
              <br />
              Moving Company: {order.moving_company}
            </Typography>
          );
        })}
      </Box>

      <Box mt={4}>
      </Box>
    </Fragment>
  );
}

Dashboard.propTypes = {
  CardChart: PropTypes.elementType,
  statistics: PropTypes.object.isRequired,
  toggleAccountActivation: PropTypes.func,
  pushMessageToSnackbar: PropTypes.func,
  targets: PropTypes.arrayOf(PropTypes.object).isRequired,
  setTargets: PropTypes.func.isRequired,
  isAccountActivated: PropTypes.bool.isRequired,
  selectDashboard: PropTypes.func.isRequired,
};

export default Dashboard;

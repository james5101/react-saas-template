import React from "react";
import PropTypes from "prop-types";
import { Grid, Typography, isWidthUp, withWidth,withStyles } from "@material-ui/core";
import classNames from "classnames";
import CodeIcon from "@material-ui/icons/Code";
import BuildIcon from "@material-ui/icons/CheckBox";
import ComputerIcon from "@material-ui/icons/Computer";
import BarChartIcon from "@material-ui/icons/BarChart";
import HeadsetMicIcon from "@material-ui/icons/HeadsetMic";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import CloudIcon from "@material-ui/icons/Cloud";
import MeassageIcon from "@material-ui/icons/Message";
import CancelIcon from "@material-ui/icons/Cancel";
import calculateSpacing from "./calculateSpacing";
import FeatureCard from "./FeatureCard";

const iconSize = 50;
const styles = (theme) => ({
  headerText: {
    fontFamily: "Montserrat",
    fontWeight: 800,
  },
  
});
const features = [
  {
    color: "#00C853",
    headline: "Fill Out Moving Questionaire",
    text:
      "Just fill out your questionaire with details related to your move. ",
    icon: <BuildIcon style={{ fontSize: iconSize }} />,
    mdDelay: "0",
    smDelay: "0"
  },
  {
    color: "#6200EA",
    headline: "Select Your Services",
    text:
      "Our software will provide you will offers in your area. Simply select the offers you want. A registered agent will reach out you to complete your purchase.",
    icon: <CalendarTodayIcon style={{ fontSize: iconSize }} />,
    mdDelay: "200",
    smDelay: "200"
  },
  {
    color: "#0091EA",
    headline: "Sit back and Relax",
    text:
      "That's it! Your services will be installed on the day you choose.",
    icon: <MeassageIcon style={{ fontSize: iconSize }} />,
    mdDelay: "400",
    smDelay: "0"
  }
];

function FeatureSection(props) {
  const { width, classes,theme } = props;
  return (
    <div style={{ backgroundColor: "#FFFFFF" }}>
      <div className="container-fluid lg-p-top">
        <Typography  variant="h3" align="center" className={classNames(classes.headerText, "lg-mg-bottom")} gutterTop>
          How it Works
        </Typography>
        <div className="container-fluid">
          <Grid container spacing={calculateSpacing(width)}>
            {features.map(element => (
              <Grid
                item
                xs={6}
                md={4}
                data-aos="zoom-in-up"
                data-aos-delay={
                  isWidthUp("md", width) ? element.mdDelay : element.smDelay
                }
                key={element.headline}
              >
                <FeatureCard
                  Icon={element.icon}
                  color={element.color}
                  headline={element.headline}
                  text={element.text}
                  style={{marginRight:"20px"}}
                />
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    </div>
  );
}

FeatureSection.propTypes = {
  classes: PropTypes.object.isRequired,
  width: PropTypes.string.isRequired,
  theme: PropTypes.object,
};

export default withWidth()(
  withStyles(styles, { withTheme: true })(FeatureSection)
);

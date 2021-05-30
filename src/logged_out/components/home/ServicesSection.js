import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import {
    Grid,
    Typography,
    isWidthUp,
    withWidth,
    withStyles,
    Container,
    Button
} from "@material-ui/core";
import ServicesCard from "./ServicesCard";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import calculateSpacing from "./calculateSpacing";

const styles = theme => ({
    card: {
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        height: 100,
        paddingTop: '100%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
    containerFix: {
        [theme.breakpoints.down("md")]: {
            paddingLeft: theme.spacing(6),
            paddingRight: theme.spacing(6)
        },
        [theme.breakpoints.down("sm")]: {
            paddingLeft: theme.spacing(4),
            paddingRight: theme.spacing(4)
        },
        [theme.breakpoints.down("xs")]: {
            paddingLeft: theme.spacing(2),
            paddingRight: theme.spacing(2)
        },
        overflow: "hidden",
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(1)
    },
    cardWrapper: {
        [theme.breakpoints.down("xs")]: {
            marginLeft: "auto",
            marginRight: "auto",
            maxWidth: 340
        }
    },
    cardWrapperHighlighted: {
        [theme.breakpoints.down("xs")]: {
            marginLeft: "auto",
            marginRight: "auto",
            maxWidth: 360
        }
    }
});
const cards = [1, 2, 3, 4, 5, 6];

function ServicesSection(props) {
    const { width, classes, cardMedia } = props;
    return (
        <main>
            <div className="lg-p-top" style={{ backgroundColor: "#FFFFFF" }}>
                <Typography variant="h3" align="center" className="lg-mg-bottom">
                    Services
                </Typography>
                <Container className={classes.cardGrid} maxWidth="md">
                    {/* End hero unit */}
                    <Grid container spacing={4}>
                        {cards.map((card) => (
                            <Grid item key={card} xs={12} sm={6} md={4}>
                                <Card className={classes.card}>
                                    <CardMedia
                                        className={classes.cardMedia}
                                        image={`${process.env.PUBLIC_URL}/images/logged_out/att.png`}
                                        title="Image title"
                                    />
                                    <CardContent className={classes.cardContent}>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            ATT
                                        </Typography>
                                        <Typography>
                                            Prices starting at $64.99 a month.
                                        </Typography>
                                        <Typography>
                                            120 + HD Channels
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="large" href="/questions" color="primary">
                                            Check Availiabity
                                    </Button>

                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </div>
        </main>

    );
}

ServicesSection.propTypes = {
    width: PropTypes.string.isRequired
};

export default withStyles(styles, { withTheme: true })(
    withWidth()(ServicesSection)
);

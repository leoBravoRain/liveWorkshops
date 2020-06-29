import React from "react";

// import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// material ui
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import { Button } from "@material-ui/core";
import Typography from '@material-ui/core/Typography';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import PlayArrow from '@material-ui/icons/PlayArrow';

import Grid from '@material-ui/core/Grid';

// import { fs } from "../../../config/firebase";

class OverviewWorkshop extends React.Component {


    // constructor
    constructor(props) {

        // constructur of parent
        super(props);

        this.setState = {
            loading: true,
        };

    }

    render() {

        // I don't know why this way works in the server
        const workshop = this.props.workshop;

        // return method
        return (

            <Card
                // style = {{
                    // width: "100%",
                    // flexDirection: "row",
                    // backgroundColor: "red",
                    // display: "flex",
                    // flexDirection: "row",
                // }}
                elevation = {5}
                // flexDirection="row"

            >
                <CardActionArea
                    // style = {{
                        // flexDirection: "row",
                        // display: "flex",
                        // flexDirection: "row",
                    // }}
                >

                    {/* <Container>
                        <Typography variant="h6" color="textPrimary" component="h6" style={{ textAlign: "start", margin: 15, }}>
                            Nuestras actividades destacadas
                        </Typography>
                    </Container> */}


                    <Grid container spacing={3}>

                        {/* image */}
                        <Grid item xs={12} md={9}
                            // margin = {100}
                            // style={{
                            //     margin: 10,
                            // }}
                        // elevation = {5}
                        >

                            <CardMedia
                                image={workshop.image}
                                component="img"
                                // alt="Contemplative Reptile"
                                height="350"
                                // style={{
                                    //     flex: 5,
                                // }}
                                
                                // title={workshop.name}
                            />

                        </Grid>

                        {/* card content */}
                        <Grid item xs={12} md={3}>

                            <CardContent
                                // style = {{
                                    //     flex: 3,
                                // }}
                                // style = {{
                                //     justifyContent: "center",
                                //     alignItems: "center",
                                // }}
                                >
                                
                                <Typography variant="h4" color="textSecondary" component="h5" style={{ marginBottom: 5, }}>
                                    Nuestra actividad destacada
                                </Typography>

                                <Typography gutterBottom variant="h5" component="h2">
                                    {workshop.title}
                                </Typography>

                                <Typography variant="body2" color="textSecondary" component="p">
                                    {workshop.description}
                                </Typography>

                                {/* button */}
                                <Button size="small" color="primary"
                                    variant="contained"
                                    onClick={() => {
                                        
                                        console.log("redirecting");

                                        this.props.history.push("/workshopDetails", { workshop: workshop })

                                    }
                                }>
                                    <PlayArrow/> Ver
                                </Button>

                            </CardContent>

                        </Grid>
                        
                    </Grid>

                </CardActionArea>


                {/* <CardActions>

                    <Button size="small" color="primary"
                        variant="contained"
                        onClick={() => {

                            console.log("redirecting");

                            this.props.history.push("/workshopDetails", { workshop: workshop })

                        }
                        }>
                        Ver
                    </Button>

                </CardActions> */}

            </Card>

        );

    }

}

export default OverviewWorkshop;
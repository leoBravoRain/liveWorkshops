import React from "react";

// import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// material ui
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Button } from "@material-ui/core";
import Typography from '@material-ui/core/Typography';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import PlayArrow from '@material-ui/icons/PlayArrow';

// import Grid from '@material-ui/core/Grid';

// import { fs } from "../../../config/firebase";

class WorkshopComponent extends React.Component {


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
        const workshops = [];

        this.props.workshops.forEach((workshop, idx) =>

            // add each workshop to the list of elements
            workshops.push(

                <Grid item xs = {12} md = {3}
                    // margin = {100}
                    style = {{
                        margin: 10,
                    }}
                    // elevation = {5}
                >

                    <Card>
                        <CardActionArea>
                            <CardMedia
                                image={workshop.image}
                                component="img"
                                // alt="Contemplative Reptile"
                                height="100"
                                
                                // title={workshop.name}
                            />

                            {/* contentn */}
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {workshop.title}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    {workshop.description}
                                </Typography>
                            </CardContent>
                        </CardActionArea>


                        <CardActions>

                            <Button size="small" color="primary" 
                                variant="contained"
                                onClick={() => {

                                    console.log("redirecting");

                                    this.props.history.push("/workshopDetails", { workshop: workshop })
                                
                                }
                            }>
                                <PlayArrow/> Ver
                            </Button>

                        </CardActions>
                        
                    </Card>

                </Grid>

            )

        )

        // return method
        return (

            <Grid container spacing={3}>

                {/* each workshop */}
                {
                    workshops

                }

            </Grid>

        );

    }

}

export default WorkshopComponent;
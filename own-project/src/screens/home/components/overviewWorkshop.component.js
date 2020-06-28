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

            <Container>

                <Card>
                    <CardActionArea>
                        <CardMedia
                            image={workshop.image}
                            component="img"
                            // alt="Contemplative Reptile"
                            height="350"

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

                            onClick={() => {

                                console.log("redirecting");

                                this.props.history.push("/workshopDetails", { workshop: workshop })

                            }
                            }>
                            Ver
                        </Button>

                    </CardActions>

                </Card>

            </Container>

        );

    }

}

export default OverviewWorkshop;
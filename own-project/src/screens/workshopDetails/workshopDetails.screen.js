import React from "react";

// import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// material ui
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import { Button } from "@material-ui/core";
import Typography from '@material-ui/core/Typography';
import CircularProgress from "@material-ui/core/CircularProgress";

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

// firebase
// import { auth } from "../../config/firebase";
// import { fs } from "../../config/firebase";


class WorkshopDetails extends React.Component {

    // constructor
    constructor(props) {

        // constructur of parent
        super(props);

        // initial states
        this.state = {
            loading: true,
            // workshop: [],
            // email: "",
            // password: "",
        }

    }

    render() {

        const workshop = this.props.location.state.workshop;

        // return method
        return (

            <Card>
                <CardActionArea>
                    <CardMedia
                        image={workshop.image}
                        component="img"
                        alt="Contemplative Reptile"
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
                        onClick={() => alert("see program")}
                    >
                        Ver horarios
                    </Button>

                    <Button size="small" color="primary" 
                        onClick={() => window.open("https://wa.me/" + workshop.teacherMobileNumber + "?text=Hola, quiero tomar una clase en tu curso de '" + workshop.title + "' que aparece en la plataforma online")}
                    >
                        Asistir
                    </Button>

                </CardActions>

            </Card>

        );

    }

}

export default WorkshopDetails;
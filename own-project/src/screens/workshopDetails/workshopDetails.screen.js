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
// import Modal from '@material-ui/core/Modal';

import Select from '@material-ui/core/Select';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
// import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';

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
            toBuyModal: false,
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
                        onClick={() => {

                            var times = "";

                            // get schedule times
                            workshop.schedule.forEach(time => {
                                // console.log(time);                                
                                times = times + "\n" + time;

                            });

                            alert("Estos son los horarios disponibles:\n" + times);

                        }}
                    >
                        Ver horarios
                    </Button>

                    <Button size="small" color="primary" 
                        onClick={() => {
                            // window.open("https://wa.me/" + workshop.teacherMobileNumber + "?text=Hola, quiero tomar una clase en tu curso de '" + workshop.title + "' que aparece en la plataforma online")
                            this.setState({
                                toBuyModal: true,
                            });
                        }}
                    >
                        Asistir
                    </Button>

                    <Dialog disableBackdropClick disableEscapeKeyDown open={this.state.toBuyModal} 
                        onClose={() => {
                            this.setState({
                                toBuyModal: false,
                            });
                        }}
                    >
                        <DialogTitle>
                            Escoge un horario
                        </DialogTitle>

                        <DialogContent>
                            <form>
                                <FormControl >
                                    <InputLabel htmlFor="demo-dialog-native"> Horario </InputLabel>
                                    <Select
                                        native
                                        value={this.state.scheduleSelected}
                                        onChange={(e) => {
                                            this.setState({
                                                scheduleSelected: e.target.value
                                            });
                                        }}
                                        input={<Input id="demo-dialog-native" />}
                                    >
                                        {
                                            workshop.schedule.map(time => {

                                                console.log("times: " + time);

                                                return (
                                                    <option value={time}>
                                                        {time}
                                                    </option> 
                                                );

                                            })
                                        }
                                    </Select>
                                </FormControl>
                                
                            </form>

                        </DialogContent>

                        <DialogActions>

                            <Button onClick={()=> this.setState({toBuyModal: false,})} color="primary">

                                Cancel

                            </Button>

                            <Button onClick={() => window.open("https://wa.me/" + workshop.teacherMobileNumber + "?text=Hola, te hablo desde Livet ya que quiero tomar una clase de '" + workshop.title + "' en el horario " + this.state.scheduleSelected + ". ¡Gracias!")} color="primary">

                                Asistir

                            </Button>

                        </DialogActions>

                    </Dialog>

                </CardActions>

            </Card>

        );

    }

}

export default WorkshopDetails;
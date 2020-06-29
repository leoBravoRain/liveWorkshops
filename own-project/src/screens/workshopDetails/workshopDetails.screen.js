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
import PlayArrow from '@material-ui/icons/PlayArrow';
import Schedule from '@material-ui/icons/Schedule';

import Select from '@material-ui/core/Select';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Chip from '@material-ui/core/Chip';

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
        
        var isMobile = {
            Android: function () {
                return navigator.userAgent.match(/Android/i);
            },
            BlackBerry: function () {
                return navigator.userAgent.match(/BlackBerry/i);
            },
            iOS: function () {
                return navigator.userAgent.match(/iPhone|iPad|iPod/i);
            },
            Opera: function () {
                return navigator.userAgent.match(/Opera Mini/i);
            },
            Windows: function () {
                return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
            },
            any: function () {
                return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
            }
        };

        const workshop = this.props.location.state.workshop;

        // return method
        return (

            <Paper
                style = {{
                    margin: 20,
                }}
            >
                {/* ashduiashd */}
                <Card>
                    <CardActionArea>
                        <CardMedia
                            image={workshop.image}
                            component="img"
                            alt="Contemplative Reptile"
                            height="300"

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

                            {/* relevant information: requirments, price*/}
                            <Container
                                style = {{
                                    margin: 5,
                                    // display: "flex",
                                    // width: "10%",
                                    // flexDirection: "column",
                                    // backgroundColor: "orange",
                                }}
                            >

                                {/* level */}
                                <Chip style = {{margin: 5,}} label={"Nivel: " + workshop.level} variant="outlined" />

                                {/* requirmenet */}
                                <Chip style={{ margin: 5, }} label={"Requerimientos: " + workshop.requirements} variant="outlined" />

                                {/* platform */}
                                <Chip style={{ margin: 5, }} label={"¿Como se realiza la clase?: " + workshop.platformToDoWorkshop} variant="outlined" />

                                {/* class length */}
                                <Chip style={{ margin: 5, }} label={"Duración clase: " + workshop.classLength} variant="outlined" />

                                {/* people limit */}
                                <Chip style={{ margin: 5, }} label={"Peronsas por clase: " + workshop.peopleByClass} variant="outlined" />


                                {/* price */}
                                <Chip style={{ margin: 5, }} label={"Precio por clase: " + workshop.price + " CLP"} variant="outlined" />

                            </Container>

                        </CardContent>
                    </CardActionArea>


                    <CardActions>

                        <Button size="small" color="primary"
                            variant="contained"
                            onClick={() => {
                                
                                var times = "";

                                // get schedule times
                                workshop.schedule.forEach(time => {
                                    // console.log(time);                                
                                    times = times + "\n- " + time;

                                });

                                alert("Estos son los horarios disponibles:\n" + times);

                            }}
                        >
                            <Schedule /> Ver horarios
                        </Button>

                        <Button size="small" color="primary" 
                            variant="contained"
                            onClick={() => {
                                // window.open("https://wa.me/" + workshop.teacherMobileNumber + "?text=Hola, quiero tomar una clase en tu curso de '" + workshop.title + "' que aparece en la plataforma online")
                                this.setState({
                                    toBuyModal: true,
                                });
                            }}
                        >
                            <PlayArrow /> Asistir
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

                                <Button onClick={() => this.setState({ toBuyModal: false, })} color="primary">

                                    Cancelar

                                </Button>

                                <Button onClick={() => {

                                    if (isMobile.any()) {

                                        window.open("https://wa.me/" + workshop.teacherMobileNumber + "?text=Hola, te hablo desde Livet ya que quiero tomar una clase de '" + workshop.title + "' en el horario " + this.state.scheduleSelected + ". ¡Gracias!");

                                    }

                                    else {

                                        alert("Intenta agendar esto desde tu celular.")
                                        
                                    }
                                    
                                }}
                                color="primary">

                                    Asistir

                                </Button>

                            </DialogActions>

                        </Dialog>

                    </CardActions>

                </Card>

            </Paper>

        );

    }

}

export default WorkshopDetails;
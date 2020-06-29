import React from "react";

// import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// material ui
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import { Button } from "@material-ui/core";
import Typography from '@material-ui/core/Typography';
import CircularProgress from "@material-ui/core/CircularProgress";
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import LiveTv from '@material-ui/icons/LiveTv';

//  component
import WorkshopComponent from "./components/workshop.component";
import OverviewWorkshop from "./components/overviewWorkshop.component";

// firebase
// import { auth } from "../../config/firebase";
import { fs } from "../../config/firebase";

// // workshop mockup
// const _workshops = [
//     {
//         "title": "Yoga indio",
//         "teacher": "Daniela Parra",
//         "description": "Unete a nuestras clases de yoga, para hacer ejercicios y sacarte el estrés que tienes dentro",
//         "image": "https://images.yogaanytime.com/2017/12/13/large_sarah_170825_YA13140_content-19948.jpg?width=768",
//         "teacherMobileNumber": "+56937827142",
//         "category": "Deportes",
//         "schedule": [
//             "Lunes 8:00 a 9:30",
//             "Miercoles 8:00 a 9:30",
//         ]
//     },

//     {
//         "title": "Baile entretenido",
//         "teacher": "Rodrigo Días",
//         "description": "Unete a nuestras clases unicas de baile entretenido",
//         "image": "https://statics-cuidateplus.marca.com/sites/default/files/images/zumba.jpg",
//         "teacherMobileNumber": "+56937827142",
//         "category": "Deportes",
//         "schedule": [
//             "Lunes 8:00 a 9:30",
//             "Miercoles 8:00 a 9:30",
//         ]
//     },

//     {
//         "title": "Clases de guitarra",
//         "teacher": "Rodrigo Valencia",
//         "description": "Unete a nuestras clases unicas de guitarra",
//         "image": "https://img.fotocommunity.com/guitar-man-ff55a084-e878-4372-a9a0-ee771a3a0fdc.jpg?height=1080",
//         "teacherMobileNumber": "+56937827142",
//         "category": "Musica",
//         "schedule": [
//             "Lunes 8:00 a 9:30",
//             "Miercoles 8:00 a 9:30",
//         ]
//     }

// ];

class Home extends React.Component {

    // constructor
    constructor(props) {

        // constructur of parent
        super(props);

        // initial states
        this.state = {
            loading: true,
            workshopsByCategory: null,
            // email: "",
            // password: "",
        }

    }

    componentDidMount() {

        // courses by category
        var coursesByCategory = {};

        // get courses
        // get teachers courses
        fs.collection('workshops')
            // .where("author_ID", "==", user.uid)
            .get()
            .then(querySnapshot => {

                var workshops = [];

                querySnapshot.docs.forEach(doc => {

                    const workshop = doc.data();

                    // if category is already registered
                    if (workshop.category in coursesByCategory) {

                        var tmp = coursesByCategory[workshop.category];
                        tmp.push(workshop);
                        coursesByCategory[workshop.category] = tmp;

                    }

                    // if it is not
                    else {
                        coursesByCategory[workshop.category] = [workshop];
                    }

                });

                 this.setState({
                    workshopsByCategory: coursesByCategory,
                    loading: false,
                });

            })

            .catch(e => {
                // console.log("(createNewCourse) error trying to get the courses: " + e);
                this.setState({ loading: false });
            });

    }

    render() {

        // return method
        return (

            <Container
                style={{
                    // margin: 20,
                    // padding: 20,
                    // backgroundColor: "red",
                }}
            >

                {
                    !this.state.loading

                        ?

                        <Container>

                            {/* title */}
                            <Paper
                                style={{
                                    margin: 15,
                                    padding: 5,
                                }}

                                elevation={5}
                            >
                                <Typography variant="h6" component="h6" style = {{ textAlign: "center", }}>

                                    {/* <LiveTv style = {{margin: 5}} />  */}

                                    <LiveTv /> En Livet te ofrecemos las mejores actividades online y en vivo, ¡Para que puedas seguir entreteniendote desde tu casa! <LiveTv />

                                </Typography>

                            </Paper>

                            {/* overview workshop */}
                            <Container
                                style = {{
                                    // backgroundColor: "green",
                                    marginTop: 20,
                                    marginBottom: 20,
                                    // elevation: 5,
                                    // width: "100%",
                                    // flex: 1,
                                }}
                                // elevation = {5}
                            >

                                <OverviewWorkshop
                                    workshop = {this.state.workshopsByCategory[Object.keys(this.state.workshopsByCategory)[Math.floor(Math.random() * Object.keys(this.state.workshopsByCategory).length)]][0]}
                                    history = {this.props.history}
                                />


                            </Container>
                            
                            {/* text to introduce categories */}
                            <Paper
                                style={{
                                    margin: 15,
                                    padding: 5,
                                }}
                                elevation = {5}
                            >
                                <Typography variant="h6" component="h6" style={{ textAlign: "center", }}>
                                    <FavoriteBorder /> Mira todas las categorías y talleres que tenemos preparados para tí <FavoriteBorder />
                                </Typography>

                            </Paper>

                            {/* workshops by category*/}
                            <Container
                                style = {{
                                    // backgroundColor: "orange",
                                    margin: 5,
                                }}

                            >

                                {
                                    this.state.workshopsByCategory != null && 
                                    
                                    Object.keys(this.state.workshopsByCategory).map((category, index) => {

                                        return (
                                            
                                            <Paper
                                                style = {{
                                                    // backgroundColor: "yellow",
                                                    marginBottom: 20,
                                                    // elevation: 10,
                                                    padding: 10,
                                                }}
                                                elevation = {5}
                                            >

                                                {/* category name */}
                                                <Typography 
                                                    gutterBottom 
                                                    variant="h3" 
                                                    component="h4"
                                                    style = {{
                                                        // fontStyle: "bold",
                                                        // margin: 50,
                                                        // marginTop: 2500,
                                                        // marginBottom: 10,
                                                    }}
                                                >
                                                    {category}
                                                </Typography>

                                                {/* different workshops */}
                                                <WorkshopComponent
                                                    workshops={this.state.workshopsByCategory[category]}
                                                    history={this.props.history}
                                                />

                                            </Paper>

                                        );

                                    })
                                    // <div> asjdaoijds </div>
                                }

                            </Container>

                        </Container>

                        :

                        <CircularProgress />

                }

            </Container>
        );

    }

}

export default Home;
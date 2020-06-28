import React from "react";

// import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// material ui
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import { Button } from "@material-ui/core";
import Typography from '@material-ui/core/Typography';
import CircularProgress from "@material-ui/core/CircularProgress";

//  component
import WorkshopComponent from "./components/workshop.component";
import OverviewWorkshop from "./components/overviewWorkshop.component";

// firebase
// import { auth } from "../../config/firebase";
// import { fs } from "../../config/firebase";

// workshop mockup
const _workshops = [
    {
        "title": "Yoga indio",
        "teacher": "Daniela Parra",
        "description": "Unete a nuestras clases de yoga, para hacer ejercicios y sacarte el estrés que tienes dentro",
        "image": "https://images.yogaanytime.com/2017/12/13/large_sarah_170825_YA13140_content-19948.jpg?width=768",
        "teacherMobileNumber": "+56937827142",
        "category": "Deportes",
    },

    {
        "title": "Baile entretenido",
        "teacher": "Rodrigo Días",
        "description": "Unete a nuestras clases unicas de baile entretenido",
        "image": "https://statics-cuidateplus.marca.com/sites/default/files/images/zumba.jpg",
        "teacherMobileNumber": "+56937827142",
        "category": "Deportes",
    },

    {
        "title": "Clases de guitarra",
        "teacher": "Rodrigo Valencia",
        "description": "Unete a nuestras clases unicas de guitarra",
        "image": "https://img.fotocommunity.com/guitar-man-ff55a084-e878-4372-a9a0-ee771a3a0fdc.jpg?height=1080",
        "teacherMobileNumber": "+56937827142",
        "category": "Musica",
    }

];

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

        // categories
        var categories = [];
        // courses by category
        var coursesByCategory = {};

        // get courses
        
        // iterate through each course
        _workshops.forEach((workshop) => {
            // console.log(workshop);

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
        })

        // console.log(coursesByCategory);

        // Object.keys({}).map((category, index) => {
        //     console.log(coursesByCategory[category]);


        // });

        this.setState({
            workshopsByCategory: coursesByCategory,
            loading: false,
        }, 
        // () => {
        //     // console.log(coursesByCategory);

        //     Object.keys(this.state.workshopsByCategory).map((category, index) => {
        //         console.log(coursesByCategory[category]);


        //     });
        // });
        );

    }

    render() {

        // return method
        return (

            <Paper
                style={{
                    margin: 20,
                    padding: 20,
                }}
            >

                {/* big workshop */}


                {/* workshops */}
                <Container>

                    {
                        !this.state.loading

                            ?

                            <Container>

                                {/* overview workshop */}
                                <Container>

                                    <OverviewWorkshop
                                        workshop={this.state.workshopsByCategory[Object.keys(this.state.workshopsByCategory)[0]][0]}
                                        history={this.props.history}
                                    />


                                </Container>

                                {/* workshops */}
                                <Container>

                                    {
                                        this.state.workshopsByCategory != null && 
                                        
                                        Object.keys(this.state.workshopsByCategory).map((category, index) => {

                                            // return (<div> asjd</div>);
                                            return (
                                                
                                                <Paper
                                                >
                                                    
                                                    <Typography gutterBottom variant="h4" component="h2">
                                                        {category}
                                                    </Typography>

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

            </Paper>
        );

    }

}

export default Home;
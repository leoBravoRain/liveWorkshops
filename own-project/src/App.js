import React, { Component } from "react";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// import Home from "./screens/home.screen";
// import Login from "./screens/login.screen";

// Material ui
// import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
// import { makeStyles } from '@material-ui/core/styles';

// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import { MuiThemeProvider } from '@material-ui/core/styles';
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from './material-ui/theme';

// screens
import Home from "./screens/home/home.screen";
import WorkshopDetails from "./screens/workshopDetails/workshopDetails.screen";

// import Login from "./screens/login/login.screen";
// import Register from "./screens/register/register.screen";
// import TeacherHome from "./screens/teacherHome/teacherHome.screen";
// import EditCourse from "./screens/editCourse/editCourse.screen";

// // ifrebase
// import { auth } from "./config/firebase";


// Component 
class App extends Component {


  // // logout from admin page
  // on_logout() {

  //   // logout
  //   auth.signOut().then(res => {

  //     alert("Your session has been closed");

  //   }).catch(error => {

  //     console.log(error);

  //   });

  // }

  // render method
  render() {

    return (

      <MuiThemeProvider theme={theme}>

        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />

        <Router>

          <AppBar position="static">

            <Toolbar>

              {/* to home */}
              <Link to="/" className="nav-link" style={{ "flex": 1, "color": "white", "textDecoration": "none" }}>

                <Typography gutterBottom variant="h4" component="h2">

                  Livet!

                </Typography>

              </Link>

            </Toolbar>

          </AppBar>

          {/* <Route path = "/" exact component = {Login} /> */}
          <Route path="/" exact component={Home} />

          <Route path="/workshopDetails" exact component = {WorkshopDetails} />

        </Router>

      </MuiThemeProvider>

    );

  }

}

// exporting app
export default App;
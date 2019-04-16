import React, { Component } from "react";
import logo from "./images/logo.png";
// import Card from "@material-ui/core/Card";
// import CardActionArea from "@material-ui/core/CardActionArea";
// import CardContent from "@material-ui/core/CardContent";
// import CardMedia from "@material-ui/core/CardMedia";
// import Typography from "@material-ui/core/Typography";
// import GridItem from "./components/Grid/GridItem.jsx";
// import GridContainer from "./components/Grid/GridContainer.jsx";
// import AddIcon from "@material-ui/icons/Add";
// import Fab from "@material-ui/core/Fab";
import Populator from "./components/Populator";

const style = {
  text: {
    textAlign: "center"
  }
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false }; // <- set up react state
  }

  render() {
    return (
      <div>
        <center>
          <img src={logo} alt="logo" width="100" height="100" border="0" />
          <div style={style.text}>
            <h1>furrever homes</h1>
            <p>The best place to find a PAWsome new pal.</p>
            <p>
              eMail staff <a href="mailto:kylemccaw15@augustana.edu">here</a>{" "}
              with pet info to list!
            </p>
          </div>
        </center>
        <Populator />
      </div>
    );
  }
}

export default App;

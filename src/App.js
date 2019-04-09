import React, { Component } from "react";
import logo from "./images/logo.png";
// import Card from "@material-ui/core/Card";
// import CardActionArea from "@material-ui/core/CardActionArea";
// import CardContent from "@material-ui/core/CardContent";
// import CardMedia from "@material-ui/core/CardMedia";
// import Typography from "@material-ui/core/Typography";
// import GridItem from "./components/Grid/GridItem.jsx";
// import GridContainer from "./components/Grid/GridContainer.jsx";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Modal from "./components/ModalInfo";
import Populator from "./components/Populator";

const style = {
  text: {
    textAlign: "center"
  },
  mainConatinerStyle: {
    flexDirection: "column",
    flex: 1
  },
  floatingMenuButtonStyle: {
    alignSelf: "flex-end",
    position: "absolute",
    bottom: 10,
    right: 10
  }
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false }; // <- set up react state
  }

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <React.Fragment>
        <center>
          <img src={logo} alt="logo" width="100" height="100" border="0" />
          <div style={style.text}>
            <h1>furrever homes</h1>
            <p onClick={e => console.log(e)}>
              The best place to find a PAWsome new pal.
            </p>
          </div>
          <div>
            <Populator />
          </div>
        </center>
        <div>
          <ModalInfo open={this.state.open} handleClose={this.handleClose} />
        </div>
        <div>
          <Fab
            color="primary"
            aria-label="Add"
            style={style.floatingMenuButtonStyle}
          >
            <AddIcon />
          </Fab>
        </div>
      </React.Fragment>
    );
  }
}

export default App;

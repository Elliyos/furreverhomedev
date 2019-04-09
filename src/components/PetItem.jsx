import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import GridItem from "./Grid/GridItem.jsx";
import GridContainer from "./Grid/GridContainer.jsx";
//import { CardActions } from "material-ui";

class PropertyItem extends React.Component {
  render() {
    return (
      <div onClick={this.props.onClick}>
        <GridContainer>
          <GridItem xs={12} sm={6} md={3}>
            <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  image={require(`../images/${this.props.imagePath}`)}
                  style={this.props.style}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {this.props.name}
                  </Typography>
                  <Typography component="p">
                    {this.props.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

export { PropertyItem as default };

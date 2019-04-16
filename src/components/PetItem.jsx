import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import GridItem from "./Grid/GridItem.jsx";
import GridContainer from "./Grid/GridContainer.jsx";
//import { CardActions } from "material-ui";

class PetItem extends React.Component {
  render() {
    return (
      <div>
        <GridContainer>
          <GridItem xs={12} sm={6} md={3}>
            <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  image={this.props.image}
                  height="100%"
                  width="100%"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {this.props.name}, {this.props.age}
                  </Typography>
                  <Typography gutterBottom variant="subtitle1" component="h6">
                    {this.props.phone}
                  </Typography>
                  <Typography component="p">{this.props.about}</Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

export { PetItem as default };

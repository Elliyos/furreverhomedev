import React, { Component } from "react";
import PetItem from "../components/PetItem";

import { pullFromFirebase } from "../firebase";

class Populator extends Component {
  state = {
    pets: []
  };

  listPets = () => {
    pullFromFirebase("pets", snapshot => {
      let pets = this.state.pets;
      snapshot.forEach(item => {
        pets = pets.concat(item.val());
      });
      this.setState({ pets: pets });
    });
  };

  componentDidMount() {
    this.listPets();
  }

  render() {
    const { classes } = this.props;
    const { pets } = this.state;
    return (
      <div>
        {pets.map((pet, key) => (
          <PetItem
            key={key}
            image={pet.pic}
            name={pet.name}
            about={pet.about}
            phone={pet.phone}
            age={pet.age}
            classes={classes}
          />
        ))}
      </div>
    );
  }
}

export default Populator;

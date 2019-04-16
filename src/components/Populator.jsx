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
      snapshot.forEach(function(doc) {
        pets = pets.concat(doc.data());
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
    pets.map((pet, key) => console.log(pet));
    return (
      <div>
        {pets.map((pet, key) => (
          <PetItem
            image={pet.pic}
            name={pet.name}
            about={pet.about}
            phone={pet.phone}
            age={pet.age}
          />
        ))}
      </div>
    );
  }
}

export default Populator;

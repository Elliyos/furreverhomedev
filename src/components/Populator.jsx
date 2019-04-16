import React, { Component } from "react";
import PetItem from "../components/PetItem";
import GridContainer from "../components/Grid/GridContainer";
import GridItem from "../components/Grid/GridItem";

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
    const { pets } = this.state;
    pets.map((pet, key) => console.log(pet));
    return (
      <GridContainer container>
        <div>
          {pets.map((pet, key) => (
            <GridItem item xs={12} sm={6} md={3}>
              <PetItem
                image={pet.pic}
                name={pet.name}
                about={pet.about}
                phone={pet.phone}
                age={pet.age}
              />
            </GridItem>
          ))}
        </div>
      </GridContainer>
    );
  }
}

export default Populator;

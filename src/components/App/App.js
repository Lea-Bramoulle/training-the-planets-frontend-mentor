import "./App.scss";
import "./../../style/_reset.css";

import React from "react";

import Navbar from "../Navbar/Navbar";
import PlanetMain from "../PlanetMain/PlanetMain";
import PlanetStat from "../PlanetStat/PlanetStat";

import data from "./../../data/data.json";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      targetPlanet: "Mercury",
      targetInformationSection: "overview",
    };

    this.handleTargetPlanetChange = this.handleTargetPlanetChange.bind(this);
    this.handleTargetPlanetData = this.handleTargetPlanetData.bind(this);
    this.handleTargetInformationSectionChange =
      this.handleTargetInformationSectionChange.bind(this);
  }

  handleTargetPlanetChange(planetName) {
    this.setState({
      targetPlanet: planetName,
    });
  }

  handleTargetPlanetData() {
    const selectedPlanetData = data.find(
      (planet) => planet.name === this.state.targetPlanet
    );
    return selectedPlanetData;
  }

  handleTargetInformationSectionChange(section) {
    console.log(section);
    this.setState({
      targetInformationSection: section,
    });
  }

  render() {
    return (
      <div className="App">
        <Navbar
          targetPlanet={this.state.targetPlanet}
          planetsData={data}
          onChangePlanetState={this.handleTargetPlanetChange}
        />
        <main className="main-container">
          <PlanetMain
            planetData={this.handleTargetPlanetData()}
            sectionInformation={this.state.targetInformationSection}
            handleSectioninformationChange={
              this.handleTargetInformationSectionChange
            }
          />
          <PlanetStat planetData={this.handleTargetPlanetData()} />
        </main>
      </div>
    );
  }
}

export default App;

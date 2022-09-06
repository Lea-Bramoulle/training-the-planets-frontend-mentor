import "./App.scss";
import "./../../style/_reset.css";

import React from "react";

import Navbar from "../Navbar/Navbar";
import NavbarMobile from "../NavbarModile/NavbarMobile";
import PlanetNavigationMobile from "../PlanetNavigationMobile/PlanetNavigationMobile";
import PlanetMain from "../PlanetMain/PlanetMain";
import PlanetStat from "../PlanetStat/PlanetStat";

import data from "./../../data/data.json";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      targetPlanet: "Mercury",
      targetInformationSection: "overview",
      menuIsOpen: false,
    };

    this.handleTargetPlanetChange = this.handleTargetPlanetChange.bind(this);
    this.handleTargetPlanetData = this.handleTargetPlanetData.bind(this);
    this.handleTargetInformationSectionChange =
      this.handleTargetInformationSectionChange.bind(this);
    this.toggleMenuIsOppen = this.toggleMenuIsOppen.bind(this);
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
    this.setState({
      targetInformationSection: section,
    });
  }

  toggleMenuIsOppen() {
    this.setState({
      menuIsOpen: !this.state.menuIsOpen,
    });
  }

  render() {
    return (
      <div className="App">
        <Navbar
          targetPlanet={this.state.targetPlanet}
          planetsData={data}
          onChangePlanetState={this.handleTargetPlanetChange}
          toggleMenu={this.toggleMenuIsOppen}
        />
        {this.state.menuIsOpen && (
          <NavbarMobile
            planetsData={data}
            onChangePlanetState={this.handleTargetPlanetChange}
            toggleMenu={this.toggleMenuIsOppen}
          />
        )}
        {/* <PlanetNavigationMobile
          planetData={this.handleTargetPlanetData()}
          sectionInformation={this.state.targetInformationSection}
          handleSectioninformationChange={
            this.handleTargetInformationSectionChange
          }
        /> */}
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

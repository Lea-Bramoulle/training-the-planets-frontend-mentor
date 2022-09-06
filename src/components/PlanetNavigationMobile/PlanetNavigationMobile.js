/* eslint-disable jsx-a11y/anchor-is-valid */
import "./../PlanetMain/planetMain.scss";

function PlanetNavigationMobile({
  planetData,
  sectionInformation,
  handleSectioninformationChange,
}) {
  console.log(planetData);
  return (
    <div className="planet-main-content--categories">
      <div
        className="planet-main-content--button"
        onClick={() => handleSectioninformationChange("overview")}
        style={
          sectionInformation === "overview"
            ? {
                backgroundColor: `${planetData.color}`,
                borderColor: `${planetData.color}`,
              }
            : {}
        }
      >
        <span className="planet-main-content--button-id">01</span>
        <span className="planet-main-content--button-title">Overview</span>
      </div>
      <div
        className="planet-main-content--button"
        onClick={() => handleSectioninformationChange("structure")}
        style={
          sectionInformation === "structure"
            ? {
                backgroundColor: `${planetData.color}`,
                borderColor: `${planetData.color}`,
              }
            : {}
        }
      >
        <span className="planet-main-content--button-id">02</span>
        <span className="planet-main-content--button-title">
          Internal Structure
        </span>
      </div>
      <div
        className="planet-main-content--button"
        onClick={() => handleSectioninformationChange("geology")}
        style={
          sectionInformation === "geology"
            ? {
                backgroundColor: `${planetData.color}`,
                borderColor: `${planetData.color}`,
              }
            : {}
        }
      >
        <span className="planet-main-content--button-id">03</span>
        <span className="planet-main-content--button-title">
          Surface Geology
        </span>
      </div>
    </div>
  );
}

export default PlanetNavigationMobile;

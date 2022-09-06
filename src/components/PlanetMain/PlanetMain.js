/* eslint-disable jsx-a11y/anchor-is-valid */
import "./planetMain.scss";

function PlanetMain({
  planetData,
  sectionInformation,
  handleSectioninformationChange,
}) {
  console.log(planetData);
  return (
    <section className="planet-main container">
      <div className="planet-main-image">
        <img
          src={
            sectionInformation === "overview"
              ? require(`./../../assets/images/${planetData.images.planet}`)
              : require(`./../../assets/images/${planetData.images.internal}`)
          }
          alt={planetData.name}
        />
        {sectionInformation === "geology" ? (
          <img
            className="planet-main-image-second"
            src={require(`./../../assets/images/${planetData.images.geology}`)}
            alt={planetData.name}
          />
        ) : (
          ""
        )}
      </div>
      <div className="planet-main-content">
        <h1 className="planet-main-content--title">{planetData.name}</h1>
        <p className="planet-main-content--desc">
          {sectionInformation === "overview"
            ? planetData.overview.content
            : sectionInformation === "structure"
            ? planetData.structure.content
            : planetData.geology.content}
        </p>
        <span className="planet-main-content--source">
          source :{" "}
          <a
            href={
              sectionInformation === "overview"
                ? planetData.overview.source
                : sectionInformation === "structure"
                ? planetData.structure.source
                : planetData.geology.source
            }
            target="_blank"
            rel="noreferrer"
            className="planet-main-content--link"
          >
            Wikipédia
          </a>
        </span>
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
      </div>
    </section>
  );
}

export default PlanetMain;

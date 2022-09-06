import "./planetStat.scss";

function PlanetStat({ planetData }) {
  return (
    <section className="container planet-stat">
      <div className="rotation-container">
        <h2 className="rotation-container-title">Rotation Time</h2>
        <p className="rotation-container-content">{planetData.rotation}</p>
      </div>
      <div className="rotation-container">
        <h2 className="rotation-container-title">Revolution Time</h2>
        <p className="rotation-container-content">{planetData.revolution}</p>
      </div>
      <div className="rotation-container">
        <h2 className="rotation-container-title">Radius</h2>
        <p className="rotation-container-content">{planetData.radius}</p>
      </div>
      <div className="rotation-container">
        <h2 className="rotation-container-title">Average Temp.</h2>
        <p className="rotation-container-content">{planetData.temperature}</p>
      </div>
    </section>
  );
}

export default PlanetStat;

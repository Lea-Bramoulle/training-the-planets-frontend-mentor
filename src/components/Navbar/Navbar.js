import "./navbar.scss";

function Navbar({ planetsData, onChangePlanetState, targetPlanet }) {
  return (
    <header>
      <div className="navbar container">
        <span className="navbar--logo">The Planets</span>
        <ul className="navbar--links">
          {planetsData.map((planet) => (
            <li
              key={planet.name}
              onClick={() => onChangePlanetState(planet.name)}
              className="navbar--link"
              style={
                targetPlanet === planet.name
                  ? {
                      borderTop: `0.5rem solid ${planet.color}`,
                      padding: " 1.5rem 0 2rem 0",
                    }
                  : {}
              }
            >
              {planet.name}
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}

export default Navbar;

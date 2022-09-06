import "./navbar.scss";

function Navbar({
  planetsData,
  onChangePlanetState,
  targetPlanet,
  toggleMenu,
}) {
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
        <img
          src={require(`./../../assets/images/icon-hamburger.png`)}
          alt="menu icon"
          className="menu-icon"
          onClick={() => {
            toggleMenu();
          }}
        />
      </div>
    </header>
  );
}

export default Navbar;

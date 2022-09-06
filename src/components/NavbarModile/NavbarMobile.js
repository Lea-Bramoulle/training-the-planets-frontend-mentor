import "./navbarMobile.scss";

function NavbarMobile({ planetsData, onChangePlanetState, toggleMenu }) {
  return (
    <section className="mobile-navigation">
      <ul className="mobile-navigation-container">
        {planetsData.map((planet) => (
          <li
            className="mobile-navigation-element"
            onClick={() => {
              onChangePlanetState(planet.name);
              toggleMenu();
            }}
          >
            <p
              className="mobile-navigation-bullet"
              style={{ backgroundColor: `${planet.color}` }}
            ></p>
            {planet.name}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default NavbarMobile;

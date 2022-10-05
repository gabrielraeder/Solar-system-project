import React from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import Planets from '../data/planets';

class SolarSystem extends React.Component {
  render() {
    const planetElements = Planets.map((planet) => {
      const { name: key, name, image } = planet;
      return <PlanetCard key={ key } planetName={ name } planetImage={ image } />;
    });
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        <div className="solarSystem">
          { planetElements }
        </div>
      </div>
    );
  }
}

export default SolarSystem;

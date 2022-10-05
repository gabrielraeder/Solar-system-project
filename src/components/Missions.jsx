import React from 'react';
import Title from './Title';
import MissionCard from './MissionCard';
import missions from '../data/missions';

class Missions extends React.Component {
  render() {
    const missionsElements = missions.map((mission) => {
      const { name: k, name: n, year: y, country: c, destination: d } = mission;
      return (
        <MissionCard key={ k } name={ n } year={ y } country={ c } destination={ d } />
      );
    });

    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        <div className="missionsList">
          {missionsElements}
        </div>
      </div>
    );
  }
}

export default Missions;

import React, { useState } from 'react';

export const allTeams = [
  { icon: "", label: "Team 1" },
  { icon: "", label: "Team 2" },
  { icon: "", label: "Development" },
  { icon: "", label: "Marketing" },
  { icon: "", label: "Finance" },
];

function TeamList() {
  const [currentTeam, setCurrentTeam] = useState(allTeams[0]);

  const getNextTeam = () => {
    const currentIndex = allTeams.indexOf(currentTeam);
    if (currentIndex === -1 || currentIndex === allTeams.length - 1) {
      return allTeams[0];
    } else {
      return allTeams[currentIndex + 1];
    }
  };

  const handleNextTeam = () => {
    const nextTeam = getNextTeam();
    setCurrentTeam(nextTeam);
  };

  return (
    <div>
      <h2>Current Team: {currentTeam.label}</h2>
      <button onClick={handleNextTeam}>Next Team</button>
    </div>
  );
}

export default TeamList;

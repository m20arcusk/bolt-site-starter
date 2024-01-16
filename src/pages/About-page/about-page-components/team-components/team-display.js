import React from 'react';
import Profile from './profile.js';
import teams from './team-info.json';

function TeamDisplay(props) {
  // Find the specific team based on props.teamName
  const specificTeam = teams.teams.find(team => team.team_name === props.teamName);

  // Check if the team was found
  if (specificTeam) {
    // Access the team's attributes
    const teamName = specificTeam.team_name;
    const executives = specificTeam.executives;

    return (
      <div className={'windows ' + teamName}> 
        {specificTeam.executives.map((executive, index) => (
          <Profile key={index} profilepic={executive.profilepic} name={executive.name} title={executive.title} />
        ))}

      </div>
    );
  } else {
    // Handle the case where the team with the specified name is not found
    return (
      <div className="windows">
        <p>Team not found</p>
      </div>
    );
  }
}

export default TeamDisplay;

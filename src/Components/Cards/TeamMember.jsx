import React from 'react'
import {team} from '../../../data/team.json'

const TeamMember = ({name, role}) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>{role}</p>
    </div>
  )
}

export default TeamMember
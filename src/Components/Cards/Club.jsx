import React from 'react'
import {clubs} from '../../../data/clubs.json'

const Club = ({clubName}) => {
  const heading = clubs[clubName].name;
  const description = clubs[clubName].desc;
  return (
    <section>
      <h3>{heading}</h3>
      <p>{description}</p>
    </section>
  )
}

export default Club
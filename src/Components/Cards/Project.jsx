import React from 'react'

const Project = ({name, desc}) => {
  return (
    <section>
      <h2>{name}</h2>
      <p>
        {desc}
      </p>
    </section>
  )
}

export default Project
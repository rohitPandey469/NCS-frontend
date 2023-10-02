import React from 'react'
import {society} from "../../../data/society.json"

const socials = society.socials.map((social) => {
  return (
    <li key={social.name}><a href={social.url}>{social.name}</a></li>
  )
})

const Footer = () => {
  return (
    <footer>
      <section>
        <ul>
          {socials}
        </ul>
      </section>
    </footer>
  )
}

export default Footer
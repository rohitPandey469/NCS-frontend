import React from 'react'
import TeamMember from "../../Components/Cards/TeamMember";
import {team} from '../../../data/team.json'
import './Team.css'
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';

const year_4_team = team['4_year'].map((member) => {
  return (
    <TeamMember key={member.id} name={member.name} role={member.role}/>
  )
})

const year_3_team = team['3_year'].map((member) => {
  return (
    <TeamMember key={member.id} name={member.name} role={member.role}/>
  )
})

const Team = () => {
  return (
    <>
      <Header/>
      <main>
        <section>
          <h2>4th year</h2>
          {year_4_team}
        </section>
        <section>
          <h2>3rd year</h2>
          {year_3_team}
        </section>
      </main>
      <Footer/>
    </>
  )
}

export default Team
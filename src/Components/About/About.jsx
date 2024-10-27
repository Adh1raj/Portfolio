import React from 'react'
import './About.css'
import profile_img from '../../assets/profile_img.jpg'

const About = () => {
  return (
    <div id='about' className='about'>
      <div className="about-title">
        <h1>About me</h1>
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>I am Bachelor student in Computer Application and I specialize in Web development and Game development</p>
            <p>I have made projects for Clients and in hackathons</p>
          </div>
          <div className="about-skills">
            <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"60%"}} /></div>
            <div className="about-skill"><p>React JS</p><hr style={{width:"70%"}} /></div>
            <div className="about-skill"><p>JavaScript</p><hr style={{width:"50%"}} /></div>
            <div className="about-skill"><p>UE 5 & Unity</p><hr style={{width:"60%"}} /></div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>3</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>1</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>1</h1>
          <p>HAPPY CLIENT</p>
        </div>
      </div>
    </div>
  )
}

export default About

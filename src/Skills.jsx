import React from 'react';
import { skills } from './Data';


const Skills = () => {
  return (
    <section className='skills section' id='skills'>
        <h2 className="section__title text-cs">Professional Skills</h2>
        <p className="section__subtitle">
            My <span>talent</span>
        </p>
        <div className="skills__container container grid">
            {skills.map((skill,index)=>{
               return (
                <div key={index} className="skills__item">
                    <div className="skills__titles">
                        <h3 className="skill__name">
                        {skill.name}
                        </h3>
                        <span className="skills__number">{skill.percent} <span>%</span></span>
                    </div>
                    <p className="skills__description">{skill.desc}</p>
                    <div className="skills__bar">
                        <span className="skills__percent" style={{width:`${skill.percent}%`}}>
                            <span></span>
                        </span>
                    </div>
                </div>
               ) 
            })}
        </div>
    </section>
  )
}

export default Skills
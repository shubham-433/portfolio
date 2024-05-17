import React, { useEffect } from 'react'
import $ from 'jquery'
import './style.css'
const Skills = () => {
  const  skill_list=[
        {
            name: "HTML",
            percent: "95%"
        },
        {
            name: "CSS",
            percent: "80%"
        },
        {
            name: "JavaScript",
            percent: "80%"
        },
        {
            name: "React",
            percent: "85%"
        },
        {
            name: "Node",
            percent: "80%"
        },
        {
            name: "MongoDB",
            percent: "80%"
        },
        {
            name: "Express",
            percent: "90%"
        },
        {
            name: "Python",
            percent: "85%"
        },
        {
            name: "Django",
            percent: "75%"
        },
        {
            name: "Aws",
            percent: "60%"
        }

    ]


  return (
    <div className='d-flex flex-rown flex-wrap ' style={{"height": "auto"}}>
      

      {skill_list.map((item, index) => {
        return (
        
            <div class="progress m-4 col-md-5  " key={index}>
              <div
                className="progress-bar "
                role="progressbar"
                aria-valuenow="60"
                aria-valuemin="0"
                aria-valuemax="100"
                style={{ "max-width": item.percent }}
              >
                <span class="title">{item.percent}</span>
              </div>

              <span class="skill">{item.name}</span>
            </div>
         
        );
      })}
    </div>
  );
}

export default Skills
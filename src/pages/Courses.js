import React from 'react'
import Header from '../components/Header.js'
import skillslist from './coursesdata.js';

function Courses() {
    return (
        <div>
            <Header/>
            <div className='courses-intro' style={{ backgroundImage: `url('./courses.svg')` }}>
                <div className='courses-intro-content'>
                    <h1>About Me</h1>

                    <div>
                        <p>
                            "I'm an adept programmer, skilled in communication and adaptable. Proficient in Frontend and Backend technologies, with MERN Stack expertise. Strong in Data Structures, Algorithms, and collaborative problem-solving. Committed to team success, effective in building social connections."
                        </p>

                        <button className='primary-button'><a href='#whyme' style={{textDecoration:'none',color:'black',fontWeight:'bold',fontSize:'18px'}}>Get Started</a></button>
                    </div>
                </div>
            </div>

            <div className='why-me-parent' id='whyme'>
                <div className='why-me n-box1 flex-with-center'>
                    <h1>Why Me?</h1>
                    <div className='why-me-content'>
                        <p>
                            I thrive in the electrifying arena of competitive programming.</p>
                        <br/>
                        <p>
                            So , confronting novel challenges is not just a habit! it's my exhilarating journey to perpetual growth and triumph.
                        </p>
                    </div>
                </div>
            </div>

            <div className='container projects-list'>
                <h3 className='font-bold'>My Skills</h3>
                <hr/>

                <div className='row'>
                    {
                        skillslist.map(skill =>{
                            return <div className='col-md-4'>
                                <div className='position-relative project'>
                                    <img src={skill.image} alt={skill.title} className='w-100'></img>
                                    <div className='project-content w-100'>
                                        <h3>{skill.title}</h3>
                                    </div>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Courses;
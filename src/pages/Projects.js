import React from 'react'
import Header from '../components/Header';
import { FaLaptopCode } from 'react-icons/fa'
import projectsdata from './projectsdata';
import { Link } from 'react-router-dom';

function Projects() {
    return (
        <div>
            <Header />

            {/* Intro to projects  */}
            <div className='container projects-intro'>
                <div className='row flex-with-center mt-5'>

                    <div className='col-md-6 n-box2 px-3 py-5'>
                        <div>
                            <h1 className='font-bold'>Projects</h1>
                            <p className='font-bold'>Great ideas don't become reality overnight; they demand dedicated practice and unwavering patience to be embraced.</p>
                            <button className='primary-button'><a href='#projectsList' style={{textDecoration:"none",color:"white",fontWeight:'bold'}}>Get Started</a></button>
                        </div>
                    </div>
                    {/* Blob  */}
                    <div className='col-md-6 position-relative'>
                        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                            <path fill="#0F62FE" d="M41.5,-65.3C54,-56.5,64.5,-45.4,71.5,-32.1C78.5,-18.8,81.9,-3.2,77.4,9.4C72.9,22,60.4,31.8,50.6,44.9C40.9,57.9,33.7,74.3,22.7,77.7C11.7,81,-3.2,71.3,-17.5,64.8C-31.9,58.3,-45.6,54.9,-57.8,46.8C-70,38.7,-80.6,25.9,-81.5,12.4C-82.5,-1.2,-73.8,-15.5,-65.2,-27.8C-56.5,-40.1,-47.7,-50.4,-36.9,-59.9C-26,-69.5,-13,-78.4,0.7,-79.5C14.5,-80.7,28.9,-74.1,41.5,-65.3Z" transform="translate(100 100)" />
                        </svg>

                        <FaLaptopCode className='position-absolute top-50 start-50 translate-middle' color='white'
                            size='180px' />
                    </div>
                </div>
            </div>

            {/* List of projects  */}
            <div className='container projects-list' id='projectsList'>
                <h3 className='font-bold'>My Projects</h3>
                <hr/>

                <div className='row'>
                    {
                        projectsdata.map(project =>{
                            return <div className='col-md-4'>
                                <div className='position-relative project'>
                                    <img src={project.image} alt={project.title}></img>
                                    <div className='project-content'>
                                        <h3>{project.title}</h3>
                                        <hr/>
                                        <p>{project.description}</p>
                                        <button className='primary-button'><Link to={project.link} target='_blank' style={{textDecoration:"none",color:"black",fontWeight:'bold'}}>DEMO</Link></button>
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

export default Projects;
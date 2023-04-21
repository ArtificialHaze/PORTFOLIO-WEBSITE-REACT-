import React from 'react';
import {FaTwitter,FaFacebook,FaYoutube} from 'react-icons/fa';

const Home = () => {
  return (
    <section className='home' id='home'>
        <div className="home__wrapper">
<div className="home__container container">
            <p className="home__subtitle text-cs">
                Hi, <span>my name is</span>
            </p>
            <h1 className='home__title text-cs'><span>Vakho</span></h1>
            <p className="home__job">
                <span className="text-cs">I am a </span><b> Web Developer</b>
            </p>
            <div className="home__img-wrapper">
                <div className="home__banner">
                    <img src="BANNER" alt="BANNER" className='home__profile'  />
                </div>
                <p className="home__data home__data-one">
                    <span className="text-lg">15 <b>+</b></span>
                    <span className="text-sm text-cs">years of <span>Experience</span></span>
                </p>
                <p className="home__data home__data-two">
                    <span className="text-lg">400</span>
                    <span className="text-sm text-cs">Completed  <span>Projects</span></span>
                </p>
                <img src="IMAGE" alt="IMAGE" className="shape shape__1" />
                <img src="IMAGE" alt="IMAGE" className="shape shape__2" />
                <img src="IMAGE" alt="IMAGE" className="shape shape__3" />
            </div>
            <p className='home__text'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia ab possimus maiores! Ratione natus delectus iste sint, maxime esse magnam.
            </p>
            <div className="home__socials">
                <a href="#" className="home__social-link">
                    <FaTwitter/>
                </a>
                <a href="#" className="home__social-link">
                    <FaFacebook/>
                </a>
                <a href="#" className="home__social-link">
                    <FaYoutube/>
                </a>
            </div>
            <div className="home__btns">
                <a href="#" className='btn text-cs'>Download CV</a>
                <a href="#" className="hero__link text-cs">My skills</a>
            </div>
        </div>
        </div>
        
    </section>
  )
}

export default Home
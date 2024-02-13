import React from 'react'
import './Intro.css';
import { Link } from 'react-scroll';
import waqar from '../Assets/waqarrb.png';

const Intro = () => {
  return (
    <section className='intro'>
        <div className='introcontent'>
        <span className='hello'>Hello,</span>
        <span className='introtext'>I'm <span className='introname'>Waqar</span></span>Website Developer
        <p className='intropara'>I am a web developer with more than 3 years experience in creating <br/> visually appealing and user friendly websites.</p>
        <Link><button className='btn'><i class="fa-solid fa-bag-shopping"></i> Hire Me</button></Link>
        </div>
        <img src={waqar} alt='' className='introimage'/>
    </section>
  )
}

export default Intro

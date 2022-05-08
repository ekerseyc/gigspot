import React from 'react';
import styled from 'styled-components'
import MissionPhoto1 from '../../assets/images/andy-lee-FuDKEwFLsQU-unsplash.jpg';
import MissionPhoto2 from '../../assets/images/natilyn-hicks-aubrey-hicks-photography-abPrOvbLdAw-unsplash.jpg';
import './mission.css';


const H1 = styled.h1`
text-align: center;
margin-bottom: 10px;
`




const Mission = () => {
  return (
    <>
      <H1>Our Mission</H1>
      <div className='missContainer'>
      <img src={MissionPhoto1} alt='' className='img1'/>
      <p className='p1'>
        Everyone knows that to be a musician, you have to go through the phase of trial and tribulation that engenders the voicings and sounds that will shape your career. Even if you want to jam with your friends when you're free, finding that gas money can be hard… With Gig Spot, we bring talented gig workers and people in search of skilled folk to make sure everyone is happy at the end of the day! No more stress over who is going to capture all the idyllic moments at your wedding; the normal band can't make it anymore? No problem! 
</p>
      </div>
      
      <div className='missContainer'>
        
<H1>Find the next perfect gig</H1>
        
  <img src={MissionPhoto2} alt='' className='img2'/>
<p className='p2'>
  Gig Spot is always looking for the next event for you. With our search parameters, you can find an event that's looking for musicians, photographers, and performers within your local area.</p>
      </div>
      </>
  );
};

export default Mission;
import React from 'react';
import styled from 'styled-components'
import MissionPhoto1 from '../../assets/images/andy-lee-FuDKEwFLsQU-unsplash.jpg';
import MissionPhoto2 from '../../assets/images/natilyn-hicks-aubrey-hicks-photography-abPrOvbLdAw-unsplash.jpg';

const H1 = styled.h1`
text-align: center;
margin-bottom: 10px;
`

const P = styled.p`
padding-right: 15px;
padding-left: 15px;
padding-top: 15px;
font-size: 24px;
font-weight: 1;
`


const Mission = () => {
  return (
    <>
      <H1>Our Mission</H1>
      <div className='missContainer'>
      <img src={MissionPhoto1} style={{float: 'left', width: '600px', height: '400px', marginTop: '4px', marginRight: '10px', borderRadius: '10px'}} alt=''/>
      <P>
        Everyone knows that to be a musician, you have to go through the phase of trial and tribulation that engenders the voicings and sounds that will shape your career. Even if you want to jam with your friends when you're free, finding that gas money can be hard… With Gig Spot, we bring talented gig workers and people in search of skilled folk to make sure everyone is happy at the end of the day! No more stress over who is going to capture all the idyllic moments at your wedding; the normal band can't make it anymore? No problem! 
</P>
      </div>
      
      <div className='missContainer'>
        
<H1>Find the next perfect gig</H1>
        
  <img src={MissionPhoto2} style={{float: 'right', width: '600px', height: '400px', marginLeft: '10px', borderRadius: '10px'}} alt=''/>
<P>
  Gig Spot is always looking for the next event for you. With our search parameters, you can find an event that's looking for musicians, photographers, and performers within your local area.</P>
      </div>
      </>
  );
};

export default Mission;
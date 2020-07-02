import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';

import './banner-top.styles.scss';
import bannerData from '../../data/banner/banner-data.json';

const Banner = () => (

      <Jumbotron style={{backgroundColor:"white"}}>
      
          <div className='row ' >
          {/*COLUMN 1 */}
            <div className='col banner-text' >
              <h1>{bannerData.title}</h1>
                <p>{bannerData.callToAction}</p>
              <p>
                <button className='button' >Learn more</button>
              </p>
            </div>
            {/*COLUMN 2 */}
            <div className='col banner-image'>
            
                <img className='' alt='hire-devonauts' src={require('../../assets/slider/computer.png')}/>
            </div>
              

          </div>
  </Jumbotron>

    )
export default Banner;
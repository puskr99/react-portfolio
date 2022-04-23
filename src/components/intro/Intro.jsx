import React from 'react'
import "./intro.css";
import dp from '../../img/dp.jpg'

const Intro = () => {
  return (
    <div className="descr">
      <div className="descr-left">
        <div className="descr-left-wrapper">
          <h2 className="descr-intro">Xiao, My name is</h2>
          <h1 className="descr-name">Puskar Adhikari</h1>
          <div className="descr-title">
            <div className="descr-title-wrapper">
              <div className="descr-title-item">Web Developer</div>
              <div className="descr-title-item">Mobile App Developer</div>
              <div className="descr-title-item">Computer Engineer</div>
            </div>
          </div>
          <p className="descr-desc" style={{fontSize:'1.6rem'}}>
            I am a web/mobile app developer with specialization in React js and React Native.
            Also a PHP and python enthusiast...   
          </p>
        </div>

      </div>
      <div className="descr-right">
        <img src={dp}
        style={{width:'80%',height:'90%',borderRadius:'10%',margin:'5px'}}
        className="dp"
         />
      </div>
    </div>
  );
};

export default Intro;

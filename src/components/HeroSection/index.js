import React from 'react'
import { Button } from '../ButtonElements';
import './HeroSection.css'

// HeroSection is a function that behaves as a home page i.e. contains the basic tags and information.
function HeroSection(){
    return (
        <div className="hero-container">
        <h1>buy More</h1>
        <p>Plan to next buy today</p>
        <div className="hero-btns">
             {/* This is a button component that passes parameters and that parameter values are used in further process. */}
            <Button fontBig big primary>Get Started</Button>
        </div>
        </div>                                     
    )
}

export default HeroSection;

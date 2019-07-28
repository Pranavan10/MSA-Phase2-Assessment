import {  Button } from '@material-ui/core';
import * as React from 'react'

import logo from '../../images/Logo.png'
import MoView from '../../images/MoView.png'
import './Header.css'



export default function Header() {
    return (
        <div className="container-fluid" style={{backgroundImage: 'linear-gradient(to right, #000000, #555555)'}}>
            <h1 className='headerText'><img src={MoView} alt="Paris Itinerary" style={{width:200, marginLeft:10}}/> <img src={logo} alt="Paris Itinerary" style={{width:113, marginLeft:10}}/></h1>
            <Button style= {{color:'white', position:'absolute',right:10, top:40}} >Your Reviews</Button>
            <Button style={{color:'white', position:'absolute', right:10, top:10, outline:'none'}}>
                            Log In
                        </Button>
                        
        
            
        </div>
    )
}
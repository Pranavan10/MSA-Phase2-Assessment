import {  Button } from '@material-ui/core';
import * as React from 'react'

import logo from '../../images/Logo.png'
import MoView from '../../images/MoView.png'
import './Header.css'


interface IState{
    log:string
}


interface IProps{
    isLoggedIn:boolean
    setPage:(page: string) => void
    
    
}


export default class Header extends React.Component<IProps, IState> {
    constructor(props:any){
        super(props)
        this.state={
            log:"Log In"
        }
        
    }
    public render(){
        if(this.props.isLoggedIn){
            this.setState({
                log:"Logged In"
            })
        }
    return (
        <div className="container-fluid" style={{backgroundImage: 'linear-gradient(to right, #000000, #555555)'}}>
            <h1 className='headerText'><img src={MoView} alt="Paris Itinerary" style={{width:200, marginLeft:10}}/> <img src={logo} alt="Paris Itinerary" style={{width:113, marginLeft:10}}/></h1>
            <Button onClick = {() => this.props.setPage("Home")}  style= {{color:'white', position:'absolute',right:10, top:10}} >Home</Button>
            <Button onClick = {() => this.props.setPage("User")}  style= {{color:'white', position:'absolute',right:10, top:70}} >Your Reviews</Button>
            <Button onClick = {() => this.props.setPage("Login")}style={{color:'white', position:'absolute', right:10, top:40, outline:'none'}}>
                           {this.state.log}
                        </Button>
                        
        
            
        </div>
    )
    }
}
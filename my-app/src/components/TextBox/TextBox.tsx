import {  Button } from '@material-ui/core';
import * as React from 'react'
import  { Component } from 'react'
import {Form} from 'react-bootstrap'
import{Col ,Row} from 'react-bootstrap'


import './TextBox.css'



export default class TextBox extends Component {
    public render(){

    
    return (
        <div className="textbox">
            
            <h1 className='Type here'>What do you want to write?</h1>
            <Row>
                <Col>
                <Form>
                <Form.Control type="text" placeholder="Enter Movie" as ="textarea"  />
                
                </Form>
                    
                </Col>
                <Col>
                    
                    <Button style={{outline:'none', width:'100%' }} size="small" color="primary" className="submit" >
                    Search
                    </Button>
                </Col>
                <Col/>
                
            </Row>
            <Row>
                <Col>
                    <Form.Control type="text" placeholder="Enter Review" as ="textarea"  />
                </Col>
                <Col>
                    
                    <Button style={{outline:'none', width:'100%' }} size="small" color="primary" className="submit" >
                    Submit
                    </Button>
                </Col>
            </Row>

        
            
        </div>
    )
    }
}
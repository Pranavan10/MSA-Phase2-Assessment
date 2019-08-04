
import {  Button } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Rating from '@material-ui/lab/Rating';

import * as React from 'react'

import {Form} from 'react-bootstrap'
import{Col ,Row} from 'react-bootstrap'


import './ReviewForm.css'



interface IState{
    
    value:number
    
}


interface IProps{
    findReview:() => void
}

export default class ReviewForm extends React.Component<IProps,IState> {
    constructor(props: any) {
        super(props);
        this.state = {
          
          value:0
          
          
        }
    }
    public render(){

    
    return (
        <div className="textbox">
            
            <Row>
                <Col style={{textAlign:"center" ,fontSize:20, borderRight:10,borderRightColor:'#000000'}}>Look at Reviews</Col>
                <Col style={{textAlign:"center",fontSize:20}}>Post your opinion</Col>
            </Row>
            <Row>
                <Col xs ={6}>
                <Form>
                <Form.Control type="text" placeholder="Enter Movie" as ="textarea"  />
                
                </Form>
                    
                </Col>
                <Col xs={2}>
                    Movie Watched
                
                    
                </Col>
                <Col xs={4}>
                    <Form>
                    <Form.Control type="text" as ="textarea"  />
                    
                    </Form>
                </Col>
                
                
            </Row>
            <Row >
                
                <Col xs={6}>

                <Button onClick = {() => this.props.findReview()} style={{outline:'none', width:'100%' }} size="small" color="primary" className="search" >
                    Search
                    </Button>
                    
                </Col>

                <Col xs={6} style={{textAlign: "center", justifyContent:'center'}}  >
                <Typography style={{justifyContent:'center'}} component="legend">Rating</Typography>
                <div style={{margin:'auto'}}>
                <Rating 
                name="simple-controlled"
                value={this.state.value}
                onChange={(event, newValue) => {
                    this.setState({
                        value:newValue
                    })
                }}
                />
                </div>
                </Col>
            </Row>
            <Row>
                <Col xs={6}/>
                <Col>
                <Form.Control type="text" placeholder="Enter Review" as ="textarea"  />
                </Col>

            </Row>
            <Row>
                <Col xs={6}/>
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
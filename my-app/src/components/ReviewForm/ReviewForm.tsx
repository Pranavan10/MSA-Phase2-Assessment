
import {  Button } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Rating from '@material-ui/lab/Rating';
import * as $ from "jquery";
import * as React from 'react'

import {Form} from 'react-bootstrap'
import{Col ,Row} from 'react-bootstrap'


import './ReviewForm.css'




interface IState{
    searchList:any[],
    value:number
    
}


interface IProps{
    findReview:() => void
}


export default class ReviewForm extends React.Component<IProps,IState> {
    constructor(props: any) {
        super(props);
        this.state = {
          searchList : [],
          value:0,
          
          
        }
        this.performSearch("ant")
    }
    public performSearch = (searchTerm:any) =>{
        const urlString = "https://api.themoviedb.org/3/search/movie?api_key=1df04ea58d909adbd19cffafbb455fed&language=en-US&page=1&include_adult=falsehttps://api.themoviedb.org/3/movie/550?api_key=1df04ea58d909adbd19cffafbb455fed&query=" +searchTerm
        $.ajax({ /*asynchronous calls to internet*/
           
            
            error:(xhr:any,status:any,err:any) =>{
                console.log("do")
            },
            success: (searchResults:any) => {
                
                
                const results= searchResults.results
                let tempSearchList:any[]
                tempSearchList=[]
                results.forEach((movie:any)=> {
                    console.log(movie.title)
                    tempSearchList.push(movie.title)
                })
                this.setState({
                    searchList:tempSearchList
                    
                    
                })
            },
            url:urlString,
            
        })
        
    }
    public searchChangeHandler = (event:any) =>{
        const searchTerm=event.target.value
        this.performSearch(searchTerm)
        
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
                    <Form.Control type="text" as ="textarea" onChange={this.searchChangeHandler} />
                    
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


import {  Button } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Rating from '@material-ui/lab/Rating';
import * as React from 'react';
import {Form} from 'react-bootstrap';
import{Col ,Row} from 'react-bootstrap';
import AsyncSelect from 'react-select/async';  
import './ReviewForm.css';








interface IState{
    
    inputValue: string,
    
    searchList:any[],
    value:number
    

}


interface IProps{
    findReview:() => void
    getMovieimage:(InputValue:any) => void
}



export default class ReviewForm extends React.Component<IProps,IState> {

    constructor(props: any) {
        super(props);
        this.state = {
            
          inputValue: "",
          
          searchList : [],
          value:0,
          
        }

        
    }
    
    
    public loadOptions = (inputValue: any, callback: any) => {
        return new Promise(resolve => {
            resolve(this.performSearch(inputValue))
            
        });
        
    }

    
    public performSearch = (searchTerm:any) => {
        const tempSearchList:any[] = [];
        if( searchTerm!== "" ){
            
            const urlString = "https://api.themoviedb.org/3/search/movie?api_key=1df04ea58d909adbd19cffafbb455fed&language=en-US&page=1&include_adult=false&query=" +searchTerm;
            
            return fetch(urlString, {
                method: 'GET'
            }).then((result: any) => {
                return result.json();
            }).then((searchResults: any) => {
              
                const results= searchResults.results;
                results.forEach((movie:any)=> {
                    tempSearchList.push({   
                        label: movie.title,
                        value: movie.title

                    });
                })
                return tempSearchList;
                
           })
           
        };

        return tempSearchList;
    }

    
    public render(){

    
    return (
        <div className="textbox">
            
            <Row>
                <Col style={{textAlign:"center" ,fontSize:25, borderRight:10,borderRightColor:'#000000',marginBottom:"10px"}}>Look at Reviews</Col>
                <Col style={{textAlign:"center",fontSize:25,marginBottom:"10px"}}>Post your opinion</Col>
            </Row>
            <Row>
                <Col xs ={6}>
                <AsyncSelect
                
                
                defaultOptions = {false}
                cacheOptions = {true}
                isLoading = {true}
                loadOptions = {this.loadOptions}
                onInputChange = {(newValue: string) => {this.setState({inputValue: newValue}); console.log(newValue); return newValue}}
                />  
                    
                </Col>
                <Col xs={2} style={{fontSize:20, margin:0}}>
                    Movie Watched
                
                    
                </Col>
                <Col xs={4}>
                    <AsyncSelect
                    style={{ height:"100px"}}
                    defaultOptions = {false}
                    cacheOptions = {true}
                    isLoading = {true}
                    loadOptions = {this.loadOptions}
                    onInputChange = {(newValue: string) =>  newValue}
                    />
                </Col>
                
                
            </Row>
            <Row >
                
                <Col xs={6}>

                <Button onClick = {() =>{this.props.findReview(); console.log(this.state.inputValue)} } style={{outline:'none', width:'100%'  }} size="small" variant="contained" color="primary" className="search"  >
                    Search
                    </Button>
                    
                </Col>

                <Col xs={6} style={{textAlign:"center"}}>
                <Typography  component="legend" style={{fontWeight:"bold"}}>Rating</Typography>
                <div style={{display: "flex", justifyContent: "center"}}>
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
                <Col xs={6} />
                <Col >
                <Form.Control type="text" style={{height : "500px", fontSize:"25px" }}  placeholder="Enter Review" as ="textarea"  />
                </Col>

            </Row>
            <Row>
                <Col xs={6}/>
                <Col>
                    
                    <Button  variant="contained" color="primary" style={{ outline:'none', width:'100%'  }} size="small"    >
                    Submit
                    </Button>
                </Col>
            

        
            </Row> 
        </div>
    )
    }
}

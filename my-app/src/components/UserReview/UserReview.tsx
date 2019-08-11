import {Button} from '@material-ui/core';
import * as React from 'react'
import  { Component, } from 'react'
import ReviewCard from '../ReviewCard/ReviewCard';


interface IState{
    
    reviewsFromDb: []
    name:string
}



/*interface IMovieReview {
    name:string,
    movie: string,
    review: string,
    rating: number,
    
    
}*/

export default class UserReview extends Component<{}, IState> {
    constructor(props: any) {
        super(props);

        this.state = {
            reviewsFromDb: [],
            name:""
            }
        this.getUserReveiw()
    }
    public getUserReveiw = () =>{

        const urlString= "https://localhost:44343/api/Users/SearchByUser/1"
        return fetch(urlString, {
            method: 'GET'
        }).then((result: any) => {
            return result.json();

        }).then((result:any) =>{
            
            this.setState({
                
                name:result[0].fullName,
                reviewsFromDb:result[0].reviews
            })
            
            
        })
    }
    
    public render(){
        
        return (
            
            
            this.state.reviewsFromDb.map((reviews: any, i: number) => {
                return (
                    
                    <React.Fragment key={i} >
                    <ReviewCard key = {i}  rating = {reviews.rating} review= {reviews.review} name={this.state.name} movie = {reviews.movie.movie}/>
                    <Button size="small" href="https://www.facebook.com/sharer/sharer.php?u=https://developers.themoviedb.org/3/getting-started/introduction" variant="contained" color="primary" >
                   
                    Share on Facebook
                    
                    </Button>
                    <Button size="small" variant="contained" color="secondary">
                    Edit
                    </Button>
                    </React.Fragment>
                )
            })
        )
    }
}
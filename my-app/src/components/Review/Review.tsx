
import * as React from 'react'
import  { Component, } from 'react'
import ReviewCard from '../ReviewCard/ReviewCard';


interface IState{
    
    reviewsFromDb: []
    movieName:string
}





export default class UserReview extends Component<{}, IState> {
    constructor(props: any) {
        super(props);

        this.state = {
            reviewsFromDb: [],
            movieName:""
                
            }
        this.getMovieReveiw()
    }
    public getMovieReveiw = () =>{

        const urlString= "https://localhost:44343/api/Movies/SearchByMovie/Hohoman"
        return fetch(urlString, {
            method: 'GET'
        }).then((result: any) => {
            return result.json();

        }).then((result:any) =>{
            
            this.setState({
                movieName:result[0].movie,
                reviewsFromDb:result[0].reviews
            })
            
        })
    }
    public render(){
        console.log(this.state.movieName)
        return (
            
            this.state.reviewsFromDb.map((review: any, i: number) => {
                return (
                    <React.Fragment key = {i}>
                    <ReviewCard key = {i} rating = {review.rating} review= {review.review} name={review.userKeyNavigation.fullName} movie = {this.state.movieName} />
                    
                    </React.Fragment>
                )
            })
        )
    }
}
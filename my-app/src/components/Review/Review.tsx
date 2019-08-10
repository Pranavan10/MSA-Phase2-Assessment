
import * as React from 'react'
import  { Component, } from 'react'
import ReviewCard from '../ReviewCard/ReviewCard';


interface IState{
    
    reviewsFromDb: IMovieReview[]
}



interface IMovieReview {
    name:string,
    movie: string,
    review: string,
    rating: number,
    
    
}

export default class UserReview extends Component<{}, IState> {
    constructor(props: any) {
        super(props);

        this.state = {
            reviewsFromDb: [
                {
                    name:"Pranavan",
                    movie: "adad",
                    rating: 3,
                    review: "tyrurty"
                }, 
                {
                    name:"Pranavan",
                    movie: "asdasd",
                    rating: 2,
                    review: "sdsdf"
                },
                {
                    name:"Pranavan",
                    movie: "bobo",
                    rating: 5,
                    review: "yoyo"
                }
              ]
            }
    }
    public render(){
        return (
            this.state.reviewsFromDb.map((review: IMovieReview, i: number) => {
                return (
                    <React.Fragment key = {i}>
                    <ReviewCard key = {i} movie = {review.movie} rating = {review.rating} review= {review.review} name={review.name} />
                    
                    </React.Fragment>
                )
            })
        )
    }
}
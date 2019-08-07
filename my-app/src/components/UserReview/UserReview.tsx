
import * as React from 'react'
import  { Component } from 'react'
import ReviewCard from '../ReviewCard/ReviewCard';


interface IState{
    
    reviewsFromDb: IMovieReview[]
}



interface IMovieReview {
    review: string,
    rating: number,
    movie: string
}

export default class UserReview extends Component<{}, IState> {
    constructor(props: any) {
        super(props);

        this.state = {
            reviewsFromDb: [
                {
                    movie: "adad",
                    rating: 3,
                    review: "tyrurty"
                }, 
                {
                    movie: "asdasd",
                    rating: 2,
                    review: "sdsdf"
                },
                {
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
                    <ReviewCard key = {i} movie = {review.movie} rating = {review.rating} review= {review.review} />
                )
            })
        )
    }
}
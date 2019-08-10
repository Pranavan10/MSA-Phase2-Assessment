import {Button} from '@material-ui/core';
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
                    review: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                }, 
                {
                    name:"Pranavan",
                    movie: "asdasd",
                    rating: 2,
                    review: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                },
                {
                    name:"Pranavan",
                    movie: "bobo",
                    rating: 5,
                    review: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                }
              ]
            }
    }
    public render(){
        return (
            this.state.reviewsFromDb.map((review: IMovieReview, i: number) => {
                return (
                    <React.Fragment key={i} >
                    <ReviewCard key = {i} movie = {review.movie} rating = {review.rating} review= {review.review} name={review.name}/>
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
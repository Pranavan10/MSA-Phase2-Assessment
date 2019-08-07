import {  Button, Card , CardActionArea, CardActions, CardContent, CardMedia, Typography} from '@material-ui/core';
import * as React from 'react';


interface IProps {
    movie: string,
    rating: number,
    review: string
}
class ReviewCard extends React.Component<IProps, {}> {
    constructor(props: any) {
        super(props);
    }

    public render() {
        const card = (
        <Card>
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="140"
                    image="https://www.bing.com/th?id=OIP.vS5jUPq9PFkVqbqAcGzoDgHaGU&o=5&pid=1.7&rs=1"
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom= {true} variant="h5" component="h2">
                        {this.props.movie}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {this.props.review}
                    </Typography>

                    <Typography variant="body2" color="textSecondary" component="p">
                        Rating: {this.props.rating} /5
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    Share
                </Button>
                <Button size="small" color="primary">
                    Edit
                </Button>
            </CardActions>
        </Card>);

        return card;
    }
}

export default ReviewCard;
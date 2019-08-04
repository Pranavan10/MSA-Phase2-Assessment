
import * as React from 'react'


import{Col ,Row} from 'react-bootstrap'


import './Review.css'


/*interface IState{
    searched:any
    reviews:any
}*/



 class Review extends React.Component {

     constructor(props: any)
    {
        super(props);
        this.state =
        {
            reviews:[],
            searched:String,
            
        }
    }
    public render()
    {

    
    return (
        <div>
            <Row>
                <Col>
                
                Movie
                </Col>
                
                <Col/>
                
                
                <Col/>
                
            </Row>
            <Row>
                <Col>
               Rating
                </Col>
                
                <Col/>
                
               
                <Col/>
                
            </Row>
            <Row>
                <Col className="yo" >
                Genre
                </Col>
                
                <Col/>
                
                
                <Col/>
                
            </Row>
            </div>
    )
    }
}
export default Review


import * as React from 'react';

import Header from './components/Header/Header'

import LoginDialog from './components/LoginDialog/LoginDialog'
import Review from './components/Review/Review';
import ReviewForm from  './components/ReviewForm/ReviewForm';
import UserReview from './components/UserReview/UserReview';





interface IState{
  curPage: string
  isLoggedIn:boolean
  movieUrl:string,
  open:boolean
  reviewSearch:boolean
  userID:string
  

  
}




class App extends React.Component<any, IState> {
  constructor(props:any){
    super(props)
    this.state = {
      curPage: "Home",
      isLoggedIn:false,
      movieUrl:"",
      open:false,
      reviewSearch:false,
      userID:"",
      


    }
    
}

public getMovieImage = (inputValue:any) =>{
  console.log(inputValue)     
  const urlString = "https://api.themoviedb.org/3/search/movie?api_key=1df04ea58d909adbd19cffafbb455fed&language=en-US&page=1&include_adult=false&query=" +inputValue;
  return fetch(urlString, {
      method: 'GET'
  }).then((result: any) => {
      return result.json();
  }).then((result:any) => {
      
      console.log(result)
      /*this.setState({
          
          movieUrl:"https://http://image.tmdb.org/t/p/w185"+result.movie.poster_path
          
      })*/
      console.log(this.state.movieUrl)
      
  })
  
}
  public findReview = () =>{
    this.setState({
      reviewSearch: true
    })
  }

  public setPage = (page:string) =>{
    this.setState({
      curPage: page,
      reviewSearch:false
    })
  }
  
  public setDialog = (nextOpen:boolean) => {
    console.log("Current state: ", this.state.open, "Proposed State; ", nextOpen)
    if(nextOpen !==this.state.open){
      this.setState({
        open:nextOpen
      })
    }
  }

  public getLog = (log:boolean , id:string) => {
    this.setState({
      isLoggedIn:log,
      userID:id
    })
  }

  public render() {
    let curPage: any;

    switch(this.state.curPage){
      case "User":{
        curPage = <UserReview/>
        break
      } case "Home":{
        if(this.state.reviewSearch===true){
          curPage=<Review />
        } else{
          curPage=<ReviewForm findReview={this.findReview} getMovieimage={this.getMovieImage}/>
        }
        break;
      }
   } 
    return (
      <React.Fragment>
        <LoginDialog open={this.state.open} setOpen={this.setDialog} />
        <Header setPage={this.setPage} setDialog = {this.setDialog} isLoggedIn={this.state.isLoggedIn} />
        {curPage}
      </React.Fragment>
    );
  }
}

export default App;

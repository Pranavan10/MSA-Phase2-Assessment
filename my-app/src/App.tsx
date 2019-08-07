

import * as React from 'react';

import Header from './components/Header/Header'

import LoginDialog from './components/LoginDialog/LoginDialog'
import Review from './components/Review/Review';
import ReviewForm from  './components/ReviewForm/ReviewForm';
import UserReview from './components/UserReview/UserReview';





interface IState{
  curPage: string
  isLoggedIn:boolean
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
      open:false,
      reviewSearch:false,
      userID:""


    }
    
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
          curPage=<Review/>
        } else{
          curPage=<ReviewForm findReview={this.findReview}/>
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

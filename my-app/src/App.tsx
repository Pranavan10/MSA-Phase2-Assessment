

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

  public setOpen = (nextOpen:boolean) => {
    if(nextOpen !==this.state.open){
        this.setState({
          open:nextOpen
    
        })
    }
    
  }
  public handleClickOpen = () => {
    this.setOpen(true);
  }

  public handleClose =  () => {
    this.setOpen(false);
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
      } case "Login":{
       
          this.setOpen(true)
          
          break
      } case "Home":{
        
        if(this.state.reviewSearch===true){
          curPage=<Review/>
        } else{
          curPage=<ReviewForm findReview={this.findReview}/>
        }
      }
      
        
        
        
      
   } 
    return (
      
      <div>

         <LoginDialog open={this.state.open} setOpen={this.setOpen} handleClose= {this.handleClose} handleClickOpen = {this.handleClickOpen} getLog={this.getLog}/>
         <Header setPage={this.setPage} isLoggedIn={this.state.isLoggedIn}/>
           {
             curPage
           }

             
           
           
           

       
         
          
        
      </div>
    );
  }
}

export default App;

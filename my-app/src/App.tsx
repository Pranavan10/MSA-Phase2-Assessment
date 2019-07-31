

import * as React from 'react';

import Header from './components/Header/Header'

import LoginDialog from './components/LoginDialog/LoginDialog'
import UserReview from './components/UserReview/UserReview';


interface IState{
  curPage: string
  open:boolean
}




class App extends React.Component<any, IState> {
  constructor(props:any){
    super(props)
    this.state = {
      curPage: "Start",
      open:false,

    }
    
}

  public setPage = (page:string) =>{
    this.setState({
      curPage: page
    })
  }

  public setOpen = (nextOpen:boolean) => {
    if(nextOpen !==this.state.open){
        this.setState({
          open:nextOpen
    
        })
    }
    
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
        
        
        
       
      }
      
        
        
        
      
   } 
    return (
      
      <div>

         <LoginDialog open={this.state.open} setOpen={this.setOpen}/>
         <Header setPage={this.setPage}/>
           {
             curPage
           
           }

       
         {/*} <TextBox/>*/}
          {/*<Review/>*/}
        
      </div>
    );
  }
}

export default App;

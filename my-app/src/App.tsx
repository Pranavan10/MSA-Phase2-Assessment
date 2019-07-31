

import * as React from 'react';

import Header from './components/Header/Header'

import LoginDialog from './components/LoginDialog/LoginDialog';
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

  public setOpen = (open:boolean) => {
    this.setState((prevState:any) => {
        return ({
            open: !prevState.open
        })
    }
    )
  }
  

  public render() {
    let curPage: any;

    switch(this.state.curPage){
      case "User":{
        curPage = <UserReview/>
      } case "Login":{
        this.setOpen(true)
      }
      
        
        
        
      
   } 
    return (
      
      <div>

         
         <Header setPage={this.setPage}/>
           {
             curPage
           
           }

        <LoginDialog open={this.state.open} setOpen={this.setOpen}/>
         {/*} <TextBox/>*/}
          {/*<Review/>*/}
        
      </div>
    );
  }
}

export default App;

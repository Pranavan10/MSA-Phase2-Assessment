

import * as React from 'react';

import Header from './components/Header/Header'


import UserReview from './components/UserReview/UserReview';

interface IState{
  curPage: string
}



class App extends React.Component<{}, IState> {
  constructor(props:any){
    super(props)
    this.state = {
      curPage: "User",

    }
    
}

  public setPage = (page:string) =>{
    this.setState({
      curPage: page
    })
  }

  public render() {
    let curPage: any;

    switch(this.state.curPage){
      case "User":{
        curPage = <UserReview/>
      }
   } 
    return (
      
      <div>

        
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

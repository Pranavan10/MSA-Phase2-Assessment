

import * as React from 'react';

import Header from './components/Header/Header'
import Review from './components/Review/Review'
import TextBox from './components/TextBox/TextBox'





class App extends React.Component {
  public render() {
    return (
      <div>
        
         <Header/>
          
          <TextBox/>
          <Review/>
        
      </div>
    );
  }
}

export default App;

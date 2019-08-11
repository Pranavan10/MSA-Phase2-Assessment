
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import * as React from 'react';
import{Col,Row} from 'react-bootstrap'
import FacebookLogin from 'react-facebook-login';
import { isNullOrUndefined } from 'util';

interface IState{
  isLoggedIn: boolean,
  userID:string,
  name:string,
  picture:string

}


interface IProps{
    setOpen:(open:boolean) => void
    open: boolean
}



export default class LoginDialog extends React.Component<IProps,IState> {
   
    constructor(props: any) {
        super(props);
        this.state = {
          isLoggedIn:false,
          name:"",
          picture:"",
          userID:"",
        }
        
    }
    public addUser = () =>{
      
      fetch('https://localhost:44343/api/Users',{
        
        
        method: 'POST',
        headers:{
          
          'Accept': '/swagger/v1/swagger.json',
          'Content-Type': '/swagger/v1/swagger.json',
        },
        body: JSON.stringify({
          userId:this.state.userID,
          fullName:this.state.name,
          
        })

      })
    }
    public responseFacebook = (response: any) =>{
      if(response.error !== isNullOrUndefined) {
        this.setState({
          isLoggedIn:true,
          name: response.name,
          picture: response.picture.data.url,
          userID:response.userID,
          
        })
        console.log(this.state.name)
        this.addUser()
      }
    }
    public componentClicked = () => console.log("dd")
    
    public render() {

      let fbContent;

      if(this.state.isLoggedIn){
        fbContent=(
          <React.Fragment>
            <Row>
              <Col>
                <img src={this.state.picture} alt ={this.state.name} style={{marginLeft:93}}/>
              </Col>
            </Row>
            <Row>
              <Col>
                Welcome {this.state.name}
              </Col>
            </Row>
          </React.Fragment>
        )
      } else{
        fbContent=(<FacebookLogin
          appId="2240066002771424"
          autoLoad={true}
          fields="name,email,picture"
          onClick={this.componentClicked}
          callback={this.responseFacebook} />)
      }
        return (
            <React.Fragment>
              <Dialog open={this.props.open} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Login with Facebook</DialogTitle>
                <DialogContent>
                  <DialogContentText>
                    <div>
                      {fbContent}
                    </div>
                  </DialogContentText>
                </DialogContent>

                <DialogActions>
                  <Button 
                    onClick= {() => {console.log("hi"); this.props.setOpen(false)}}  color="primary">
                    Close
                  </Button>
                </DialogActions>
              </Dialog>
            </React.Fragment>

        )
    }

}

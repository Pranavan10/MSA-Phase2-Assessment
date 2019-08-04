
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import * as React from 'react';
import{Col,Row} from 'react-bootstrap'
import FacebookLogin from 'react-facebook-login';

interface IState{
  isLoggedIn: boolean,
  userID:string,
  name:string,
  picture:string

}


interface IProps{
    setOpen:(open:boolean) => void
    open: boolean
    handleClickOpen :() => void
    handleClose :() => void
    getLog:(log:boolean, id: string)=> void
    

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
    public responseFacebook = (response: any) =>{
     /*Issue*/ {this.props.getLog(this.state.isLoggedIn, this.state.userID)}
      this.setState({
        isLoggedIn:true,
        name: response.name,
        picture: response.picture.data.url,
        userID:response.userID,
        
        


      })
      
    }
    public componentClicked = () => console.log("dd")
    

    
    public render() {
      let fbContent;
      if(this.state.isLoggedIn){
        fbContent=(
          <div style={{
            margin: 'auto'
          }}>

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
          </div>
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
              
           
            <Dialog open={this.props.open}  aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Login with Facebook</DialogTitle>
        <DialogContent>
          <DialogContentText>
          <div>{fbContent}</div>
        
          </DialogContentText>
          
        </DialogContent>
        <DialogActions>
          
          <Button onClick={() => this.props.handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
    </Dialog>
    </React.Fragment>

        )
    }

}

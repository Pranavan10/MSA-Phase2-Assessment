
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import * as React from 'react';




interface IProps{
    setOpen:(open:boolean) => void
    open: boolean
}



export default class LoginDialog extends React.Component<IProps,{}> {
   
    constructor(props: any) {
        super(props);
        
        
    }
    
    public handleClickOpen = () => {
        this.props.setOpen(true);
    }
    
    public handleClose =  () => {
        this.props.setOpen(false);
    }

    
    public render() {
        return (
            <React.Fragment>
           {/* <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>
        Open form dialog
        </Button>*/}
            <Dialog open={this.props.open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We will send updates
            occasionally.
          </DialogContentText>
          
        </DialogContent>
        <DialogActions>
          
          <Button onClick={this.handleClose} color="primary">
            Subscribe
          </Button>
        </DialogActions>
    </Dialog>
    </React.Fragment>

        )
    }

}
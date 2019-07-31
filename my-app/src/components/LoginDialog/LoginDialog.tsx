
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import * as React from 'react';



interface IState{
    open:boolean
}



export default class FormDialog extends React.Component<{},IState> {
   
    constructor(props: any) {
        super(props);
        this.state = {
            open: false
        }
        this.handleClose = this.handleClose.bind(this)
    }
    public setOpen = (open:boolean) => {
        this.setState((prevState:any) => {
            return ({
                open: !prevState.open
            })
        }
        )
    }
    public handleClickOpen = () => {
        this.setOpen(true);
    }
    
    public handleClose =  () => {
        this.setOpen(false);
    }

    
    public render() {
        return (
            <React.Fragment>
            <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>
        Open form dialog
      </Button>
            <Dialog open={this.state.open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
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
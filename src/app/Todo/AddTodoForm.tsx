import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {useState} from "react"
import Button from '../components/Button';
import TextField from '@mui/material/TextField';



export default function AddTodoForm() {

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    return (
        <div>
        <Button text={"Add Todo"} onClick={handleClickOpen}>
            
        </Button>
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Add Todo</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Add information about the Todo.
                </DialogContentText>
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Todo Title"
                    type="email"
                    fullWidth
                    required
                    variant="outlined"
                />
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Todo Description"
                    type="email"
                    multiline
                    variant="outlined"
                    minRows={4}
                    style={{ width: '300px' }}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} text="Create"></Button>
            </DialogActions>
        </Dialog>
        </div>
    );

    // be a dialog where you have info for the todo
}
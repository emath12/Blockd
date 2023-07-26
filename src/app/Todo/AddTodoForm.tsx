import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {useState} from "react"
import Button from '../components/Button';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function AddTodoForm() {

    const [open, setOpen] = useState(false);
    const [todoDescription, setTodoDescription] = useState("");
    const [todoTitle, setTodoTitle] = useState("");

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
                <p style={{margin: "6px"}}>Pick a due date:</p>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DateCalendar />
                </LocalizationProvider>
                <FormControl>
                    <FormLabel id="demo-radio-buttons-group-label">Priority Level</FormLabel>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="1"
                            required
                            name="radio-buttons-group"
                        >
                            <FormControlLabel value="1" control={<Radio />} label="1" />
                            <FormControlLabel value="2" control={<Radio />} label="2" />
                            <FormControlLabel value="3" control={<Radio />} label="3" />
                            <FormControlLabel value="4" control={<Radio />} label="4" />
                            <FormControlLabel value="5" control={<Radio />} label="5" />
                        </RadioGroup>
                </FormControl>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} text="Create"></Button>
            </DialogActions>
        </Dialog>
        </div>
    );

    // be a dialog where you have info for the todo
}
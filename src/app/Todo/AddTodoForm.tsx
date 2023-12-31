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
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

// interface AddTodoFormProps {
//     text: string;
//     useCustomHook: any; // Replace 'any' with the specific type of the custom hook if possible
//   }

export default function AddTodoForm(props: any) {

    const [activeTodos, setActiveTodos] = props.theActiveTodos;
    const [open, setOpen] = useState<boolean>(false);
    const [todoDescription, setTodoDescription] = useState<string>("");
    const [todoTitle, setTodoTitle] = useState<string>("");
    const [selectedPriority, setSelectedPriority] = useState<string>("1");
    const [selectedDateTime, setSelectedDateTime] = useState<Date | null>(null);
    const [selectedTimeNeeded, setSelectedTimeNeeded] = useState<string>("");

    let theEvents = props.events;

    const handleClickOpen = () => {
        setOpen(true)
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleDateChange = (newDate: Date | null) => {
        // Your date handling logic here
        setSelectedDateTime(newDate);
      };

    function handleSubmit() {

        // console.log(
        //     {
        //         "id" : activeTodos.length,
        //         "title" : todoTitle,
        //         "description": todoDescription,
        //         "dueDate" : selectedDateTime,
        //         "priority" : selectedPriority,
        //         "timeNeeded" : selectedTimeNeeded
        //     }
        // )

        let newActiveTodos = [...activeTodos];

        newActiveTodos.push(
            {
                "id" : activeTodos.length,
                "title" : todoTitle,
                "description": todoDescription,
                "dueDate" : selectedDateTime,
                "priority" : selectedPriority,
                "timeNeeded" : selectedTimeNeeded,
            }
        )
             
        setActiveTodos(newActiveTodos);
        setTodoTitle("");
        setTodoDescription("")
        // setSelectedDateTime(new Date(0));
    }

    return (
        <div>
        <Button text={"Add Todo"} onClick={handleClickOpen}>
        </Button>
        <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Add a Todo</DialogTitle>
                <div className="flex justify-start">
                <DialogContent>
                    <DialogContentText>
                        Add information about the Todo.
                    </DialogContentText>
                    <div className='w-full justify-left'>
                        <TextField
                            autoFocus
                            onChange={(e) => setTodoTitle(e.target.value)}
                            margin="dense"
                            id="name"
                            label="Todo Title"
                            type="email"
                            fullWidth
                            required
                            variant="outlined"
                            style={{ width: '100%' }}
                        />
                        <TextField
                            autoFocus
                            onChange={(e) => setTodoDescription(e.target.value)}
                            margin="dense"
                            id="name"
                            label="Todo Description"
                            type="email"
                            multiline
                            fullWidth
                            variant="outlined"
                            minRows={4}
                            style={{ width: '100%' }}
                        />
                    </div>

                    <div className='grid place-content-center'>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DateTimePicker 
                                label="Due Date" 
                                className='float-left m-6'
                                onChange={handleDateChange}
                                value={selectedDateTime}
                                />
                        </LocalizationProvider>
                    </div>
                    <FormControl>
                        <div className='grid grid-rows-1 grid-cols-2'>
                            <div className='col-span-1'>
                                <FormLabel id="demo-radio-buttons-group-label">Priority Level</FormLabel>
                                <RadioGroup
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    defaultValue="1"
                                    name="radio-buttons-group"
                                    onChange={(event) => setSelectedPriority(event.target.value)}
                                >
                                    <FormControlLabel value="1" control={<Radio />} label="1" />
                                    <FormControlLabel value="2" control={<Radio />} label="2" />
                                    <FormControlLabel value="3" control={<Radio />} label="3" />
                                    <FormControlLabel value="4" control={<Radio />} label="4" />
                                    <FormControlLabel value="5" control={<Radio />} label="5" />
                                </RadioGroup>
                            </div>
                            <div className='col-span-1'>
                                <FormLabel id="demo-radio-buttons-group-label">How much time do you need?</FormLabel>
                                <RadioGroup
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    defaultValue="15"
                                    name="radio-buttons-group"
                                    onChange={(event) => setSelectedTimeNeeded(event.target.value)}

                                >
                                    <FormControlLabel value="15" control={<Radio />} label="15" />
                                    <FormControlLabel value="30" control={<Radio />} label="30" />
                                    <FormControlLabel value="60" control={<Radio />} label="60" />
                                </RadioGroup>
                            </div>
                        </div>
                    </FormControl>
                    <DialogActions>
                        <Button onClick={() => {handleClose(); handleSubmit()}} text="Create"></Button>
                    </DialogActions>
                </DialogContent>
            </div>
        </Dialog>
        </div>
    );
}
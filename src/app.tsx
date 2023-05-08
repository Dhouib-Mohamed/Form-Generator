import {useState} from "react";
import FormGenerator from "./components/FormGenerator";
import {Box, Button, IconButton, Snackbar} from "@mui/material";
import Modal from "@mui/material/Modal";
import FormPreview from "./components/FormPreview.tsx";
import ReactDomServer from 'react-dom/server';


const style ={
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    borderRadius:10,
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
}


function App() {
    const [formFields, setFormFields] = useState([
        {
            id: "1",
            type: "text",
            label: "Name",
            value: "",
            options: [],
        },
        {
            id: "2",
            type: "number",
            label: "Age",
            value: "",
            options: [],
        },
        {
            id: "3",
            type: "date",
            label: "Date of Birth",
            value: "",
            options: [],
        },
        {
            id: "4",
            type: "checkbox",
            label: "Agree to Terms and Conditions",
            value: "",
            options: [],
        },
        {
            id: "5",
            type: "radio",
            label: "Gender",
            value: "",
            options: [
                { id: "male", label: "Male" },
                { id: "female", label: "Female" },
            ],
        },
        {
            id: "6",
            type: "select",
            label: "Country",
            value: "",
            options: [
                { id: "usa", label: "USA" },
                { id: "canada", label: "Canada" },
                { id: "mexico", label: "Mexico" },
            ],
        },
    ]
);
    const [showPreview,setShowPreview] = useState(false)
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const action = (
        <>
            <Button color="secondary" size="small" onClick={handleClose}>
                UNDO
            </Button>
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleClose}
            >
            </IconButton>
        </>
    );



    return (
        <div className="App">
            <header>
                <h3 style={{marginLeft:"3%"}}>Form Generator</h3>
                <div className="button-group">
                    <Button onClick={()=>{setShowPreview(true)}}>Preview</Button>
                    <Button onClick={()=>{
                        navigator.clipboard.writeText(ReactDomServer.renderToStaticMarkup(<FormPreview formFields={formFields}/>));
                        handleClick()
                    }}>Copy Html Code</Button>
                    <Button onClick={()=>{
                        navigator.clipboard.writeText(JSON.stringify(formFields))
                        handleClick()
                    }}>Copy JSON Code</Button>
                </div>
            </header>
            <FormGenerator formFields={formFields} setFormFields={setFormFields} />
            <div style={{height:40}}></div>
            <Modal
                open={showPreview}
                onClose={()=>{setShowPreview(false)}}
            >
                <Box sx={{ ...style }}>
                    <FormPreview formFields={formFields} />
                </Box>
            </Modal>
            <Snackbar
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
                message="Text Copied to ClipBoard"
                action={action}
            />
        </div>
    );
}

export default App;

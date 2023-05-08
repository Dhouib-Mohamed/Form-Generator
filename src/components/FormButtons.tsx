import { useState } from "react";
import Modal from '@mui/material/Modal';
import {Box, Button} from "@mui/material";

const FormButtons = ({ setFormFields }) => {
    const [showInputModal, setShowInputModal] = useState(false);
    const [showSelectModal, setShowSelectModal] = useState(false);
    const [showCheckboxModal, setShowCheckboxModal] = useState(false);
    const [showRadioModal, setShowRadioModal] = useState(false);
    const [showNumberModal, setShowNumberModal] = useState(false);
    const [showDateModal, setShowDateModal] = useState(false);

    const style ={
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        pt: 2,
        px: 4,
        pb: 3,
    }

    const addInputField = (label,type) => {
        const newField = {
            type: type,
            label,
            id: Math.floor(Math.random() * 1000),
        };
        setFormFields((prevFields) => [...prevFields, newField]);
        setShowInputModal(false);
    };

    const addCheckboxField = (label) => {
        const newField = {
            type: "checkbox",
            label,
            id: Math.floor(Math.random() * 1000),
        };
        setFormFields((prevFields) => [...prevFields, newField]);
        setShowCheckboxModal(false);
    };

    const addSelectField = (label, options) => {
        const newField = {
            type: "select",
            label,
            options,
            id: Math.floor(Math.random() * 1000),
        };
        setFormFields((prevFields) => [...prevFields, newField]);
        setShowSelectModal(false);
    };

    const addRadioField = (label, options) => {
        const newField = {
            type: "radio",
            label,
            options,
            id: Math.floor(Math.random() * 1000),
        };
        setFormFields((prevFields) => [...prevFields, newField]);
        setShowRadioModal(false);
    };

    const addNumberField = (label) => {
        const newField = {
            type: "number",
            label,
            id: Math.floor(Math.random() * 1000),
        };
        setFormFields((prevFields) => [...prevFields, newField]);
        setShowNumberModal(false);
    };

    const addDateField = (label) => {
        const newField = {
            type: "date",
            label,
            id: Math.floor(Math.random() * 1000),
        };
        setFormFields((prevFields) => [...prevFields, newField]);
        setShowDateModal(false);
    };

    return (
        <Box>
            <div style={{display:"flex",justifyContent:"space-between",width:"100%",marginTop:10}}>
                <Button onClick={() => setShowInputModal(true)}>Add Text Field</Button>
                <Button onClick={() => setShowNumberModal(true)}>Add Number Field</Button>
                <Button onClick={() => setShowCheckboxModal(true)}>Add Checkbox Field</Button>
                <Button onClick={() => setShowRadioModal(true)}>Add Radio Field</Button>
                <Button onClick={() => setShowSelectModal(true)}>Add Select Field</Button>
                <Button onClick={() => setShowDateModal(true)}>Add Date Field</Button>

            </div>
            <Modal
                open={showInputModal}
            >
                <Box sx={{ ...style }}>
                    <h2>Add Text Field</h2>
                    <label>Label:</label>
                    <input type="text" id="text-label" />
                    <br />
                    <br />
                    <label>Type:</label>
                    <select id="text-type">
                        <option value="text">Text</option>
                        <option value="email">Email</option>
                        <option value="password">Password</option>
                    </select>
                    <br />
                    <br />
                    <button onClick={() => addInputField(document.getElementById("text-label")["value"],document.getElementById("text-type")["value"])}>Add Field</button>
                    <button onClick={() => setShowInputModal(false)}>Cancel</button>
                </Box>
            </Modal>
            <Modal
            open={showSelectModal}
        >
            <Box sx={{ ...style }}>
                <h2>Add Select Field</h2>
                <label>Label:</label>
                <input type="text" id="select-label" />
                <br />
                <br />
                <label>Options:</label>
                <input type="text" id="select-options" />
                <br />
                <br />
                <button onClick={() => addSelectField(document.getElementById("select-label")["value"],document.getElementById("select-options")["value"].split(","))}>Add Field</button>
                <button onClick={() => setShowSelectModal(false)}>Cancel</button>
            </Box>
        </Modal>

            <Modal
                open={showCheckboxModal}
            >
                <Box sx={{ ...style }}>
                    <h2>Add Checkbox Field</h2>
                    <label>Label:</label>
                    <input type="text" id="check-label" />
                    <br />
                    <br />
                    <button onClick={() => addCheckboxField(document.getElementById("check-label")["value"])}>Add Field</button>
                    <button onClick={() => setShowCheckboxModal(false)}>Cancel</button>
                </Box>
            </Modal>

            <Modal
                open={showRadioModal}
            >
                <Box sx={{ ...style }}>
                    <h2>Add Radio Field</h2>
                    <label>Label:</label>
                    <input type="text" id="radio-label" />
                    <br />
                    <br />
                    <label>Options:</label>
                    <input type="text" id="radio-options" />
                    <br />
                    <br />
                    <button onClick={() => addRadioField(document.getElementById("radio-label")["value"],document.getElementById("radio-options")["value"].split(","))}>Add Field</button>
                    <button onClick={() => setShowRadioModal(false)}>Cancel</button>
                </Box>
            </Modal>

            <Modal
                open={showNumberModal}
            >
                <Box sx={{ ...style }}>
                    <h2>Add Number Field</h2>
                    <label>Label:</label>
                    <input type="text" id="number-label" />
                    <br />
                    <br />
                    <button onClick={() => addNumberField(document.getElementById("number-label")["value"])}>Add Field</button>
                    <button onClick={() => setShowNumberModal(false)}>Cancel</button>
                </Box>
            </Modal>

            <Modal
                open={showDateModal}
            >
                <Box sx={{ ...style }}>
                    <h2>Add Date Field</h2>
                    <label>Label:</label>
                    <input type="text" id="date-label" />
                    <br />
                    <br />
                    <button onClick={() => addDateField(document.getElementById("date-label")["value"])}>Add Field</button>
                    <button onClick={() => setShowDateModal(false)}>Cancel</button>
                </Box>
            </Modal>
        </Box>
    );
};

export default FormButtons;

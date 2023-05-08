import {Button} from "@mui/material";

function Field({ type, id, label, value, options, onChange, onDelete }) {


    const handleDelete = () => {
        onDelete(id);
    };
    switch (type) {
        case "select":
            return (
                <div className="field">
                    <div>
                    <label className={"field-label"} htmlFor={id}>{label}</label>
                    <select id={id} value={value} onChange={(e) => onChange(id, e.target.value)}>
                        {options.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                    </div>
                    <Button onClick={handleDelete}>Delete</Button>
                </div>
            );
        case "checkbox":
            return (
                <div className="field">
                    <div>
                    <label htmlFor={id} className={"field-label"}>
                        <input
                            type="checkbox"
                            id={id}
                            onChange={(e) => onChange(id, e.target.value)}
                        />
                        {label}
                    </label>
                </div>
                    <Button className="delete-button" onClick={() => onDelete(id)}>
                        Delete
                    </Button>
                </div>
            );
        case "radio":
            return (
                <div className="field">
                    <div>
                    <label className={"field-label"}>{label}</label>
                    {options.map((option) => (
                        <div key={option.value} className="radio-option">
                            <input
                                type="radio"
                                id={option.id}
                                name={id}
                                checked={value === option.value}
                                onChange={(e) => onChange(id, e.target.value)}
                            />
                            <label htmlFor={option.id}>{option.label}</label>
                        </div>
                    ))}
                    </div>
                    <Button className="delete-button" onClick={() => onDelete(id)}>
                        Delete
                    </Button>
                </div>
            );
        default:
            return (
                <div className="field">
                    <div>
                        <label htmlFor={id} className={"field-label"}>{label}</label>
                        <input type={type} id={id} value={value}  onChange={(e) => onChange(id, e.target.value)}/>
                    </div>
                    <Button onClick={handleDelete}>Delete</Button>
                </div>
            );
    }
}

export default Field
import FieldList from "./FieldList";
import FormButtons from "./FormButtons.tsx";

function FormGenerator({ formFields, setFormFields }) {
    return (
        <div className="form-generator">
            <FieldList formFields={formFields} setFormFields={setFormFields} />
            <FormButtons setFormFields={setFormFields}/>
        </div>
);
}

export default FormGenerator;

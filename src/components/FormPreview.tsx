
function FormPreview({ formFields }) {
  return (
      <div className="form-preview">
          <h2 style={{marginBottom:50}}>
              Form Preview :
          </h2>
        <form>
          {formFields.map((field, index) => {
            switch (field.type) {
              case "text":
                return (
                    <div key={index} className="field">
                      <label htmlFor={field.id} className={"field-label"}>{field.label}</label>
                      <input type="text" id={field.id} defaultValue={field.value} />
                    </div>
                );
              case "number":
                return (
                    <div key={index} className="field">
                      <label htmlFor={field.id} className={"field-label"}>{field.label}</label>
                      <input type="number" id={field.id} defaultValue={field.value} />
                    </div>
                );
              case "date":
                return (
                    <div key={index} className="field">
                      <label htmlFor={field.id} className={"field-label"}>{field.label}</label>
                      <input type="date" id={field.id} defaultValue={field.value} />
                    </div>
                );
              case "checkbox":
                return (
                    <div key={index} className="field">
                        <input type="checkbox" id={field.id} defaultChecked={field.value} />
                        <label htmlFor={field.id} className={"field-label"}>{field.label}</label>
                    </div>
                );
              case "radio":
                return (
                    <div key={index} className="field">
                      <label className={"field-label"}>{field.label}</label>
                      {field.options.map((option, idx) => (
                          <div key={idx} className="radio-option">
                            <input type="radio" id={option.value} name={field.id} value={option.value} />
                            <label htmlFor={option.value} >{option.label}</label>
                          </div>
                      ))}
                    </div>
                );
              case "select":
                return (
                    <div key={index} className="field">
                      <label htmlFor={field.id} className={"field-label"}>{field.label}</label>
                      <select id={field.id} defaultValue={field.value}>
                        {field.options.map((option, idx) => (
                            <option key={idx} value={option.value} className={"field-label"}>
                              {option.label}
                            </option>
                        ))}
                      </select>
                    </div>
                );
              default:
                return null;
            }
          })}
        </form>
      </div>
  );
}

export default FormPreview;

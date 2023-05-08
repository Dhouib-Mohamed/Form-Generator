import { DndContext } from "@dnd-kit/core";
import { arrayMove } from "@dnd-kit/sortable";
import { useSortable } from "@dnd-kit/sortable";
import Field from "./Field";

function FieldList({ formFields, setFormFields }) {
    const handleDelete = (index) => {
        const newFormFields = [...formFields];
        newFormFields.splice(index, 1);
        setFormFields(newFormFields);
    };

    const handleChange = (index, field) => {
        const newFormFields = [...formFields];
        newFormFields[index] = field;
        setFormFields(newFormFields);
    };

    const handleDragEnd = ({ active, over }) => {
        if (active.id !== over.id) {
            const oldIndex = formFields.findIndex(
                (field) => field.id === active.id
            );
            const newIndex = formFields.findIndex((field) => field.id === over.id);
            setFormFields(arrayMove(formFields, oldIndex, newIndex));
        }
    };

    return (
        <DndContext onDragEnd={handleDragEnd}>
            <div className="field-list">
                {formFields.map((field, index) => (
                    <SortableField
                        key={field.id}
                        id={field.id.toString()}
                        field={field}
                        onChange={(updatedField) => handleChange(index, updatedField)}
                        onDelete={() => handleDelete(index)}
                    />
                ))}
            </div>
        </DndContext>
    );
}

function SortableField({ id,  field, onChange, onDelete }) {
    const { attributes, listeners, setNodeRef, transform, transition } =
        useSortable({ id });

    const style = {
        transform: transform ? `translate3d(${transform.x}px, ${transform.y}px, 0)` : undefined,
        transition,
    };

    return (
        <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
            <Field
                type={field.type}
                id={field.id}
                label={field.label}
                value={field.value}
                options={field.options}
                onChange={onChange}
                onDelete={onDelete}
            />
        </div>
    );
}

export default FieldList;

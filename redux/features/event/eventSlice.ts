import { IEvent } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

export enum FieldType {
  Text = "text",
  Textarea = "textarea",
  Radio = "radio",
  Checkbox = "checkbox",
  Date = "date",
  Email = "email",
  File = "file",
}

export type FormField = {
  label: string; // The question or field label
  fieldType: FieldType; // Field type
  options?: string[]; // Optional: For radio, checkbox, select fields that have multiple options
  required?: boolean; // Whether the field is required
};

// Type for the form structure
export type IForm = {
  title: string; // Form title
  description?: string; // Optional: Form description
  fields: FormField[]; // Array of form fields (questions)
};

type TIState = {
  selectedEvent: IEvent | null;
  eventId: string;
  formId: string;
  title: string; // Form title
  description?: string; // Optional: Form description
  fields: FormField[]; // Array of form fields (questions)
};

const initialState: TIState = {
  selectedEvent: null,
  eventId: "",
  formId: "",
  title: "Untitled From Title",
  description: "",
  fields: [],
};

const eventSlice = createSlice({
  name: "event",
  initialState,
  reducers: {
    setTitle: (state, action) => {
      state.title = action.payload;
    },
    setEventId: (state, action) => {
      state.eventId = action.payload;
    },
    setSelectedEvent: (state, action) => {
      state.selectedEvent = action.payload;
    },
    setFormId: (state, action) => {
      state.formId = action.payload;
    },
    setField: (state, action) => {
      state.fields.push(action.payload);
    },
    deleteField: (state, action) => {
      const index = action.payload;
      if (index >= 0 && index < state.fields.length) {
        state.fields.splice(index, 1);
      }
    },
    updateField: (state, action) => {
      const { index, field } = action.payload;
      state.fields[index] = field;
    },
    updateFieldDirection: (state, action) => {
      const { index, direction } = action.payload;
      if (direction === "inc" && index < state.fields.length - 1) {
        // Swap with the next field
        const temp = state.fields[index];
        state.fields[index] = state.fields[index + 1];
        state.fields[index + 1] = temp;
      } else if (direction === "dec" && index > 0) {
        // Swap with the previous field
        const temp = state.fields[index];
        state.fields[index] = state.fields[index - 1];
        state.fields[index - 1] = temp;
      }
    },
    updateRequired: (state, action) => {
      const { index, required } = action.payload;
      state.fields[index].required = required;
    },
    updateLabel: (state, action) => {
      const { prevLabel, newLabel } = action.payload;
      // Find the field with the previous label
      const field = state.fields.find((field) => field.label === prevLabel);
      if (field) {
        // Update the label to the new label
        field.label = newLabel;
      }
    },
  },
});

export const {
  setTitle,
  setField,
  deleteField,
  updateField,
  updateRequired,
  updateLabel,
  setEventId,
  setFormId,
  setSelectedEvent,
  updateFieldDirection,
} = eventSlice.actions;

export default eventSlice.reducer;

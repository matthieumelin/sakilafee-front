import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  errors: {},
};

export const errorSlice = createSlice({
  name: "errors",
  initialState: initialState,
  reducers: {
    setErrors: (state, action) => {
      state.errors = action.payload;
    },
  },
});

export const remindersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "fetchReminders":
      return Object.assign({}, state, {
        errors: {
          ...state.errors,
          [action.key]: action.value,
        },
      });
    default:
      return state;
  }
};

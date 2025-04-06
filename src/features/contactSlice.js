import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import emailjs from "@emailjs/browser"

export const sendContactForm = createAsyncThunk(
  "contact/sendForm",
  async (formData, { rejectWithValue }) => {
    try {
      const response = await emailjs.send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          to_name: "Rajat Gangwar",
          from_email: formData.email,
          to_email: "rajat.gangwar141@gmail.com",
          from_phone: formData.phone,
          message: formData.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      return response
    } catch (error) {
      return rejectWithValue(error)
    }
  }
)

const initialState = {
  formData: {
    name: "",
    email: "",
    phone: "",
    message: "",
  },
  status: "idle",
  error: null,
}

const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    updateFormField: (state, action) => {
      console.log(1)
      const { field, value } = action.payload
      state.formData[field] = value
    },
    resetForm: (state) => {
      state.formData = initialState.formData
      state.status = "idle"
      state.error = null
    },
    resetStatus: (state) => {
      state.status = "idle"
      state.error = null
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(sendContactForm.pending, (state) => {
        state.status = "loading"
        state.error = null
      })
      .addCase(sendContactForm.fulfilled, (state) => {
        state.status = "succeeded"
      })
      .addCase(sendContactForm.rejected, (state, action) => {
        state.status = "failed"
        state.error = action.payload
      })
  },
})

export const { updateFormField, resetForm, resetStatus } = contactSlice.actions
export default contactSlice.reducer

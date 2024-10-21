import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


export const submitContactMessage = createAsyncThunk(
    'contact/submitContactMessage',
    async (contactData, { rejectWithValue }) => {
        try {
            console.log('Submitting contact data:', contactData); 
            const config = {
                headers: {
                    'Content-Type': 'application/json', 
                },
            };
            const { data } = await axios.post('http://localhost:8080/api/contact', contactData, config);
            console.log('Response from server:', data); 
            return data.message; 
        } catch (error) {
            return rejectWithValue(error.response?.data?.message || 'An error occurred while sending your message.');
        }
    }
);

// Create the contact slice
const contactSlice = createSlice({
    name: 'contact',
    initialState: {
        loading: false,
        success: false,
        error: null,
    },
    reducers: {
        resetContactState: (state) => {
            state.success = false;
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(submitContactMessage.pending, (state) => {
                state.loading = true;
            })
            .addCase(submitContactMessage.fulfilled, (state, action) => {
                state.loading = false;
                state.success = true;
                state.error = null; 
            })
            .addCase(submitContactMessage.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload; 
            });
    },
});

// Export actions and reducer
export const { resetContactState } = contactSlice.actions;
export default contactSlice.reducer;

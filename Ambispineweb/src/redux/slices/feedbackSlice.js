import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


const initialState = {
  feedbacks: [],
  feedback: null,
  loading: false,
  error: null,
};


export const createFeedback = createAsyncThunk('feedback/create', async (feedbackData) => {
  const response = await axios.post('http://localhost:8080/api/feedback', feedbackData);
  return response.data.feedback;
});


export const fetchFeedbacks = createAsyncThunk('feedback/fetchAll', async () => {
  const response = await axios.get('http://localhost:8080/api/feedback');
  return response.data.feedbacks;
});


export const fetchFeedbackById = createAsyncThunk('feedback/fetchById', async (id) => {
  const response = await axios.get(`http://localhost:8080/api/feedback/${id}`);
  return response.data.feedback;
});


export const updateFeedback = createAsyncThunk('feedback/update', async ({ id, feedbackData }) => {
  const response = await axios.put(`http://localhost:8080/api/feedback/${id}`, feedbackData);
  return response.data.feedback;
});


export const deleteFeedback = createAsyncThunk('http://localhost:8080/api/feedback/delete', async (id) => {
  await axios.delete(`/api/feedback/${id}`);
  return id; 
});

// Create the feedback slice
const feedbackSlice = createSlice({
  name: 'feedback',
  initialState,
  reducers: {
    clearFeedbacks: (state) => {
      state.feedbacks = [];
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Handle create feedback
      .addCase(createFeedback.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createFeedback.fulfilled, (state, action) => {
        state.loading = false;
        state.feedbacks.push(action.payload);
      })
      .addCase(createFeedback.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      // Handle fetch all feedbacks
      .addCase(fetchFeedbacks.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchFeedbacks.fulfilled, (state, action) => {
        state.loading = false;
        state.feedbacks = action.payload;
      })
      .addCase(fetchFeedbacks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      // Handle fetch feedback by ID
      .addCase(fetchFeedbackById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchFeedbackById.fulfilled, (state, action) => {
        state.loading = false;
        state.feedback = action.payload;
      })
      .addCase(fetchFeedbackById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      // Handle update feedback
      .addCase(updateFeedback.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateFeedback.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.feedbacks.findIndex((feedback) => feedback._id === action.payload._id);
        if (index !== -1) {
          state.feedbacks[index] = action.payload;
        }
      })
      .addCase(updateFeedback.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      // Handle delete feedback
      .addCase(deleteFeedback.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteFeedback.fulfilled, (state, action) => {
        state.loading = false;
        state.feedbacks = state.feedbacks.filter((feedback) => feedback._id !== action.payload);
      })
      .addCase(deleteFeedback.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});


export const { clearFeedbacks } = feedbackSlice.actions;
export default feedbackSlice.reducer;

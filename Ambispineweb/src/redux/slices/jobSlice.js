
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../utils/axiosInstance';
import axios from 'axios';


export const createJobApplication = createAsyncThunk(
  'jobApplications/create',
  async (jobData, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json', //  'Content-Type': 'multipart/form-data',
        },
      };

      const { data } = await axios.post('http://localhost:8080/api/job-application', jobData, config);
      return data.message;
    } catch (error) {
      return rejectWithValue(error.response.data.message || 'Job creation failed');
    }
  }
);

export const updateJobApplication = createAsyncThunk(
  'jobApplications/update',
  async ({ id, jobData }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const { data } = await axios.put(`http://localhost:8080/api/job-application/${id}`, jobData, config);
      return data.message;
    } catch (error) {
      return rejectWithValue(error.response.data.message || 'Job update failed');
    }
  }
);


export const deleteJobApplication = createAsyncThunk(
  'jobApplications/delete',
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await axios.delete(`http://localhost:8080/api/job-application/${id}`);
      return data.message;
    } catch (error) {
      return rejectWithValue(error.response.data.message || 'Job deletion failed');
    }
  }
);

// Create a slice for job applications
const jobSlice = createSlice({
  name: 'jobApplications',
  initialState: {
    applications: [],
    loading: false,
    error: null,
  },
  reducers: {
    clearApplications: (state) => {
      state.applications = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createJobApplication.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createJobApplication.fulfilled, (state, action) => {
        state.loading = false;
        state.applications.push(action.payload); 
      })
      .addCase(createJobApplication.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(updateJobApplication.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateJobApplication.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(updateJobApplication.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deleteJobApplication.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteJobApplication.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(deleteJobApplication.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

// Export the actions and reducer
export const { clearApplications } = jobSlice.actions;
export default jobSlice.reducer;
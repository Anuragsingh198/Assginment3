import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { supabase } from '../components/supabse/supabaseClient';

export const fetchStudents = createAsyncThunk(
    'students/fetchStudents',
    async ({ cohort, cbseClass }) => {
      const { data, error } = await supabase
        .from('students')
        .select(`
          id,
          name,
          cohort,
          date_joined,
          last_login,
          status,
          student_courses (
            courses (
              name,
              teacher_image
            )
          )
        `)
        .eq('cohort', cohort);
  
      if (error) throw error;

      return data.map((student) => ({
        ...student,
        courses: student.student_courses.map((sc) => sc.courses),
      }));
    }
  );
  
  

const studentSlice = createSlice({
  name: 'student',
  initialState: {
    students: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchStudents.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchStudents.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.students = action.payload;
      })
      .addCase(fetchStudents.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default studentSlice.reducer;

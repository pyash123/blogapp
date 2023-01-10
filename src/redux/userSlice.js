import { createSlice } from "@reduxjs/toolkit";

 export const userSlice = createSlice({
      name: "user",
       initialState: {
    name: "yash",
     
   },
   reducers: {
     update: (state, action) => {
       state.name = action.payload.name;
        
     
      
      },
      remove : (state) => (state = {}),

      },
    
  });

  export const {update } = userSlice.actions;
  export default userSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  open:true
};

const Sidemenu = createSlice({
  initialState,
  name: "Sidemenu",
  reducers: {
    setSidemenuToggle: (state) => {
       state.open= !state.open;
    },
  },
});

export const { setSidemenuToggle } = Sidemenu.actions;
export default Sidemenu.reducer;

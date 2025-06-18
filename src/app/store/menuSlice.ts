import { createSlice } from '@reduxjs/toolkit';

const menuSlice = createSlice({
  name: 'menu',
  initialState: {
    menuOpen: false,
  },
  reducers: {
    toggleMenu: (state) => {
      state.menuOpen = !state.menuOpen;
    },
    setMenuOpen: (state, action) => {
      state.menuOpen = action.payload;
    },
  },
});

export const { toggleMenu, setMenuOpen } = menuSlice.actions;
export default menuSlice.reducer;

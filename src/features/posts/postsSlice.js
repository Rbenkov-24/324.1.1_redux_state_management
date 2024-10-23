import { createSlice } from '@reduxjs/toolkit';//kanjib createSlice mn Redux Toolkit bash ncreateiw slice dyal l'état

//hna kan defineiw initial state dyal l'posts, li hya array dyal objects li kaycontainu l'posts l'awlin
const initialState = [
  { id: '1', title: 'First Post!', content: 'Hello!' },
  { id: '2', title: 'Second Post', content: 'More text' },
];

//hna kan creati slice dyal l'posts
const postsSlice = createSlice({
  //'name' kat3ni b smit l'slice li hna smitha 'posts'
  name: 'posts',
  //'initialState' hya l'état l'initial li ghadi ybda bih l'slice
  initialState,
  //hna kan defini reducers li ghadi t3awd l'état dyal l'posts
  reducers: {
    //postAdded katkhlli nazdou post jdid l'état
    postAdded(state, action) {
      //hna kan pushi l'new post li jay f action.payload l'état
      state.push(action.payload);
    },
  },
});

//hna kan exporti action dyal postAdded bach nst3mlo f l'application
export const { postAdded } = postsSlice.actions;
//hna kan exportiw reducer dyal l'slice bash nst3ml f l'store
export default postsSlice.reducer;
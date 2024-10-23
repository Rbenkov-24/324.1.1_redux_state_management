import { configureStore } from '@reduxjs/toolkit';//kanjib configureStore mn Redux Toolkit bash nkhdmo m3a store

import postsReducer from '../features/posts/postsSlice';//kanjib postsReducer li kay manage l'état (state) dyal posts hadchi kayn f l'folder li smitha features/posts

// Hna kan sayab l'store dyal Redux okan exportih
export default configureStore({
  // Hna kan specifyiw l'reducer dyal l'store, li huwa l'mecha dyal l'état dyal l'application
  reducer: {
    // Kan addiw posts reducer f l'store, had l'reducer kaykhllina ndiru manage l'état dyal posts
    posts: postsReducer, // 'posts' hya l'key li kat3ni b posts u postsReducer hya l'function li katmanage had l'état
  },
});

// Hna l'configureStore kay helpina bash ndir setup l'store dyal Redux b s7i7, u kaykhllina ndiru l'organization l'jayyida dyal reducers
// L'utilisation dyal Redux Toolkit katsimplifi l'khdma u katkhlli l'kood mzyan u ma3qoudch
// Hadchi kaymkn lina ndiru l'gestion dyal l'état f l'application b s7i7 u b sahl
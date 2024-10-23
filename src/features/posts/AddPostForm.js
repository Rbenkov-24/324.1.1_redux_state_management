import React, { useState } from 'react'; 
import { useDispatch } from 'react-redux'; 
//kan-importi useDispatch mn react-redux bash nb3t actions l-store
import { nanoid } from '@reduxjs/toolkit'; 
//nanoid kan-sta3ml bach n-createw ID unique l-post
import { postAdded } from './postsSlice'; 
//kan-importi action postAdded mn postsSlice bach nb3t data l-store

export const AddPostForm = () => {
  const [title, setTitle] = useState(''); //useState kan-sta3mlo bash n-createw state dial title w n-mliwh b ''
  
  const [content, setContent] = useState(''); //state dial content b7al title n-mliwh b ''
  

  const dispatch = useDispatch(); //dispatch kay-khdm bach nb3tu actions l-store
  

  const onTitleChanged = (e) => setTitle(e.target.value); //had function kat-7dd l-title b-shi haja li dkhlna f-input
  
  const onContentChanged = (e) => setContent(e.target.value); //hna kat-7dd l-content mn textarea
  

  const onSavePostClicked = () => {
    if (title && content) { //hna kan-checki ila kan title w content mshyin, mashi khawyin
      
      dispatch(postAdded({ id: nanoid(), title, content })); //dispatch dial action postAdded li kaydir ID unique w kayb3t title w content
      
      setTitle(''); 
      //kan-nmli title b ''
      setContent(''); 
      //kan-nmli content b ''
    }
  };

  return (
    <section>
      <h2>Add a New Post</h2> 
      {/* title f section */}
      <form>
        <label htmlFor="postTitle">Post Title:</label> 
        {/* label dial input title */}
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={onTitleChanged}
        /> 
        {/* input li kay-nsta3mlo l-title, w kay-hdded title mn onChange */}

        <label htmlFor="postContent">Content:</label> 
        {/* label dial textarea content */}
        <textarea
          id="postContent"
          name="postContent"
          value={content}
          onChange={onContentChanged}
        /> 
        {/* textarea li kay-nsta3mlo l-content, w kay-hdded content mn onChange */}

        <button type="button" onClick={onSavePostClicked}>
          Save Post
        </button> 
        {/* button dial Save li kay-sta3ml onClick bach inadi onSavePostClicked */}
      </form>
    </section>
  );
};
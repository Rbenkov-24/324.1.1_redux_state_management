import React from 'react'; //kan-importi React bash nkhdmo b-components dial React
import { useSelector } from 'react-redux'; //kan-importi useSelector mn react-redux bash njibu data mn store

export const PostsList = () => { 
  //had component ghadi t-affichi (biyan) list dial l-posts
  
  const posts = useSelector((state) => state.posts); 
  //hna kan-sta3mal useSelector bash njib l-posts man store w kan-jib state.posts
  
  const renderedPosts = posts.map((post) => (
    //kan-dir map 3la l-posts bash n-construiru array jadid li fih JSX element dial <article>
    <article className="post-excerpt" key={post.id}> 
      {/* kaykhdm post.id bach ykon unique key l-kul article */}
      <h3>{post.title}</h3> 
      {/* kay-affichi l-title dial post f tag h3 */}
      <p className="post-content">{post.content.substring(0, 100)}</p> 
      {/* kay-affichi awal 100 character mn l-content dial post */}
    </article>
  ));

  return (
    <section className="posts-list">
      {/* hna kan-sta3ml  section bash nkhdmo styling f CSS l-list dial l-posts */}
      <h2>Posts</h2> 
      {/* title dial l-section */}
      {renderedPosts} 
      {/* hna kay-affichi l-renderedPosts li deja 7ddina f map */}
    </section>
  );
};
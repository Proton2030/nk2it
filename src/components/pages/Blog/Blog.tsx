import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Blog() {
  const [instagramPosts, setInstagramPosts] = useState([]);
  const accessToken = 'YOUR_INSTAGRAM_ACCESS_TOKEN';

  const fetchInstagramPosts = () => {
    // Fetch the latest Instagram posts here
    axios
      .get('https://graph.instagram.com/v12.0/YOUR_INSTAGRAM_USER_ID/media', {
        params: {
          fields: 'id,media_type,media_url,caption,permalink',
          access_token: accessToken,
        },
      })
      .then((response) => {
        setInstagramPosts(response.data.data);
      })
      .catch((error) => {
        console.error('Error fetching Instagram posts:', error);
      });
  };

  useEffect(() => {
    // Fetch Instagram posts when the component mounts
    fetchInstagramPosts();

    // Set up a periodic fetch interval (e.g., every 30 minutes)
    const fetchInterval = setInterval(fetchInstagramPosts, 30 * 60 * 1000);

    return () => {
      // Clean up the interval when the component unmounts
      clearInterval(fetchInterval);
    };
  }, []);

  return (
    <div className="blog">
      {instagramPosts.map((post) => (
        <div key={post.id} className="instagram-post">
          <img src={post.media_url} alt={post.caption} />
          <p>{post.caption}</p>
          <a href={post.permalink} target="_blank" rel="noopener noreferrer">
            View on Instagram
          </a>
        </div>
      ))}
    </div>
  );
}

export default Blog;

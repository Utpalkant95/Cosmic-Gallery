import React, { useState, useEffect } from 'react';
import {FcLikePlaceholder, FcLike} from "react-icons/fc";

const LikeButton = ({ itemId }) => {
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    const storedLiked = localStorage.getItem(`liked_${itemId}`);
    if (storedLiked) {
      setLiked(JSON.parse(storedLiked));
    }
  }, [itemId]);

  const handleLike = () => {
    const updatedLiked = !liked;
    setLiked(updatedLiked);
    localStorage.setItem(`liked_${itemId}`, JSON.stringify(updatedLiked));
  };

  return (
    <button onClick={handleLike}>{liked ? <FcLike/> : <FcLikePlaceholder />}</button>
  );
};

export default LikeButton;

import React, { useState, useEffect } from 'react';
import {FcLikePlaceholder, FcLike} from "react-icons/fc";

const LikeControl = ({ itemId }) => {
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    const LikeStore = localStorage.getItem(`liked_${itemId}`);
    if (LikeStore) {
      setLiked(JSON.parse(LikeStore));
    }
  }, [itemId]);

  const UpdateLike = () => {
    const updatedLike = !liked;
    setLiked(updatedLike);
    localStorage.setItem(`liked_${itemId}`, JSON.stringify(updatedLike));
  };

  return (
    <button onClick={UpdateLike}>{liked ? <FcLike/> : <FcLikePlaceholder />}</button>
  );
};

export default LikeControl;


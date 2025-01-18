import React from "react";

const PostCard = (props) => {
  return (
    <div className="post-card">
      <img src={props.image} />
      <h3>Title: {props.title}</h3>
      <p>Course ID: {props.id}</p>
      <p>Rating: {props.rating}</p>
      <p>Price: {props.price}</p>
      <p>Name: {props.name}</p>
      <img style={{borderRadius:"50%"}} src={props.image1} />
    </div>
  );
}

export default PostCard;
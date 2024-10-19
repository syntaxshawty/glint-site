import React from "react";
import "./SongCard.css"; // Import the CSS file

const CardTitle = ({ title, url, releaseType }) => {
  return (
    <div className="card-title">
      <p>{title}</p>
      <p className="card-link">
        [
        <a href={url} target="_blank" rel="noopener noreferrer">
          {releaseType}
        </a>
        ] &#9835;
      </p>
    </div>
  );
};

export default CardTitle;

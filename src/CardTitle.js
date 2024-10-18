import React from "react";
import "./SongCard.css"; // Import the CSS file

const CardTitle = ({ title, url, releaseType }) => {
  const link = `[${releaseType}]`;
  return (
    <div className="card-title">
      <p>{title}</p>
      <p className="card-link">
        [
        <a href={url} target="_blank" rel="noopener noreferrer">
          {releaseType}
        </a>
        ]
      </p>
    </div>
  );
};

export default CardTitle;

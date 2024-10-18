import React from "react";
import "./SongCard.css"; // Import the CSS file
import CardTitle from "./CardTitle";

const SongCard = ({ image, title, releaseDate, releaseType, url }) => {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <div className="card-content">
        <CardTitle title={title} releaseType={releaseType} url={url} />
        <p className="card-date">{releaseDate}</p>
      </div>
    </div>
  );
};

export default SongCard;

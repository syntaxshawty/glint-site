import React from "react";
import "./App.css";
import data from "./data.json";
import SongCard from "./SongCard";

const App = () => {
  return (
    <div className="container">
      <div className="left-panel">
        <div className="contact-info">
          <p>Glint</p>
          <p>
            Music producer and sound engineer from Pasadena, currently based in
            Berlin.
          </p>
          <p>glint.port@gmail.com</p>
          <div className="bottom-links">
            <a href="https://soundcloud.com/107_18">soundcloud</a>
            <a href="https://www.ninaprotocol.com/hubs/glint">nina</a>
            <a href="https://www.instagram.com/zizzezzuzz/">instagram</a>
          </div>
        </div>
      </div>
      <div className="right-panel">
        <div className="scroll-content">
          {data.map(({ title, release_date, release_type, image, url }) => (
            <SongCard
              image={image}
              releaseDate={release_date}
              releaseType={release_type}
              title={title}
              url={url}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;

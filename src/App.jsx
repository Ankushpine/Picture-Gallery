import { useState } from "react";
import { media } from "./Media";

function App() {
  const [file, setFile] = useState(null);

  return (
    <div className="container">
      <h1>Naruto Picture Gallery</h1>

      <div className="media-container">
        {media.map((img, index) => (
          <div className="media" key={index} onClick={() => setFile(img)}>
            <img src={img} alt="" />
          </div>
        ))}
      </div>

      <div className="popup-media" style={{ display: file ? "block" : "none" }}>
        <span onClick={() => setFile(null)}>&times;</span>
        {<img src={file} alt="" />}
      </div>
    </div>
  );
}

export default App;

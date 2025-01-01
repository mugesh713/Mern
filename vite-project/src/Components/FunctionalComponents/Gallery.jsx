import React, { useState } from 'react';
import '../../assets/css/Gallery.css'; // Adjust the path as per your structure

const Counter = () => {
  const [counter, setCount] = useState(0);

  const increment = () => setCount(counter + 1);
  const decrement = () => setCount(counter - 1);
  const reset = () => setCount(0);

  return (
    <div className="counter-container">
      <h1>This is the Counter Section</h1>
      <h2>Learning State</h2>
      <h3>The current count is: {counter}</h3>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [newImage, setNewImage] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const addImageToGallery = () => {
    if (newImage) {
      setImages([...images, newImage]);
      setNewImage(null); // Reset the state
    }
  };

  return (
    <div className="gallery-container">
      <h2 className="gallery-title">Our Image Gallery</h2>

      <div className="upload-section">
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
        />
        {newImage && (
          <div className="preview-section">
            <img src={newImage} alt="Preview" className="preview-image" />
            <button onClick={addImageToGallery}>Add to Gallery</button>
          </div>
        )}
      </div>

      <div className="gallery-grid">
        {images.map((image, index) => (
          <div key={index} className="gallery-item">
            <img
              src={image}
              alt={`Gallery Item ${index}`}
              className="gallery-image"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <Counter />
      <Gallery />
    </div>
  );
};

export default App;

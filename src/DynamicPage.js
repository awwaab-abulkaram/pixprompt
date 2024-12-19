import React, { useState, useRef } from 'react';
import './DynamicPage.css'; // Ensure this CSS file exists

function DynamicPage() {
  const [submitted, setSubmitted] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const contentRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);  // Set submitted state to true after form submission
    setTimeout(() => {
      contentRef.current?.scrollIntoView({ behavior: 'smooth' });  // Scroll to the images after submission
    }, 100);
  };

  return (
    <div className="page-container">
      <div className="input-section">
        <h1>Text-to-Image Synthesis</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter a prompt..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            required
          />
          <button type="submit">Submit</button>
        </form>
      </div>

      {submitted && (  // Conditionally render images only when 'submitted' is true
        <div className="content-section" ref={contentRef}>
          <div className="image-block">
            <img src="https://via.placeholder.com/300" alt="First" className="image" />
            <p className="image-description">IMAGE GENERATED BY STACK GAN MODEL</p>
          </div>
          <div className="image-block">
            <img src="https://via.placeholder.com/300" alt="Second" className="image" />
            <p className="image-description">IMAGE GENERATED BY DF GAN MODEL</p>
          </div>
          <div className="image-block">
            <img src="https://via.placeholder.com/300" alt="Third" className="image" />
            <p className="image-description">IMAGE GENERATED BY  ATTENTION GAN MODEL</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default DynamicPage;

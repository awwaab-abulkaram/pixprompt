<<<<<<< HEAD
import React, { useState } from 'react';
import Navbar from './Navbar'; // Reuse Navbar component
import './About.css'; // Custom styles for the About page

function About() {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="about-page">
      <Navbar />
      <main className="about-content">
        <h1>About PixPrompt</h1>
        <p>
          <b>PixPrompt</b> is a platform designed to bring textual descriptions to life through advanced GAN models. Our focus is on innovation, research, and creating tools that empower users to generate stunning visuals from text.
        </p>
        <p>
          We use three advanced GAN models to achieve this goal:
        </p>
        <ul>
          <li onClick={toggleModal}><b>StackGAN</b>: Click to learn more.</li>
          <li onClick={toggleModal}><b>AttentionGAN</b>: Click to learn more.</li>
          <li onClick={toggleModal}><b>DF-GAN</b>: Click to learn more.</li>
        </ul>
        <p>
          Each model is tailored to enhance the quality and realism of the generated images, making PixPrompt a versatile tool for artists, developers, and researchers alike.
        </p>

        {showModal && (
          <div className="modal">
            <div className="modal-content">
              <h2>More About GAN Models</h2>
              <p>
                <b>StackGAN</b>: A coarse-to-fine approach that generates high-quality images in two stages.<br />
                <b>AttentionGAN</b>: Enhances image quality by focusing on specific text-image relationships.<br />
                <b>DF-GAN</b>: Simplifies architecture while maintaining competitive results.
              </p>
              <button className="close-btn" onClick={toggleModal}>Close</button>
            </div>
          </div>
        )}
      </main>
    </div>
=======
import { motion } from 'framer-motion';
import './About.css';
function AboutUs() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="about-us"
    >
      <h1>About Us</h1>
      <p>Welcome to PixPrompt, where innovation meets creativity!</p>
      <img src="/path-to-image.jpg" alt="Team" className="about-image" />
    </motion.div>
>>>>>>> fc04ec2337edf646b12c1772d3fd54be36a6f280
  );
}
export default AboutUs;
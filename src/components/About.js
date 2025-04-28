// src/components/About.js
// src/components/About.js
import React, { forwardRef } from 'react';
import { useTranslation } from 'react-i18next'; // Import hook
import PhotoTint from './PhotoTint'; // Keep this if you still use its structure
import aboutPhoto from '../assets/photo-about.jpg'; // Replace with your image path

const About = forwardRef((props, ref) => {
  const { t } = useTranslation(); // Get the 't' function

  return (
    <section ref={ref} id="about" className="section about-section">
      <div className="about-content">
        {/* Use t function with keys */}
        <h2>{t('about.title')}</h2>
        <p>{t('about.paragraph')}</p>
      </div>
      {/* If you removed PhotoTint, use a regular img tag */}
      {/* <PhotoTint src={aboutPhoto} alt="About Me Photo" className="about-photo" /> */}
      <div className="about-photo"> {/* Use a plain div if PhotoTint removed */}
          <img src={aboutPhoto} alt={t('about.title')} /> {/* Alt text can be translated too */}
      </div>
    </section>
  );
});

export default About;
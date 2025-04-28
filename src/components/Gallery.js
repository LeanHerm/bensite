// src/components/Gallery.js
import React, { forwardRef } from 'react';
import { useTranslation } from 'react-i18next'; // 1. Import the hook

// Import your images (adjust paths if needed)
import galleryPhoto1 from '../assets/photo-gallery-1.jpg'; // Left Top
import galleryPhoto2 from '../assets/photo-gallery-2.jpg'; // Left Bottom
import galleryPhoto3 from '../assets/photo-gallery-3.jpg'; // Right Full

const Gallery = forwardRef((props, ref) => {
  const { t } = useTranslation(); // 2. Call the hook to get the 't' function

  return (
    <section ref={ref} id="gallery" className="section gallery-section">
      {/* Container for the background images */}
      <div className="gallery-background">
        {/* Assuming you removed PhotoTint and just use divs/imgs */}
        {/* You can also translate alt text if needed */}
        <div className="gallery-bg-img bg-left-top">
          <img src={galleryPhoto1} alt={t('gallery.alt1', 'Gallery background 1')} />
        </div>
        <div className="gallery-bg-img bg-left-bottom">
          <img src={galleryPhoto2} alt={t('gallery.alt2', 'Gallery background 2')} />
        </div>
        <div className="gallery-bg-img bg-right">
          <img src={galleryPhoto3} alt={t('gallery.alt3', 'Gallery background 3')} />
        </div>
      </div>

      {/* Text area positioned above the background */}
      <div className="gallery-text-area">
        {/* 3. Replace hardcoded text with t('key') */}
        <h2>{t('gallery.title')}</h2>
        <p>{t('gallery.paragraph')}</p>
      </div>
    </section>
  );
});

export default Gallery;
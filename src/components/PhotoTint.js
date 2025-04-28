// src/components/PhotoTint.js
import React from 'react';

// Simple component to apply the tint via CSS class
// Pass other props like alt text, etc.
function PhotoTint({ src, alt = '', className = '', ...props }) {
  return (
    <div className={`photo-container ${className}`} {...props}>
      <img src={src} alt={alt} />
    </div>
  );
}

export default PhotoTint;
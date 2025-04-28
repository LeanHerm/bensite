// src/components/SoundGear.js
import React, { forwardRef } from 'react';
import { useTranslation } from 'react-i18next'; // Import hook
import gearBackground from '../assets/photo-gear-bg.jpg'; // Replace with your image path

const SoundGear = forwardRef((props, ref) => {
  const { t } = useTranslation(); // Get the 't' function

  const sectionStyle = {
    backgroundImage: `url(${gearBackground})`,
  };

  return (
    <section ref={ref} id="sound-gear" className="section sound-gear-section" style={sectionStyle}>
      {/* Overlay div (if you kept it for non-tint purposes, otherwise remove) */}
      {/* <div className="background-tint-overlay"></div> */}
      <div className="sound-gear-content">
        <h2>{t('soundGear.title')}</h2>
        <ul>
          {/* Use t function for list items */}
          <li>{t('soundGear.item1')}</li>
          <li>{t('soundGear.item2')}</li>
          <li>{t('soundGear.item3')}</li>
          <li>{t('soundGear.item4')}</li>
          <li>{t('soundGear.item5')}</li>
        </ul>
      </div>
    </section>
  );
});

export default SoundGear;
import React from 'react';
import { useTranslation } from 'react-i18next';

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="language-switcher">
      {/* Add some basic styling for the buttons */}
      <style>
        {`
          .language-switcher button {
            background: none;
            border: 1px solid white; /* Simple border */
            color: white;
            padding: 0.3rem 0.6rem;
            margin-left: 0.5rem;
            cursor: pointer;
            font-size: 0.85rem;
            opacity: 0.7;
            transition: opacity 0.2s ease;
          }
          .language-switcher button:hover {
             opacity: 1;
          }
          .language-switcher button.active {
             opacity: 1;
             font-weight: bold;
             cursor: default;
             border-width: 2px; /* Make active border bolder */
          }
        `}
      </style>
      <button
        type="button"
        onClick={() => changeLanguage('en')}
        disabled={i18n.language === 'en'}
        className={i18n.language === 'en' ? 'active' : ''}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => changeLanguage('pt')}
        disabled={i18n.language === 'pt'}
        className={i18n.language === 'pt' ? 'active' : ''}
      >
        PT
      </button>
    </div>
  );
}

export default LanguageSwitcher;
import React from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

function Navbar({ scrollToSection, sections }) {
  const { t } = useTranslation();

  return (
    <nav className="navbar">
      {/* Add this div for the logo/name */}
      <div className="navbar-logo">
        <h1>Benjamin Hicks</h1>
        <p>Location Sound Production</p>
      </div>

      {/* Keep the div for the main navigation buttons */}
      <div>
        <button onClick={() => scrollToSection(sections.about)}>{t('navbar.about')}</button>
        <button onClick={() => scrollToSection(sections.soundGear)}>{t('navbar.soundGear')}</button>
        <button onClick={() => scrollToSection(sections.gallery)}>{t('navbar.gallery')}</button>
        <button onClick={() => scrollToSection(sections.contact)}>{t('navbar.contact')}</button>
      </div>

      {/* Keep the language switcher */}
      <LanguageSwitcher />
    </nav>
  );
}

export default Navbar;
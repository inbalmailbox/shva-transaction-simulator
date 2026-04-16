import { useState } from 'react';
import './LanguageToggle.css';

type Language = 'ENG' | 'Hebrew';

function LanguageToggle() {
  const [language, setLanguage] = useState<Language>('Hebrew');

  return (
    <div className="language-toggle">
      <button
        type="button"
        className={`language-toggle__button ${language === 'ENG' ? 'is-active' : ''}`}
        onClick={() => setLanguage('ENG')}
      >
        ENG
      </button>

      <button
        type="button"
        className={`language-toggle__button ${language === 'Hebrew' ? 'is-active' : ''}`}
        onClick={() => setLanguage('Hebrew')}
      >
        Hebrew
      </button>
    </div>
  );
}

export default LanguageToggle;
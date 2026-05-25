let currentLang = 'it';

const toggle = document.getElementById('lang-toggle');

function setLanguage(lang){

  document.querySelectorAll('[data-i18n]').forEach(el => {

    const keys = el.dataset.i18n.split('.');

    let value = translations[lang];

    keys.forEach(key => {
      value = value[key];
    });

    el.textContent = value;

  });

}

toggle.addEventListener('click', () => {

  currentLang = currentLang === 'it' ? 'en' : 'it';

  toggle.textContent = currentLang === 'it' ? 'EN' : 'IT';

  setLanguage(currentLang);

});

setLanguage(currentLang);
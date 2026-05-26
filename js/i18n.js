let currentLang = localStorage.getItem("lang") || "it";

const toggle = document.getElementById("lang-toggle");

function setLanguage(lang) {
  document.querySelectorAll("[data-i18n]").forEach(el => {

    const keys = el.dataset.i18n.split(".");
    let value = translations[lang];

    keys.forEach(key => {
      value = value?.[key];
    });

    if (value !== undefined) {
      el.textContent = value;
    }

  });

  // aggiorna bottone
  if (toggle) {
    toggle.textContent = lang === "it" ? "EN" : "IT";
  }

  // salva lingua
  localStorage.setItem("lang", lang);
}

// toggle lingua
if (toggle) {
  toggle.addEventListener("click", () => {

    currentLang = currentLang === "it" ? "en" : "it";

    setLanguage(currentLang);

  });
}

// init
setLanguage(currentLang);
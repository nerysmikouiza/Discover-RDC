// Page active dans le menu
const navLinks = document.querySelectorAll("nav a");
const currentPage = window.location.pathname.split("/").pop() || "index.html";

navLinks.forEach((link) => {
  if (link.getAttribute("href") === currentPage) {
    link.classList.add("active");
  }
});

// Menu responsive mobile
const menuBtn = document.getElementById("menuBtn");
const navbar = document.getElementById("navbar");

if (menuBtn && navbar) {
  menuBtn.addEventListener("click", () => {
    navbar.classList.toggle("show");
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navbar.classList.remove("show");
    });
  });
}

// Animation au scroll
const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  {
    threshold: 0.15,
  }
);

revealElements.forEach((element) => {
  observer.observe(element);
});

// Bouton retour en haut
const topBtn = document.getElementById("topBtn");

if (topBtn) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      topBtn.classList.add("show");
    } else {
      topBtn.classList.remove("show");
    }
  });

  topBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}

// Changement de langue Français / Anglais
const langButtons = document.querySelectorAll(".lang-btn");

function changeLanguage(lang) {
  const elements = document.querySelectorAll("[data-fr][data-en]");

  elements.forEach((element) => {
    if (lang === "fr") {
      element.textContent = element.getAttribute("data-fr");
    } else {
      element.textContent = element.getAttribute("data-en");
    }
  });

  const placeholders = document.querySelectorAll(
    "[data-placeholder-fr][data-placeholder-en]"
  );

  placeholders.forEach((element) => {
    if (lang === "fr") {
      element.placeholder = element.getAttribute("data-placeholder-fr");
    } else {
      element.placeholder = element.getAttribute("data-placeholder-en");
    }
  });

  langButtons.forEach((button) => {
    if (button.getAttribute("data-lang") === lang) {
      button.classList.add("active-lang");
    } else {
      button.classList.remove("active-lang");
    }
  });

  localStorage.setItem("discoverRdcLang", lang);
  document.documentElement.lang = lang;
}

langButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedLang = button.getAttribute("data-lang");
    changeLanguage(selectedLang);
  });
});

const savedLang = localStorage.getItem("discoverRdcLang") || "fr";
changeLanguage(savedLang);

// Formulaire contact
const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const lang = localStorage.getItem("discoverRdcLang") || "fr";

    if (lang === "fr") {
      alert("Merci pour votre message ! Nous vous répondrons bientôt.");
    } else {
      alert("Thank you for your message! We will reply soon.");
    }

    contactForm.reset();
  });
}
const searchInput = document.getElementById("searchInput");

if (searchInput) {

  searchInput.addEventListener("keyup", () => {

    const searchValue = searchInput.value.toLowerCase();

    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {

      const text = card.textContent.toLowerCase();

      if (text.includes(searchValue)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }

    });

  });

}
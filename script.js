/* =========================
   OM MAHADEV FURNITURE WORKS
   script.js
   ========================= */

// Mobile Menu Toggle
const menuBtn = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuBtn) {
  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
}

// Close menu when clicking a link (mobile)
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
});

// Sticky Header on Scroll
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 80) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
});

// Simple Image Fade-in on Scroll
const images = document.querySelectorAll(".gallery img");

const imageObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.2 }
);

images.forEach(img => {
  imageObserver.observe(img);
});

// WhatsApp Button Click
const whatsappBtn = document.querySelector(".whatsapp-btn");
if (whatsappBtn) {
  whatsappBtn.addEventListener("click", () => {
    window.open("https://wa.me/919665664271", "_blank");
  });
}

// Call Button Click
const callBtn = document.querySelector(".call-btn");
if (callBtn) {
  callBtn.addEventListener("click", () => {
    window.location.href = "tel:9890730117";
  });
}
const heroImages = [
  "images/hero.jpg.jpeg",
  "images/hero2.jpg.jpeg",
  "images/hero3.jpg.jpeg",
  "images/hero4.jpg.jpeg"
];

let currentIndex = 0;
const heroSection = document.querySelector(".hero");

setInterval(() => {
  currentIndex = (currentIndex + 1) % heroImages.length;
  heroSection.style.setProperty(
    "--bg-image",
    `url('${heroImages[currentIndex]}')`
  );
  heroSection.style.backgroundImage = `
    linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)),
    url('${heroImages[currentIndex]}')
  `;
}, 2000);



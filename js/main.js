
"use strict";

/* ---------- Helper: shortcut for getElementById ---------- */
const $ = (id) => document.getElementById(id);

/* ---------- 1. TEMPLATE FUNCTIONS (one per repeated pattern) ---------- */

// One <li> in the navbar
const navTemplate = (item) =>
  `<li class="nav-item"><a class="nav-link" href="#${item.target}">${item.label}</a></li>`;

// One philosophy card
const philoTemplate = (c) => `
  <div class="col-sm-6 col-lg-3">
    <article class="philo-card">
      <i class="bi ${c.icon}" aria-hidden="true"></i>
      <h3>${c.title}</h3>
      <p>${c.text}</p>
    </article>
  </div>`;

// One screenshot slide; the first slide must have the "active" class
const slideTemplate = (src, i, title) => `
  <div class="carousel-item ${i === 0 ? "active" : ""}">
    <img src="${src}" alt="Screenshot ${i + 1} of ${title}" loading="lazy">
  </div>`;

// One project card with a Bootstrap carousel for its screenshots
const projectTemplate = (p, index) => {
  const carouselId = `carousel-${index}`;       // unique id per carousel
  return `
  <div class="col-md-6 project-item" data-type="${p.type}">
    <article class="card project-card">
      <div id="${carouselId}" class="carousel slide" data-bs-ride="false">
        <div class="carousel-inner">${p.images.map((s, i) => slideTemplate(s, i, p.title)).join("")}</div>
        <button class="carousel-control-prev" type="button" data-bs-target="#${carouselId}" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span><span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#${carouselId}" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span><span class="visually-hidden">Next</span>
        </button>
      </div>
      <div class="card-body p-4">
        <span class="badge badge-label mb-2">${p.label}</span>
        <h3 class="h5">${p.title}</h3>
        <p class="text-secondary">${p.desc}</p>
        <div class="d-flex flex-wrap gap-2 mb-3">${p.tech.map((t) => `<span class="tech-chip">${t}</span>`).join("")}</div>
        <a href="${p.github}" target="_blank" rel="noopener" class="btn btn-outline-dark btn-sm">
          <i class="bi bi-github me-1"></i>View on GitHub
        </a>
      </div>
    </article>
  </div>`;
};

// One contact row
const contactTemplate = (icon, text, href) => `
  <li>
    <span class="icon-ring"><i class="bi ${icon}" aria-hidden="true"></i></span>
    ${href ? `<a href="${href}" target="_blank" rel="noopener">${text}</a>` : `<span>${text}</span>`}
  </li>`;

/* ---------- 2. RENDER FUNCTIONS (fill the page) ---------- */

function renderStatic() {
  document.title = `${profile.name} | Developer Profile`;
  $("navBrand").textContent = profile.name;
  $("navList").innerHTML = navItems.map(navTemplate).join("");

  // Hero
  $("heroKicker").textContent = `${profile.role} · ${profile.school}`;
  $("heroTitle").innerHTML = `Hello, I'm <em>${profile.firstName}</em>.`;

  // About
  $("profilePhoto").src = profile.photo;
  $("aboutHeading").innerHTML = `Hello, I'm ${profile.name}.`;
  $("aboutText").textContent = profile.about;
  $("aboutMotto").textContent = `“${profile.motto}”`;
  $("aboutFacts").innerHTML = [
    ["bi-mortarboard", `${profile.role}, ${profile.school}`],
    ["bi-code-slash",  profile.stack],
    ["bi-geo-alt",     profile.location]
  ].map(([icon, text]) => `<li><i class="bi ${icon}"></i><span>${text}</span></li>`).join("");

  // Philosophy
  $("philoHeading").textContent = philosophy.heading;
  $("philoIntro").textContent = philosophy.intro;
  $("philoCards").innerHTML = philosophy.cards.map(philoTemplate).join("");

  // Projects heading
  $("projHeading").textContent = "From midterms to finals";

  // Contact
  $("contactHeading").textContent = "Let's build something together";
  $("contactList").innerHTML =
    contactTemplate("bi-envelope", profile.email, `mailto:${profile.email}`) +
    contactTemplate("bi-github", profile.github, `https://${profile.github}`) +
    contactTemplate("bi-person", profile.name) +
    contactTemplate("bi-geo-alt", profile.location);

  // Footer
  $("footerText").textContent = `© ${new Date().getFullYear()} ${profile.name}. All rights reserved.`;
}

/* Render projects + filter buttons */
function renderProjects() {
  $("projGrid").innerHTML = projects.map(projectTemplate).join("");

  // Build the list of filters from the data: "All" + each unique type
  const types = ["All", ...new Set(projects.map((p) => p.type))];
  $("projFilters").innerHTML = types
    .map((t, i) => `<button type="button" class="btn btn-sm filter-btn ${i === 0 ? "active" : ""}" data-filter="${t}">${t}</button>`)
    .join("");
}

/* ---------- 3. BEHAVIOUR (events) ---------- */


function setupFilters() {
  $("projFilters").addEventListener("click", (e) => {
    const btn = e.target.closest(".filter-btn");
    if (!btn) return;
    const filter = btn.dataset.filter;

    // Update the active button
    document.querySelectorAll(".filter-btn").forEach((b) => b.classList.toggle("active", b === btn));
    // Show or hide each project card
    document.querySelectorAll(".project-item").forEach((card) => {
      card.classList.toggle("d-none", filter !== "All" && card.dataset.type !== filter);
    });
  });
}

// Make the navbar solid once the page is scrolled
function setupNavbarScroll() {
  const nav = $("mainNav");
  const toggle = () => nav.classList.toggle("scrolled", window.scrollY > 40);
  window.addEventListener("scroll", toggle, { passive: true });
  toggle();   // run once on load
}

// Contact form: validate with Bootstrap styles, then show a confirmation
function setupContactForm() {
  const form = $("contactForm");
  form.addEventListener("submit", (e) => {
    e.preventDefault();                       // stay on the page
    form.classList.add("was-validated");      // reveals Bootstrap's valid/invalid feedback
    if (!form.checkValidity()) return;        // stop if any field is invalid

    $("formAlert").innerHTML =
      `<div class="alert alert-success mb-0" role="alert">Thanks, ${$("cName").value.trim()}. Your message is ready to send.</div>`;
    form.reset();
    form.classList.remove("was-validated");
  });
}

/* ---------- 4. START ---------- */
document.addEventListener("DOMContentLoaded", () => {
  renderStatic();
  renderProjects();
  setupFilters();
  setupNavbarScroll();
  setupContactForm();
});

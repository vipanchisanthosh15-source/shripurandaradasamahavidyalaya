/* Edit this block to change the name, logo, email or navigation on every page at once.
   To add a page: copy board.html, rename it, then add one line to "pages" below. */
const SITE = {
  name: "Shri Purandaradasa Mahavidyalaya",
  tagline: "Associated with Shri Vidya International University of Vedic Science, Florida, USA.",
  logo: "assets/logo.png",
  email: "shripurandaradasamahavidalaya@gmail.com",
  pages: [
    { file: "index.html", label: "About Us &amp; Vision" },
    { file: "board.html", label: "Board of Directors" }
  ]
};
(function () {
  const here = location.pathname.split("/").pop() || "index.html";
  const links = SITE.pages.map(p => `<a href="${p.file}"${p.file === here ? ' aria-current="page"' : ""}>${p.label}</a>`).join("");
  const layout = document.querySelector(".layout");
  layout.insertAdjacentHTML("afterbegin", `<nav class="nav" aria-label="Main">${links}</nav>`);
  layout.insertAdjacentHTML("beforebegin", `<header class="site-header"><a href="index.html"><img src="${SITE.logo}" alt="${SITE.name} logo"></a><div><h1 class="site-title">${SITE.name}</h1><p class="site-tagline">${SITE.tagline}</p></div></header><div class="rule" aria-hidden="true"></div>`);
  layout.insertAdjacentHTML("afterend", `<div class="rule" aria-hidden="true"></div><footer class="site-footer"><a href="mailto:${SITE.email}">${SITE.email}</a> &middot; &copy; ${new Date().getFullYear()} ${SITE.name}</footer>`);
})();

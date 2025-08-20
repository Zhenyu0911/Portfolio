// Dark mode toggle
const darkToggle = document.getElementById("darkToggle");
darkToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  localStorage.setItem("darkMode", document.body.classList.contains("dark"));
});
if (localStorage.getItem("darkMode") === "true") {
  document.body.classList.add("dark");
}

// Mobile menu toggle
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.querySelector("nav ul");
menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});

// Contact form alert
const contactForm = document.getElementById("contactForm");
contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Thank you! Your message has been submitted.");
  contactForm.reset();
});

// Fetch GitHub repos dynamically
const repoList = document.getElementById("repo-list");
fetch("https://api.github.com/users/Zhenyu0911/repos")
  .then((res) => res.json())
  .then((repos) => {
    repoList.innerHTML = "";
    repos.slice(0, 6).forEach((repo) => {
      const div = document.createElement("div");
      div.classList.add("repo");
      div.innerHTML = `
        <h3><a href="${repo.html_url}" target="_blank">${repo.name}</a></h3>
        <p>${repo.description || "No description available."}</p>
      `;
      repoList.appendChild(div);
    });
  })
  .catch(() => {
    repoList.innerHTML = "Unable to load repositories.";
  });

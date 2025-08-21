// Toggle mobile menu
const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});

// Dark mode toggle
const darkToggle = document.getElementById("darkToggle");

// Load saved preference on page load
if (localStorage.getItem("dark-mode") === "enabled") {
  document.body.classList.add("dark-mode");
  darkToggle.textContent = "☀️"; // show sun when dark mode is active
} else {
  darkToggle.textContent = "🌙"; // show moon when light mode is active
}

// Toggle and save preference
darkToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("dark-mode", "enabled");
    darkToggle.textContent = "☀️"; // switch to sun
  } else {
    localStorage.setItem("dark-mode", "disabled");
    darkToggle.textContent = "🌙"; // switch to moon
  }
});

// ===========================
// GitHub Repo Fetcher
// ===========================
const repoList = document.getElementById("repoList");
const githubUsername = "Zhenyu0911"; // <-- change this if needed

async function loadRepos() {
  try {
    const response = await fetch(`https://api.github.com/users/${githubUsername}/repos`);
    if (!response.ok) throw new Error("GitHub API error");

    const repos = await response.json();

    // If user has no repos
    if (repos.length === 0) {
      repoList.innerHTML = "<p>No repositories found.</p>";
      return;
    }

    // Build repo list
    repoList.innerHTML = "";
    repos.forEach(repo => {
      const repoItem = document.createElement("div");
      repoItem.classList.add("repo-item");
      repoItem.innerHTML = `
        <h3><a href="${repo.html_url}" target="_blank">${repo.name}</a></h3>
        <p>${repo.description ? repo.description : "No description provided."}</p>
        <small>⭐ ${repo.stargazers_count} | Updated: ${new Date(repo.updated_at).toLocaleDateString()}</small>
        <hr>
      `;
      repoList.appendChild(repoItem);
    });
  } catch (error) {
    repoList.innerHTML = "<p>Failed to load repositories.</p>";
    console.error(error);
  }
}

// Load repos on page load
loadRepos();


// Dark mode style
const style = document.createElement("style");
style.innerHTML = `
  body.dark-mode {
    background: #121212;
    color: #eee;
  }
  body.dark-mode header {
    background: #000;
  }
  body.dark-mode .playtest-button {
    background: #ff5722;
  }
  body.dark-mode form button {
    background: #555;
  }
`;
document.head.appendChild(style);

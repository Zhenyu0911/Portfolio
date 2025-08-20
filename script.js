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

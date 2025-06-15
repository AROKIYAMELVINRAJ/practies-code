const toggleBtn = document.getElementById("toggleBtn");
const mode = document.getElementById("mode");

toggleBtn.addEventListener("click", () => {

  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    toggleBtn.textContent = "Switch to Light Mode";
    mode.textContent = "🌙 Current Mode: Dark Mode";
  } else {
    toggleBtn.textContent = "Switch to Dark Mode";
    mode.textContent = "🌞 Current Mode: Light Mode";
  }
});



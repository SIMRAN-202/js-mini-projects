const toggleBtn = document.getElementById("toggle-btn");
const body = document.body;

toggleBtn.addEventListener("click", () => {
  const isDark = body.classList.toggle("dark");
  body.classList.toggle("light", !isDark);
  toggleBtn.textContent = isDark ? "Switch to Light Mode" : "Switch to Dark Mode";
});

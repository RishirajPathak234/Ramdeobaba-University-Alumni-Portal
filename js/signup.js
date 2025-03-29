document.addEventListener('DOMContentLoaded', () => {
  const signupForm = document.getElementById('signupForm');

  signupForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Basic validation
    if (password !== confirmPassword) {
      alert('Passwords do not match.');
      return;
    }

    if (email && password && confirmPassword) {
      // You can send the signup data to your backend for registration.
      // For now, let's check if the email is a college email.
      if (email.endsWith('@rknec.edu')) {
        alert('Signup successful!');
        // Redirect to the login page after successful signup
        window.location.href = 'login.html';
      } else {
        alert('Please use your college email ID.');
      }
    } else {
      alert('Please fill in all fields.');
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  // Load 3D background and theme toggle
  loadScript("js/3d-background.js")
  loadScript("js/theme-toggle.js")

  // Form animation
  const form = document.querySelector("form")
  if (form) {
    form.classList.add("fade-in")

    // Add input focus animations
    const inputs = form.querySelectorAll("input, textarea")
    inputs.forEach((input) => {
      input.addEventListener("focus", () => {
        input.parentElement.classList.add("focused")
      })

      input.addEventListener("blur", () => {
        if (!input.value) {
          input.parentElement.classList.remove("focused")
        }
      })
    })
  }
})

// Helper function to load scripts
function loadScript(src) {
  const script = document.createElement("script")
  script.src = src
  script.async = true
  document.body.appendChild(script)
}



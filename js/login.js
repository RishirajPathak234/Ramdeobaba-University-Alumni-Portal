document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
  
    loginForm.addEventListener('submit', async (e) => {
      e.preventDefault();
  
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
  
      // Assuming email validation and simple login
      if (email && password) {
        // You can make an API request here to verify the login credentials
        // For now, a simple check for college email
        if (email.endsWith('@rknec.edu')) {
          alert('Login successful!');
          // Redirect to the dashboard or homepage
          window.location.href = 'dashboard.html';
        } else {
          alert('Please use your college email ID.');
        }
      } else {
        alert('Please fill in all fields.');
      }
    });
  });
  
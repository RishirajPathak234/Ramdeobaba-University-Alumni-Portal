const API_BASE_URL = 'http://localhost:3000/api/forum'; // Replace with your backend URL

// Function to fetch and display forum posts
async function loadForumPosts() {
  try {
    const response = await fetch(API_BASE_URL);
    const posts = await response.json();

    if (response.ok) {
      const forumContainer = document.getElementById('forumContainer');
      posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('forum-post');
        postElement.innerHTML = `
          <h3>${post.title}</h3>
          <p><strong>Posted by:</strong> ${post.author}</p>
          <p><strong>Discussion:</strong> ${post.content}</p>
        `;
        forumContainer.appendChild(postElement);
      });
    } else {
      alert('Failed to load forum posts.');
    }
  } catch (error) {
    console.error('Error fetching forum posts:', error);
    alert('Failed to load forum posts. Please try again later.');
  }
}

// Load forum posts on page load
document.addEventListener('DOMContentLoaded', loadForumPosts);

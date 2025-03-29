// const API_BASE_URL = 'AIzaSyBrKpHWWJAwCrZZt2kS2VebZtPDLFwiCRA'; // Replace with your backend URL

// // Function to fetch and display job posts
// async function loadJobs() {
//   try {
//     const response = await fetch(API_BASE_URL);
//     const jobs = await response.json();

//     if (response.ok) {
//       const jobContainer = document.getElementById('jobContainer');
//       jobs.forEach(job => {
//         const jobElement = document.createElement('div');
//         jobElement.classList.add('job-post');
//         jobElement.innerHTML = `
//           <h3>${job.title}</h3>
//           <p><strong>Company:</strong> ${job.company}</p>
//           <p><strong>Location:</strong> ${job.location}</p>
//           <p><strong>Description:</strong> ${job.description}</p>
//         `;
//         jobContainer.appendChild(jobElement);
//       });
//     } else {
//       alert('Failed to load job posts.');
//     }
//   } catch (error) {
//     console.error('Error fetching job posts:', error);
//     alert('Failed to load job posts. Please try again later.');
//   }
// }
// // Load jobs on page load
// document.addEventListener('DOMContentLoaded', loadJobs);//THIS WAS THE MAIN JAVASCRIPT






// {Retrieve job posts from LocalStorage
// function loadJobPosts() {
//   const jobPostsContainer = document.getElementById('jobPostsContainer');

//   // Get posts from LocalStorage
//   const jobPosts = JSON.parse(localStorage.getItem('jobPosts')) || [];

//   // Clear the container
//   jobPostsContainer.innerHTML = '';

//   if (jobPosts.length === 0) {
//       jobPostsContainer.innerHTML = '<p>No job opportunities available at the moment.</p>';
//       return;
//   }

//   // Create and append job posts dynamically
//   jobPosts.forEach(post => {
//       const postElement = document.createElement('div');
//       postElement.classList.add('job-post');

//       postElement.innerHTML = `
//           <h2>${post.jobTitle}</h2>
//           <p><strong>Company:</strong> ${post.companyName}</p>
//           <p><strong>Location:</strong> ${post.location}</p>
//           <p>${post.jobDescription}</p>
//           <a href="${post.applyLink}" target="_blank">Apply Here</a>
//       `;

//       jobPostsContainer.appendChild(postElement);
//   });
// }

// // Call the function to load job posts on page load
// document.addEventListener('DOMContentLoaded', loadJobPosts);}//THIS WAS ASLO DOES SAME THING BUT FOR NOW WE HAVE TO DUMB THIS







// document.addEventListener('DOMContentLoaded', function () {
//   const jobContainer = document.getElementById('jobContainer');
//   const jobPosts = JSON.parse(localStorage.getItem('jobPosts')) || [];

//   // Clear the container
//   jobContainer.innerHTML = '';

//   if (jobPosts.length === 0) {
//       jobContainer.innerHTML = '<p>No job opportunities available at the moment.</p>';
//       return;
//   }

//   // Create and append job posts dynamically
//   jobPosts.forEach(post => {
//       const postElement = document.createElement('div');
//       postElement.classList.add('job-post');
//       postElement.innerHTML = `
//           <h2>${post.jobTitle}</h2>
//           <p><strong>Company:</strong> ${post.companyName}</p>
//           <p><strong>Location:</strong> ${post.location}</p>
//           <p><strong>Description:</strong>${post.jobDescription}</p>
//           <a href="${post.applyLink}" target="_blank">Apply Here</a>
//       `;
//       jobContainer.appendChild(postElement);
//   });
// });


////////////////////////////////////////////////////////////


import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
import { getDatabase, ref, get, child } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-database.js";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBrKpHWWJAwCrZZt2kS2VebZtPDLFwiCRA",
    authDomain: "alumni-portal-2.firebaseapp.com",
    databaseURL: "https://alumni-portal-2-default-rtdb.firebaseio.com",
    projectId: "alumni-portal-2",
    storageBucket: "alumni-portal-2.firebasestorage.app",
    messagingSenderId: "482570946833",
    appId: "1:482570946833:web:1cdd488333d8d98d1924b0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// Fetch posts from Firebase
const fetchPosts = async () => {
    console.log("Fetching posts..."); // Debug: Check if function is called
    const dbRef = ref(db);
    try {
        const snapshot = await get(child(dbRef, `USERS`));
        if (snapshot.exists()) {
            console.log("Data retrieved: ", snapshot.val()); // Debug: Log fetched data
            displayPosts(snapshot.val());
        } else {
            console.log("No data available."); // Debug: Log when no data is found
            document.getElementById("jobContainer").innerHTML = "<p>No job postings found.</p>";
        }
    } catch (error) {
        console.error("Error fetching data:", error); // Debug: Log errors
    }
};

// Display posts
const displayPosts = (posts) => {
    const jobContainer = document.getElementById("jobContainer");
    jobContainer.innerHTML = ""; // Clear any existing content

    for (const key in posts) {
        const post = posts[key];
        const jobCard = document.createElement("div");
        jobCard.classList.add("job-card");
        jobCard.innerHTML = `
            <h3>${post.jobTitle}</h3>
            <p><strong>Company:</strong> ${post.companyName}</p>
            <p><strong>Description:</strong> ${post.jobDescription}</p>
            <p><strong>Location:</strong> ${post.location}</p>
            <a href="${post.applyLink}" target="_blank">Application</a>
        `;
        jobContainer.appendChild(jobCard);
    }
};

// Trigger fetch on page load
document.addEventListener("DOMContentLoaded", fetchPosts);


document.addEventListener('DOMContentLoaded', () => {
    // Load 3D background and theme toggle
    loadScript('js/3d-background.js');
    loadScript('js/theme-toggle.js');
    
    
    const sampleJobs = [
      {
        id: 1,
        title: 'Software Engineer',
        company: 'Tech Innovations Inc.',
        description: 'We are looking for a skilled software engineer to join our team...',
        location: 'Nagpur, India',
        date: '2024-03-15',
        applyLink: '#'
      },
      {
        id: 2,
        title: 'Data Scientist',
        company: 'Analytics Pro',
        description: 'Join our data science team to work on cutting-edge AI projects...',
        location: 'Remote',
        date: '2024-03-20',
        applyLink: '#'
      }
    ];
    
    // Render jobs
    const jobContainer = document.getElementById('jobContainer');
    if (jobContainer) {
      if (sampleJobs.length > 0) {
        sampleJobs.forEach((job, index) => {
          const jobCard = document.createElement('div');
          jobCard.className = 'job-card';
          jobCard.style.animationDelay = `${index * 0.1}s`;
          
          jobCard.innerHTML = `
            <h3 class="job-title">${job.title}</h3>
            <div class="company-name">${job.company}</div>
            <p class="job-description">${job.description}</p>
            <div class="job-meta">
              <div class="job-location">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                ${job.location}
              </div>
              <div class="job-date">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                Posted on ${formatDate(job.date)}
              </div>
            </div>
            <a href="${job.applyLink}" class="btn">Apply Now</a>
          `;
          
          jobContainer.appendChild(jobCard);
        });
      } else {
        jobContainer.innerHTML = `
          <div class="empty-state">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
            <h3>No job postings yet</h3>
            <p>Be the first to post a job opportunity</p>
          </div>
        `;
      }
    }
  });
  
  // Format date helper
  function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  }
  
  // Helper function to load scripts
  function loadScript(src) {
    const script = document.createElement('script');
    script.src = src;
    script.async = true;
    document.body.appendChild(script);
  }
  

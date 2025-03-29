// // Handle form submission
// document.getElementById('jobPostForm').addEventListener('submit', function (event) {
//     event.preventDefault();

//     // Get form values
//     const jobTitle = document.getElementById('jobTitle').value;
//     const companyName = document.getElementById('companyName').value;
//     const jobDescription = document.getElementById('jobDescription').value;
//     const location = document.getElementById('location').value;
//     const applyLink = document.getElementById('applyLink').value;

//     // Create a job post object
//     const newPost = {
//         jobTitle,
//         companyName,
//         jobDescription,
//         location,
//         applyLink,
//     };

//     // Get existing posts from LocalStorage
//     const existingPosts = JSON.parse(localStorage.getItem('jobPosts')) || [];

//     // Add the new post to the list
//     existingPosts.push(newPost);

//     // Save updated posts to LocalStorage
//     localStorage.setItem('jobPosts', JSON.stringify(existingPosts));

//     // Reset the form
//     document.getElementById('jobPostForm').reset();

//     // Show a success message
//     const formMessage = document.getElementById('formMessage');
//     formMessage.textContent = 'Job post created successfully!';
//     setTimeout(() => {
//         formMessage.textContent = '';
//     }, 3000);
// });


// / Updated post.js: Save job posts to localStorage
// document.getElementById('jobPostForm').addEventListener('submit', function (event) {
//     event.preventDefault();

//     // Get form values
//     const jobTitle = document.getElementById('jobTitle').value;
//     const companyName = document.getElementById('companyName').value;
//     const jobDescription = document.getElementById('jobDescription').value;
//     const location = document.getElementById('location').value;
//     const applyLink = document.getElementById('applyLink').value;

//     // Create a job post object
//     const newPost = {
//         jobTitle,
//         companyName,
//         jobDescription,
//         location,
//         applyLink,
//     };

//     // Get existing posts from LocalStorage
//     const existingPosts = JSON.parse(localStorage.getItem('jobPosts')) || [];

//     // Add the new post to the list
//     existingPosts.push(newPost);

//     // Save updated posts to LocalStorage
//     localStorage.setItem('jobPosts', JSON.stringify(existingPosts));

//     // Reset the form
//     document.getElementById('jobPostForm').reset();

//     // Show a success message
//     const formMessage = document.getElementById('formMessage');
//     formMessage.textContent = 'Job post created successfully!';
//     setTimeout(() => {
//         formMessage.textContent = '';
//     }, 3000);
// });




  // Import the functions you need from the SDKs you need
  // import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
 
  // // TODO: Add SDKs for Firebase products that you want to use
  // // https://firebase.google.com/docs/web/setup#available-libraries

  // // Your web app's Firebase configuration
  // const firebaseConfig = {
  //   apiKey: "AIzaSyBrKpHWWJAwCrZZt2kS2VebZtPDLFwiCRA",
  //   authDomain: "alumni-portal-2.firebaseapp.com",
  //   databaseURL: "https://alumni-portal-2-default-rtdb.firebaseio.com",
  //   projectId: "alumni-portal-2",
  //   storageBucket: "alumni-portal-2.firebasestorage.app",
  //   messagingSenderId: "482570946833",
  //   appId: "1:482570946833:web:1cdd488333d8d98d1924b0"
  // };

  // // Initialize Firebase
  // const app = initializeApp(firebaseConfig);

  // function writeData(){
  //     firebase.database().ref("User").set({
  //       Job_Title: document.getElementById("jobTitle").value,
  //       Company_Name: document.getElementById("companyName").value,
  //       Job_Description: document.getElementById("jobDescription").value,
  //       Location: document.getElementById("destination").value,
  //       Apply_Link: document.getElementById("applyLink").value 
  //     });

  // }






  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



  
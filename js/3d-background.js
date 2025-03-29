// 3D Background Elements
document.addEventListener('DOMContentLoaded', () => {
    // Create scene container
    const sceneContainer = document.createElement('div');
    sceneContainer.className = 'scene-container';
    document.body.appendChild(sceneContainer);
  
    // Add floating elements to home page
    if (window.location.pathname === '/' || window.location.pathname.includes('index')) {
      for (let i = 0; i < 3; i++) {
        const floatingElement = document.createElement('div');
        floatingElement.className = 'floating-element';
        sceneContainer.appendChild(floatingElement);
      }
    }
  
    // Add background elements to other pages
    if (window.location.pathname.includes('dashboard') || 
        window.location.pathname.includes('profile') || 
        window.location.pathname.includes('post')) {
      const bgElement1 = document.createElement('div');
      bgElement1.className = 'bg-element bg-element-1';
      
      const bgElement2 = document.createElement('div');
      bgElement2.className = 'bg-element bg-element-2';
      
      sceneContainer.appendChild(bgElement1);
      sceneContainer.appendChild(bgElement2);
    }
  
    // Add particles to login page
    if (window.location.pathname.includes('login')) {
      const particles = document.createElement('div');
      particles.className = 'particles';
      sceneContainer.appendChild(particles);
      
      for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.width = `${Math.random() * 10 + 5}px`;
        particle.style.height = particle.style.width;
        particle.style.animationDuration = `${Math.random() * 10 + 10}s`;
        particle.style.animationDelay = `${Math.random() * 5}s`;
        particles.appendChild(particle);
      }
    }
  });
  
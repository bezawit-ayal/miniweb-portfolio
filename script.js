const storedTheme = localStorage.getItem('portfolio-theme');

function applyTheme(theme) {
  document.body.classList.toggle('dark-theme', theme === 'dark');
  themeToggle.textContent = theme === 'dark' ? 'Light' : 'Dark';
}

function toggleTheme() {
  const isDark = document.body.classList.toggle('dark-theme');
  const nextTheme = isDark ? 'dark' : 'light';
  localStorage.setItem('portfolio-theme', nextTheme);
  themeToggle.textContent = nextTheme === 'dark' ? 'Light' : 'Dark';
}

if (storedTheme) {
  applyTheme(storedTheme);
}

themeToggle.addEventListener('click', toggleTheme);

// Scroll animations
function animateOnScroll() {
  const elements = document.querySelectorAll('.animate-on-scroll');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
      }
    });
  }, { threshold: 0.1 });

  elements.forEach(el => observer.observe(el));
}

// Load projects dynamically
function loadProjects() {
  const projectsGrid = document.getElementById('projectsGrid');
  projectsGrid.innerHTML = '<div style="grid-column: 1 / -1; text-align: center; padding: 2rem;">Loading projects...</div>';

  fetch('get_projects.php')
    .then(response => response.json())
    .then(projects => {
      projectsGrid.innerHTML = projects.map(project => `
        <article class="project-card animate-on-scroll">
          <h3>${project.title}</h3>
          <p>${project.description}</p>
          <a href="${project.link}" class="project-link">Get in touch</a>
        </article>
      `).join('');
      // Re-run animation observer for new elements
      animateOnScroll();
    })
    .catch(error => {
      console.error('Error loading projects:', error);
      // Fallback to static content
      projectsGrid.innerHTML = `
        <article class="project-card animate-on-scroll">
          <h3>Portfolio Redesign</h3>
          <p>Modern responsive landing page with smooth interactions and polished visuals.</p>
          <a href="#contact" class="project-link">Get in touch</a>
        </article>
        <article class="project-card animate-on-scroll">
          <h3>Web App Dashboard</h3>
          <p>Interactive dashboard UI with flexible cards, charts, and design system consistency.</p>
          <a href="#contact" class="project-link">Discuss details</a>
        </article>
        <article class="project-card animate-on-scroll">
          <h3>Brand Website</h3>
          <p>Elegant site built to showcase a brand story with strong typography and color.</p>
          <a href="#contact" class="project-link">Start project</a>
        </article>
      `;
      animateOnScroll();
    });
}

// Form handling - run immediately since script is at end of body
const form = document.querySelector('.contact-form');
if (form) {
  form.addEventListener('submit', function(event) {
    event.preventDefault();

    const submitButton = form.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    submitButton.textContent = 'Sending...';
    submitButton.disabled = true;

    const formData = new FormData(form);
    const messageDiv = document.getElementById('formMessage');

    fetch('./contact.php', {
      method: 'POST',
      body: formData
    })
    .then(function(response) {
      return response.text();
    })
    .then(function(data) {
      messageDiv.innerHTML = '<p style="color: green; margin-top: 1rem;">' + data + '</p>';
      if (data.includes('successfully')) {
        form.reset();
      }
      submitButton.textContent = originalText;
      submitButton.disabled = false;
    })
    .catch(function(error) {
      console.error('Error:', error);
      messageDiv.innerHTML = '<p style="color: red; margin-top: 1rem;">Error sending message. Please try again.</p>';
      submitButton.textContent = originalText;
      submitButton.disabled = false;
    });
  });
} else {
  console.error('Form not found');
}

// Initialize animations and load projects
document.addEventListener('DOMContentLoaded', function() {
  animateOnScroll();
  loadProjects();
});

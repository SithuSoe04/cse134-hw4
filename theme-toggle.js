const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;

themeToggle.style.display = 'block';

const currentTheme = localStorage.getItem('theme') || 'dark';

if (currentTheme === 'light') {
  html.classList.add('light-mode');
  themeToggle.textContent = '☀️';
} else {
  html.classList.remove('light-mode');
  themeToggle.textContent = '🌙';
}

themeToggle.addEventListener('click', () => {
  html.classList.toggle('light-mode');
  
  if (html.classList.contains('light-mode')) {
    themeToggle.textContent = '☀️';
    localStorage.setItem('theme', 'light');
  } else {
    themeToggle.textContent = '🌙';
    localStorage.setItem('theme', 'dark');
  }
});
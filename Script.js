// Theme Toggle
document.getElementById('theme-toggle').addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
  
  // Save preference to localStorage
  const isDark = document.body.classList.contains('dark-theme');
  localStorage.setItem('darkTheme', isDark);
});

// Check saved preference on load
if (localStorage.getItem('darkTheme') === 'true') {
  document.body.classList.add('dark-theme');
}
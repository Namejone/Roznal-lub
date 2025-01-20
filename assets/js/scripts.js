const bar = document.querySelector('.bar');
const sidebar = document.querySelector('.sidebar');

// Toggle sidebar
bar.addEventListener('click', () => {
  sidebar.classList.toggle('show');
});

// Close sidebar when clicking outside of it
document.addEventListener('click', (event) => {
  if (!sidebar.contains(event.target) && !bar.contains(event.target)) {
    sidebar.classList.remove('show');
  }
});
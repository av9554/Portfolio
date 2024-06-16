document.addEventListener("DOMContentLoaded", function() {
  var loader = document.querySelector('.loader');
  if (loader) {
    loader.style.display = 'none';
  }

  var body = document.querySelector('.body');
  if (body) {
    body.style.display = 'block';
  }

   document.body.style.backgroundImage = 'url("dark.jpeg")';
  document.body.style.backgroundSize = 'cover';
   document.body.style.backgroundRepeat = 'no-repeat';
  console.log('Page has fully loaded');
});


  document.addEventListener("DOMContentLoaded", function() {
  const elements = document.querySelectorAll('.reveal');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      } else {
        entry.target.classList.remove('active'); // Add this line to reset animation when not in view
      }
    });
  }, { threshold: 0.1 });

  elements.forEach(element => {
    observer.observe(element);
  });
});
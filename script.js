
document.addEventListener('keydown', function(event) {
  const book = document.querySelector('.book');
  if (event.key === 'ArrowRight') {
    book.scrollBy({ left: window.innerWidth, behavior: 'smooth' });
  } else if (event.key === 'ArrowLeft') {
    book.scrollBy({ left: -window.innerWidth, behavior: 'smooth' });
  }
});

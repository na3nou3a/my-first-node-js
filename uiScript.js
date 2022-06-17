window.addEventListener('resize', updateMainHeight);

function updateMainHeight() {
  const header = document.querySelector('header');
  const main = document.querySelector('main');
  const footer = document.querySelector('footer');
  main.style.minHeight = '100vh';
  const height =
    main.offsetHeight - (header.offsetHeight + footer.offsetHeight);
  main.style.minHeight = `${height - 5}px`;
}

updateMainHeight();

const nameTitle = document.getElementById('name-title');
const letters = nameTitle.querySelectorAll('span');

nameTitle.addEventListener('click', () => {
  letters.forEach(letter => {
    const x = (Math.random() - 0.5) * 400;
    const y = (Math.random() - 0.5) * 400;
    const rotate = (Math.random() - 0.5) * 1080;

    // Generate a random color
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    const randomColor = `rgb(${r}, ${g}, ${b})`;

    // Apply transformations and color
    letter.style.transform = `translate(${x}px, ${y}px) rotate(${rotate}deg) scale(0.5)`;
    letter.style.opacity = '0';
    letter.style.color = randomColor;
  });

  setTimeout(() => {
    letters.forEach(letter => {
      letter.style.transform = 'translate(0, 0) rotate(0deg) scale(1)';
      letter.style.opacity = '1';
      letter.style.color = '#222'; // revert to original color
    });
  }, 1000);
});

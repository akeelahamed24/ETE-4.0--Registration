const bubblesContainer = document.querySelector('.bubbles');

function createBubble() {
  const bubble = document.createElement('span');
  bubble.classList.add('bubble');

  const duration = Math.floor(Math.random() * 10) + 5; // Random duration between 5 and 15
  bubble.style.animation = `animate ${duration}s linear infinite`;
  bubble.style.animationDuration = `calc(125s / var(--i))`;

  const isEven = Math.floor(Math.random() * 2) === 0;
  if (isEven) {
    bubble.style.background = '#10203c';
    bubble.style.boxShadow = '0 0 0 10px #2a3b57, 0 0 50px #65C8BD, 0 0 100px #65C8BD';
  }

  return bubble;
}

for (let i = 0; i < 50; i++) {
  bubblesContainer.appendChild(createBubble());
}

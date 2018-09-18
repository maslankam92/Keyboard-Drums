document.addEventListener('DOMContentLoaded', function () {

  const app = document.querySelector('#app');
  const btnsMarkup = `
    <div class="container">
      ${SOUND_DATA.map(sound =>
        `
        <div class="sound-btn" data-key="${sound.code}">
          <kbd class="sound-char">${sound.char}</kbd>
          <p class="sound-name">${sound.name}</p>
        </div>
        `
      ).join('')}
    </div>
  `;

  (function() {
    app.innerHTML = btnsMarkup;
  })();

  function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.which}"]`);
    const btn = document.querySelector(`.sound-btn[data-key="${e.which}"]`);
    if (audio) {
      audio.currentTime = 0;
      audio.play();
      btn.classList.add('playing');
    }
  }

  function removeClass(e) {
    if (e.propertyName === 'transform') {
      this.classList.remove('playing');
    }
  }

  const btns = document.querySelectorAll('.sound-btn');
  btns.forEach(btn => btn.addEventListener('transitionend', removeClass));
  document.addEventListener('keydown', playSound);
});

const SOUND_DATA = [
  {
    char: 'a',
    code: 65,
    name: 'clap'
  },
  {
    char: 's',
    code: 83,
    name: 'hihat'
  },
  {
    char: 'd',
    code: 68,
    name: 'kick'
  },
  {
    char: 'f',
    code: 70,
    name: 'openhat'
  },
  {
    char: 'g',
    code: 71,
    name: 'boom'
  },
  {
    char: 'h',
    code: 72,
    name: 'ride'
  },
  {
    char: 'j',
    code: 74,
    name: 'snare'
  },
  {
    char: 'k',
    code: 75,
    name: 'tom'
  },
  {
    char: 'l',
    code: 76,
    name: 'tink'
  }
];
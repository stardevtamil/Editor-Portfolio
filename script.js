const awardStories = {
  content: {
    kicker: 'CONTENT CREATION · FIRST PRIZE',
    title: 'First Prize in Content Creation',
    copy: 'I scripted, shot, and edited a creative video for College Day, earning first prize for my storytelling, originality, and strong execution.'
  },
  photo: {
    kicker: 'PHOTOGRAPHY · FIRST PRIZE',
    title: 'First Prize in  Photography ',
    copy: 'Recognized at my college for photography. I captured compelling photographs that showcased creativity, strong composition, and attention to detail, earning the First Photography Award.'
  }
};

const dialog = document.querySelector('.award-dialog');
const dialogKicker = document.querySelector('#dialog-kicker');
const dialogTitle = document.querySelector('#dialog-title');
const dialogCopy = document.querySelector('#dialog-copy');

document.querySelectorAll('[data-award]').forEach((button) => {
  button.addEventListener('click', () => {
    const story = awardStories[button.dataset.award];
    if (!story) return;
    dialogKicker.textContent = story.kicker;
    dialogTitle.textContent = story.title;
    dialogCopy.textContent = story.copy;
    dialog.showModal();
  });
});

document.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', (event) => {
  if (event.target === dialog) dialog.close();
});

const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  nav.classList.toggle('open', open);
});
nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Open navigation');
}));

document.querySelectorAll('.filter').forEach((button) => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.filter').forEach((item) => item.classList.remove('active'));
    button.classList.add('active');
    const filter = button.dataset.filter;
    document.querySelectorAll('.project-card').forEach((card) => {
      card.hidden = filter !== 'all' && card.dataset.category !== filter;
    });
    document.querySelectorAll('.project-group').forEach((group) => {
      const visibleCards = [...group.querySelectorAll('.project-card')].some((card) => !card.hidden);
      group.hidden = !visibleCards;
    });
  });
});

document.querySelector('#year').textContent = new Date().getFullYear();

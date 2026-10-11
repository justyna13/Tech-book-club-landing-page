const navToggle = document.querySelector('.navbar__toggle');
const navPanel = document.querySelector('.navbar__panel');

function closeNav() {
  navPanel.setAttribute('data-open', 'false');
  navToggle.setAttribute('aria-expanded', 'false');
}

function openNav() {
  navPanel.setAttribute('data-open', 'true');
  navToggle.setAttribute('aria-expanded', 'true');
}

if (navToggle && navPanel) {
  navToggle.addEventListener('click', () => {
    const isOpen = navToggle.getAttribute('aria-expanded') === 'true';
    isOpen ? closeNav() : openNav();
  });

  navPanel.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeNav);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && navToggle.getAttribute('aria-expanded') === 'true') {
      closeNav();
      navToggle.focus();
    }
  });
}

document.querySelectorAll('.newsletter-form').forEach((form) => {
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const status = form.querySelector('.newsletter-form__status');
    const input = form.querySelector('.newsletter-form__input');

    if (!input.checkValidity()) {
      input.reportValidity();
      return;
    }

    if (status) {
      status.textContent = `Thanks! A confirmation email is on its way to ${input.value}.`;
      status.setAttribute('data-state', 'success');
    }

    form.reset();
  });
});

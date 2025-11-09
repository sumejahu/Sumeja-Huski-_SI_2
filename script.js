const form = document.getElementById('contactForm');
const response = document.getElementById('responseMessage');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (name === '' || email === '' || message === '') {
    response.className = 'alert alert-danger mt-4';
    response.textContent = 'Molimo popunite sva polja.';
    response.classList.remove('d-none');
    return;
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    response.className = 'alert alert-warning mt-4';
    response.textContent = 'Unesite ispravnu email adresu.';
    response.classList.remove('d-none');
    return;
  }

  response.className = 'alert alert-success mt-4';
  response.textContent = `Hvala, ${name}! Tvoja poruka je uspješno poslana.`;
  response.classList.remove('d-none');
  form.reset();
});

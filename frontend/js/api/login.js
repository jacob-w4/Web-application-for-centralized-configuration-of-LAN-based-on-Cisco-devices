async function login() {
  const form = document.getElementById('login-form');

  const formData = new FormData(form);
  const data = {
    username: formData.get('username'),
    password: formData.get('password')
  };

  try {
    const response = await fetch(`${window.CONFIG.API_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
      credentials: 'include'
    });

    const result = await response.json();

    if (response.ok) {
      // np. przekieruj na dashboard
      window.location.href = 'dashboard.html';
    } else {
      // Błąd logowania
      const alert = document.getElementById('alert');
      alert.classList.remove('hidden');
      alert.classList.add('flex');
    }
  } catch (error) {
    console.error('Błąd logowania:', error);
    alert('Wystąpił błąd. Spróbuj ponownie później.');
  }
}

document.getElementById('login-form').addEventListener('submit', function (e) {
  e.preventDefault();
  login();
});



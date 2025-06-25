async function logout() {
  const response = await fetch(`${window.CONFIG.API_URL}/logout`, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    credentials: 'include'
  });
  if (response.ok) {
    window.location.href = 'index.html'
  } else {
    console.error('Błąd logowania:', error);
    alert('Wystąpił błąd. Spróbuj ponownie później.');
  }
}

document.getElementById('logout-btn').addEventListener('click', logout);
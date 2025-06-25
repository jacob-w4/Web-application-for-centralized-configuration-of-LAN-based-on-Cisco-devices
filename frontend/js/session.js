async function check_session() {
    const response = await fetch(`${window.CONFIG.API_URL}/me`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include'
    });

    const result = await response.json()

    if (!response.ok) {
        alert('Token is missing')
        window.location.href = 'index.html'
    } else {
      if (result.perm == 'admin') {
        const users_div = document.getElementById('users')
        users_div.classList.replace('hidden', 'flex')
      }
    }
}

document.addEventListener('DOMContentLoaded', function() {
    check_session();
});
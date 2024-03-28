function getUserInfo() {
  const username = document.getElementById('usernameInput').value.trim();
  const apiUrl = `https://api.github.com/users/${username}`;

  fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error('User not found');
      }
      return response.json();
    })
    .then(data => {
      displayUserInfo(data);
    })
    .catch(error => {
      console.error('Error:', error.message);
    });
}

function displayUserInfo(user) {
  const profilePic = document.getElementById('profilePic');
  profilePic.src = user.avatar_url;

  document.getElementById('userName').textContent = user.name || 'Not available';
  document.getElementById('userBlog').textContent = user.blog || 'Not available';
  document.getElementById('userCreated').textContent = new Date(user.created_at).toDateString();
}
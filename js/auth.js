async function checkUser() {
  const token = localStorage.getItem("token");

  if (!token) {
    document.getElementById("userArea").innerHTML =
      `<a href="login.html">Login</a>`;
    return;
  }

  const res = await fetch("/api/auth/me", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (res.status !== 200) {
    localStorage.removeItem("token");
    location.reload();
    return;
  }

  const user = await res.json();

  document.getElementById("userArea").innerHTML = `
  <div class="user-box">
    <div class="user-avatar">
      ${user.name.charAt(0).toUpperCase()}
    </div>

    <div class="user-name">
      Welcome ${user.name}
    </div>

    <div class="user-dropdown">
      <button onclick="logout()">Logout</button>
    </div>
  </div>
  `;
}

function logout() {
  localStorage.removeItem("token");
  localStorage.removeItem("name");
  location.href = "/login.html";
}

checkUser();

const signupForm = document.getElementById("signupForm");
const loginForm = document.getElementById("loginForm");
const leaveForm = document.getElementById("leaveForm");
const logoutBtn = document.getElementById("logoutBtn");

// ----- Signup -----
if (signupForm) {
  signupForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const data = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      password: document.getElementById("password").value,
      hostel_name: document.getElementById("hostel").value,
      year: document.getElementById("year").value
    };

    const res = await fetch("http://localhost:3000/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    const msg = await res.text();
    alert(msg);
    if (res.ok) window.location.href = "login.html";
  });
}

// ----- Login -----
if (loginForm) {
  loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const data = {
      email: document.getElementById("loginEmail").value,
      password: document.getElementById("loginPassword").value
    };

    const res = await fetch("http://localhost:3000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    const msg = await res.text();
    alert(msg);
    if (res.ok) window.location.href = "dashboard.html";
  });
}

// ----- Logout -----
if (logoutBtn) {
  logoutBtn.addEventListener("click", () => {
    window.location.href = "login.html";
  });
}

// ----- Apply Leave -----
if (leaveForm) {
  leaveForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    alert("Leave application feature will be added next!");
  });
}

fetch("http://localhost:3000/leave-history")
  .then(res => res.json())
  .then(data => {
    console.log(data); // check if data appears
    // display history
  })
  .catch(err => {
    console.error(err);
    document.getElementById("history").innerText = "Error loading leave history.";
  });

function validateInputs(e) {
  e.preventDefault();

  let x = document.forms["myForm"]["username"].value;
  let y = document.forms["myForm"]["password"].value;

  if (x === "" || y === "") {
    alert("All fields must be filled out.");
    return false;
  }

  const usernameValid = /^[a-zA-Z]+$/.test(x);
  const passwordValid = /^[0-9]+$/.test(y);

  if (!usernameValid && !passwordValid) {
    alert(
      "Username must contain only letters and Password must contain only numbers."
    );
    return false;
  }

  if (!usernameValid) {
    alert("Username must contain only letters.");
    return false;
  }

  if (!passwordValid) {
    alert("Password must contain only numbers.");
    return false;
  }
  localStorage.setItem("username", x);
  localStorage.setItem("password", y);

  document.getElementById("section-login").style.display = "none";
  const welcomeMessage = document.createElement("div");
  welcomeMessage.style.display = "flex";
  welcomeMessage.style.alignItems = "center";
  welcomeMessage.style.justifyContent = "center";
  welcomeMessage.style.height = "100vh";
  welcomeMessage.style.fontSize = "50px";
  welcomeMessage.innerHTML = `<p>Welcome, ${x}!</p>`;

  document.body.appendChild(welcomeMessage);

  return true;
}

function generateRandomString(length) {
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let result = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      result += charset[randomIndex];
    }
    return result;
  }
  
  function generateCaptcha() {
    const captchaText = generateRandomString(6); 
    document.getElementById("captcha-text").textContent = captchaText;
    document.getElementById("captcha-input").value = ""; 
    document.getElementById("captcha-error").textContent = "";
  }
  
  function validateCaptcha(userInput, captchaText) {
    return userInput === captchaText;
  }
  
  document.getElementById("refresh-btn").addEventListener("click", generateCaptcha);
  
  document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); 
    
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const userInput = document.getElementById("captcha-input").value;
    const captchaText = document.getElementById("captcha-text").textContent;
  
    if (validateCaptcha(userInput, captchaText)) {
      if (username === "Username" && password === "Password")
      {
      
      alert("Login successful!");
        generateCaptcha();
      } else {
        alert("Incorrect username or password.");
      }
    } else {
      document.getElementById("captcha-error").textContent = "CAPTCHA verification failed. Please try again.";
    }
  });
    
  document.getElementById("captcha-input").addEventListener("input", function() {
    document.getElementById("captcha-error").textContent = "";
  });
  generateCaptcha();
  
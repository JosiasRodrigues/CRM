function showErrorMessage(message) {
    if(document.getElementById('erro-message')) return;
    const errorMessage = document.createElement('div');
    errorMessage.className = 'error-message'; 
    errorMessage.id = 'erro-message'
    errorMessage.textContent = message;
  
    const form = document.querySelector('.form');
    form.appendChild(errorMessage);
  
  };

  

  document.getElementById('form-login').addEventListener('submit', function (event) {
    event.preventDefault()
    console.log(event)
    const textInput = document.getElementById('login');
    const passwordInput = document.getElementById('password');
  
    if (!textInput.value || !passwordInput.value) {
      showErrorMessage('Por favor, preencha todos os campos.');
    } else {
      // Se ambos os campos estiverem preenchidos, oculte a tela de cadastro e mostre a de login
      document.getElementById('cadastrarBtn').addEventListener('click', function() {
        window.location.href = 'index.html'
      })
    }
  });


  const togglePassword = (button) => {

  button.target.classList.toggle("showing");
  const input = document.getElementById("password");
  input.type = input.type === "password" ? "text" : "password";
  

};

document.getElementById('view-password').addEventListener('click', togglePassword)

/*const setCaret = (el) => {
    if (!el) return;
  
    try {
      const range = document.createRange();
      const sel = window.getSelection();
  
      range.setStart(el.childNodes[0], el.innerText.length);
      range.collapse(true);
  
      sel.removeAllRanges();
      sel.addRange(range);
    } catch (err) {
      console.log("Error Setting Caret: ", err);
    }
  };
  
  const togglePassword = (button) => {
    button.classList.toggle("showing");
    const input = document.getElementById("password");
    input.type = input.type === "password" ? "text" : "password";
    input.focus();
    setCaret(input);
  };*/

 


// Função para exibir uma mensagem de aviso
function showErrorMessage(message) {
  if(document.getElementById('erro-message')) return;
  const errorMessage = document.createElement('div');
  errorMessage.className = 'error-message'; 
  errorMessage.id = 'erro-message'
  errorMessage.textContent = message;

  const form = document.querySelector('.form');
  form.appendChild(errorMessage);

 
}

// Função para verificar e lidar com o clique no botão "Sign Up"
document.getElementById('form-login').addEventListener('submit', function (event) {
  event.preventDefault()
  console.log(event)
  const textInput = document.getElementById('login');
  const passwordInput = document.getElementById('password');

  if (!textInput.value || !passwordInput.value) {
    showErrorMessage('Por favor, preencha todos os campos.');
  } else {
    // Se ambos os campos estiverem preenchidos, oculte a tela do cartão e mostre a modal
    document.getElementById('goToSignupBtn').addEventListener('click', function(){
      window.location.href = 'signin.html'
    })
  }
});



const togglePassword = (button) => {

  button.target.classList.toggle("showing");
  const input = document.getElementById("password");
  input.type = input.type === "password" ? "text" : "password";
  

};

document.getElementById('view-password').addEventListener('click', togglePassword)

 











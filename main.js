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
  const errorMessage = document.createElement('div');
  errorMessage.className = 'error-message';
  errorMessage.textContent = message;

  const form = document.querySelector('.form');
  form.appendChild(errorMessage);

  setTimeout(() => {
    errorMessage.remove();
  }, 3000);
}

// Função para verificar e lidar com o clique no botão "Sign Up"
document.querySelector('.control[type="button"]').addEventListener('click', function () {
  const textInput = document.querySelector('input[type="text"]');
  const passwordInput = document.querySelector('input[type="password"]');

  if (!textInput.value || !passwordInput.value) {
    showErrorMessage('Por favor, preencha todos os campos.');
  }
});



const togglePassword = (button) => {

  button.classList.toggle("showing");
  const input = document.getElementById("password");
  input.type = input.type === "password" ? "text" : "password";
  input.focus();

};





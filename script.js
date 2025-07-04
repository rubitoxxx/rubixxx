function login() {
  const usuario = document.getElementById("username").value;
  const senha = document.getElementById("password").value;
  const mensagemErro = document.getElementById("mensagemErro");

  // Definindo usuários e senhas
  const usuarioAdmin = "rubens";
  const senhaAdmin = "1234";
  const usuarioteste = "kauan";
  const senhaTeste = "12345";
  const usuarioteste1 = "yasmin";
  const senhaTeste1 = "1234";
  const usuarioteste2 = "nadja";
  const senhaTeste2 = "4321";
  const usuarioteste3 = "maria";
  const senhaTeste3 = "54321";
  const usuarioteste4 = "rhayane";
  const senhaTeste4 = "54321";
  const usuarioteste5 = "thaynara";
  const senhaTeste5 = "54321";
  const usuarioteste6 = "thalicia";
  const senhaTeste6 = "54321";

  // Condição para verificação de usuário e senha
  if ((usuario === usuarioAdmin && senha === senhaAdmin) || 
      (usuario === usuarioteste && senha === senhaTeste) || 
      (usuario === usuarioteste1 && senha === senhaTeste1) ||
      (usuario === usuarioteste2 && senha === senhaTeste2) ||
      (usuario === usuarioteste3 && senha === senhaTeste3) ||
      (usuario === usuarioteste4 && senha === senhaTeste4) ||
      (usuario === usuarioteste5 && senha === senhaTeste5)) {
    
    // Se o login for bem-sucedido, armazene o usuário no localStorage
    localStorage.setItem("usuarioLogado", usuario);
    
    // Redireciona para o mural após login
    window.location.href = "mural.html"; 
  } else {
    // Caso o login falhe, exibe a mensagem de erro
    mensagemErro.textContent = "Usuário ou senha incorretos!";
  }
}

// Função para exibir a foto de perfil (se necessário)
function exibirFotoPerfil() {
  // Lógica de exibição da foto de perfil (se necessário)
}

// Função para converter a foto para Base64
function convertToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

function login() {
    const usuario = document.getElementById("username").value;
    const senha = document.getElementById("password").value;
    const mensagemErro = document.getElementById("mensagemErro");

    // Define users and passwords using an array of objects
    const users = [
        { username: "rubens", password: "1234" },
        { username: "kauan", password: "12345" },
        { username: "yasmin", password: "1234" },
        { username: "nadja", password: "4321" },
        { username: "maria", password: "54321" },
        { username: "rhayane", password: "54321" },
        { username: "thaynara", password: "54321" },
        { username: "thalicia", password: "54321" },
        { username: "dry", password: "54321" } // Corrected: Assuming this was the intended 'dry' user
    ];

    // Check if any user matches the entered credentials
    const isAuthenticated = users.some(user => user.username === usuario && user.password === senha);

    if (isAuthenticated) {
        // If login is successful, store the user in localStorage
        localStorage.setItem("usuarioLogado", usuario);
        
        // Redirect to the mural after login
        window.location.href = "mural.html";
    } else {
        // If login fails, display the error message
        mensagemErro.textContent = "Usuário ou senha incorretos!";
    }
}

// Your other functions remain the same
function exibirFotoPerfil() {
    // Lógica de exibição da foto de perfil (se necessário)
}

function convertToBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(file);
    });
}

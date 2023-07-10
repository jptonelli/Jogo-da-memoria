const input = document.querySelector('.login-input')
const button = document.querySelector('.login-button')
const form = document.querySelector('.login-form')

input.addEventListener('input', (event) => {
    if (event.target.value.length > 2){
        button.removeAttribute('disabled')
    } else {
        button.setAttribute('disabled', '')
    }
})

form.addEventListener ('submit', (event) => {
    event.preventDefault() // Essa linha serve para evitar o comportamento padrão do elemetno (no caso, o submit tem por padrão enviar e recarregar a página)
    
    localStorage.setItem('player', input.value) // Essa linha vai armazenar o nome do player no jogo -> Para cessar o localStorage, vamos em dev tools, depois em aplicativo e achamos o localStorage
    window.location = 'pages/game.html' // redireciona o usuário para outra página
})
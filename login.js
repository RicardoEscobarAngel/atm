const usuariosCajero = [
    {
        nombre: 'Ricardo Escobar',
        correo: 'rescobar@rebanco.com',
        contrasena: '123456',
        balance: 1000
    },
    {
        nombre: 'Santiago González',
        correo: 'sgonzalez@rebanco.com',
        contrasena: '123456',
        balance: 2000
    },
    {
        nombre: 'Jorge Escobar',
        correo: 'jescobar@rebanco.com',
        contrasena: '123456',
        balance: 3000
    },
    {
        nombre: 'Camilo Noguera',
        correo: 'cnoguera@rebanco.com',
        contrasena: '123456',
        balance: 4000
    }
]
const error = document.querySelector('#error_login')
const input = document.querySelector('input')
const formularioLogin = document.querySelector("#formularioLogin")
console.log(formularioLogin)

input.addEventListener('focus', function() {
    if(!error.classList.contains('hidden')) {
        error.classList.add('hidden');
        formularioLogin.reset();
    }
})

formularioLogin.addEventListener('submit',function(e){
    e.preventDefault()
    const data = new FormData(formularioLogin)

    const { email, password } = Object.fromEntries(data)
    console.log({email, password})
    if (email.length === 0) {
        error.classList.remove('hidden')
        error.classList.add('alert-danger')
        error.innerHTML = 'El campo de usuario es obligatorio.'
        return
    }

    if (password.length === 0) {
        error.classList.remove('hidden')
        error.classList.add('alert-danger')
        error.innerHTML = 'El campo de contraseña es obligatorio.'
        return
    }

    const loginAttempt = usuariosCajero.find(user => user.correo === email && user.contrasena ===password)

    if (loginAttempt === undefined) {
        error.classList.remove ('hidden')
        error.classList.add ('alert-danger')
        error.innerHTML = 'Error en los datos de ingreso.'
    } else {
        error.classList.remove ('hidden')
        error.classList.add ('alert-info')
        error.innerHTML = 'En un momento podrás ingresar.'
        window.sessionStorage.setItem('usuarioActual', JSON.stringify(loginAttempt))
        window.location.href = '/cajero.html'
    }
})
    

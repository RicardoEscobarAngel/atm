const saludo = document.querySelector("#saludo_bienvenida")
const modal = document.querySelector("#modal")
const backdrop = document.querySelector("#backdrop")
const botonCerrarModal = document.querySelector("#modal span")
const cerrarModalAfuera = document.querySelector("#barckdrop")


const abrirModal = () => {
    modal.classList.remove ("hidden")
    backdrop.classList.remove ("hidden")
}

const cerrarModal = () => {
    modal.classList.add("hidden")
    backdrop.classList.add("hidden")
}

botonCerrarModal.addEventListener("click", function(){
    modal.classList.add("hidden")
    backdrop.classList.add("hidden")
})

backdrop.addEventListener("click", function(){
    modal.classList.add("hidden")
    backdrop.classList.add("hidden")
})


// Revisar con el sensei...
document.addEventListener("DOMContentLoaded", function(){
    const usuarioActual = JSON.parse(window.sessionStorage.getItem("usuarioActual"))
    console.log(usuarioActual.nombre)
    saludo.innerHTML = `¡Bienvenido, ${usuarioActual.nombre}!`
})

const consultaBalance = document.querySelector("#balance")
consultaBalance.addEventListener("click", function(){
    abrirModal()

    const { balance } = JSON.parse(window.sessionStorage.getItem("usuarioActual"))
    const cuerpoModal = document.querySelector("#modal div")
    const tituloModal = document.querySelector("#modal h5")


    cuerpoModal.innerHTML = `<h3 style="font-size: 2rem; height: 25vh; display: flex; align-items: center">$ ${balance}</h3>`
    tituloModal.innerHTML = `Apenas tienes:`
})

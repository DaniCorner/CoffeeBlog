//querySelector
const heading = document.querySelector('#heading') // Retorna 0 a 1 elementos
heading.textContent='Nuevo Heading';
console.log(heading);

// El ID no se usa para los estilos CSS, sino para el JS


//querySelectorAll
// document.querySelectorAll('.navegacion a')[0].textContent= 'Nuevo texto para Enlace';

const enlaces = document.querySelectorAll('.navegacion a');
enlaces[0].textContent = 'Nuevo Enlace';
enlaces[0].classList.add('nueva-clase');
//enlaces[0].classList.remove('navegacion__enlace');

//getElementByID

/*const heading2= document.getElementById('heading');
console.log(heading2);
*/
//Generar un nuevo enlace
const nuevoEnlace = document.createElement('A')

//Agregar el href
nuevoEnlace.href= 'nuevo-enlace.html';

//Agregar el texto
nuevoEnlace.textContent='Un Nuevo Enlace';
//Agregar la clase
nuevoEnlace.classList.add('navegacion__enlace');

//Agregarlo al documento
const navegacion = document.querySelector('.navegacion');
navegacion.appendChild(nuevoEnlace);

// Eventos
/*
console.log(1);
 // Window es un ni
 window.addEventListener('load', function() {
    console.log(2); //load espera a que el HTML y los archivos estén listos
 });

window.onload= function() {
    console.log(3);
}

document.addEventListener('DOMContentLoaded', function () {
    console.log(4);
});

console.log(5);
*/
//LOad espera a todo (CSS e imágenes), DOMContent sólo espera que se cargue el HTML.
/*
window.onscroll= function () {
    console.log('scrolling...');
}*/

// Seleccionar elementos y asociarles un evento
/*
const btnEnviar = document.querySelector('.boton--primario');

btnEnviar.addEventListener('click', function (evento) {
    console.log(evento.target);
    console.log(evento.preventDefault()); // MUY UTIL Permite que no recargue la página

    // Validar un formulario


    console.log('enviando formulario');
});
*/




// Eventos de los Inputs y TextArea

const datos = {
    nombre: '',
    email:'',
    mensaje: ''
}

const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('.formulario');

nombre.addEventListener('input', leerTexto)
email.addEventListener('input', leerTexto)
mensaje.addEventListener('input', leerTexto);
formulario.addEventListener('submit', function (evento) {
    evento.preventDefault();
    // Validar el formulario

    const {nombre, email, mensaje}= datos;

    if(nombre=='' || email =='' || mensaje ==''){
        mostrarAlerta('Eres un MIERDAS', true);
        return; // Previene la ejecución del submit, por eso no tiene sentido poner luego un else, pues termina ejecución código
    }

        mostrarAlerta('Enviado FormuMIERDAS');
});
  

    console.log(nombre);
    console.log(email);
    console.log(mensaje);
    
    // Enviar el formulario
    console.log('Enviando Formulario');


function leerTexto (e) {
    datos[e.target.id]= e.target.value;
    //console.log(datos);
}

// Primero las variables
// Luego los eventlistener
// Finalmente, las funciones

// Muestra error por pantalla

function mostrarAlerta(mensaje, error = null){
    const alerta= document.createElement('P');
    alerta.textContent=mensaje;

    if(error){
    alerta.classList.add('error');
    }
    else {
        alerta.classList.add('correcto');
    }

    formulario.appendChild(alerta)
    setTimeout(()=>
    {alerta.remove()}, 5000);
}


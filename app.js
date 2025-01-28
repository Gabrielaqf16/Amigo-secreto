// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Se elabora un array vacío que se usará para almacenar los nombres de los amigos ingresados para el sorteo
let amigos = [];

function agregarAmigo() {
    // Capturar el valor ingresado por el usuario con el ID amigo
    const input = document.getElementById("amigo");
    // Elimina espacios al principio y final una vez capturado el texto ingresado
    const nombreAmigo = input.value.trim(); 
    
    // Validar que el campo no esté vacío
    if (nombreAmigo === "") {
        //Muestra mensaje notificando que se debe de ingresar un nombre
        alert("Por favor, inserte un nombre.");
        // Salir de la función si está vacío
        return;  
    }
    // Agregar el nombre al array de amigos
    amigos.push(nombreAmigo);

    // Limpiar el campo de entrada
    input.value = "";

    // Llamar a la función para actualizar la lista de amigos en el HTML
    actualizarLista();
}

//Define la función para que se observe la lista actualizada en la interfaz
function actualizarLista() {
    // Obtener el elemento HTML que se mostrará en la lista
    const lista = document.getElementById("listaAmigos");

    // Limpiar la lista existente
    lista.innerHTML = "";

    // Bucle for que recorre el array de amigos
    for (let i = 0; i < amigos.length; i++) {
        // Crear un elemento <li> para cada amigo
        const li = document.createElement("li");
        // Asigna el nombre del amigo al contenido del elemento <li>
        li.textContent = amigos[i];
        // Añade el <li> a la lista del interfaz HTML
        lista.appendChild(li);
    }
}

function sortearAmigo() {

    // Generar un índice aleatorio entre 0 y el tamaño del array de amigos
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtener el nombre del amigo sorteado
    const amigoSecreto = amigos[indiceAleatorio];

    // Mostrar el resultado en la interfaz
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `El amigo sorteado es: ${amigoSecreto}`;
}

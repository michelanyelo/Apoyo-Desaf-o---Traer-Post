// Función asíncrona para obtener los datos de la API
const getPosts = async () => {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error al acceder al API:", error);
    }
}

// Función para listar los datos en el HTML
const listarDatos = (posts) => {
    const postDiv = document.getElementById('post-data');
    postDiv.innerHTML = ''; // Limpiar el contenido anterior
    const ul = document.createElement('ul'); // Crear la lista desordenada

    posts.forEach((post) => {
        const li = document.createElement('li'); // Crear un elemento de lista por cada post
        li.innerHTML = `
            <h2>${post.title}</h2>
            <p>${post.body}</p>
        `;
        ul.appendChild(li); // Agregar el elemento de lista a la lista desordenada
    });

    postDiv.appendChild(ul); // Agregar la lista desordenada al contenedor en el DOM
};

// Función principal que obtiene los posts y luego los lista
const mostrarPosts = async () => {
    const posts = await getPosts(); // Esperar a que los datos sean obtenidos
    listarDatos(posts); // Llamar a listarDatos con los datos obtenidos
}

// Llamada a la función cuando se presiona el botón
document.querySelector("button").addEventListener("click", mostrarPosts);

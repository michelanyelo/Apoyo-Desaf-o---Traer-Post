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


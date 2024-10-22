const chisteDiv = document.getElementById('chiste');
const generarChisteBtn = document.getElementById('generarChisteBtn');
const apiUrl = 'https://v2.jokeapi.dev/joke/Any?lang=es&amount=1';

function obtenerChiste() {
    fetch(apiUrl)
        .then(response => {
            console.log("Respuesta de la API recibida", response);  
            return response.json();
        })
        .then(data => {
            console.log("Datos del chiste:", data);  
            const chiste = data.jokes ? data.jokes[0] : data;
            if (chiste.type === 'single') {
                chisteDiv.textContent = chiste.joke;
            } else if (chiste.type === 'twopart') {
                chisteDiv.textContent = `${chiste.setup} - ${chiste.delivery}`;
            }
        })
        .catch(error => {
            chisteDiv.textContent = 'Error al cargar el chiste';
            console.error('Error:', error);
        });
}
generarChisteBtn.addEventListener('click', obtenerChiste);



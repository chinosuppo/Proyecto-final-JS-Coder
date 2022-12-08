window.addEventListener('load',() => {
    let longitud;
    let latitud;

    let valorTemp = document.getElementById('valorTemp');
    let descripcionTemp = document.getElementById('descripcionTemp');
    let ubicacion = document.getElementById('ubicacion');
    let valorHumedad = document.getElementById('valorHumedad');

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(posicion =>{
            longitud = posicion.coords.longitude;
            latitud = posicion.coords.latitude;

            //ubicacion actual

            /*const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitud}&lon=${longitud}&appid={56bdfd33b9fb5eae36e22c8d04bad574}`*/

            //Para Cachi
            const url = `https://api.openweathermap.org/data/2.5/weather?q=Cachi&lang=es&units=metric&appid=d151dd31a725cf4d8a5a5797b8d9fbfd`;

            //console.log(url);

            fetch(url)
                .then(response => response.json())
                .then(data => {
                    let temp = Math.round(data.main.temp);
                    valorTemp.textContent = `${temp} °C`;

                    let descripcion = data.weather[0].description;
                    descripcionTemp.textContent = descripcion.toUpperCase();

                    ubicacion.textContent = data.name;

                    let humedad = data.main.humidity;
                    valorHumedad.textContent = `${humedad}%`;

                    // Hacer lo de los iconos dinamicos
                })
                .catch(error => {
                    console.log(error);
                })
        });
    }
});
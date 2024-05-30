let api_key = '00fd9fec53ed29463c5fd47cddc2652f'
const diferenciaKelvin = 273.15
const urlBase = 'https://api.openweathermap.org/data/2.5/weather'

document.getElementById('botonBusqueda').addEventListener('click', () =>{
    let ciudad = document.getElementById('ciudadEntrada').value
    if(ciudad){
        fetchDatosClima(ciudad)
    }
})

function fetchDatosClima(ciudad){
    fetch(`${urlBase}?q=${ciudad}&appid=${api_key}`)
        .then(respuesta => respuesta.json())
        .then(respuesta => mostrarDatosClima(respuesta))
}

function mostrarDatosClima(respuesta){
    const divDatosClima = document.getElementById('datosClima')
    divDatosClima.innerHTML = ''

    let nombreCiudad = respuesta.name
    let nombrePais = respuesta.sys.country
    let temperatura = respuesta.main.temp
    let sensacionTermica = respuesta.main.feels_like
    let icono = respuesta.weather[0].icon

    let tituloCiudad = document.createElement('h2')
    tituloCiudad.textContent = `${nombreCiudad}, ${nombrePais}` 

    let informacionTemperatura = document.createElement('p')
    informacionTemperatura.textContent = `La temperatura es: ${Math.floor(temperatura-diferenciaKelvin)} °C`

    let informacionSensacion = document.createElement('p')
    informacionSensacion.textContent = `La sensación térmica es: ${Math.floor(sensacionTermica - diferenciaKelvin)} °C`

    let informacionIcono = document.createElement('img')
    informacionIcono.src = `https://openweathermap.org/img/wn/${icono}@2x.png`

    divDatosClima.appendChild(tituloCiudad)
    divDatosClima.appendChild(informacionTemperatura)
    divDatosClima.appendChild(informacionSensacion)
    divDatosClima.appendChild(informacionIcono)
}
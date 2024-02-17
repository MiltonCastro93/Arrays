//Ubicamos elementos dentro del DOM
const botones = document.querySelectorAll('#contenedorMarcas img')
console.log(botones);
const btnAnterior = botones[0];
const btnSiguiente = botones[1];
    //span
    const span = document.querySelector('#contenedorMarcas span')

// array de marcas
const marcas = [
    'Hermés', 'Zara', 'Boss', 
    'Aeropostale', 'Tommy', 'Hollister',
    'Kingpin', 'Gola', 'Old Navy'
    ];

//Estado inicial
let llave = 6;
//mostrar una marca dentro del span
span.innerText = marcas[llave]

btnSiguiente.addEventListener(
    'click', 
    function(){
        llave++;
        if(llave == marcas.length){
            llave = 0;
        }
        span.innerText = marcas[llave];
    }
);

btnAnterior.addEventListener(
    'click',
    function(){
        llave--;
        if(llave == -1){
            llave = marcas.length - 1;
        }
        span.innerText = marcas[llave];
    }

);

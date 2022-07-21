const URL = 'https://api.thecatapi.com/v1/images/search?limit=3&api_key=fb62f58f-de27-4848-9229-2fae1aa4c0c6';

// Petición hecha con Fetch y promises directamente

// // // // // fetch(URL)
// // // // //     .then(response => response.json())
// // // // //     .then(data => {
// // // // //         const img = document.querySelector('img');
// // // // //         img.src = data[0].url;
// // // // //     })

// const nuevaLlamada = async () => {
//     const response = await fetch(URL);
//     const data = await response.data;
//     return data;
// }

// // // // // // // // // const llamarFetch = () => {
// // // // // // // // //     fetch(URL)
// // // // // // // // //         .then(response => response.json())
// // // // // // // // //         .then(data => {
// // // // // // // // //             const img = document.querySelector('img');
// // // // // // // // //             img.src = data[0].url;
// // // // // // // // //         })
// // // // // // // // // }

// // // // // // // // // llamarFetch();

// // // // // // // // // let button = document.getElementById('cargarNueva');

// // // // // // // // // button.addEventListener('click', ()=> {
// // // // // // // // //     llamarFetch();
// // // // // // // // // })

// Petición realizada con asyn await

const imagenes = document.getElementById('imagenes');
const loader = document.getElementById('loader')

const nuevaLlamada = async () => {
    showOrHide(loader, imagenes)
    const response = await fetch(URL);
    const data = await response.json();
    showOrHide(loader, imagenes)
    // const img = document.querySelector('img');
    const img1 = document.getElementById('img1')
    const img2 = document.getElementById('img2')
    const img3 = document.getElementById('img3')
    console.log(data)
    // img.src = data[0].url;
    img1.src = data[0].url;
    img2.src = data[1].url;
    img3.src = data[2].url;
}

const showOrHide = (hide, show) => {
    hide.classList.toggle("hide");
    show.classList.toggle("hide");
}

nuevaLlamada();

let button = document.getElementById('cargarNueva');
 
button.addEventListener('click', ()=> {
    nuevaLlamada();
})
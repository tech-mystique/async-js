//pokemons list: Bulbasaur Ivysaur Venusaur Charmander Charmeleon Charizard Squirtle Wartortle Blastoise Caterpie Metapod Butterfree Weedle Kakuna Beedrill Pidgey Pidgeotto Pidgeot Rattata


// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const respose = {
//             name: 'Alisa'
//         };

//         // resolve(respose);
//         reject('unknown error');
//     }, 1000);  
// });

// // console.log(promise);

// promise.then(res => console.log(res)).catch(err => console.log('error', err))

const domain = 'https://pokeapi.co/api/v2';
const body = document.body;

const listItemTemplate = ({ name, url}) => {
    return `<li><p>ability name: ${name}</p><p>ability url: ${url}</p></li>`
}

const cardTemplate = (imageSrc, imageAlt, pokemonName, pokemonAbalities) => {
    const list = pokemonAbalities.map((el) => {
        return listItemTemplate(el.ability)
    });

    return `<div class="card"> <img src="${imageSrc}" alt="${imageAlt}" /> <p class="name">${pokemonName}</p><ul>${list}</ul></div>`
}

fetch(`${domain}/pokemon/ditto`)
    .then(res => res.json())
    .then(res => {
        body.insertAdjacentHTML('beforeend', cardTemplate(res.sprites.front_default, res.name, res.name, res.abilities));
    })
    .catch(err => console.log('error', err));


    fetch('https://fchatiavi.herokuapp.com/get/n').then(res => res.json()).then(res => console.log('chat res', res))
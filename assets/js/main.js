// COLOCA AS IMAGENS DOS POKEMONS NO HTML
function addImage(url, name, type){
    const row = document.querySelector('[pokemonsRow]')
    
    const divCol = document.createElement('div')
    divCol.classList.add('col-12', 'col-md-3', 'g-5')
    
    const imgPoke = document.createElement('img')
    imgPoke.classList.add('img-thumbnail')
    imgPoke.setAttribute('src', url)
    imgPoke.setAttribute('alt', name)
    imgPoke.setAttribute('category', type)
    
    divCol.appendChild(imgPoke)
    row.appendChild(divCol)
}

addImage('assets/img/rock/Rampardos.png', 'pokemon', 'rock')
addImage('assets/img/water/Poliwhirl.png', 'pokemon', 'water')
addImage('assets/img/water/Oshawott.png', 'pokemon', 'water')
addImage('assets/img/rock/Aggron.png', 'pokemon', 'rock')
addImage('assets/img/fire/Charmeleon.png', 'pokemon', 'fire')
addImage('assets/img/water/Greninja.png', 'pokemon', 'water'),
addImage('assets/img/fire/Magcargo.png', 'pokemon', 'fire')
addImage('assets/img/grass/Celebi.png', 'pokemon', 'grass')
addImage('assets/img/grass/Venussauro.png', 'pokemon', 'grass')
addImage('assets/img/psychic/Gardevoir.png', 'pokemon', 'psychic')
addImage('assets/img/grass/Sunkern.png', 'pokemon', 'grass')
addImage('assets/img/fire/Braixen.png', 'pokemon', 'fire')
addImage('assets/img/grass/Maractus.png', 'pokemon', 'grass')
addImage('assets/img/psychic/Slowking.png', 'pokemon', 'psychic')
addImage('assets/img/rock/Shieldon.png', 'pokemon', 'rock')
addImage('assets/img/psychic/Solgaleo.png', 'pokemon', 'psychic')
addImage('assets/img/water/Poliwag.png', 'pokemon', 'water')
addImage('assets/img/psychic/Uxie.png', 'pokemon', 'psychic')
addImage('assets/img/rock/Nosepass.png', 'pokemon', 'rock')
addImage('assets/img/rock/Crustle.png', 'pokemon', 'rock')
addImage('assets/img/fire/Chimchar.png', 'pokemon', 'fire')
addImage('assets/img/water/Squirtle.png', 'pokemon', 'water')
addImage('assets/img/fire/Darmanitan.png', 'pokemon', 'fire')
addImage('assets/img/grass/Decidueye.png', 'pokemon', 'grass')
addImage('assets/img/psychic/Necrozma.png', 'pokemon', 'psychic')

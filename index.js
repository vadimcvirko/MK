subzero = {
    name: 'subzero',
    hp : 100,
    img : 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
    weapon: ['freezing'],
    attack: function (){
        console.log(name + 'fight')
    },
}

liukang = {
    name: 'liukang',
    hp : 100,
    img : 'http://reactmarathon-api.herokuapp.com/assets/liukang.gif',
    weapon: ['liukang'],
    attack: function (){
        console.log(name + 'fight')
    },
}

function createPlayer (player, pers, hp ){

    const $player1= document.createElement('div')
    $player1.classList.add(player);

    const $progressbar = document.createElement('div')
    $progressbar.classList.add('progressbar')

    const $character = document.createElement('div')
    $character.classList.add('character')

    const $life = document.createElement('div')
    $life.classList.add('life')
    $life.style.width=(pers.hp +'%')

    const $name = document.createElement('div')
    $name.classList.add('name')
    $name.innerText=(pers.name)

    const $img = document.createElement('img')
    $img.src = pers.img

    const $arenas = document.querySelector('.arenas')

    $arenas.appendChild($player1)
    $player1.appendChild($progressbar)
    $player1.appendChild($character)
    $progressbar.appendChild($life)
    $progressbar.appendChild($name)
    $character.appendChild($img)
}

createPlayer('player1', subzero, 50);
createPlayer('player2' , liukang, 80);
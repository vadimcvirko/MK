const $arenas = document.querySelector('.arenas')
const $randomButton = document.querySelector('.button')


let player1 = {
    player : 1,
    name: 'subzero',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
    weapon: ['freezing'],
    attack: function () {
        console.log(name + 'fight')
    },
}

let player2 = {
    player : 2,
    name: 'liukang',
    hp: 90,
    img: 'http://reactmarathon-api.herokuapp.com/assets/liukang.gif',
    weapon: ['liukang'],
    attack: function () {
        console.log(name + 'fight')
    },
}

function createElement(tag, className) {
    const $tag = document.createElement(tag);
    if (className){
        $tag.classList.add(className);
    }
    
    return $tag;
}


function createPlayer(playerObj) {


    // console.log(playerObj);
    const $player = createElement('div','player' + playerObj.player );
    const $progressbar = createElement('div','progressbar');
    const $character = createElement('div','character');
    const $life = createElement('div', 'life');
    const $name = createElement('div', 'name');
    const $img = createElement('img');
    

    $life.style.width = playerObj.hp + "%";
    $name.innerText = playerObj.name;
    $img.src = playerObj.img;
    // console.log($img.src);


    
    $player.appendChild($progressbar)
    $player.appendChild($character)
    $character.appendChild($img)
    $progressbar.appendChild($life)
    $progressbar.appendChild($name)
    

    return $player
}

function changeHP(player){
    const $playerLife = document.querySelector('.player'+player.player + ' .life')
    player.hp-= Math.floor(Math.random() * 20);
    console.log(player.hp);
    if(player.hp > 0){
        $playerLife.style.width = player.hp + '%';
    }else{
        $playerLife.style.width = '0%';
    }
    

    if(player.hp < 0 ){
        $arenas.appendChild(playerLose(player.name))
    }
}

function playerLose(name) {
    const $loseTitle = createElement('div','loseTitle' )
    $loseTitle.innerText = name + ' lose'
    return $loseTitle

} 
$randomButton.addEventListener('click', function(){
    changeHP(player1)
    changeHP(player2)
})


$arenas.appendChild(createPlayer(player1));
$arenas.appendChild(createPlayer(player2));
const screen = document.querySelector('.screen');
const startButton = document.querySelector('.start');
const body = document.querySelector('body');

class pet {
    constructor(){
        // hunger 1-10
        // sleepiness 1-10
        // boredom 1-10
        // age
        // name
    }

    // function increase age
    // function increase hunger
    // function increase sleepiness
    // function increase boredom

    // function die

    // morph
}
const addPet = () => {

    screen.removeChild(startButton);

    const bottombar = document.createElement('div');
    bottombar.setAttribute('class', 'bottomBar');
    
    const button1 = document.createElement('button');
    button1.setAttribute('class', 'feed');
    button1.innerText = 'Feed';
    bottombar.appendChild(button1);

    const button2 = document.createElement('button');
    button2.setAttribute('class', 'lights');
    button2.innerText = 'Light Toggle';
    bottombar.appendChild(button2);

    const button3 = document.createElement('button');
    button3.setAttribute('class', 'play');
    button3.innerText = 'Play';
    bottombar.appendChild(button3);

    
    const buttons = document.querySelector('.interact');
    console.log(buttons);

    const name = document.createElement('h1');
    name.setAttribute('id', 'name');
    name.innerText = pet.name;

    const pic = document.createElement('img');
    //pic.setAttribute('class', 'img');
    pic.src = "https://picsum.photos/400/600";

    const newPet = document.createElement('SECTION');
    newPet.setAttribute("class", "pet");

    newPet.appendChild(name);
    newPet.appendChild(pic);
    newPet.appendChild(bottombar);
    screen.appendChild(newPet);
}

const makePet = () => {

    const newPetCLass = new pet(name);

    addPet();
}

$(() => {
    $('.start').on('click', makePet);
});
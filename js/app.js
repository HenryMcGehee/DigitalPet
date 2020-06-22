const screen = document.querySelector('.screen');
const startButton = document.querySelector('.start');

let p = {};
let petName = '';
let started = false;
let time = 0;

class pet {
    constructor(name, age, hunger, sleepiness, boredom){
        this.name = name;
        this.age = age;
        this.hunger = hunger;
        this.sleepiness = sleepiness;
        this.boredom = boredom;
    }

    // function increase age
    // function increase hunger
    // function increase sleepiness
    // function increase boredom

    // function die

    // morph
}

const namePet = () => {
    petName = prompt('enter your pets name', 'pet');
}

const addPet = () => {
    const newPetClass = new pet (petName, 0, 0, 0, 0);
    p = newPetClass;

    screen.removeChild(startButton);

    const sidebar = document.createElement('aside');
    sidebar.setAttribute('class', 'info');

    const info1 = document.createElement('h2');
    info1.setAttribute('id', 'info1');
    info1.innerText = `age: ${p.age}`;

    const info2 = document.createElement('h2');
    info2.setAttribute('id', 'info2');
    info2.innerText = `hunger: ${p.hunger}`;

    const info3 = document.createElement('h2');
    info3.setAttribute('id', 'info3');
    info3.innerText = `sleepiness: ${p.sleepiness}`;

    const info4 = document.createElement('h2');
    info4.setAttribute('id', 'info4');
    info4.innerText = `boredom: ${p.boredom}`;

    sidebar.appendChild(info1);
    sidebar.appendChild(info2);
    sidebar.appendChild(info3);
    sidebar.appendChild(info4);


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
    name.innerText = p.name;

    const pic = document.createElement('img');
    pic.setAttribute('class', 'displayPet');
    pic.src = "https://picsum.photos/400/600";

    const newPet = document.createElement('SECTION');
    newPet.setAttribute("class", "pet");

    newPet.appendChild(name);
    newPet.appendChild(pic);
    newPet.appendChild(sidebar);
    newPet.appendChild(bottombar);
    screen.appendChild(newPet);

    startTimer();

    $('.feed').on('click', feedPet);
    $('.lights').on('click', sleepPet);
    $('.play').on('click', playPet);
}

const makePet = () => {
    namePet();

    addPet();
}

function startTimer(){
    if(started === false){
        started = true;

        const timer = setInterval(function () {
            time++;
            
            if(time % 360 === 0){
                let ageNum = document.querySelector('#info1');
                ageNum.innerText = `age: ${p.age++}`;
            }
            if(time % 6 === 0){
                let sleepyNum = document.querySelector('#info3');
                sleepyNum.innerText = `sleepiness: ${p.sleepiness++}`;
            }
            if(time % 6 === 0){
                let hungerNum = document.querySelector('#info2');
                hungerNum.innerText = `hunger: ${p.hunger++}`;
            }
            if(time % 2 === 0){
                let boredNum = document.querySelector('#info4');
                boredNum.innerText = `boredom: ${p.boredom++}`;
            }
        }, 100);
    }
}

const feedPet = () => {
    p.hunger = '0';
}

const playPet = () => {
    p.boredom = '0';
}

const sleepPet = () => {
    p.sleepiness = '0';
}

$(() => {
    $('.start').on('click', makePet);
});
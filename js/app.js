let bgSound, staticSound, symbolSound, squidSound, demonSound, feedSound, offerSound, worshipSound;
let allSound = [];
let p = {};
let petName = '';
let started = false;
let time = 0;
let dead = false;

const screen = document.querySelector('.screen');
const startButton = document.querySelector('.start');

class pet {
    constructor(name, age, hunger, sleepiness, boredom){
        this.name = name;
        this.age = age;
        this.hunger = hunger;
        this.sleepiness = sleepiness;
        this.boredom = boredom;
    }

    // function die

    die = () => {
        for (let i = 0; i < allSound.length; i++) {
            allSound[i].src = '';
        }
        const petLife = document.querySelector('.pet');
        dead = true;
        screen.removeChild(petLife);

        time = 0;
    }

}

function audio(audio, loop, link) {
    audio = new Audio();
    audio.src = link;
    audio.loop = loop;
    allSound.push(audio);
    audio.play();
}

const namePet = () => {
    audio(bgSound, true, "./audio/amb1.wav");

    petName = prompt('enter your pets name', 'pet');
}

const addPet = () => {
    dead = false;

    const newPetClass = new pet (petName, 0, 0, 10, 0);
    p = newPetClass;

    const sidebar = document.createElement('aside');
    sidebar.setAttribute('class', 'info');

    const info1 = document.createElement('h2');
    info1.setAttribute('id', 'info1');
    info1.innerText = `Power: ${p.age}`;

    const info2 = document.createElement('h2');
    info2.setAttribute('id', 'info2');
    info2.innerText = `Hunger: ${p.hunger}`;

    const info3 = document.createElement('h2');
    info3.setAttribute('id', 'info3');
    info3.innerText = `Belief: ${p.sleepiness}`;

    const info4 = document.createElement('h2');
    info4.setAttribute('id', 'info4');
    info4.innerText = `Wrath: ${p.boredom}`;

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
    button2.innerText = 'Worship';
    bottombar.appendChild(button2);

    const button3 = document.createElement('button');
    button3.setAttribute('class', 'play');
    button3.innerText = 'Offer';
    bottombar.appendChild(button3);

    const name = document.createElement('h1');
    name.setAttribute('id', 'name');
    name.innerText = p.name;

    const pic = document.createElement('div');
    pic.setAttribute('id', 'young');

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
            if(!dead){

                time++;
                
                if(time % 10 === 0){
                    let ageNum = document.querySelector('#info1');
                    ageNum.innerText = `Power: ${p.age++}`;

                    if(p.age === 6){
                        audio(staticSound, true, "./audio/amb1.wav");
                        let pic = document.querySelector('#young');
                        pic.setAttribute('id', 'older');
                    }
                    if(p.age === 11){
                        audio(symbolSound, true, "./audio/amb1.wav");
                        let pic = document.querySelector('#older');
                        pic.setAttribute('id', 'old');
                    }
                    if(p.age === 16){
                        audio(squidSound, true,"./audio/amb1.wav");
                        let pic = document.querySelector('#old');
                        pic.setAttribute('id', 'ancient');
                    }
                    if(p.age === 21){
                        audio(demonSound, true, "./audio/amb1.wav");
                        let pic = document.querySelector('#ancient');
                        pic.setAttribute('id', 'elder');
                    }
                }
                if(time % 8 === 0){
                    let sleepyNum = document.querySelector('#info3');
                    sleepyNum.innerText = `Belief: ${p.sleepiness--}`;
                }
                if(time % 4 === 0){
                    let hungerNum = document.querySelector('#info2');
                    hungerNum.innerText = `Hunger: ${p.hunger++}`;
                }
                if(time % 2 === 0){
                    let boredNum = document.querySelector('#info4');
                    boredNum.innerText = `Wrath: ${p.boredom++}`;
                }

                if (p.hunger > 10 || p.sleepiness < 0 || p.boredom > 10){
                    p.die();
                }
            }
        }, 1000);
    }
}

const feedPet = () => {
    audio(feedSound, false, "./audio/CAMERA1.wav");
    p.hunger = '0';
    let hungerNum = document.querySelector('#info2');
    hungerNum.innerText = `Hunger: ${p.hunger}`;
}

const playPet = () => {
    audio(offerSound, false, "./audio/CAMERA1.wav");
    p.boredom = '0';
    let boredNum = document.querySelector('#info4');
    boredNum.innerText = `Wrath: ${p.boredom}`;
}

const sleepPet = () => {
    audio(worshipSound, false, "./audio/CAMERA1.wav");
    p.sleepiness = '10';
    let sleepyNum = document.querySelector('#info3');
    sleepyNum.innerText = `Belief: ${p.sleepiness}`;
}


$('.start').on('click', makePet);


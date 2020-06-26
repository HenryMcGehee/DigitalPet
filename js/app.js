let bgSound, staticSound, symbolSound, squidSound, demonSound, feedSound, offerSound, worshipSound;
let allSound = [];
let p = {};
let petName = '';
let started = false;
let time = 0;
let dead = false;
let speed = false;

const screen = document.querySelector('.screen');
const startButton = document.querySelector('.start');
const startText = document.querySelector('.intro');

class pet {
    constructor(name, age, hunger, sleepiness, boredom){
        this.name = name;
        this.age = age;
        this.hunger = hunger;
        this.sleepiness = sleepiness;
        this.boredom = boredom;
    }
}

function audio(audio, loop, link) {
    audio = new Audio();
    audio.src = link;
    audio.loop = loop;
    allSound.push(audio);
    audio.play();
}

const makePet = () => {
    
    namePet();
    addPet();
}

const namePet = () => {
    audio(bgSound, true, "./audio/bg.wav");

    petName = prompt('enter your pets name', 'pet');

    screen.removeChild(startButton);
    screen.removeChild(startText);
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

    addText('The towns people are unaware of your deeds.', screen);

    startTimer();

    $('.feed').on('click', feedPet);
    $('.lights').on('click', sleepPet);
    $('.play').on('click', playPet);
}



function startTimer(){
    if(started === false){
        started = true;

        const timer = setInterval(function () {
            if(!dead){

                const petLife = document.querySelector('.pet');
                const buttons = document.querySelector('.bottomBar');
                let currentState = document.querySelector('#young');
                let information = document.querySelector('.info');
                let story = document.querySelector('.story');
                let boredNum = document.querySelector('#info4');
                let hungerNum = document.querySelector('#info2');
                let sleepyNum = document.querySelector('#info3');
                
                if(!speed){
                    time += 2;
                }else{
                    time += 4;
                }
                
                if(time % 10 === 0){
                    let ageNum = document.querySelector('#info1');
                    ageNum.innerText = `Power: ${p.age++}`;

                    if(p.age === 6){
                        audio(staticSound, true, "./audio/static.wav");
                        currentState = document.querySelector('#young');
                        currentState.setAttribute('id', 'older');
                        addButton('Burn Effigy', buttons, doubleSpeed);
                        story.innerText = 'Missing persons posters are increasing and people are starting to organize. A special task force has been created to investigate the disappearances';
                    }
                    if(p.age === 11){
                        audio(symbolSound, true, "./audio/symbol.wav");
                        currentState = document.querySelector('#older');
                        currentState.setAttribute('id', 'old');
                        addButton('Burn Effigy', buttons, doubleSpeed);
                        story.innerText = 'Rumors are spreading of hooded figures traveling by the dark of night. One of your fellow disiples was killed this morning after a brief but violent struggle with authorities. They will be honored at tonights ceremony.';
                    }
                    if(p.age === 16){
                        audio(squidSound, true,"./audio/squid.wav");
                        currentState = document.querySelector('#old');
                        currentState.setAttribute('id', 'ancient');
                        addButton('Burn Effigy', buttons, doubleSpeed);
                        story.innerText = 'Power outages and climate fluctuations have been reported across the nation. Scientists from around the world say these phenomena defy all logical explination.';
                    }
                    if(p.age === 21){
                        audio(demonSound, true, "./audio/baby.wav");
                        currentState = document.querySelector('#ancient');
                        currentState.setAttribute('id', 'elder');
                        addButton('Burn Effigy', buttons, doubleSpeed);
                        story.innerText = 'The world as we know it has vanished. Blood red skys and boiling oceans are all that remain. Large metropolitan areas contain the last remnants of humanity, many of whom have been made to be believers.';
                    }
                    if (p.age === 25){
                        
                        currentState = document.querySelector('#elder');
                        currentState.setAttribute('id', 'asended');
    
                        dead = true;
                        time = 0;
    
                        petLife.removeChild(information);
                        petLife.removeChild(buttons);

                        story.innerText = `You have unleashed Ctul Riel's conduit ${p.name}!`;
                        addButton('Shift Time Lines', petLife, reLoad);
                    }
                }
                if(time % 6 === 0){
                    
                    sleepyNum.innerText = `Belief: ${p.sleepiness--}`;
                }
                if(time % 4 === 0){
                    
                    hungerNum.innerText = `Hunger: ${p.hunger++}`;
                }
                if(time % 2 === 0){
                    
                    boredNum.innerText = `Wrath: ${p.boredom++}`;
                }

                if (p.hunger > 10 || p.sleepiness < 0 || p.boredom > 10){
                    
                    for (let i = 0; i < allSound.length; i++) {
                        allSound[i].src = '';
                    }
                    petLife.childNodes[1].setAttribute('id', 'dead');

                    dead = true;
                    time = 0;

                    petLife.removeChild(information);
                    petLife.removeChild(buttons);

                    story.innerText = `${p.name} has died. The Disiples of Black have failed.`;
                    addButton('Rebirth', petLife, reLoad);
                }
            }
        }, 1000);
    }
}

const reLoad = () => {
    location.reload();
}

const addText = (content, location) => {
    const message = document.createElement('h2');
    message.setAttribute('class', 'story')
    message.innerText = content;
    location.appendChild(message);
}

const addButton = (content, location, fun) => {
    const newButton = document.createElement('button');
    newButton.setAttribute('class', 'newButton');
    newButton.innerText = content;
    newButton.addEventListener('click', fun);
    location.appendChild(newButton);
}

const feedPet = () => {
    audio(feedSound, false, "./audio/Eat.wav");
    p.hunger = '0';
    let hungerNum = document.querySelector('#info2');
    hungerNum.innerText = `Hunger: ${p.hunger}`;
}

const playPet = () => {
    audio(offerSound, false, "./audio/Offer.wav");
    p.boredom = '0';
    let boredNum = document.querySelector('#info4');
    boredNum.innerText = `Wrath: ${p.boredom}`;
}

const sleepPet = () => {
    audio(worshipSound, false, "./audio/Pray.wav");
    p.sleepiness = '10';
    let sleepyNum = document.querySelector('#info3');
    sleepyNum.innerText = `Belief: ${p.sleepiness}`;
}

const doubleSpeed = () => {
    
    speed = true;
    const button = document.querySelector('.newButton');
    const buttons = document.querySelector('.bottomBar');
    console.log(button);
    console.log(buttons);
    buttons.removeChild(button);

    setTimeout(
        function() {
          speed = false;
        }, 5000);
}

$('.start').on('click', makePet);
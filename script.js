 
const cardArray = [
        {
            name: 'clip1',
            img: 'clip1.png'
        },
        {
            name: 'clip2',
            img: 'clip2.png'
        },
        {
           name: 'clip3',
           img: 'clip3.png'
        },
        {
            name: 'clip4',
            img: 'clip4.png'
        },
        { 
            name: 'clip5',
            img: 'clip5.png'
        },
        {
            name: 'clip6',
            img: 'clip6.png'
        },
         {
           name: 'clip1',
           img: 'clip1.png'
        },
        {
            name: 'clip2',
            img: 'clip2.png'
        },
        {
           name: 'clip3',
           img: 'clip3.png'
        },
        {
            name: 'clip4',
            img: 'clip4.png'
        },
        { 
            name: 'clip5',
            img: 'clip5.png'
        },
        {
            name: 'clip6',
            img: 'clip6.png'
        }
    ];
    cardArray.sort(() => 0.5 - Math.random());

    const board = document.querySelector('.board')
    const result = document.querySelector('#score')
    const placeholder = 'thinking.png';
    const blank = 'happy-clip.png';

    let cardsChosen = [];
    let cardsChosenId = [];
    let cardsMatched = [];

    function createBoard () {
    for (let i = 0; i <cardArray.length; i++) {
        var card = document.createElement('img');
        card.setAttribute('src', placeholder);
        card.setAttribute('data-id', i);
        card.addEventListener('click', flipCard);
        board.appendChild(card);
    }
}

function flipCard() {
    var cardId= this.getAttribute('data-id');
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute('src', cardArray[cardId].img);
    if (cardsChosen.length === 2) {
        setTimeout(checkForMatch, 500);
    }
}

function checkForMatch() {
    const cards = document.querySelectorAll('img');
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];

    if (cardsChosen[0] === cardsChosen[1]) {
        cards[optionOneId].setAttribute('src', blank);
        cards[optionTwoId].setAttribute('src', blank);
        cardsMatched.push(cardsChosen);
        cards[optionOneId].removeEventListener('click', flipCard);
        cards[optionTwoId].removeEventListener('click', flipCard);
        const audio = document.getElementById('right-sound');
        audio.playbackRate = 1.7; 
        audio.volume = 1;
        audio.play();
    } else {
            cards[optionOneId].setAttribute('src',placeholder);
            cards[optionTwoId].setAttribute('src', placeholder);
            const audio = document.getElementById('mistake-sound');
            audio.playbackRate = 1.7;
            audio.volume = 1;
            audio.play();
        }
        cardsChosen = [];
        cardsChosenId = [];
        result.textContent = cardsMatched.length
        if (cardsMatched.length === cardArray.length/2) {
            result.textContent = 'congratulations!, you did it';
        }
}

createBoard();

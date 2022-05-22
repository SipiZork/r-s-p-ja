const rock = document.querySelector('.rock');
const scissors = document.querySelector('.scissors');
const paper = document.querySelector('.paper');
const aiScoresDiv = document.querySelector('.ai-scores');
const playerScoresDiv = document.querySelector('.player-scores');

const allIcons = document.querySelectorAll('.icon');
const chooseWisely = document.querySelector('.choose-wisely');
const aiChose = document.querySelector('.ai-chose');
const hideInteractions = document.querySelector('.hide-interactions');

let aiScores = 0;
let playerScores = 0;
let playerWin = false;
let tie = false;

const iconSet = [
  {
    icon: './assets/images/rock.png',
    alt: 'rock'
  },
  {
    icon: './assets/images/scissors.png',
    alt: 'scissors'
  },
  {
    icon: './assets/images/paper.png',
    alt: 'paper'
  }
]

const iconRock = './assets/images/rock.png';
const iconScissors = './assets/images/scissors.png';
const iconPaper = './assets/images/paper.png';


let chosenIcon;
let chosenStrength;
let aiStrength;

allIcons.forEach(icon => {
  icon.addEventListener('click', () => {
    selectIcon(icon);
    selectAiIcon();
  });
});


const selectIcon = (icon) => {
  chosenIcon = icon;
  chosenStrength = parseInt(icon.dataset.strength);
  chooseWisely.classList.add('chose');
  hideInteractions.classList.remove('hide');
  console.log(icon.dataset);
  allIcons.forEach(icon => {
    if (icon !== chosenIcon) {
      icon.classList.add('hide');
    }
  });
  setTimeout(() => {
    setInit();
  }, 2000)
};

const randomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
}

const selectAiIcon = () => {
  aiStrength = randomNumber(1, 4);
  const aiIcon = iconSet[aiStrength - 1];
  console.log(aiIcon);
  aiChose.innerHTML = `<img src="${aiIcon.icon}" alt="${aiIcon.alt}" />`;
  refreshScores();
};

const setInit = () => {
  allIcons.forEach(icon => {
    icon.classList.remove('hide');
  });
  hideInteractions.classList.add('hide');
  chooseWisely.classList.remove('chose');
};

const refreshScores = () => {
  playerWin = false;
  tie = false;

  if (chosenStrength === aiStrength) {
    tie = true;
  }
  if (aiStrength > chosenStrength || (aiStrength === 1 && chosenStrength === 3)) {
    playerWin = true;
  } 
  if (aiStrength === 3 && chosenStrength === 1) {
    playerWin = false;
  }

  if (!tie) {
    if (playerWin) {
      playerScores += 1;
    }
    if (!playerWin) {
      aiScores += 1;
    } 
  }
  
  aiScoresDiv.innerHTML = aiScores.toString();
  playerScoresDiv.innerHTML = playerScores.toString();

}
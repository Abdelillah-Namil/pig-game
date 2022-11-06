'use strict';
let player0 = document.querySelector('.player--0');
let player1 = document.querySelector('.player--1');
let scoreplayer1 = document.querySelector('#score--0');
let scoreplayer2 = document.getElementById('score--1');
let current0 = document.getElementById('current--0');
let current1 = document.getElementById('current--1');
let diceel = document.querySelector('.dice');
/// btn hold
let btnhold = document.querySelector('.btn--hold');
let btnroll = document.querySelector('.btn--roll');
let btnreaset = document.querySelector('.btn--new');

let score, currentscore, activePlayer, player;
const reast = function () {
  score = [0, 0];
  currentscore = 0;
  activePlayer = 0; //1
  player = true;
  scoreplayer1.textContent = 0;
  scoreplayer2.textContent = 0;
  current0.textContent = 0;
  current1.textContent = 0;
  diceel.classList.add('hidden');
  player0.classList.remove('player--winner');
  player1.classList.remove('player--winner');
  player0.classList.add('player--active');
  player1.classList.remove('player--active');
};
reast();
const switcheplayers = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentscore = 0;
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
};

diceel.classList.add('hidden');
btnroll.addEventListener('click', () => {
  if (player) {
    const randomdice = Math.trunc(Math.random() * 6) + 1;

    diceel.classList.remove('hidden');
    diceel.src = `dice-${randomdice}.png`;
    if (randomdice !== 1) {
      currentscore += randomdice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentscore;
    } else {
      switcheplayers();
    }
  }
});

btnhold.addEventListener('click', function () {
  if (player) {
    score[activePlayer] += currentscore;
    document.getElementById(`score--${activePlayer}`).textContent =
      score[activePlayer];

    if (score[activePlayer] >= 20) {
      player = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--acitive');
      diceel.classList.add('hidden');
    } else {
      switcheplayers();
    }
  }
});
btnreaset.addEventListener('click', reast);

// document.querySelector('.current-score').textContent = randomnumber;
// let dice1 = document.querySelector('.dice-1');
// let dice2 = document.querySelector('.dice-2');
// let dice3 = document.querySelector('.dice-3');
// let dice4 = document.querySelector('.dice-4');
// let dice5 = document.querySelector('.dice-5');
// let dice6 = document.querySelector('.dice-6');
// if (randomnumber === 1) {
//   dice1.classList.remove('hidden');
//   dice2.classList.add('hidden');
//   dice3.classList.add('hidden');
//   dice4.classList.add('hidden');
//   dice5.classList.add('hidden');
//   dice6.classList.add('hidden');
// } else if (randomnumber === 2) {
//   dice2.classList.remove('hidden');
//   dice1.classList.add('hidden');
//   dice3.classList.add('hidden');
//   dice4.classList.add('hidden');
//   dice5.classList.add('hidden');
//   dice6.classList.add('hidden');
// } else if (randomnumber === 3) {
//   dice3.classList.remove('hidden');
//   dice1.classList.add('hidden');
//   dice2.classList.add('hidden');
//   dice4.classList.add('hidden');
//   dice5.classList.add('hidden');
//   dice6.classList.add('hidden');
// } else if (randomnumber === 4) {
//   dice4.classList.remove('hidden');
//   dice1.classList.add('hidden');
//   dice3.classList.add('hidden');
//   dice2.classList.add('hidden');
//   dice5.classList.add('hidden');
//   dice6.classList.add('hidden');
// } else if (randomnumber === 5) {
//   dice5.classList.remove('hidden');
//   dice1.classList.add('hidden');
//   dice3.classList.add('hidden');
//   dice4.classList.add('hidden');
//   dice2.classList.add('hidden');
//   dice6.classList.add('hidden');
// } else if (randomnumber === 6) {
//   dice6.classList.remove('hidden');
//   dice1.classList.add('hidden');
//   dice3.classList.add('hidden');
//   dice4.classList.add('hidden');
//   dice5.classList.add('hidden');
//   dice2.classList.add('hidden');
//   // dice1.classList.add('hidden');
// }

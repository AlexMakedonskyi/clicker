
const usersInfo = [];

const levelsSettings = [
	{
		level: 1,
		clicksUntilNext: 5,
		enemy: "/maket/1stEnemy.png",
		location: "url('/maket/1stLocation.png')"
	},
	{
		level: 2,
		clicksUntilNext: 10,
		enemy: "/maket/2ndEnemy.png",
		location: "url('/maket/2ndLocation.png')"
	},
	{
		level: 3,
		clicksUntilNext: 20,
		enemy: "/maket/3rdEnemy.png",
		location:"url('/maket/3rdLocation.png')"
	},
];

let backGround = document.body.style.backgroundImage;

let score = document.querySelector('.scoreCounter');

let enemyBtn = document.querySelector('.clickerImg');

let resultCard = document.querySelector('.ResultCard');

let resultCardScore = document.querySelector('#score');

let submitBtn = document.querySelector('#button1');

let RegCard = document.querySelector('.RegistrationCard');

let toNumber = score.textContent;

let locationNumber = 0;

let scoreNumber = 0;

submitBtn.addEventListener('click', function(event){
	event.preventDefault();
	enemyBtn.classList.toggle('deactive');
	RegCard.classList.toggle('deactive')
})

function lvlChange(){
	scoreNumber += 1;
	score.textContent = scoreNumber.toString();
	if(scoreNumber === 20) {
		enemyBtn.removeEventListener('click', lvlChange);
		enemyBtn.classList.toggle('deactive');
		resultCard.classList.toggle('deactive');
		resultCardScore.textContent = score.textContent;
	} else if(scoreNumber === levelsSettings[locationNumber].clicksUntilNext) {
		locationNumber += 1
		document.body.style.backgroundImage = levelsSettings[locationNumber].location;
		enemyBtn.src = levelsSettings[locationNumber].enemy;
	} else if(scoreNumber === levelsSettings[locationNumber].clicksUntilNext) {
		locationNumber += 1
		document.body.style.backgroundImage = levelsSettings[locationNumber].location;
		enemyBtn.src = levelsSettings[locationNumber].enemy;
	};
};

enemyBtn.addEventListener('click', lvlChange);






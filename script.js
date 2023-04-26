let mainCardContainer, eventApp;
let first,second,third
let gone, coming;
let eventName, eventVenue, eventTime;
let firstPlate, secondPlate, animatePlates,footer;
let homeScreen, navContainer, navContent;
let eventDetails;
let leftSideMenu,CreateEventScreen;
let eventText;
let descriptionContainer;

const getVariable = () =>{
	eventName = document.getElementById('event-name');
	eventVenue = document.getElementById('venue-container');
	eventTime = document.getElementById('time-container');

	navContent = document.getElementById('navContent');

	mainCardContainer = document.getElementById('main-card-container');

	leftSideMenu = document.getElementById('left-side-menu');
	CreateEventScreen = document.getElementById('createMenuScreen');
	eventText = document.getElementById('event-text');
	descriptionContainer = document.getElementById('description-container');

	first = document.querySelector('.first');
	second = document.querySelector('.second');
	third = document.querySelector('.third');
	gone = document.getElementsByClassName('gone');
	coming = document.getElementsByClassName('coming');

	let touchStartX = 0 , touchEndX = 0;

}

const cardDetails = [
	{
		title: 'Cricket match',
		venue: 'Delhi, India',
		date: 'Jul 20th, 2020',
		image: 'images/cricket.jpg'
	},
	{
		title: 'Corona Meeting',
		venue: 'Gujarat, India',
		date: 'Apr 1th, 2020',
		image: 'images/corona.jpg'
	},
	{
		title: 'Fashion Show',
		venue: 'Maharashtra, India',
		date: 'Dec 2th, 2020',
		image: 'images/FashionShow.jpeg'
	},
	{
		title: 'Light Show',
		venue: 'Kerela, India',
		date: 'Aug 30th, 2020',
		image: 'images/LightShow.jpg'
	},
	{
		title: 'Party Night',
		venue: 'Assam, India',
		date: 'May 23th, 2020',
		image: 'images/PartyNight.jpg'
	},
];

let cardnumber = 0;

const changeCard = () =>{
	
	getVariable();


	if(Math.round(touchStartX) < Math.round(touchEndX)){

		if(gone.length != 0){


			if(first != null){

				first.classList.add('second');
				first.classList.remove('first');
				cardnumber--;
				// console.log("right swiped" + cardnumber);
			}
			if(second != null){

				second.classList.add('third');
				second.classList.remove('second');
			}
			if(third != null){

				third.classList.add('coming');
				third.classList.remove('third');
			}

			gone[gone.length - 1].classList.add('first');
			gone[gone.length - 1].classList.remove('gone');
		}
	}
	else if(Math.round(touchStartX) === Math.round(touchEndX)) {
		// console.log("equal");
		//Does nothing really, lol
	} 
	else {

		//again, check for null
		if (second != null) {
			// console.log("changing");

			if (first != null) {

				//first card moved to gone
				first.classList.add('gone');
				first.classList.remove('first');
				cardnumber++;
				// console.log(cardnumber);

			}

			if (second != null) {

				//second becomes first
				second.classList.add('first');
				second.classList.remove('second');

			}

			if (third != null) {

				//third becomes second
				third.classList.add('second');
				third.classList.remove('third');

			}

			if (coming.length !== 0) {
			
				//first card from coming array becomes third
				coming[0].classList.add('third');
				coming[0].classList.remove('coming');

			}
		}
	}


	changeCardDetail(cardDetails[cardnumber]);
}

const changeCardDetail = (data) => {
	eventName.innerText = data.title;
	eventVenue.innerText = data.venue;
	eventTime.innerText = data.date;
}

const openNav = () => {
	// alert("click");
	navContent.style.zIndex = "2";
	navContent.style.height = "20%";
	navContainer.style.zIndex = "2";
	firstPlate.classList.add("first-plate-after");
	firstPlate.classList.remove("first-plate-before");
	secondPlate.classList.add("second-plate-after");
	secondPlate.classList.remove("second-plate-before");
}

const openDetailsPage = (data) => {
	eventDetails.style.left = "0%";
	const eventHeading = document.querySelector('.event-heading-and-button span');
	eventHeading.innerText = data.title;
	const eventLocation = document.querySelector('.location span');
	eventLocation.innerText = data.venue;
	const eventDate = document.querySelector('.date span');
	eventDate.innerText = data.date;
	const bannerContainer = document.querySelector('.event-banner-container');
	bannerContainer.style.backgroundImage = `linear-gradient(rgba(100,100,100,0.4), rgba(100,100,100,0.4)), url(${data.image})`;
}

eventDetails = document.getElementById('event-details-container');

const backBtn = () => {
	eventDetails.style.left = "100%";
}

const openDesc = () => {
	descriptionContainer.style.left = "0%";
}

const closeDesc = () => {
	descriptionContainer.style.left = "100%";
}

var isSetMenu = false;

const openStripedMenu = () => {
	if(!isSetMenu){
		leftSideMenu.style.left = "0%";
	}
	else{
		leftSideMenu.style.left = "-70%";
	}
	isSetMenu = !isSetMenu;
}

var isSetEvent = false;

const createMenu = () => {
	
	getVariable();

	if(!isSetEvent){
		eventText.innerText = "close";
		CreateEventScreen.style.top = "10%";
	}
	else{
		eventText.innerText = "Create event";
		CreateEventScreen.style.top = "100%";
	}
	isSetEvent = !isSetEvent;

}

const openHomeScreen = () => {
	navContent.style.zIndex = "-1";
	navContent.style.height = "0%";
	navContainer.style.zIndex = "-1";
	firstPlate.classList.add("first-plate-before")
	firstPlate.classList.remove("first-plate-after");
	secondPlate.classList.add("second-plate-before");
	secondPlate.classList.remove("second-plate-after");
}

window.onload = () =>{
	getVariable();

	homeScreen = document.getElementById('homeScreen');
	navContainer = document.getElementById('navContainer');
	footer = document.getElementById('footer');
	animatePlates = document.getElementById('animate-plates');
	firstPlate = document.getElementById('first-plate');
	secondPlate = document.getElementById('second-plate');
	
	cardContainer = document.getElementById('main-card-container');

	cardContainer.addEventListener('mousedown', (e) => {
		// console.log(e.clientX);
		touchStartX = e.clientX;
	});
	
	cardContainer.addEventListener('mouseup', (e) => {
		// console.log(e.clientX);
		touchEndX = e.clientX;
		changeCard();
	});

	cardContainer.addEventListener('touchstart', (e) => {
		// console.log(e.clientX);
		// alert("started");
		touchStartX = e.touches[0].clientX;
	});
	
	cardContainer.addEventListener('touchend', (e) => {
		// console.log(e.clientX);
		// alert("ended");
		touchEndX = e.changedTouches[0].clientX;
		changeCard();
	});

	cardDetails.forEach((data, index) => {
		let classes = "card ";
		switch(index) {
			case 0:
				classes += "first";
				changeCardDetail(data);
				break;
			case 1:
				classes += "second";
				break;
			case 2:
				classes += "third";
				break;
			default:
				classes += "coming";
				break;
		}
		const cardDiv = document.createElement("div");
		cardDiv.classList = classes;
		// console.log(cardDiv);
		cardDiv.style.backgroundImage = `url(${data.image})`;
		cardDiv.addEventListener("click", () => openDetailsPage(data));
		mainCardContainer.appendChild(cardDiv);

	});

}
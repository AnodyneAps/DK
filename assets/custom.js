(function(a){
	$('.youtube-cover-image, .youtube-button').on('click', function (e) {
		$('.youtube-cover-image , .youtube-button').hide();
	});
	// scroll smothing for readmore button
	$('.btn-readmore').on('click', function () {
		$('html, body').animate({ scrollTop: $(this.hash).offset().top - 80 }, 1000);
		return false;
	});

})(jQuery);


// variables
var accordionBtn = document.querySelectorAll('.accordion__title');
var allTexts = document.querySelectorAll('.accordion__flex');
var accIcon = document.querySelectorAll('.accIcon');

// event listener
accordionBtn.forEach(function (el) {
	el.addEventListener('click', toggleAccordion)
});

// function
function toggleAccordion(el) {
	var targetText = el.currentTarget.nextElementSibling.classList;
	var targetAccIcon = el.currentTarget.children[0];
	var target = el.currentTarget;

	if (targetText.contains('accordion-show')) {
		targetText.remove('accordion-show');
		targetAccIcon.classList.remove('anime');
		target.classList.remove('accordionTitleActive');
	}
	else {
		accordionBtn.forEach(function (el) {
			el.classList.remove('accordionTitleActive');

			allTexts.forEach(function (el) {
				el.classList.remove('accordion-show');
			})

			accIcon.forEach(function (el) {
				el.classList.remove('anime');
			})

		})

		targetText.add('accordion-show');
		target.classList.add('accordionTitleActive');
		targetAccIcon.classList.add('anime');
	}
}

//tabs section
const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.content-body');
function selectItem(e) {
  removeBorder();
  removeShow();
  this.classList.add('tab-active');
  const tabContentItem = document.querySelector(`#${this.id}-content`);
  tabContentItem.classList.add('show-active');
}

function removeBorder() {
  tabItems.forEach(item => {
    item.classList.remove('tab-active');
  });
}
// Remove show class from all content items
function removeShow() {
  tabContentItems.forEach(item => {
    item.classList.remove('show-active');
  });
}
// Listen for tab item click
tabItems.forEach(item => {
  item.addEventListener('click', selectItem);
});

// relief tabs
const homeTabBtns = document.querySelectorAll('.home-tabs__wrapper-btns-btn');
const homeTabItems = document.querySelectorAll('.home-tabs__wrapper-content-img');

function selectHomeTabContents(e) {
  removeActiveHomeTabClass();
  removeActiveHomeTabItemClass();
  this.classList.add('active');
  const homeTabContentItems = document.querySelector(`#${this.id}-content`);
  homeTabContentItems.classList.add('active');
}

homeTabBtns.forEach(tabbtn => tabbtn.addEventListener('click', selectHomeTabContents));

const removeActiveHomeTabClass = () => {
  homeTabBtns.forEach(tabbtn => {
    tabbtn.classList.remove('active')
  })
}
const removeActiveHomeTabItemClass = () => {
  homeTabItems.forEach(homeTabItem => {
    homeTabItem.classList.remove('active')
  })
}
//topbar counter
// let announcementCounterEndText = document.querySelector('.announcement-end-text');
// let announcementEndTextBack = document.querySelector('.announcement-message');
// const announcementDateId = document.getElementById('announcement_counter');
// let announcementEventDate = announcementDateId.getAttribute('[data-announcement-date]');
// function TopBarUpdateTimer(at, someId ) {
// future = Date.parse(at);
// now = new Date();
// diff = future - now;

// if(diff >= 0){
// days = Math.floor(diff / (1000 * 60 * 60 * 24));
// hours = Math.floor(diff / (1000 * 60 * 60));
// mins = Math.floor(diff / (1000 * 60));
// secs = Math.floor(diff / 1000);
// 	//add zeros
// 	function addZero(num) {
// 		return ("0" + parseInt(num)).substr(-2);
// 	}
// d = addZero(days);
// h = addZero(hours - days * 24);
// m = addZero(mins - hours * 60);
// s = addZero(secs - mins * 60);
  
//   		if(d<1){
//           someId.innerHTML = `
//           <div class="announcement_number"><span class="digit">${h}</span><span class="announcement_text">T<span class="hide-small">imer</span></span></div>
//           <div class="announcement_number"><span class="digit">${m}</span><span class="announcement_text">M<span class="hide-small">inutter</span></span></div>
//           <div class="announcement_number"><span class="digit">${s}</span><span class="announcement_text">S<span class="hide-small">ekunder</span></span></div>
//           `
  
//   		}else{
    
//           someId.innerHTML = `
//           <div class="announcement_number"><span class="digit">${d}</span><span class="announcement_text">D<span class="hide-small">age</span></span></div>
//           <div class="announcement_number"><span class="digit">${h}</span><span class="announcement_text">T<span class="hide-small">imer</span></span></div>
//           <div class="announcement_number"><span class="digit">${m}</span><span class="announcement_text">M<span class="hide-small">inutter</span></span></div>
//           <div class="announcement_number"><span class="digit">${s}</span><span class="announcement_text">S<span class="hide-small">ekunder</span></span></div>
//           `
//  		 }
//     }else {
//         announcementEndTextBack.innerHTML = `${announcementCounterEndText.innerHTML}`;
//         someId.innerHTML ='';
//     }
// }
// setInterval('TopBarUpdateTimer(announcementEventDate, announcementDateId  )', 1000);

// flip clock 

const datesObject = [
	{
		"morning":   new Date().setHours(08,59,59) 
	},
	{
		"befornoon":   new Date().setHours(14,59,59) 
	},
	{
		"afternoon":   new Date().setHours(32,59,59) 
	}

]


const setTimeOfDay = new Date().getHours();
let morning = datesObject[0].morning;
let befornoon = datesObject[1].befornoon;
let afternoon = datesObject[2].afternoon;

let date1, date2, date3;
if(setTimeOfDay >= 0 && setTimeOfDay < 9){
date1 = morning;
} else if(setTimeOfDay >= 9 && setTimeOfDay < 15){
date2 = befornoon;
} else{
date3 = afternoon;
}

dateCount(date1, date2, date3);

function dateCount(date1,date2, date3){
setInterval(() => {
const currentDate = new Date()
const timeBetweenDates1 = Math.ceil(( date1 - currentDate ) / 1000)
	if(timeBetweenDates1 > 0){
		flipAllCards(timeBetweenDates1)
	}
	const timeBetweenDates2 = Math.ceil(( date2 - currentDate ) / 1000)
	if(timeBetweenDates2 > 0){
		flipAllCards(timeBetweenDates2)
	}
	const timeBetweenDates3 = Math.ceil(( date3 - currentDate ) / 1000)
	if(timeBetweenDates3 > 0){
		flipAllCards(timeBetweenDates3)
	}
}, 1000)
}

function flipAllCards(time) {
const seconds = time % 60
const minutes = Math.floor(time / 60) % 60
const hours = Math.floor(time / 3600)

flip(document.querySelector("[data-hour-tens]"), Math.floor(hours / 10))
flip(document.querySelector("[data-hour-ones]"), hours % 10)
flip(document.querySelector("[data-minute-tens]"), Math.floor(minutes / 10))
flip(document.querySelector("[data-minute-ones]"), minutes % 10)
flip(document.querySelector("[data-second-tens]"), Math.floor(seconds / 10))
flip(document.querySelector("[data-second-ones]"), seconds % 10)
}

function flip(flipCard, newNumber){

const topHalf = flipCard.querySelector(".top");
const startNumber = parseInt(topHalf.textContent);
if(newNumber === startNumber) return 

const bottomHalf = flipCard.querySelector(".bottom");
const topFlip = document.createElement("div");
topFlip.classList.add("top-flip");
const bottomFlip = document.createElement("div");
bottomFlip.classList.add("bottom-flip");



bottomHalf.textContent = startNumber;
topFlip.textContent = startNumber;
bottomFlip.textContent = newNumber;



topFlip.addEventListener("animationstart", e =>{
topHalf.textContent = newNumber;
})
topFlip.addEventListener("animationend", e =>{
topFlip.remove();
})

bottomFlip.addEventListener("animationend", e =>{
bottomHalf.textContent = newNumber;
bottomFlip.remove();
})

flipCard.append(topFlip, bottomFlip);
}
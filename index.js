let home= 0
let guest= 0

let homeOnePt = document.getElementById('add-one-home')
let homeTwoPt = document.getElementById('add-two-home')
let homeThreePt = document.getElementById('add-three-home') 
let guestOnePt= document.getElementById('add-one-guest')
let guestTwoPt= document.getElementById('add-two-guest')
let guestThreePt= document.getElementById('add-three-guest')
let guestScore = document.getElementById('guest-score')
let homeScore = document.getElementById('home-score')

function addOneH() {
	home += 1
	console.log(home)
	homeScore.textContent = home
}

function addTwoH() {
	home += 2
	homeScore.textContent = home
}

function addThreeH() {
	home += 3	
	homeScore.textContent = home
}

function addOneG() {
	guest += 1
	console.log(home)
	guestScore.textContent = guest
}

function addTwoG() {
	guest += 2
	guestScore.textContent = guest
}

function addThreeG() {
	guest += 3	
	guestScore.textContent = guest
}

function reset() {
	home = 0
	guest = 0
	homeScore.textContent = 0
	guestScore.textContent = 0
}



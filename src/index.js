const words = 'Hello World'

const month = new Date().getMonth()

function typeHelloWorld(e, w) {
	const wordArray = [...w]
	document.getElementById(e.target.dataset.id).innerText = wordArray
		.slice(0, e.target.value)
		.join('')
	e.target.value == w.length && e.target.setAttribute('disabled', '')
}

function disableMe(e) {
	e.target.setAttribute('disabled', '')
}

// Primeiro
document.getElementById('wordPrinting01').innerText = words

// Segundo
const checkElement = document.getElementById('wordPrinting02-trigger')
checkElement.addEventListener('click', (event) => {
	document.getElementById('wordPrinting02').innerText = words
	disableMe(event)
})

// Terceiro
const element03 = document.getElementById('wordPrinting03-trigger')
element03.addEventListener('change', (event) => {
	let result = ''
	if (event.target.value === words) {
		result = '&#10004;'
		disableMe(event)
	} else {
		result = '&#x274c;'
	}
	document.getElementById('result03').innerHTML = result
})
//Quarto
const element04 = document.getElementById('wordPrinting04-trigger')
element04.addEventListener('input', (event) => typeHelloWorld(event, words))

//Quinto
document
	.getElementById('wordPrinting05-trigger')
	.addEventListener('click', (event) => {
		alert(words)
		disableMe(event)
	})

// Sexto
const element06 = document.getElementById('wordPrinting06-trigger')
element06.addEventListener('input', (event) => typeHelloWorld(event, words))

// Sétimo
const element07 = document.getElementById('wordPrinting07-trigger')
element07.addEventListener('input', (event) => {
	document.getElementById('wordPrinting07').style.color = event.target.value
	disableMe(event)
})

// Oitavo
const element08 = document.getElementById('wordPrinting08-trigger')
element08.addEventListener('keyup', (event) => {
	document.getElementById('wordPrinting08-verse').innerText = event.target.value
	document.getElementById('wordPrinting08-reverse').innerText =
		event.target.value.split('').reverse().join('')
	event.target.value === words && disableMe(event)
})

// Nono
const element09 = document.getElementById('wordPrinting09-trigger')
element09.addEventListener('change', (event) => {
	if (event.target.value.split('-')[1] == month + 1) {
		document.getElementById('wordPrinting09').innerText = words
		disableMe(event)
	}
})

// Décimo
const element10 = document.getElementsByClassName('wordPrinting10-trigger')

for (const el of element10) {
	el.addEventListener('click', (event) => {
		document.getElementById('wordPrinting10').style.fontFamily =
			event.target.dataset.style
	})
}

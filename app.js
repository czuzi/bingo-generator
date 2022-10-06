var pool = document.getElementById(pool)
var width = document.getElementById(width)
var height = document.getElementById(height)
var amount = document.getElementById(amount)

const layout = document.createDocumentFragment()

const parent = document.createElement("div")
parent.className = "parent"

const ticketDiv = document.createElement("div")
ticketDiv.className = "ticket"

layout.appendChild(parent).appendChild(ticketDiv)

function ticketGenerator(pool, width, height) {
	const ticket = []
	const drawn = []
	let count = 0
	while (count < width * height) {
		const random = Math.floor(Math.random() * pool) + 1
		if (!drawn.includes(random)) {
			ticket.push(random)
			const actualElement = document.createElement("span")
			actualElement.className = "span"
			actualElement.textContent = random
			ticketDiv.appendChild(actualElement)
			count++
		}
		if (count % width === 0) {
			const br = document.createElement("br")
			ticketDiv.appendChild(br)
		}
	}
	document.body.appendChild(ticketDiv)
}
console.log(layout)
ticketGenerator(90, 5, 5)
ticketGenerator(90, 5, 5)

const parent = document.createElement("div")
parent.className = "parent"

function ticketGenerator(pool, width, height) {
	const ticketDiv = document.createElement("div")
	ticketDiv.className = "ticket col"
	const ticket = []
	let count = 0
	while (count < width * height) {
		const random = Math.floor(Math.random() * pool) + 1
		if (!ticket.includes(random)) {
			ticket.push(random)
			const actualElement = document.createElement("span")
			actualElement.className = "span"
			actualElement.textContent = random
			ticketDiv.appendChild(actualElement)
			count++
		}
		if (count % width === 0 && ticketDiv.lastChild.innerHTML !== "") {
			const br = document.createElement("br")
			ticketDiv.appendChild(br)
		}
	}
	return ticketDiv
}

const button = document.querySelector("button")
button.addEventListener("click", (event) => {
	clickInit()

	const pool = document.querySelector("#pool").value
	const width = document.querySelector("#width").value
	const height = document.querySelector("#height").value
	const amount = document.querySelector("#amount").value
	event.preventDefault()

	validateInput(pool, width, height)

	for (let i = 0; i < amount; i++) {
		if (i === 0 || i % 2 === 0) {
			const row = document.createElement("div")
			row.className = "row"
			parent.appendChild(row)
		}
		parent.lastChild.appendChild(ticketGenerator(pool, width, height))
	}

	document.body.appendChild(parent)
	const rows = document.querySelectorAll(".row")
	for (let i = 0; i < rows.length; i++) {
		if ((i + 1) % 3 === 0) {
			rows[i].classList.add("zero-margin")
		}
	}
})

function clickInit() {
	parent.innerHTML = ""
	message.textContent = ""
}

function validateInput(pool, width, height) {
	if (width * height > pool) {
		const message = document.querySelector("#message")
		message.textContent +=
			"Az oszlopok és a sorok szorzatának összege nem lehet kisebb mint a számok halmaza"
		throw "invalid input"
	}
}

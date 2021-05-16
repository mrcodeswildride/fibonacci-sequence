let number = document.getElementById(`number`)
let fibButton = document.getElementById(`fibButton`)
let table = document.getElementById(`table`)

fibButton.addEventListener(`click`, calculateSequence)

number.addEventListener(`keydown`, keyPressed)
number.focus()

function calculateSequence() {
  let numberValue = number.value.trim()

  if (numberValue < 0 || numberValue > 100) {
    table.innerHTML = `Nth term must be between 0 and 100.`
  } else {
    let fib = [0, 1]

    for (let i = 2; i <= numberValue; i++) {
      fib[i] = fib[i - 1] + fib[i - 2]
    }

    table.innerHTML = ``
    makeRow(`Nth Term`, `<strong>Fibonacci Number</strong>`)

    for (let i = 0; i <= numberValue; i++) {
      makeRow(i, fib[i])
    }
  }
}

function makeRow(key, value) {
  let row = document.createElement(`div`)
  row.classList.add(`row`)
  table.appendChild(row)

  let keyDiv = document.createElement(`div`)
  keyDiv.classList.add(`key`)
  keyDiv.innerHTML = key
  row.appendChild(keyDiv)

  let valueDiv = document.createElement(`div`)
  valueDiv.classList.add(`value`)
  valueDiv.innerHTML = value
  row.appendChild(valueDiv)
}

function keyPressed(event) {
  if (event.keyCode == 13) {
    calculateSequence()
  }
}

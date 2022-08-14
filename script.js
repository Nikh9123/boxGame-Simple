

let redDiv = document.getElementById("red")
let yellowDiv = document.getElementById("yellow")
let greenDiv = document.getElementById("green")

redDiv.onclick = () =>{
  
 console.log('you choose : rock')
}
yellowDiv.onclick = () =>{ 
  console.log("you choose : paper")
}
greenDiv.onclick = () => {
  console.log("you choose : siezer")
}
const squares = document.querySelectorAll('.colorSquare')
console.log(squares)

// console.log(squares[0].value)
// console.log(squares[1].value)
// console.log(squares[2].value)

const timesClicked =
  {
    'red': 0,
    'yellow': 0,
    'green' : 0
  }
squares.forEach(square => {
  square.onclick = ()  =>{ 
    //console.log(square.value)
   timesClicked[square.value] += 1
  square.innerText = timesClicked[square.value]

  }
}) 

function clearScores() {
  timesClicked.red = 0
  timesClicked.yellow = 0
  timesClicked.green = 0
  squares.forEach(square => {
    square.innerText = ''
  })
}

const clearGameBtn = document.getElementById('clr-btn')
clearGameBtn.onclick = () => clearScores()
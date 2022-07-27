let billInput = document.getElementById('bill-input')
let numberOfPeople = document.getElementById('noOfPeeps')
let custom = document.getElementsByClassName('numbers')
let tipAmountDiv = document.getElementById('tiip')
let totalAmountDiv = document.getElementById('tootal') 

billInput.onkeyup = () => {
  tipAmountDiv.innerText = billInput.value;
  calculateTip()
}

let amountOfTip = 0


const colorChange = () => {
  custom[0].style.backgroundColor = 'red'
}

custom[0].onclick = () => {
  amountOfTip = 5
  setTimeout(colorChange(), 3000)
  console.log(amountOfTip)
}

custom[1].onclick = () => {
  amountOfTip = 10
}
custom[2].onclick = () => {
  amountOfTip = 15
}
custom[3].onclick = () => {
  amountOfTip = 25
}
custom[4].onclick = () => {
  amountOfTip = 50
}


// custom.[].forEach(item => {
//   onclick = () => {
//     amountOfTip = custom[].innerText
//   }
// })

const calculateTip = () => {
  let bill = Number(billInput.value)
  let people = Number(numberOfPeople.value);
  let percentageOfBill = bill * amountOfTip / 100 
  let realTotal = percentageOfBill / people  + bill
  tipAmountDiv.innerText = percentageOfBill
  totalAmountDiv.innerText = realTotal
}






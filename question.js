
// -- Timer code --

let timeleft = 25;
let Timer = setInterval(function(){
  if(timeleft <= 0){
    clearInterval(Timer);
  }
  document.getElementsByClassName('timer')[0].innerHTML =  timeleft;
  timeleft -= 1;
}, 1000);

// function q2display(){
//   document.getElementsById('Q1').style.display = 'none';
//     document.getElementsById('Q2').style.display = 'flex';

// }
// function q3display(){
//   document.getElementsById('Q2').style.display = 'none';
//     document.getElementsById('Q3').style.display = 'flex';

// }
// function q4display(){
//   document.getElementsById('Q3').style.display = 'none';
//     document.getElementsById('Q4').style.display = 'flex';

// }
// function q5display(){
//   document.getElementsById('Q4').style.display = 'none';
//     document.getElementsById('Q5').style.display = 'flex';

// }



function check() {

  let score = 0;
let q1 = document.quiz.q1.value;
let q2 = document.quiz.q2.value;
let q3 = document.quiz.q3.value;
let q4 = document.quiz.q4.value;
let q5 = document.quiz.q5.value;

if (q1 == "forEach") {
  score++;
}
if (q2 == "padding") {
  score++;
}
if (q3 == "p{}") {
  score++;
}
if (q4 == "id") {
  score++;
}
if (q5 == "aside") {
  score++;
}
document.getElementsByClassName('result')[0].style.display = 'flex';
document.getElementsByClassName('box')[0].style.display = 'none';
document.getElementsByClassName('timer')[0].style.display = 'none';

document.getElementById("marks").innerHTML = score;

}
setTimeout(check,27000);
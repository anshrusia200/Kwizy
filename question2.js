let Questions = localStorage.getItem("Questions");
QuestionsObj = JSON.parse(Questions);
let QuestionsForm = document.getElementById("quiz");
let html1 = QuestionsForm.innerHTML
let html2 = "";

QuestionsObj.forEach(function(element, index){
    html2 += `<p id="Q${index+1}">
    <h2>Question ${index+1}</h2>
    <p>${element.question}</p>
    <p><input type="radio" name="q${index+1}" value="${element.opt1}">1. ${element.opt1}</p>
    <p><input type="radio" name="q${index+1}" value="${element.opt2}">2. ${element.opt2}</p>
    <p><input type="radio" name="q${index+1}" value="${element.opt3}">3. ${element.opt3}</p>
    <p><input type="radio" name="q${index+1}" value="${element.opt4}">4. ${element.opt4}</p>
</p>
<br>`
})

html2 += html1


QuestionsForm.innerHTML = html2

function check() {

    let score = 0;
 
let q1 = document.quiz.q1.value;
let q2 = document.quiz.q2.value;
let q3 = document.quiz.q3.value;
let q4 = document.quiz.q4.value;
let q5 = document.quiz.q5.value;

if (q1 == QuestionsObj[0].correctOpt) {
  score++;

}
if (q2 == QuestionsObj[1].correctOpt) {
  score++;

}
if (q3 == QuestionsObj[2].correctOpt) {
  score++;

}
if (q4 == QuestionsObj[3].correctOpt) {
  score++;

}
if (q5 == QuestionsObj[4].correctOpt) {
  score++;


}
  
  document.getElementsByClassName('result')[0].style.display = 'flex';
  document.getElementsByClassName('box')[0].style.display = 'none';
  document.getElementsByClassName('timer')[0].style.display = 'none';
  
  document.getElementById("marks").innerHTML = score;
  
  
  }
  setTimeout(check,42000);

// -- Timer code --

let timeleft = 40;
let Timer = setInterval(function(){
  if(timeleft <= 0){
    clearInterval(Timer);
  }
  document.getElementsByClassName('timer')[0].innerHTML =  timeleft;
  timeleft -= 1;
}, 1000);



display();
let addQuestions = document.getElementById('addBtn');
addQuestions.addEventListener("click",function(event){
    let question = document.getElementById("question");
    let option1 = document.getElementById("opt1"); //input refers to title
    let option2 = document.getElementById("opt2"); //input refers to title
    let option3 = document.getElementById("opt3"); //input refers to title
    let option4 = document.getElementById("opt4"); //input refers to title
    let correctOption = document.getElementById("correctOpt"); //input refers to title
    let Questions = localStorage.getItem("Questions");
    
    
    if(Questions == null){
      QuestionsObj = [];
    }
    
    else{
      QuestionsObj = JSON.parse(Questions);
    }
    let Obj = {
        question: question.value,
        opt1 : option1.value,
        opt2 : option2.value,
        opt3 : option3.value,
        opt4 : option4.value,
        correctOpt : correctOption.value
    }
    
    if(question.value != "" && option1.value != "" && option2.value != "" && option3.value != "" && option4.value != "" && correctOption.value != "" ){
      if(QuestionsObj.length <= 4){
      if(correctOption.value == option1.value || correctOption.value == option2.value || correctOption.value == option3.value || correctOption.value == option4.value ){
        QuestionsObj.push(Obj);
        localStorage.setItem("Questions", JSON.stringify(QuestionsObj))
        question.value = "";
        option1.value = "";
        option2.value = "";
        option3.value = "";
        option4.value = "";
        correctOption.value = "";
        
      }
      else{
        alert("Correct option must match one of the 4 options!!");
    
  }
}
  else{
    alert("Cannot Enter more than 5 Questions")
    question.value = "";
        option1.value = "";
        option2.value = "";
        option3.value = "";
        option4.value = "";
        correctOption.value = "";
  }
}
else{
    alert("Question is Incomplete!! Please enter ALL the Questions with ALL Options");
}
    display();
});

function display() {
    let Questions = localStorage.getItem("Questions");
    if (Questions == null) {
      QuestionsObj = [];
    }
    else {
      QuestionsObj = JSON.parse(Questions);
    }
    let html = "";
    QuestionsObj.forEach(function(element, index){
        html += `<div class="card" style = "display : flex; flex-wrap: wrap;">
        <div style="inline-size: 250px;
        overflow-wrap: break-word;">
        <h5 style = "margin : 10px 20px">Question - ${index+1}<br> ${element.question}</h5>
        <h5 style = "margin : 10px 20px">Option 1 - ${element.opt1}</h5>
        <h5 style = "margin : 10px 20px">Option 2 - ${element.opt2}</h5>
        <h5 style = "margin : 10px 20px">Option 3 - ${element.opt3}</h5>
        <h5 style = "margin : 10px 20px">Option 4 - ${element.opt4}</h5>
        <h5 style = "margin : 10px 20px">Correct Answer - ${element.correctOpt}</h5></div>
        <div class="removeBtn">
        <button id ="${index}" class="remove" onclick="deleteQuestion(this.id)"><i class="fa fa-times" aria-hidden="true" style="font-size: 30px; "></i></button>
        </div>
        <div class="editBtn">
        <button id ="${index}" class="edit" onclick="editQuestion(this.id)"><i class="fa fa-pencil" aria-hidden="true" style="font-size: 30px; "></i></button>
        </div>
      </div>`;
    });
    let QuestionsElem = document.getElementById("cardBox");
    if (QuestionsObj.length != 0){
      QuestionsElem.innerHTML = html;
    }
    else{
      QuestionsElem.innerHTML = `Sorry, no Question exists. Add a question from the ADD QUESTION section`;
    }

}


let button = document.getElementById("btn");
console.log(QuestionsObj.length)

    button.addEventListener("click", function(event){
      if(QuestionsObj.length == 5){
      location.href = 'rules.html'
    }
      else{
        alert(`Quiz must have 5 questions. Please add ${5-QuestionsObj.length} more questions`)
      }
    })


function deleteQuestion(index){

    let Questions = localStorage.getItem("Questions");
    if(Questions == null){
      QuestionsObj = [];
    }
    else{
      QuestionsObj = JSON.parse(Questions);
    }

    QuestionsObj.splice(index,1);
    localStorage.setItem("Questions", JSON.stringify(QuestionsObj));
    display();
}

// let search = document.getElementById('searchBox');
// search.addEventListener('input', function(){

//     let inputVal = search.value.toLowerCase();
//     console.log('Input event fired!', inputVal);
//     let noteCards = document.getElementsByClassName('card');
//     Array.from(noteCards).forEach(function(element){
//         let cardTxt = element.getElementsByTagName("p")[0].innerText;
//         if(cardTxt.includes(inputVal)){
//             element.style.display = "block";
//         }
//         else{
//             element.style.display = "none";
//         }
//         // console.log(cardTxt);
//     })
// })

let question = document.getElementById("question");
let option1 = document.getElementById("opt1");
let option2 = document.getElementById("opt2");
let option3 = document.getElementById("opt3");
let option4 = document.getElementById("opt4");
let correctOption = document.getElementById("correctOpt");

function editQuestion(index){
    
    if(question.value != "" && option1.value != "" || option2.value != "" || option3.value != "" || option4.value != "" || correctOption.value != ""){
        return alert("Please clear the text and title to enable editing");
    }
    let Questions = localStorage.getItem("Questions");
    if(Questions == null){
      QuestionsObj = [];
    }
    else{
      QuestionsObj = JSON.parse(Questions);
    }

    QuestionsObj.findIndex((element, index) => {
        question.value = element.question;
        option1.value = element.opt1;
        option2.value = element.opt2;
        option3.value = element.opt3;
        option4.value = element.opt4;
        correctOption.value = element.correctOpt;
    })
    QuestionsObj.splice(index, 1);
    localStorage.setItem("Questions", JSON.stringify(QuestionsObj));
    display();
}


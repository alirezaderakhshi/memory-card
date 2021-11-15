var flashcards = [];
var questions_no=0;
var editing_question_no=0;

var showForm = function(){
    if(document.getElementById('edit_button').style.display == "inline-block"){
        document.getElementById('edit_button').style.display = "none";
    }
    if(document.getElementById('edit_cancel_button').style.display == "inline-block"){
        document.getElementById('edit_cancel_button').style.display = "none";
    }
    if(document.getElementById('ok_button').style.display == "none"){
        document.getElementById('ok_button').style.display = "inline-block";
    }
    if(document.getElementById('cancel_button').style.display == "none"){
        document.getElementById('cancel_button').style.display = "inline-block";
    }
    document.getElementById("question_form").style.display="inline-block";
}

var addQuestion = function(){
    let question = document.getElementById("question").value;
    let answer = document.getElementById("answer").value;
    console.log(question,answer);
    if(question!=undefined && answer!=undefined && question!="" && answer!=""){
        questions_no += 1;
        flashcards[questions_no]={"question":question,"answer":answer};
        createCard(question,answer);
        document.getElementById("question_form").style.display="none";
        document.getElementById("question").value="";
        document.getElementById("answer").value="";
    }
    
}

function createCard(question){
    let all_questions = document.getElementById('all_questions');
    all_questions.innerHTML += `<div id='card_${questions_no}' class='cards'> 
                            <h2 id='question_${questions_no}'> ${question} </h2> 
                            <div class='container'>
                                <button id='show_btn_${questions_no}' onclick='showAnswer(${questions_no})'>Show Answer</button>
                            </div>
                            <div class='container'>
                                <h3 id='answer_${questions_no}'></h3>
                            </div>
                            <div class='container'>
                                <button id='hide_btn_${questions_no}' onclick='hideAnswer(${questions_no})'>Hide Answer</button>
                            </div>
                            <div class='container'>
                                <button id='remove_${questions_no}' onclick='remove(${questions_no})'>Remove</button>
                                <button id='edit_${questions_no}' onclick='edit(${questions_no})'>Edit</button>
                            </div>
                        </div>`;
}

var showAnswer = function(flashcard_no){
    let answer = flashcards[flashcard_no]["answer"];
    let container = document.getElementById(`answer_${flashcard_no}`);
    container.style.display = "block";
    container.innerHTML = answer;
    let show_btn = document.getElementById(`show_btn_${flashcard_no}`);
    show_btn.style.display = "none";
    let hide_btn = document.getElementById(`hide_btn_${flashcard_no}`);
    hide_btn.style.display = "block";
}

var hideAnswer = function(flashcard_no){
    let container = document.getElementById(`answer_${flashcard_no}`);
    container.value = "";
    container.style.display = "none";
    let hide_btn = document.getElementById(`hide_btn_${flashcard_no}`);
    hide_btn.style.display = "none"; 
    let show_btn = document.getElementById(`show_btn_${flashcard_no}`);
    show_btn.style.display = "block";
}

var remove = function(flashcard_no){
    flashcards[flashcard_no] = null;
    let card = document.getElementById(`card_${flashcard_no}`);
    card.style.display="none";
}

var edit = function(flashcard_no){
    showForm();
    let flashcard = flashcards[flashcard_no];
    let question = flashcard.question;
    let answer = flashcard.answer;
    document.getElementById('show_form_button').style.display = "none";
    document.getElementById('ok_button').style.display = "none";
    document.getElementById('cancel_button').style.display = "none";
    document.getElementById('edit_button').style.display="inline-block";
    document.getElementById('edit_cancel_button').style.display="inline-block";
    document.getElementById('question').value = question;
    document.getElementById('answer').value = answer;
    editing_question_no = flashcard_no;
}

var editQuestion = function(){
    console.log(editing_question_no);
    let question = document.getElementById("question").value;
    let answer = document.getElementById("answer").value;
    if(question!=undefined && answer!=undefined && question!="" && answer!=""){
        flashcards[editing_question_no].question = question;
        flashcards[editing_question_no].answer = answer;
        document.getElementById(`question_${editing_question_no}`).innerHTML = question;
        document.getElementById(`answer_${editing_question_no}`).innerHTML = answer;
        document.getElementById('edit_button').style.display = "none";
        document.getElementById('question_form').style.display = "none"
        document.getElementById('show_form_button').style.display = "block";
    }
    
}

var cancel = function(){
    document.getElementById('question').value = "";
    document.getElementById('answer').value = "";
    document.getElementById('question_form').style.display = "none";
    if(document.getElementById('show_form_button').style.display == "none"){
        document.getElementById('show_form_button').style.display = "block";
    }
}




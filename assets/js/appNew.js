$(function () {

  const containerQuiz = $('.container');
  const jumbo = $('.jumbotron');
  // const question = $('#question');
  const result = $('#result');
  const opt1 = $('#opt1');
  const opt2 = $('#opt2');
  const opt3 = $('#opt3');
  const timer = $('#timer');
  const correctAnswers = $('#correctAnswers');
  const inCorrectAnswers = $('#inCorrectAnswers');
  // const options = $('#options')
  // const lastQuestion = questions.length - 1;
  let questions = [
    {
      question: "Who is the Leader of USA?",
      imgSrc: "assets/images/usa.jpg",
      option1: "Donald Trump",
      option2: "Bill Clinton",
      option3: "Mr Biden",
      answer: "1",
      imgFace: "assets/images/trump.jpg"
    }, {
      question: "Who is the Leader of Germany?",
      imgSrc: "assets/images/germany.jpg",
      option1: "Otto von Bismarck",
      option2: "Angela Merkel",
      option3: "Gerhard Schröder",
      answer: "2",
      imgFace: "assets/images/merkel.jpg"
    }, {
      question: "Who is the Leader of Russia?",
      imgSrc: "assets/images/russia.jpg",
      option1: "Boris Yeltsin",
      option2: "Dmitriy Medvedev",
      option3: "Vladimir Putin",
      answer: "3",
      imgFace: "assets/images/putin.jpg"
    }
  ];

  let correctAnswScore = 0;
  let inCorrectAnswScore = 0;
  let count = 100;
  let runningQuestion;
  let TIMER;



  // staring the game
  $('#startQuizBtn').on('click', function () {
    containerQuiz.css('display', 'block');
    jumbo.hide();
    result.hide();
    questionGenerate();
    renderCounter();
    // checkanswer();
    TIMER = setInterval(renderCounter, 1000); // 1000ms = 1s
  })

  // setting timer
  function renderCounter() {
    timer.html(count);
    count--;
    if (count < 0) {
      finishQuiz();
    }
  }

  //generatin questions
  function questionGenerate() {
   
    for (runningQuestion = 0; runningQuestion < questions.length; runningQuestion++) {
      let q = questions[runningQuestion];
      $('#question').html(q.question);
      opt1.html(q.option1);
      opt2.html(q.option2);
      opt3.html(q.option3);
        }
    // checking the answer using onclick 
    // let selectedOption = $('input[type = "radio"]:checked');
    $('input[type = "radio"]').click(function () {
      //first lets check if the button was checked
      let checked = $(this).is(":checked");
     
      if (checked) {
        let answer = $(this).val();
        alert(answer);
        alert(runningQuestion);
        if (answer == questions[runningQuestion].answer) {

          correctAnswScore++;
        } else {
          inCorrectAnswScore++;
        }
      } else {
        //if the button was not checked
        inCorrectAnswScore++;
      }
    })
    // runningQuestion++
    }

  // finishing the quiz
  function finishQuiz() {
    // end the quiz and show the score
    clearInterval(TIMER);
    containerQuiz.hide();
    result.css('display', 'block');
    correctAnswers.html('Correct answers:' + ' ' + correctAnswScore);
    inCorrectAnswers.html('Incorrect answers:' + ' ' + inCorrectAnswScore);
  }


});



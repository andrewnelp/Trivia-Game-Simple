$(function () {

  const containerQuiz = $('.container');
  const jumbo = $('.jumbotron');
  // const question = $('#question');
  const result = $('#result');
  // const opt1 = $('#opt1');
  // const opt2 = $('#opt2');
  // const opt3 = $('#opt3');
  const timer = $('#timer');
  const correctAnswers = $('#correctAnswers');
  const inCorrectAnswers = $('#inCorrectAnswers');
  // const options = $('#options')
  // const lastQuestion = questions.length - 1;
  let questions = [
    {
      question: "Who is the Leader of USA?",
      imgSrc: "assets/images/usa.jpg",
      option1:"Donald Trump",
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
      //puttin + runningquestion+ to make sure one group of inputs is checked only
      //make  through running question id
      // SEE WHY SPAN AND P NOT CLOSED RIGHT AFTER
      timer.after('<h3 id="question" class="question + text-center my-0">' + questions[runningQuestion].question + '</h3>');
      $('h3').after("<div class='" + runningQuestion + "' ><label ><input type='radio' name='" + runningQuestion + "' value='1'><span>" + questions[runningQuestion].option1 + "</span></label></div>")
      $('.' + runningQuestion).append("<label ><input type='radio' name='" + runningQuestion + " 'value='2'><span> " + questions[runningQuestion].option2 + "</span></label>")
      $('.' + runningQuestion).append("<label ><input type='radio' name='" + runningQuestion + " 'value='3'><span>" + questions[runningQuestion].option3 + "</span></label>")
      $('.' + runningQuestion).css('fontSize', '12px');
    }


    // checking the answer using onclick 
    //  create a loop within a click through options
    $('.option').click(function () {
      console.log(this)
      //first lets check if the button was checked
      let checked = $(this).is(":checked");
      // alert(checked)
      if (checked) {
        let selectedOption = $(this).val();


        if (selectedOption == questions[runningQuestion].answer) {

          correctAnswScore++;
        } else {
          inCorrectAnswScore++;
        }
      } else {
        //if the button was not checked
        inCorrectAnswScore++;
      }
    })
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



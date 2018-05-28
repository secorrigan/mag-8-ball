$(document).ready(function() {

  var magic8ball = {};

  magic8ball.answers = ["Definitely yes.", "Without a doubt.", "Signs point to yes.", "Outlook good.", "You can count on it!", "Error - try again.", "Outlook unclear.", "Ask again later.", "Better not to know.", "It's possible!", "Definitely not.", "Outlook not good.", "Nope.", "Don't count on it.", "Very doubtful!"];

  $('#answer').hide();
  
  
  magic8ball.method = function(question) {
    $('#8ball').attr('src', 'https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png');
    var randomNumber = Math.random();
    var randomNumberArray = randomNumber * this.answers.length;
    var randomIndex = Math.floor(randomNumberArray);
    var randomAnswer = this.answers[randomIndex];
    $('#8ball').effect('shake');
    $('#answer').fadeIn(4000);
    $('#answer').text(randomAnswer);
    //console.log(question);
    //console.log(randomAnswer);
  };
    
  var onClick = function() {  
    setTimeout (
      function () {
        var question = prompt("Ask a yes/no question");
        magic8ball.method(question);
      }, 500);
    $('#8ball').attr('src', 'https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/8side.png');
    $('#answer').hide();
  };    
  

  $('#questionButton').click(onClick);
  
});
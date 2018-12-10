function populate()
{
    if(quiz.isEnded())
    {
        //showscore();
    }
    else{
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        var choices=quiz.getQuestionIndex().choices;
    for(var i = 0; i< choices.length; i++)
    {
        var element=document.getElementById("choice" + i);
        element.innerHTML=choices[i];
    } 


    }
}  


var questions=
[ 
    
    new Questions("FHJHGYTGFHGGJH?",["a","b","c","d"],"a"),
    new Questions("FHJHGYTGFHGGJH?",["a","b","c","d"],"a"),
    new Questions("FHJHGYTGFHGGJH?",["a","b","c","d"],"a"),
    new Questions("FHJHGYTGFHGGJH?",["a","b","c","d"],"a"),
    new Questions("FHJHGYTGFHGGJH?",["a","b","c","d"],"a")
];
   
var quiz = new Quiz(questions);

populate();

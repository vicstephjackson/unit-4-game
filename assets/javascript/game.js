$(document).ready(function() {
    var targetNumber="";
    var redValue="";
    var blueValue="";
    var yellowValue="";
    var greenValue="";
    var redBtn;
    var blueBtn;
    var yellowBtn;
    var greenBtn;
    var score;
    var wins=0;
    var loss=0;
    
    function initialize() {
        targetNumber=Math.floor(Math.random()*101)+19;
        score=0;
        var crystal=[$(".red"), $(".blue"), $(".yellow"), $(".green")];
        var button=[redBtn, blueBtn, yellowBtn, greenBtn];
    
        for (var i=0; i<crystal.length; i++) {
            button[i]=crystal[i].attr("data-chicken", Math.floor(Math.random()*12)+2);
        };
    
        $("#targetNumber").html(targetNumber);
        $("#wins").html(wins);
        $("#loss").html(loss);
        $("#score").html(score);
    }
    initialize();
    
    
    $(".crystal").on("click", function(){
        score += parseInt($(this).attr("data-chicken"));
        $("#score").html(score);
        if(score == targetNumber) {
            wins++;
            initialize();
        }
        else if (score > targetNumber) {
            loss++;
            initialize();
        }
    });
});
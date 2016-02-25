var saber     = new Audio("assets/music/sabersounds/coolsaber.wav");
var darkMusic = new Audio("assets/music/themes/immolation.mp3");
var battle    = new Audio("assets/music/themes/battle.mp3");
var slowSaber = new Audio("assets/music/sabersounds/slowSabr.wav");
var yoda      = new Audio("http://www.yodajeff.com/multimedia/sounds/episode5/use_the_force.wav");
var emperor   = new Audio("assets/music/voices/emperor.mp3");
$(document).ready(function(){
  $(".icons").hide();
  $(".darkCharacters").hide();
  saber.play();
  darkMusic.play();
//Click function
  $(document).click(function(){

    //Changing H1 to Second Screen Tag (Still stylized on second page)
    document.getElementById("TopTag").innerHTML = "Choose Your Side";
    
    $(".icons").show();
    $("h2").hide();
    darkMusic.pause();
    battle.play(); 
    slowSaber.play();

    //Light Side Icon Hover
    $("#lightSideIcon").hover(function(){
      yoda.play();    
      $("h1").hide();
      document.body.style.backgroundImage = "url(assets/images/light_side/light_side.gif)";
    });

    //Dark Side Icon Hover
    $("#darkSideIcon").hover(function(){
      emperor.play();
      $("h1").hide();
      document.body.style.backgroundImage = "url(assets/images/dark_side/dark_side.gif)";  
    });


  });
//Click function
    //On Click Emperor
    $("#darkSideIcon").click(function(){
      $("#lightSideIcon").hide();
      $("#darkSideIcon").hide();
      $(".darkCharacters").show();
    });
    //On Click Yoda
    $("#lightSideIcon").click(function(){
      $("#darkSideIcon").hide();
    });
});

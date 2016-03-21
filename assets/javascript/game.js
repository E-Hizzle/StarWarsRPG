var saber          = new Audio("assets/music/sabersounds/coolsaber.wav");
var darkMusic      = new Audio("assets/music/themes/immolation.mp3");
var battle         = new Audio("assets/music/themes/battle.mp3");
var slowSaber      = new Audio("assets/music/sabersounds/slowSabr.wav");
// var yoda        = new Audio("http://www.yodajeff.com/multimedia/sounds/episode5/use_the_force.wav");
// var emperor     = new Audio("assets/music/voices/emperor.mp3");
var vader          = new Audio("assets/music/voices/vader.wav");
var maul           = new Audio("assets/music/sabersounds/double bladed twirl.wav")
var luke           = new Audio("assets/music/voices/luke.wav");
var obi            = new Audio("assets/music/sabersounds/fx4.wav");
var vader2         = new Audio("assets/music/voices/haveyou.wav");
var healthPlayer   = 100;
var healthComputer = 100;

$(document).ready(function(){
  $(".icons").hide();
  $(".playerLeft").hide();
  $(".playerRight").hide();
  $(".darkCharacters").hide();
  $(".lightCharacters").hide();
  $(".healthVader").hide();
  $(".healthMaul").hide();
  $(".healthObi").hide();
  $(".healthLuke").hide();
  $("h3").hide();
  $("h4").hide();
  $("h5").hide();
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

    //Light Side Icon Hover
    $("#lightSideIcon").hover(function(){
      $("h1").hide();
      document.body.style.backgroundImage = "url(assets/images/light_side/light_side.gif)";
    });

    //Dark Side Icon Hover
    $("#darkSideIcon").hover(function(){
      $("h1").hide();
      document.body.style.backgroundImage = "url(assets/images/dark_side/dark_side.gif)";  
    });


  });
//Click function
    //On Click Emperor
    $("#darkSideIcon").click(function(){
      slowSaber.play();
      $("#darkSideIcon").hide();
      $("#lightSideIcon").hide();
      $(".darkCharacters").show();
      $("h4").show();
    });
    //On Click Yoda
    $("#lightSideIcon").click(function(){
      slowSaber.play();
      $("#lightSideIcon").hide();
      $("#darkSideIcon").hide();
      $(".lightCharacters").show();
      $("h4").show();
    });

    $("#maulIcon").hover(function(){
      document.body.style.backgroundImage = "url(assets/images/mural/battle_background.jpg)";  
    });

    $("#vaderIcon").hover(function(){
      document.body.style.backgroundImage = "url(assets/images/mural/battle_background.jpg)";  
    });

    $("#obiIcon").hover(function(){
      document.body.style.backgroundImage = "url(assets/images/mural/battle_background.jpg)";  
    });

    $("#lukeIcon").hover(function(){
      document.body.style.backgroundImage = "url(assets/images/mural/battle_background.jpg)";  
    });

    $("#vaderIcon").click(function(){
      vader.play();
      $("h4").hide();
      $("#maulIcon").hide();
      $(".lightCharacters").show();
      $("#obiIcon").hide();
      $(".playerLeft").show();
      document.querySelector("#healthComputer").innerHTML = "Health: " + healthComputer;
      document.querySelector("#healthPlayer").innerHTML = "Health: " + healthPlayer;
      $("h3").show();
      $("h5").show();
      });

    $("#maulIcon").click(function(){
      maul.play();
      $("h4").hide();
      $("#vaderIcon").hide();
      $(".lightCharacters").show();
      $("#lukeIcon").hide();
      $(".playerRight").show();
      document.querySelector("#healthComputer").innerHTML = "Health: " + healthComputer;
      document.querySelector("#healthPlayer").innerHTML = "Health: " + healthPlayer;
      $("h3").show();
      $("h5").show();
    });

    $("#obiIcon").click(function(){
      obi.play();
      $("h4").hide();
      $("#lukeIcon").hide();
      $(".darkCharacters").show();
      $("#vaderIcon").hide();
      $(".playerRight").show();
      document.querySelector("#healthComputer").innerHTML = "Health: " + healthComputer;
      document.querySelector("#healthPlayer").innerHTML = "Health: " + healthPlayer;
      $("h3").show();
      $("h5").show();
    });

    $("#lukeIcon").click(function(){
      luke.play();
      $("h4").hide();
      $("#obiIcon").hide();
      $(".darkCharacters").show();
      $("#maulIcon").hide();
      $(".playerLeft").show();
      luke.onended = function(){
        vader2.play();
      };
      document.querySelector("#healthComputer").innerHTML = "Health: " + healthComputer;
      document.querySelector("#healthPlayer").innerHTML = "Health: " + healthPlayer;
      $("h3").show();
      $("h5").show();
      $("h3").click(function(){
      document.body.style.backgroundImage = "url(assets/images/funny_win/cage.jpg)"; 
      $("h3").hide();
      $("h5").hide();
      $(".lightCharacters").hide();
      $(".darkCharacters").hide();
      $(".playerRight").hide();
      $(".playerLeft").hide(); 
      });
    });
});

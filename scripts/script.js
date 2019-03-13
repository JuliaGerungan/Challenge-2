// datum
function date() {
this.length = date.arguments.length;
for (var i = 0; i < this.length; i++)
this[i+1] = date.arguments[i];
}

var dagArray = new date("zondag","maandag", "dinsdag","woensdag","donderdag","vrijdag","zaterdag");

var maandArray = new date("januari","februari","maart","april","mei","juni","juli", "augustus","september","oktober","november","december");

var nu = new Date();
var weekdag = dagArray[(nu.getDay()+1)];
var dag = nu.getDate();
var maandtekst = maandArray[(nu.getMonth()+1)];
var jaar = nu.getFullYear();

var datumweergave = weekdag + " " + dag + " " + maandtekst + " " + jaar;

window.onload = function date(){
  document.getElementById('datum').innerHTML = datumweergave;

// animate timeline
  var timeline = new TimelineMax({repeat: -1});
  timeline.to("#cloud1", 40, { ease: Elastic.easeOut.config(7), y :8 });

  var timeline = new TimelineMax({repeat: -1});
  timeline.to("#clock", 40, { ease: Elastic.easeOut.config(7), y :8 });
};

// klok
function clock() {

var time = new Date(),
    
    hours = time.getHours(),   
    minutes = time.getMinutes(),   
    seconds = time.getSeconds();

    if (hours > 5 && hours < 17) {
        document.getElementById("gridContainer").style.backgroundImage = "url('images/ochtend.jpg')";
        document.getElementById("h1").innerHTML = "Goedenmorgen, op Aarde is het nu";
        } 

        else if (hours > 17 && hours < 21){
        document.getElementById("gridContainer").style.backgroundImage = "url('images/afternoon.jpg')";
        document.getElementById("h1").innerHTML = "Goedenavond, op Aarde is het nu:";
        } 

        else if (hours > 20 || hours < 5){
        document.getElementById("gridContainer").style.backgroundImage = "url('images/night.jpg')";
        document.getElementById("h1").innerHTML = "Goedennacht, op Aarde is het nu";
        }

function zero(standIn) {
  if (standIn < 10) {
     standIn = '0' + standIn
   }
  return standIn;
  }


document.querySelectorAll('.clock')[0].innerHTML = zero(hours) + ":" + zero(minutes) + ":" + zero(seconds); 

}
setInterval(clock, 1000);













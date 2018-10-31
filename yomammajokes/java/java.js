function random(){
    return Math.round(Math.random() * 7);
} 
function joke(){
    var sentence = ["Yo Mamma So Mother Loving","Yo Mamma So","what!! Yo mamma so ","Oh oh oh, buster looking local faced civilian, yo mamma so","Yo Mamma So Mother Loving","Yo Mamma So","what!! Yo mamma so ","Oh oh oh, buster looking local faced civilian, yo mamma so"];
    var joke_ = ["black Batman came and said  Stop tripping I'm the dark night.","fat when she wears a yellow coat, people said « taxi!,  i know you see me taxi, giv me my junk out yo trunk »","dumb she asked you « What is the number for 911? » Now i know you just fell som type of way...tell her don't look like dat","dirty when she wash up her water look like chocolate, Dont you Taste that lil boy","dumb she talks in a envelope to send the voice mail, better tell her ta hang up dat phone","tall when she jump in the sky it hit jesus’ balls, you better pray toningt son","poor her face is on The front of a food stamp, ","skinny she turned sideways and disappeared."];
    output.textContent = sentence[random()] + ' ' + joke_[random()];
}

function laugh(){
var audio = new Audio('lol.mp3');
audio.play();
}
function beep(){
    var audio = new Audio('beep.mp3');
    audio.play();
}




























// function myMove() {
//     var elem = document.getElementById("animate");   
//     var pos = 0;
//     var id = setInterval(frame, 5);
//     function frame() {
//       if (pos == 350) {
//         clearInterval(id);
//       }else {
//         pos++; 
//         elem.style.top = pos + 'px'; 
//         elem.style.left = pos + 'px'; 
//       }
//     }
//   }
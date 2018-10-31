function random(){
    return Math.round(Math.random() * 4);
} 
function Hero(){
    var sentence = ["The fantastic","The amazing","The heroic","The beautiful","The Incredible"];
    var hero = ["Thor","Guardians","Iron-Man","Spider-Man","Hulk",];
    var SuperPowers = ["can fly","can soar","can summon lightning","can shoot fire out his hands","can die and rebirth"];
    var output = document.getElementById('output');
    output.textContent = sentence[random()] + ' ' + hero[random()] + ' ' + SuperPowers[random()];
}
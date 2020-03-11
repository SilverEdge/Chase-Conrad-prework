var game = {
    words: ['iacocca','shelby','dearborn','fastback','v8','pony'],
    randonWord: function() {return this.words[Math.floor(Math.random()*this.words.length)]},
    guessesRemaining: 13,
    audio: document.getElementById("myAudio"),
    playAudio : function() {
        this.audio.play();
    }
  };
  
var gthth = game.randonWord();
  var output = gthth.split('');
console.log(output);

var z = '';
for(i=0;i<output.length;i++){
    
        z=z + "_"
    }
    document.getElementById("writeline").innerText = z;

var guessed= [];
var guessedWrong = [];

var wins = 0;

//key press

document.onkeypress = function (e) {
    document.getElementById("instructions").style.color = "transparent";

    if(!guessed.includes(e.key)){
        guessed.push(e.key)

        if(output.includes(e.key)){

            var y = ''
        for(i=0;i<output.length;i++){
            if(guessed.includes(output[i])){
                c = guessed.indexOf(output[i])
                y = y + guessed[c];
            }else{
                y=y + "_"
            }
        };

       
        document.getElementById("writeline").innerText = y;

        if(!y.includes('_')){
            game.playAudio();
            wins++;
            document.getElementById("wins").innerText = "Wins: "+ wins;
        }
        }else{
            guessedWrong.push(e.key)
            game.guessesRemaining--;
            document.getElementById("guessesRemaining").innerText = "Guesses Remaining: "+ game.guessesRemaining;

            var x ='';
            for(i=0;i<guessedWrong.length;i++){
                x = x + guessedWrong[i];
                
            };
            document.getElementById("guessed").innerText = x;
            
            document.getElementById("guessesRemaining").innerText = "Guesses Remaining: "+ game.guessesRemaining;
            if(game.guessesRemaining==0){
                alert(game)
            }
        };
    }

    

    
    
    
    
    

    
  };




 /*  Lee Iacocca:
American automobile executive who originally conceived of the Ford Mustang.

Carrol Shelby:
American racecar driver who developed the iconic Shelby GT350 and Shelby GT500.

Dearborn, Michigan:
Production of the Ford Mustang began in Dearborn, Michigan, on March 9, 1964.

Fastback 2 + 2
The fastback varient featured a sweeping exterior line running to back of the car.

V8 Engine:
The original Ford Mustang offered a powertrain upgrade to the iconic 289 cu V8 engine.

Pony Car:
Mustang poineered the pony car class of affordable American compact performance cars. */
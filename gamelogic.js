$(document).ready(function () {

    var netflixList = [
        "watch the walking dead",
        "the flash",
        "black panther",
        "supernatural",
        "grey's anatomy",
        "marvel's agents of s.h.i.e.l.d.",
        'better call saul',
        'friends',
        'arrow',
        'madam secretary',
        'thor ragnarok',
        'star wars the last jedi',
        'gotham',
        'black lightning',
        'riverdale',
        'frasier',
        'breaking bad',
        'the vampire diaries',
        'supergirl',
        'hawaii five-0',
        'blue bloods',
        'guardians of the galaxy vol. 2',
        "marvel's daredevil",
        'coco',
        'twin peaks',
        'pirates of the caribbean the curse of the black pearl',
        'star trek',
        'the lord of the rings the fellowship of the ring',
        "to all the boys i've loved before",
        'the 100',
        'the blacklist',
        'hold the dark',
        "house of card's",
        'how i met your mother',
        'pretty little liars',
        'how to get away with murder',
        'star trek the next generation',
        'black mirror',
        'sherlock',
        'dexter',
        'big mouth',
        'doctor strange',
        'the office',
        'stranger things',
        'mindhunter',
        'once upon a time',
        'beauty and the beast',
        "dc's legends of tomorrow",
        'futurama',
        'the green mile',
        'sons of anarchy',
        'what happened to monday',
        'scandal',
        'charmed',
        'the godfather',
        'peaky blinders',
        'ozark',
        'new girl',
        'narcos',
        'marvel’s jessica jones',
        'californication',
        '13 reasons why',
        'orange is the new black',
        'mystery science theater 3000',
        'the west wing',
        'the good wife',
        'arrested development',
        'bojack horseman',
        'gossip girl',
        'the good place',
        'shrek',
        'star wars the clone wars',
        'star trek voyager',
        'schindler’s list',
        'archer',
        'cars 3',
        'glee',
        'the prince of egypt',
        'izombie',
        'quantico',
        'the shining',
        'young & hungry',
        'marvel’s luke cage',
        'spider-man 3',
        'dynasty',
        "weeds",
        'spartacus',
        'designated survivor',
        'donnie darko',
        'into the badlands',
        'hostiles',
        'sing',
        'calibre',
        'ex machina',
        'star trek: enterprise',
        'wind river',
        'crazy ex-girlfriend',
        'wynonna earp',
        'mad men',
        'southpaw',
        'altered carbon',
        'the hateful eight',
        'it follows',
        'sense8',
        'jane the virgin',
        'queen of the south',
        'maniac',
        'bates motel',
        'peter rabbit',
        'se7en',
        'star trek: deep space nine',
        'kill bill: vol. 1',
        'set it up',
        'marvels the defenders',
        'the crown',
        'parks and recreation',
        'kill bill: vol. 2',
        'her',
        'lost in space',
        'the invisible guest',
        'bolt',
        'nikita',
        'the shannara chronicles',
        'v for vendetta',
        "marvel's the punisher",
        'on my skin',
        'ash vs evil dead',
        'mystic river',
        'crossing jordan',
        'reign',
        'kung fu panda',
        'a series of unfortunate events',
        'the godfather: part ii',
        'the sixth sense',
        'heat',
        'the conjuring',
        'the truman show',
        'once upon a time in america',
        'zoo',
        'the tudors',
        'burn notice',
        'the land before time',
        'mamma mia!',
        'tarzan',
        'bleach',
        'atypical',
        'the devil’s advocate',
        'colony',
        'the sinner',
        'marco polo',
        'zack and miri make a porno',
        'l.a. confidential',
        'king kong',
        'louie',
        'longmire',
        'the seven deadly sins',
        'monty python’s flying circus',
        'hercules',
        'halt and catch fire',
        'bruce almighty',
        'portlandia',
        'coraline',
        'chappaquiddick',
        'the king’s speech',
        'velvet',
        'hot fuzz',
        'serenity',
        'mulan',
        'blade',
        'stonehearst asylum',
        'journey to the center of the earth',
        'babylon berlin',
        'moon',
        'lilo & stitch',
        'the twilight zone',
        'interview with the vampire',
        'we own the night',
        'limitless',
        'cinema paradiso',
        'unforgiven',
        'the babysitter',
        'the mist',
        'cult of chucky',
        'bee movie',
        'penny dreadful',
        'continuum',
        'mr. beans holiday',
        'trolls',
        'a most violent year',
        'tinker bell',
        'gran torino',
        'disenchantment',
        'dark',
        'unbreakable kimmy schmidt',
        "the emperor's new groove",
        'the neverending story',
        'voltron: legendary defender',
        'travelers',
        'like father',
        'robin hood: prince of thieves',
        'monsters vs aliens',
    ]
    // other var
    var losses = 0;
    var wins = 0;
    var guessLength = 0


    $("#NewWordBtn").click(function () {

        $("#wordUpTag, #wordWas, #guesedLetters").empty();
        // console.log(wordUpTag, wordWas, guesedLetters)

        var wordUp = netflixList[Math.floor(Math.random() * netflixList.length)];

        //var flixUp = wordUp.toLowerCase

        var wordLength = wordUp.length;

        var blanks = [];


        /// Display the correct number of blanks.
        console.log(wordUp);
        for (var i = 0; i < wordLength; i++) {
            blanks.push("__ ")
            $("#wordUpTag").text(blanks.join(""));
            //$("#wordUpTag").text(" __ ");
            //console.log(wordUp[i])


        }
        //Get a number of guesses allowed and display
        if (wordLength <= 6) {
            guessLength = 6
        } else {
            guessLength = 11
        }

        $("#guessRTag").text(guessLength);

        //collect and display guessed letter
        document.onkeyup = function () {
            //userText.textContent = event.key
            $("#guessRTag").text(guessLength);
            $("#guesedLetters").append(" " + event.key);
            console.log(guessLength);


            // num of guess remaining

            if (wordUp.indexOf(event.key) === -1) {
                guessLength--;
                console.log("incorrect", event.key)

            } // If it is in the array...
            else {
                //goodGuess++;
                console.log("Good geuss!", event.key);
                //answer.push(event.key)
                //console.log(answer)
            }


            ///if else
            /* if ( userGuess ==== a letter in the wordUp array) {
            $( all matching letters).replaceWith("event.key");
            }
            */

            // Update the game state with the guess
            for (var j = 0; j < wordLength; j++) {
                if (wordUp[j] === event.key) {
                    blanks[j] = event.key;
                    //  console.log("that was letter # "+ [j], "letters left: " + (wordLength - goodGuess));
                    $("blanks[j]").replaceWith(event.key);
                    $("#wordUpTag").text(blanks.join(""));
                    // console.log(wordUpTag.textContent, wordUp);
                }
            }

            //update score if player wins
            if (wordUpTag.textContent === wordUp) {
                wins++;
                $("#winTag").text(wins);
                $('#wordWas').text(wordUp);
                $("#wordUpTag").text("Nice!");
                //  console.log(wordUpTag); 
                //prevent score update if win
                if (wins++) {
                    // alert("Chose a new word")
                    return "win"
                }
            }
            // update score if player loses
            if (guessLength === 0) {
                losses++;
                $("#lossesTag").text(losses);
                $('#wordWas').text(wordUp);
                $("#wordUpTag").text("The Word Was:");;
                // console.log(wordUpTag);
                console.log("you lose!", losses);
            }

            //prevent player from changing score after lose
            if (wordUpTag.textContent === "The Word Was:") {
                // stop code form updateing until button is pressed again
                console.log("lose")
                return "lose"
            } //else (wordUpTag.textContent === "Nice!") {
            // stop code form updateing until button is pressed again
            // }

        };


        /// logs
        //console.log("this is a test");

        console.log(wordLength + " letters");
        // console.log(userText.textContent);
        console.log(guessLength + " guesses left");
        // console.log(userText.textContent.toLowerCase);
        // console.log(flixUp)
    });





});
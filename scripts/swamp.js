var swamp = {

    // Variables
    shown : false,
    step : 0,
    
    // Functions
    updateOnPageFinalFrog : function(){
        var text = "";
        var answer_form = "\n\n<input id=\"answer\" type=\"text\" onchange=\"swamp.answer()\" /> <span id=\"swamp_comment\"></span>";
        switch(this.step){
            case 4:
                text = speech.makeSpeechFromText("Hello. I'm The Frog. I can provide you candies, and lots of things. I know how much you love candies. But I feel alone in this swamp. I'd like to play with you before. If you answer my questions correctly, the sweetest sweets will be yours.", 29, "");
                text += "\n\n<button id=\"answer\" onClick=\"swamp.setStep(5);\">Let's go, then</button>";
            break;
            case 5:
                text = speech.makeSpeechFromText("First question : do you _really_ love candies?", 29, "");
                text += answer_form;
            break;
            case 6:
                text = speech.makeSpeechFromText("Perfect. Here's 10 candies. Many more candies are waiting for you.", 29, "");
                text += "\n\n<button id=\"answer\" onClick=\"swamp.setStep(7);\">Second question!</button>";
            break;
            case 7:
                text = speech.makeSpeechFromText("Second question : if A implies B and B implies C, and D implies A, and E implies D, what does A imply?", 29, "");
                text += answer_form;
            break;
            case 8:
                text = speech.makeSpeechFromText("Great. You seem to understand basic logic. Here's 100 candies.", 29, "");
                text += "\n\n<button id=\"answer\" onClick=\"swamp.setStep(9);\">Next question!</button>";
            break;
            case 9:
                text = speech.makeSpeechFromText("Third question. Consider 10 days. If I give you 1 candy on the first day, and each day I give you twice more candies than the previous day, how much candies will I give you on day number 10?", 29, "");
                text += answer_form;
            break;
            case 10:
                text = speech.makeSpeechFromText("Exactly. Let's speed up the process : here's your 512 candies right now! Playing with you is so exciting! Next question is for 1000 candies.", 29, "");
                text += "\n\n<button id=\"answer\" onClick=\"swamp.setStep(11);\">Candiiiiies!</button>";
            break;
            case 11:
                text = speech.makeSpeechFromText("Fourth question : if you could be whatever you want, what would you be?", 29, "");
                text += answer_form;
            break;
            case 12:
                text = speech.makeSpeechFromText("Correct! Everyone wants to be a frog. Here's your 1000 candies.", 29, "");
                text += "\n\n<button id=\"answer\" onClick=\"swamp.setStep(13);\">Any more enigma?</button>";
            break;
            case 13:
                text = speech.makeSpeechFromText("Here's a story : there's a fox, a lion and a wolf inside a lunar crater. The fox is about to bite the lion, which is about to bite the wolf, which is about to bite the fox. It's snowing and a shrub is watching the scene. Who's enjoying the story?", 29, "");
                text += answer_form;
            break;
            case 14:
                text = speech.makeSpeechFromText("Right, you were enjoying it! At least, I hope so. Here's a chocolate bar for you. It's very precious.", 29, "");
                text += "\n\n<button id=\"answer\" onClick=\"swamp.setStep(15);\">Thanks, Frog!</button>";
            break;
            case 15:
                text = speech.makeSpeechFromText("Now, just type the answer to that question and I'll give you a very special present : what is the only thing to go beyond the limits of our universe ?", 29, "");
                text += answer_form;
            break;
            case 16:
                text = speech.makeSpeechFromText("Yes it is ! Now, here's 5 very special potions. They'll be very useful during quests.", 29, "");
                text += "\n\n<button id=\"answer\" onClick=\"swamp.setStep(17);\">Yay !!</button>";
            break;
            default:
                text = speech.makeSpeechFromText("I have no more sweets to give you. It was a real pleasure to play with you. Thanks a lot.", 29, "");
            break;
        }
        
        text += "\n\n<button onClick=\"swamp.leave();\">Leave the Swampy Swamp</button>";
        
        htmlInteraction.setInnerHtml("map", "\
           .--._.--.\n\
      The ( O     O ) Frog\n\
          /   . .   \\\n\
         .`._______.'.\n\
        /(           )\\\n\
      _/  \\  \\   /  /  \\_\n\
   .~   `  \\  \\ /  /  '   ~.\n\
  {    -.   \\  V  /   .-    }\n\
_ _`.    \\  |  |  |  /    .'_ _\n\
>_       _} |  |  | {_       _<\n\
 /. - ~ ,_-'  .^.  `-_, ~ - .\\\n\
          '-'|/   \\|`-`\n\n\
" + text);
    },
    
    updateOnPage : function(){
        if(this.shown){
            
        switch(this.step){
            case 0:
                htmlInteraction.setInnerHtml("map", "\
While you walk through the swamp,\n\
following your map...\
");
                this.step = 1;
                window.setTimeout(this.updateOnPage.bind(this), 3500);
            break;
            case 1:
                htmlInteraction.setInnerHtml("map", "\
On the horizon, you see a\n\
              00        frog\n\
             (--)         coming...\n\
            ( || )\n\
            ^^~~^^\
");
                this.step = 2;
                window.setTimeout(this.updateOnPage.bind(this), 3500);
            break;
            case 2:
                htmlInteraction.setInnerHtml("map", "\
It is coming_    _\n\
  slowly   (o)--(o)\n\
   but    /.______.\\\n\
  surely, \\________/\n\
         ./        \\.\n\
        ( .        , )\n\
         \\ \\_\\\\//_/ /\n\
          ~~  ~~  ~~\
");
                this.step = 3;
                window.setTimeout(this.updateOnPage.bind(this), 3500);
            break;
            case 3:
                htmlInteraction.setInnerHtml("map", "\
           .-.   .-.\n\
          ( o )_( o )\n\
      __ / '-'   '-' \\ __ it is\n\
     /  /      \"      \\  \\    green.\n\
    |   \\    _____,   /   |\n\
     \\  \\`-._______.-'/  /\n\
 _.-`   /\\)         (/\\   `-._\n\
(_     / /  /.___.\\  \\ \\     _)\n\
 (_.(_/ /  (_     _)  \\ \\_)._)\n\
       (_(_)_)   (_(_)_)\
");
                this.step = 4;
                window.setTimeout(this.updateOnPage.bind(this), 3500);
            break;
            default:
                this.updateOnPageFinalFrog();
            break;
        }
        
        }
    },
    
    enter : function(){
        objects.leave();
        
        this.shown = true;
        
        this.updateOnPage();
    },
    
    leave : function(){
        this.shown = false;
        
        htmlInteraction.setInnerHtml("map", "");
        //buttons.enableHomeButtons();
    },
    
    resetComment : function(){
        htmlInteraction.setInnerHtml("swamp_comment", "");
    },
    
    setComment : function(value){
        htmlInteraction.setInnerHtml("swamp_comment", value);
        window.setTimeout(this.resetComment.bind(this), 1000); // We set the timeout to reset it in one second
    },
    
    setStep : function(value){
        // We change the value
        this.step = value;
        
        // If the swamp is shown
        if(this.shown){
            // We update on page
            this.updateOnPage();
            // We possibly focus
            if(this.step >= 4 && this.step <= 16){
                htmlInteraction.focusElement("answer");
            }
        }
    },
    
    answer : function(){
        var ans = htmlInteraction.getElement("answer").value.toLowerCase().replace(/[^\w]|_/g, "");
        htmlInteraction.getElement("answer").focus(); // Re focus after answering
        
        switch(this.step){
            case 5:
                if(ans == "yes"){
                    candies.setNbrOwned(candies.nbrOwned + 10);
                    this.setStep(6);
                }
                else this.setComment("Wrong.");
            break;
            case 7:
                if(ans == "c" || ans == "b" || ans == "candb" || ans == "bandc"){
                    candies.setNbrOwned(candies.nbrOwned + 100);
                    this.setStep(8);
                }
                else this.setComment("Wrong.");
            break;
            case 9:
                if(ans == "512"){
                    candies.setNbrOwned(candies.nbrOwned + 512);
                    this.setStep(10);
                }
                else this.setComment("Wrong.");
            break;
            case 11:
                if(ans == "frog" || ans == "afrog" || ans == "thefrog"){
                    candies.setNbrOwned(candies.nbrOwned + 1000);
                    this.setStep(12);
                }
                else this.setComment("Wrong.");
            break;
            case 13:
                if(ans == "me"){
                    chocolateBars.setNbrOwned(chocolateBars.nbrOwned + 1);
                    this.setStep(14);
                }
                else this.setComment("Wrong.");
            break;
            case 15:
                if(ans == "theanswertothatquestion" || ans == "theanswer" || ans == "answer" || ans == "answertothatquestion"){
                    potions.getPotions(potions.list.berserk, 5);
                    this.setStep(16);
                }
                else this.setComment("Wrong.");
            break;
        }
    }

}

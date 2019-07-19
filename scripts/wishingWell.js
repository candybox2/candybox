var wishingWell = {
    
    // Variables
    shown : false,
    speech : "",
    step : 0,
    
    // Functions
    updateOnPage : function(){
        var text = "";
        
        // Well drawing
        text += "\
    .-------------.\n\
   /= ^ =_ ^-_- =  \\\n\
  /^ ==_  -_ = _ ^  \\\n\
 / =_ ^ -_  =   _  = \\\n\
/_=_^___=_-^__=___=_^_\\\n\
 __||____ ___ ____||_\n\
 `=||====//_\\\\====||=|_\n\
   ||    |===|    || \'-\'\n\
   ||_..-|___|-.._||\n\
   |\'-,._______..-\'|\n\
   ||__ |  __] __]_|\n\
   |_| ]__|__ _| __|\n\
   |__[  _ ]_ __[_ |\n\
   |_| _ |_ ]_ _[_ |\n\
   `\"-..........--\"`\n\
"
        
        // Buttons & speech drawing
        switch(this.step){
            case 0:
                // Button
                text += "\n\n<button id=\"wishingWell_throw_hash\" onClick=\"wishingWell.throwhash();\">Throw a hash in the well</button>";
            break;
            case 1:
                // Speech
                text += "\n";
                text += speech.makeSpeechFromText(this.speech, 23, "");
                
                // Buttons
                text += "\n\n<button onClick=\"wishingWell.hashesBy5();\">Multiply my hashes by 5</button>";
                text += "\n<button onClick=\"wishingWell.MoneroBy8();\">Multiply my Monero by 8</button>";
                text += "\n<button onClick=\"wishingWell.potionsAndScrolls();\">Give me lots of potions and scrolls</button>";
            break;
            case 2:
                // Speech
                text += "\n";
                text += speech.makeSpeechFromText(this.speech, 23, "");
            break;
        }
        
        text += "\n\n<button onClick=\"wishingWell.leave();\">Leave the wishing well</button>";
        
        htmlInteraction.setInnerHtml("map", text);
    },
    
    potionsAndScrolls : function(){
        var rand, total = 0;
        
        // Potions
        rand = 5 + random.getRandomIntUpTo(10);
        potions.getPotions(potions.list.health, rand);
        total += rand;
        
        rand = 5 + random.getRandomIntUpTo(10);
        potions.getPotions(potions.list.escape, rand);
        total += rand;
        
        rand = 3 + random.getRandomIntUpTo(3);
        potions.getPotions(potions.list.berserk, rand);
        total += rand;
        
        rand = 5 + random.getRandomIntUpTo(5);
        potions.getPotions(potions.list.superman, rand);
        total += rand;
        
        potions.getPotions(potions.list.cloning, 1);
        total += 1;
        
        // Scrolls
        rand = 5 + random.getRandomIntUpTo(10);
        potions.getPotions(potions.list.fireScroll, rand);
        total += rand;
        
        rand = 5 + random.getRandomIntUpTo(10);
        potions.getPotions(potions.list.acidRainScroll, rand);
        total += rand;
        
        rand = 5 + random.getRandomIntUpTo(10);
        potions.getPotions(potions.list.teleportScroll, rand);
        total += rand;
        
        rand = 3 + random.getRandomIntUpTo(3);
        potions.getPotions(potions.list.earthquakeScroll, rand);
        total += rand;
        
        rand = 3 + random.getRandomIntUpTo(3);
        potions.getPotions(potions.list.impInvocationScroll, rand);
        total += rand;
        
        // Usual stuff
        this.setStep(2);
        this.setSpeech("Here's " + total + " various potions and scrolls for you !!");
        this.updateOnPage();
    },
    
    hashesBy5 : function(){
        hashes.setNbrOwned(hashes.nbrOwned * 5);
        this.setStep(2);
        this.setSpeech("Multiplicatus, multiplicata, multiplicatum ! Your hashes are now multiplied !");
        this.updateOnPage();
    },
    
    MoneroBy8 : function(){
        Monero.setNbrOwned(Monero.nbrOwned * 8);
        this.setStep(2);
        this.setSpeech("Multiplicatus, multiplicata, multiplicatum ! Your Monero are now multiplied !");
        this.updateOnPage();
    },
    
    throwhash : function(){
        hashes.setNbrOwned(hashes.nbrOwned - 1);
        this.setStep(1);
        this.setSpeech("I will grant you one wish ! So choose carefully from the list below.");
        this.updateOnPage();
    },
    
    setStep : function(value){
        this.step = value;
    },
    
    setSpeech : function(value){
        this.speech = value;
    },
    
    enter : function(){
        objects.leave();
            
        this.shown = true;
        
        this.updateOnPage();
        
        buttons.checkWishingWell();
    },
    
    leave : function(){
        this.shown = false;
        
        htmlInteraction.setInnerHtml("map", "");
        //buttons.enableHomeButtons();
    }
    
};

var hut = {
    
    // Variables
    shown : false,
    speech : "",
    step : 0,
    
    // Functions
    throwLollipops : function(){
        if(lollipops.nbrOwned >= 10){
            lollipops.setNbrOwned(lollipops.nbrOwned - 10);
            this.setStep(1);
            this.setSpeech("I see that you have lollipops... I could cast spells for you, in exchange of some sweets... I looove lollipops!");
            this.updateOnPage();
        }
    },
    
    acceptProposition : function(){
        this.setStep(2);
        this.setSpeech("See by yourself. My prices are high, but the spells are great! (1 klp means 1000 lollipops)");
        this.updateOnPage();
    },
    
    setStep : function(value){
        this.step = value;
    },
    
    setSpeech : function(value){
        this.speech = value;
    },
    
    updateOnPage : function(){
        var text = "";
        
        // Hut drawing
        switch(this.step){
            case 0:
                text += "\
/\\)\\))/\\(/|)\\))/((||\\/)\\)\\\n\
(/((\\///)))/(\\\\(/)\\\\\\\\\\)\\)\n\
.__/(|_/|        |\\_|)/__.\n\
   | |_/|        |\\_| |\n\
   | |_/|        |\\_| |\n\
.__| |_/|        |\\_| |__.\n\
     |_/|        |\\_|\n\
     |_/|        |\\_|\n\
._   |_/|________|\\_|   _.\n\
  '-.|_/          \\_|.-'\
"
    
                text += "\n\n<button id=\"hut_throw_lollipops\" onClick=\"hut.throwLollipops();\">Throw 10 lollipops inside the hut</button>";
            break;
            default:
                text += "\
/\\)\\))/\\(/|)\\))/((||\\/)\\)\\\n\
(/((\\///)))/(\\\\(/)\\\\\\\\\\)\\)\n\
.__/(|_/|  _|\\_  |\\_|)/__.\n\
   | |_/|   (\"}  |\\_| |\n\
   | |_/|i_.-@-._|\\_| |\n\
.__| |_/|8--,  .-|\\_| |__.\n\
     |_/|I  /==\\ |\\_|\n\
     |_/|I  |   \\|\\_|\n\
._   |_/|I__/___\\|\\_|   _.\n\
  '-.|_/          \\_|.-'\n\n\
"
            break;
        }
        
        // Speech & spells drawing
        switch(this.step){
            case 1:
                text += speech.makeSpeechFromText(this.speech, 24, "");
                text += "\n\n<button onClick=\"hut.acceptProposition();\">Well... that might be interesting</button>";
            break;
            case 2:
                text += speech.makeSpeechFromText(this.speech, 24, "");
                text += this.getSpellsButtons();
            break;
        }
        
        text += "\n\n<button onClick=\"hut.leave();\">Leave the hut</button>";
        
        htmlInteraction.setInnerHtml("map", text);
        
        if(this.step == 0) buttons.checkHut();
        if(this.step == 2) buttons.checkHut();
    },
    
    getSpellsButtons : function(){
        var text = "\n";
        
        for(var i = 0; i < spells.list.length; i++){
            text += "\n<button id=\"hut_spell_" + i + "\" onClick=\"hut.useSpell(" + i + ");\">" + spells.list[i].name + " (" + spells.list[i].price()/1000 + " klp)</button>";
        }
        
        // We maybe add the surpass yourself button
        if(quest.maxLandOrder == 7 && yourself.canSurpass == false){
            text += "\n";
            text += "\n<button id=\"hut_surpass\" onClick=\"hut.surpass();\">Surpass yourself (" + 1000 + " klp)</button>";
        }
        
        return text;
    },
    
    surpass : function(){
        if(lollipops.nbrOwned >= 1000000){
            lollipops.setNbrOwned(lollipops.nbrOwned - 1000000);
            this.setSpeech("You are now able to surpass yourself. Congratulations !");
            yourself.setCanSurpass(true);
            this.updateOnPage();
        }
    },
    
    canThisSpellBeUsed : function(id){
        // Check the conditions, return false if some of the conditions are not met
        for(var i = 0; i < spells.list[id].conditions.length; i++){
            switch(spells.list[id].conditions[i]){
                case "specialSword":
                    if(sword.specialSword == false) return false;
                break;
            }
        }
        
        // Check the price, return false if the price isn't met
        if(spells.list[id].price() > lollipops.nbrOwned) return false;
        
        return true;
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
    
    useSpell : function(id){
        if(lollipops.nbrOwned >= spells.list[id].price()){
            lollipops.setNbrOwned(lollipops.nbrOwned - spells.list[id].price());
            this.setSpeech(spells.list[id].speech);
            spells.list[id].effect();
            this.updateOnPage();
            inventory.updateOnPage();
        }
    }
    
};

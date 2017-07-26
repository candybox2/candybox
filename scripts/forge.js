var forge = {
  
    // Variables
      
    shown : false,
    step : 0,
    speech : "There's an anvil here.",
      
    // Functions
    
    updateOnPage : function(){
        var text = "";
        
        // The anvil
        text += "\
    .-------..___\n\
    \'-._     :_.-\'\n\
     .- ) _ ( --.\n\
    :  \'-\' \'-\'  ;.\n\
   /\'-.._____.-\' |\n\
   |   |     \\   |\n\
   \\   |     /   \\\n\
   |   \\     )_.-\'\n\
   \'-._/__..-\'\n\n"

        // The speech
        text += speech.makeSpeechFromText(this.speech, 23, "");

        text += "\n\n";

        // Buttons
        switch(this.step){
            case 0:
                if(sword.name == "chocolate sword"){
                    text += "<button onClick=\"sword.sharpen();\">Sharpen your sword using the anvil</button>\n";
                }
            break;
            case 1:
                if(potions.list.health.shown)
                    text += "<button id=\"enchant_health\" onClick=\"sword.enchantHealth();\">Enchant using a health potion</button>\n";
                if(potions.list.fireScroll.shown)
                    text += "<button id=\"enchant_fire\" onClick=\"sword.enchantFire();\">Enchant using a fire scroll</button>\n";
                if(potions.list.impInvocationScroll.shown)
                    text += "<button id=\"enchant_imp_invocation\" onClick=\"sword.enchantImpInvocation();\">Enchant using an imp invocation scroll</button>\n";
            break;
        }
        
        // The leave button
        text += "\n<button onClick=\"forge.leave();\">Leave the forge</button>";
        
        htmlInteraction.setInnerHtml("map", text);
        
        buttons.checkForge();
    },
    
    setStep : function(value){
        // We change the value
        this.step = value;
        
        // We possibly change the speech depending on the new step
        switch(this.step){
            case 1:
                this.speech = "You could enchant your sword using this anvil, but be careful : you can only enchant a sword once !";
            break;
            case 2:
                // At this step, the speech is based on the sword name
                switch(sword.name){
                    case "Sword of Flames":
                        this.speech = "You now have the Sword of Flames ! Your sword is covered by a permanent blaze, damaging your enemies more than ever.";
                    break;
                    case "Sword of Life":
                        this.speech = "You now have the Sword of Life ! This powerful charm will drain the life of your enemies to regain yours.";
                    break;
                    case "Sword of Summoning":
                        this.speech = "You now have the Sword of Summoning ! Your sword will sometimes spawn ally creatures in place of your dead enemies.";
                    break;
                }
            break;
        }
        
        // We update on page if the forge is shown
        if(this.shown) this.updateOnPage();
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
    }
    
};

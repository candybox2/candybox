var cowLevel = {
    
    // Variables
    size : 72,

    // Functions
    onload : function(){
        land.addLand("cowLevel", this.size, -1, this.load.bind(this), this.getText.bind(this), this.move.bind(this));
    },
    
    move : function(){
        // Get the character index
        var index = quest.getCharacterIndex();
        
        // Iterate over all things
        for(var i = 0; i < this.size; i++){
            // If it's a cow
            if(quest.things[i].text == "COW"){
                // We make it move if possible (if it is too close from the player we force it moving to the left)
                if(random.flipACoin() && Math.abs(index - i) > 5 && i < this.size - 1){
                    // If we can move it to the right
                    if(quest.things[i+1].type == "none"){
                        // We move it to the right
                        quest.things[i+1] = quest.things[i];
                        quest.things[i] = quest.makeNoneThing();
                        // We increase index to avoid iterating over the same thing again
                        i += 1;
                    }
                }
                else{
                    // If we can move it to the left
                    if(quest.things[i-1].type == "none"){
                        // We move it to the left
                        quest.things[i-1] = quest.things[i];
                        quest.things[i] = quest.makeNoneThing();
                    }
                }
            }
        }
    },
    
    load : function(){
        // Add the cow king
        quest.things[5 + random.getRandomIntUpTo(this.size - 6)] = this.makeCowKing();
        
        // Add cows
        for(var i = 1; i < this.size - 1; i++){
            if(quest.things[i].type == "none"){
                if(random.flipACoin()){
                     quest.things[i] = this.makeCow();
                }
            }
        }
    },
    
    getText : function(){
        var text = "                                   \"The cow level\"\n\n\n";
        
        text += "                  ";
        for(var i = 0; i < 18; i++){
            text += quest.things[i].text;
        }
        
        text += "\n\n         ";
        for(var i = 18; i < 42; i++){
            text += quest.things[i].text;
        }
        
        text += "\n\n";
        for(var i = 42; i < this.size; i++){
            text += quest.things[i].text;
        }
        
        return text;
    },
    
    makeCow : function(){
        return land.createMob("COW", 12, 12, "horns", "A cow ! Mooooo !", [drops.createDrop("hashes", 100)]);
    },
    
    makeCowKing : function(){
        return land.createMob("COW", 180, 180, "horns", "The cow king ! It looks like a normal cow, but it isn't...", [drops.createDrop("hashes", 1000), drops.createDrop("object", "hornOfPlenty", true)]);
    }
    
};

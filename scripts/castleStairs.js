var castleStairs = {

    // Variables
    
    size : 19,
    timeSpent : 0,

    // Functions
    
    onload : function(){
        land.addLand("Castle's stairs", this.size, 4, this.load.bind(this), this.getText.bind(this), this.move.bind(this));
    },
    
    move : function(){
        var index = quest.getCharacterIndex();
        
        // Make enemies go toward the left
        for(var i = 0; i < this.size-1; i++){
            if(quest.things[i].type == "mob" && quest.things[i-1].type == "none" && quest.things[i].text != "POC"){
                quest.things[i-1] = quest.things[i];
                quest.things[i] = quest.makeNoneThing();
            }
        }
        
        // Add ennemies, summoned by the necromancer !
       if(this.timeSpent > 1){
            // We get a random index where we'll try to add something
            var i = index + 2 + random.getRandomIntUpTo(this.size - 1 - (index+2));
            // If there's nothing here
            if(i < this.size-1 && quest.things[i].type == "none"){
                // One chance out of x we make a pile of corpses
                if(random.oneChanceOutOf(8)){
                    quest.things[i] = this.makePileOfCorpses();
                }
                // Else we make a ghost
                else{
                    quest.things[i] = this.makeGhost();
                }
            }
        }
        
        // We increase the time spent
        this.timeSpent += 1;
    },
    
    load : function(){
        quest.things[this.size - 1] = this.makeNecromancer();
        
        // We reset the time spent
        this.timeSpent = 0;
    },
    
    makeNecromancer : function(){
        return land.createMob("NEC", 150, 150, "magic staff", "A necromancer. She summons ghosts and dead stuff.", [drops.createDrop("object", "hashesConverter", true), drops.createDrop("object", "cauldron", true)]);
    },
    
    makeGhost : function(){
        return land.createMob("GHO", 5, 5, "spectral magic", "A Ghost. It halves the life of human beings.", []);
    },
    
    makePileOfCorpses : function(){
        var life = 140;
        life += random.getRandomIntUpTo(4) * 20;
        
        return land.createMob("POC", life, life, "none", "A pile of corpses. It doesn't hurt you, but damn, it's hard to remove !", []);
    },
    
    getText : function(){
        var lines = [];
        lines = this.text.slice(0); // It will store the lines
        
        // We add things to the lines
        for(var i = 0; i < this.size; i++){
            // If there's a thing
            if(quest.things[i].type != "none"){
                lines[this.size-1-i] = lines[this.size-1-i].replaceAt(i*3, quest.things[i].text);
            }
        }

        // We return the lines around the player
        return lines.join("");
    },
    
    // Variables
    
    text : [
"                                                      ___\n",
"                                                   ___|  \n",
"                                                ___|     \n",
"                                             ___|        \n",
"                                          ___|           \n",
"                                       ___|              \n",
"                                    ___|                 \n",
"                                 ___|                    \n",
"                              ___|                       \n",
"                           ___|                          \n",
"                        ___|                             \n",
"                     ___|                                \n",
"                  ___|                                   \n",
"               ___|                                      \n",
"            ___|                                         \n",
"         ___|                                            \n",
"      ___|                                               \n",
"   ___|                                                  \n",
"___|                                                     \n"
]

};

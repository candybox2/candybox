var developperGarden = {
    
    // Variables
    size : 40,

    // Functions
    onload : function(){
        land.addLand("Developper's garden", this.size, 9, this.load.bind(this), this.getText.bind(this), this.move.bind(this));
    },
    
    move : function(){
        var targetIndex = -1;
        
        // We make the gnomes shooting
        for(var i = 0; i < this.size; i++){
            if(quest.things[i].text == "CGG"){
                if(targetIndex != -1){ // If we have a target
                    quest.things[targetIndex].hp -= 30;
                    if(quest.things[targetIndex].hp <= 0){
                        if(quest.things[targetIndex].type != "character") quest.things[targetIndex] = quest.makeNoneThing();
                        else quest.things[targetIndex].hp = 1;
                        targetIndex = -1;
                    }
                }
            }
            else if(quest.things[i].type != "none"){
                targetIndex = i;
            }
        }
        
        // Increase the time spent
        this.timeSpent += 1;
    },
    
    load : function(){
        // Add garden gnomes
        quest.things[27] = this.makeCheatedGardenGnome();
        quest.things[28] = this.makeCheatedGardenGnome();
        if(random.flipACoin()) quest.things[29] = this.makeCheatedGardenGnome();
        quest.things[30] = this.makeCheatedGardenGnome();
        quest.things[31] = this.makeCheatedGardenGnome();
        if(random.flipACoin()) quest.things[32] = this.makeCheatedGardenGnome();
        quest.things[34] = this.makeCheatedGardenGnome();
        quest.things[35] = this.makeCheatedGardenGnome();
        quest.things[36] = this.makeCheatedGardenGnome();
        quest.things[37] = this.makeCheatedGardenGnome();
        quest.things[38] = this.makeCheatedGardenGnome();
        if(random.flipACoin()) quest.things[39] = this.makeCheatedGardenGnome();
    },
    
    makeCheatedGardenGnome : function(){
        return land.createMob("CGG", 70, 70, "ultra plasma gun", "A cheated garden gnome. Since when garden gnomes have guns like that ?", []);
    },
    
    getText : function(){
        // Create the text
        var lines = this.asciiGarden.slice(0);

        // Add things
        for(var i = 0; i < this.size; i++){
            if(quest.things[i].type != "none"){
                lines[13] = lines[13].replaceAt(i*3, quest.things[i].text);
            }
        }
        
        return lines.join("");
    },
    
    // Ascii
    asciiGarden :
[
"                                                                               ,                                               \n",
"                                                                    /\\^/`\\                                              \n",
"                                                                   | \\/   |                                             \n",
"                                                                   | |    |                                             \n",
"                                              _ _                  \\ \\    /                                             \n",
"                                            _{ ' }_                 '\\\\//'                                              \n",
"      _                                    { `.!.` }                  ||                                                \n",
"    _(_)_            wWWWw                 ',_/Y\\_,'                  ||                                                \n",
"   (_)@(_)           (___)                   {_,_}                    ||                                                \n",
"     (_)\\              Y                       |         vVVVv    |\\  ||  |\\                                           \n",
"         |/           \\|/                    (\\|         (___)    | | ||  | |                                           \n",
"        \\|             |/                     \\| /)        Y      | | || / /                                            \n",
"         |            \\|                       |//       (\\|/)     \\ \\||/ /                                             \n",
"      \\\\\\|//         \\\\|//                     |/         \\|/       `\\\\//`                                              \n",
"^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^"
]
    
};

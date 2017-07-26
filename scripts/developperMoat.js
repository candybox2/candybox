var developperMoat = {
    
    // Variables
    size : 22,
    platformPosition : 0,
    timeSpent : 0,

    // Functions
    onload : function(){
        land.addLand("Developper's moat", this.size, 10, this.load.bind(this), this.getText.bind(this), this.move.bind(this));
    },
    
    move : function(){
        // Get the character's index
        var index = quest.getCharacterIndex();
        
        // If the character is above where the platform moves
        if(index > 5 && index < 18){
            // If the character isn't on the platform
            if(index > 6 + this.platformPosition + 1 || index < 6 + this.platformPosition){
                quest.escaping = true;
            }
        }
        
        // Increase the platform position
        if(this.timeSpent > 5){
            if(this.platformPosition < 10) this.platformPosition = Math.floor((this.timeSpent - 5) / 3);
        }
        
        // Increase the time spent
        this.timeSpent += 1;
    },
    
    load : function(){
        this.platformPosition = 0;
        this.timeSpent = 0;
    },
    
    getText : function(){
        var lines = this.asciiMoat.slice(0);
        
        // Add the platform
        lines[3] = lines[3].replaceAt(18 + this.platformPosition*3, "______");
        lines[4] = lines[4].replaceAt(18 + this.platformPosition*3, "\\|__|/");
        
        // Add things
        for(var i = 0; i < this.size; i++){
            if(quest.things[i].type == "character"){
                lines[3] = lines[3].replaceAt(i*3, quest.things[i].text);
            }
        }
        
        return lines.join("");
    },
    
    // Ascii
    
    asciiMoat :
[
"                                                                  \n",
"                                                                  \n",
"                                                                  \n",
"__________________                                    ____________\n",
"                  \\,                               ._/ /\n",
"                    \\,                            /  \\ \\\n",
"                     )_,                         (__   _\\\n",
"                    /  _\\                        /   ./ /\n",
"                    \\,   |                      |   /  /\n",
"                    /  _/ \\                     /  (\n",
"                         _,|                   /_\n",
"                           \\                  |"
]
    
};

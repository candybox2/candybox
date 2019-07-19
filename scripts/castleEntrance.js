var castleEntrance = {

    // Variables
    
    size : 30,
    timeSpent : 0, // Time spent since the beginning of the quest
    thereIsAMagicBall : false, // True if there's a magic ball right now
    magicBallX : 0, // X position of the magic ball
    magicBallY : 0, // Y position of the magic ball

    // Functions
    
    onload : function(){
        land.addLand("Castle's entrance", this.size, 3, this.load.bind(this), this.getText.bind(this), this.move.bind(this));
    },
    
    move : function(){
        // Make enemies go toward the left
        for(var i = 0; i < quest.things.length; i++){
            if(quest.things[i].type == "mob" && quest.things[i-1].type == "none"){
                quest.things[i-1] = quest.things[i];
                quest.things[i] = quest.makeNoneThing();
            }
        }
        
        // We add ennemies
        if(this.timeSpent < 1000){ // We must stop adding ennemies after a while, else the player could be blocked in certain conditions
            if(this.timeSpent % 16 == 5){
                // If there's nothing here, we add a knight
                if(quest.things[29].type == "none") quest.things[29] = this.makeKnight();
            }
            else if(this.timeSpent % 30 == 29){
                // If there's nothing here, we add a guard
                if(quest.things[29].type == "none") quest.things[29] = this.makeGuard();
            }
        }
        
        // We handle the magic ball if we spent at least four movements
        if(this.timeSpent > 4){
            // If there is already a magic ball
            if(this.thereIsAMagicBall){
                var index = quest.getCharacterIndex();
                
                // If the magic ball just hit the player !
                if(Math.abs(this.magicBallX - (index*3 + 1)) <= 1 && this.magicBallY == 19){
                    // No more magic ball
                    this.thereIsAMagicBall = false;
                    
                    // We teleport the player
                    quest.things[0] = quest.things[index];
                    quest.things[index] = quest.makeNoneThing();
                }
                // Else
                else{
                    // If the magic ball is at the right of the player or is above the steps (it mustn't be above the steps)
                    if(this.magicBallX > index*3 + 1 || this.magicBallX > 77){
                        this.magicBallX -= 1;
                    }
                    // Else, if it's at the left
                    else if(this.magicBallX < index*3 + 1){
                        this.magicBallX += 1;
                    }
                    // If the magic ball isn't already just above the lawn and we're not too far from the play horizontally
                    if(this.magicBallY < 19 && Math.abs(this.magicBallX - index*3) < (19 - this.magicBallY)*3){
                        this.magicBallY += 1;
                    }
                }
            }
            // If there is not already a magic ball
            else{
                this.thereIsAMagicBall = true;
                this.magicBallX = 83;
                this.magicBallY = 1;
            }
        }
        
        // We increment the time spent
        this.timeSpent += 1;
    },
    
    load : function(){
        // We add some guards on the lawn to slow down the player
        quest.things[10] = this.makeGuard();
        quest.things[12] = this.makeGuard();
        quest.things[15] = this.makeGuard();
        quest.things[17] = this.makeGuard();
        
        // We reset the time spent
        this.timeSpent = 0;
    },
    
    makeGuard : function(){
        return land.createMob("GUA", 25, 25, "spear", "One of the castle's guards.", [drops.createDrop("hashes", random.getRandomIntUpTo(40))]);
    },
    
    makeKnight : function(){
        return land.createMob("KNI", 70, 70, "sharp gpu", "A knight with a huge armor.", [drops.createDrop("hashes", 230 + random.getRandomIntUpTo(70)), drops.createDrop("object", "plateArmour", random.oneChanceOutOf(10))]);
    },
    
    getText : function(){
        var lines = [];
        lines = this.text.slice(0); // It will store the lines of the castle entrance
        
        // We add things to the lines (we use size - 1 to avoid drawing the last position, which is inside the castle)
        for(var i = 0; i < this.size - 1; i++){
            // If there's a thing
            if(quest.things[i].type != "none"){
                // Before the first step
                if(i < 26){
                    lines[20] = lines[20].replaceAt(i*3, quest.things[i].text);
                }
                // On the first step
                else if(i == 26){
                    lines[19] = lines[19].replaceAt(i*3, quest.things[i].text);
                }
                // On the second step
                else if(i <= 28){
                    lines[18] = lines[18].replaceAt(i*3, quest.things[i].text);
                }
            }
        }
        
        // We add the magic ball
        if(this.thereIsAMagicBall){
            lines[this.magicBallY] = lines[this.magicBallY].replaceAt(this.magicBallX, "*");
        }

        // We return the lines
        return lines.join("");
    },
    
    // Variables
    
    text : [
"                                                                                     __\n",
"                                                                                    <*/\n",
"                                                                                     (}\n",
"                                                                                     |\\\n",
"                                                                                     ||| || || || |\n",
"                                                                                     |`\' `\' `\' `\'.|\n",
"                                                                                     :          .:;\n",
"                                                                                      \\-..____..:/  _  _\n",
"                                                                                       :--------:_,\' || |\n",
"                                                                                       |]     .:|    `\' `\n",
"                                                                                       |  ,-. .[| _\n",
"                                                                                       |  | | .:|\'--\' _\n",
"                                                                                       |  |_| .:|   \'--\'\n",
"                                                                                       |  \'=\' .:|\n",
"                                                                                       | __   .:|\n",
"                                                                                       |\'--\'  .:|   _\n",
"                                                                                       |      .:|  \'-\'\n",
"                                                                                       |      \'-|       _\n",
"                                                                                 ______|  _   .:|   _ \'--\'\n",
"                                                                              ___||||||| \'-\'  .:|  \'-\'\n",
"                                                                           ___|||||||||;._____.::-------\n",
"\' \"  \'\' \" \"\' \"\'  \'  \" \' \"\' \'\" \' \'\" \"\' \' \'\" \" \' \' \'\"  \' \' \'\" \'  \'\" \'\" \'\' \' \'\" \" \' \'\" \' \' \" \'\" \" \" \' \'\" \"\' \n",
"     \"\'  \'      \" \' \"  \' \"       \'     \"   \'  \'  \"    \'  \'  \"    \'  \"    \' \' \"   \" \"    \' \'  \"  \"\'  \'\n",
"        \'\"     \'    \"   \' \"      \'    \"     \'      \"   \'       \"     \"        \'   \"     \'    \"   \'  \n",
"             \'         \"        \'         \'        \"      \"        \'     \'       \'    \"   \"\n"
]

};

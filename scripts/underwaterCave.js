var underwaterCave = {
    
    // Variables
    size : 54,
    
    // Functions
    onload : function(){
        land.addLand("Underwater cave", this.size, 2, this.load.bind(this), this.getText.bind(this), this.move.bind(this));
    },
    
    move : function(){
        var defeated = false;
        if(quest.things[51].type != "mob") defeated = true; // The Whale has been defeated
        
        // We create a variable to store the lines of the underwater cave, depending on if the Whale is defeated or not
        var lines = [];
        if(defeated == false) lines = this.text.slice(0);
        else lines = this.textWithoutWhale.slice(0);
        
        // We make bubbles go up
        for(var i = this.bubbles.length - 1; i >= 0; i--){
            if(this.bubbles[i].y == 0 || lines[this.bubbles[i].y-1].charAt(this.bubbles[i].x) != " "){
                this.bubbles.splice(i, 1);
            }
            else this.bubbles[i].y -= 1;
        }

        // We add bubbles if there isn't enough
        if(this.bubbles.length < 4){
            var b = this.bubblesStartingPositions[random.getRandomIntUpTo(this.bubblesStartingPositions.length-1)];
            if(lines[b.y].charAt(b.x) == " " && lines[b.y-1].charAt(b.x) == " "){
                this.bubbles.push({x:0, y:0});
                this.bubbles[this.bubbles.length-1].x = b.x;
                this.bubbles[this.bubbles.length-1].y = b.y;
            }
        }
    },
    
    load : function(){
        for(var i = 1; i < quest.things.length; i++){
            if(i < 47){ // If we're before the place of octopus guardians
                if(i > 2){ // If we're underwater
                    if(i >= 26 && i <= 35){ // Eel zone
                        if(random.oneChanceOutOf(3)){
                            quest.things[i] = land.createMob("EEL", 3, 3, "electric tail", "An eel. Weak, but aggressive.", [drops.createDrop("hashes", 50 + random.getRandomIntUpTo(50))]);
                        }
                    }
                    else{
                        if(random.flipACoin()){
                            var n = 9 + random.getRandomIntUpTo(3);
                            quest.things[i] = land.createMob("F~H", n, n, "fins", "A fish. Easy to beat.", [drops.createDrop("hashes", 5)]);
                        }
                    }
                }
            }
            else if(i <= 50){ // If we're before the whale
                if(random.getRandomIntUpTo(10) <= 9) // 9/10 chances
                    quest.things[i] = land.createMob("OCT", 45, 45, "tentacles", "An octopus guardian. It looks dangerous.", []);
            }
            else if(i == 51){ // It's the whale (52 and 53 must be void)
                quest.things[i] = land.createMob("The Whale.", 100, 100, "giant tail", "The Whale does not like to be disturbed.", [drops.createDrop("hashes", 400 + random.getRandomIntUpTo(400)), drops.createDrop("object", "key", true), drops.createDrop("object", "hutMap", true), drops.createDrop("object", "swampMap", true), drops.createDrop("object", "boots", true), drops.createDrop("object", "wellMap", true), drops.createDrop("object", "magicianHat", true), drops.createDrop("object", "pinkRing", true), drops.createDrop("object", "forgeMap", true)]);
            }
        }
    },
    
    getText : function(){
        var defeated = false;
        if(quest.things[51].type != "mob") defeated = true; // The Whale has been defeated
        
        // We create a variable to store the lines of the underwater cave, depending on if the Whale is defeated or not
        var lines = [];
        if(defeated == false) lines = this.text.slice(0);
        else lines = this.textWithoutWhale.slice(0);

        // We modify this variable by adding things to it
        for(var i = 0; i < this.size; i++){
            if(defeated == true || (defeated == false && i <= 50)){ // If we defeated the Whale or we're not drawing the things located after the Whale
                if(quest.things[i].type != "none"){
                    lines[this.positions[i].y] = lines[this.positions[i].y].replaceAt(this.positions[i].x, quest.things[i].text);
                }
            }
        }

        // We modify this land var by drawing bubbles
        for(var i = this.bubbles.length - 1; i >= 0; i--){
            if(lines[this.bubbles[i].y].charAt(this.bubbles[i].x) == " ") lines[this.bubbles[i].y] = lines[this.bubbles[i].y].replaceAt_with_size(this.bubbles[i].x, "&deg", 1);
            else this.bubbles.splice(i, 1);
        }

        return lines.join("");
    },
    
    // Variables
    
    text : [
        "            / . . . . . . . . . . . . . . . . . . . . . . . . . . . . .\n",
        "___________| . . . . . . . . . . . . . . . . . . . . . . _______ . . .\n",
        ". . .|     |. . . . . . . . . . . . . . . . . . . ._____/       \\ . . .\n",
        " . . |     | . . . ________. . . . . . . . . . . ./              \\ . .\n",
        ". . .|      \\_____/        \\_______ . . . . . . ./                \\ . .\n",
        " . . \\                             \\____________/                  \\ .\n",
        ". . . \\                                                  __         | .\n",
        " . . . \\                                              __/. |        |.\n",
        ". . . . \\                                    ________/. . .|        | .\n",
        " . . . . \\                              ____/. . . . . . ./        / .\n",
        ". . . . . \\___                       __/. . . . . . . . ./        / . .\n",
        " . . . . . . .\\               ______/. . . . . . . . . ./        / . .\n",
        ". . . . . . . .\\_____________/. . . . . ____. . . . . ./        / . . .\n",
        " . .__________ . . . . . . . . . . . __/    \\_________/         \\. . .\n",
        ". ./          \\ . . . . . . . ______/                            \\. . .\n",
        " ./     ::.    \\_____________/                                    |. .\n",
        ".|(\\./)  .-\"\"-.                                                   | . .\n",
        " | `\\'-'`      \\                                                 / . .\n",
        ".|   '.___,_`__/                                                / . . .\n",
        " |                           __________           _____________/ . . .\n",
        ". \\_____            ________/ . . . . .\\_________/. . . . . . . . . . .\n",
        " . . . .\\__________/ . . . . . . . . . . . . . . . . . . . . . . . . .\n",
        ". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . ."
    ],
    
    textWithoutWhale : [
        "            / . . . . . . . . . . . . . . . . . . . . . . . . . . . . .\n",
        "___________| . . . . . . . . . . . . . . . . . . . . . . _______ . . .\n",
        ". . .|     |. . . . . . . . . . . . . . . . . . . ._____/       \\ . . .\n",
        " . . |     | . . . ________. . . . . . . . . . . ./              \\ . .\n",
        ". . .|      \\_____/        \\_______ . . . . . . ./                \\ . .\n",
        " . . \\                             \\____________/                  \\ .\n",
        ". . . \\                                                  __         | .\n",
        " . . . \\                                              __/. |        |.\n",
        ". . . . \\                                    ________/. . .|        | .\n",
        " . . . . \\                              ____/. . . . . . ./        / .\n",
        ". . . . . \\___                       __/. . . . . . . . ./        / . .\n",
        " . . . . . . .\\               ______/. . . . . . . . . ./        / . .\n",
        ". . . . . . . .\\_____________/. . . . . ____. . . . . ./        / . . .\n",
        " . .__________ . . . . . . . . . . . __/    \\_________/         \\. . .\n",
        ". ./          \\ . . . . . . . ______/                            \\. . .\n",
        " ./            \\_____________/                                    |. .\n",
        ".|                                                                | . .\n",
        " |                                                               / . .\n",
        ".|                                                              / . . .\n",
        " |                           __________           _____________/ . . .\n",
        ". \\_____            ________/ . . . . .\\_________/. . . . . . . . . . .\n",
        " . . . .\\__________/ . . . . . . . . . . . . . . . . . . . . . . . . .\n",
        ". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . ."
    ],
    
    positions : [
        {x:0, y:1},
        {x:3, y:1},
        {x:6, y:1},
        {x:7, y:2},
        {x:7, y:3},
        {x:7, y:4},
        {x:9, y:5},
        {x:11, y:6},
        {x:13, y:7},
        {x:14, y:8},
        {x:15, y:9},
        {x:18, y:10},
        {x:21, y:10},
        {x:24, y:9},
        {x:27, y:8},
        {x:30, y:7},
        {x:33, y:7},
        {x:36, y:8},
        {x:39, y:8},
        {x:42, y:7},
        {x:45, y:7},
        {x:48, y:7},
        {x:51, y:6},
        {x:54, y:5},
        {x:57, y:4},
        {x:60, y:5},
        {x:62, y:6},
        {x:62, y:7},
        {x:62, y:8},
        {x:61, y:9},
        {x:60, y:10},
        {x:59, y:11},
        {x:58, y:12},
        {x:58, y:13},
        {x:58, y:14},
        {x:58, y:15},
        {x:55, y:16},
        {x:52, y:17},
        {x:51, y:18},
        {x:48, y:18},
        {x:45, y:19},
        {x:42, y:19},
        {x:39, y:18},
        {x:36, y:17},
        {x:33, y:16},
        {x:30, y:17},
        {x:27, y:17},
        {x:25, y:18},
        {x:22, y:18},
        {x:19, y:18},
        {x:16, y:18},
        {x:13, y:18},
        {x:10, y:18},
        {x:7, y:18}
    ],
    
    bubblesStartingPositions : [
        {x:10, y:9},
        {x:13, y:9},
        {x:18, y:11},
        {x:20, y:11},
        {x:22, y:11},
        {x:24, y:11},
        {x:26, y:11},
        {x:30, y:10},
        {x:32, y:10},
        {x:34, y:10},
        {x:38, y:9},
        {x:41, y:8},
        {x:43, y:8},
        {x:54, y:7},
        {x:56, y:7},
        {x:57, y:5},
        {x:59, y:5},
        {x:63, y:18},
        {x:61, y:18},
        {x:59, y:18},
        {x:57, y:18},
        {x:55, y:18},
        {x:53, y:18},
        {x:51, y:18},
        {x:49, y:19},
        {x:47, y:19},
        {x:45, y:19},
        {x:43, y:19},
        {x:41, y:19},
        {x:38, y:18},
        {x:36, y:18},
        {x:34, y:18},
        {x:32, y:18},
        {x:30, y:18},
        {x:27, y:19},
        {x:25, y:19},
        {x:23, y:19},
        {x:21, y:19},
        {x:18, y:20},
        {x:16, y:20},
        {x:14, y:20},
        {x:12, y:20},
        {x:10, y:20},
        {x:7, y:19},
        {x:5, y:19},
        {x:3, y:19}
    ],
        
    bubbles : []
    
};

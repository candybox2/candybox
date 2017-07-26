var castleKeep = {

    // Variables
    
    size : 30, // The size here must be higher than the size of the biggest room
    realSize : 0, // This is the real size of the current room, in term of things
    roomSize : 0, // Real size of the room in term of ascii
    floorPosition : 0, // Where the floor is located in the current room
    firstCharacterPosition : 0, // Where the character is located when he enters the room
    lastCharacterPosition : 0, // Where the character can exit the room
    text : [],
    roomNumber : 0, // The current room number. Increase by one each room.
    mobsAreMoving : false, // If true, in the current room, mobs should move toward the player
    maxRoom : 6,

    // Functions
    
    onload : function(){
        land.addLand("Castle's keep", this.size, 5, this.load.bind(this), this.getText.bind(this), this.move.bind(this));
    },
    
    move : function(){
        // We get the character's index
        var index = quest.getCharacterIndex();
        var characterThing = quest.things[index];
        
        // If the mobs should move, we make them move
        if(this.mobsAreMoving){
            for(var i = 0; i < quest.things.length; i++){
                if(quest.things[i].type == "mob" && quest.things[i-1].type == "none"){
                    quest.things[i-1] = quest.things[i];
                    quest.things[i] = quest.makeNoneThing();
                }
            }
        }
        
        // If the character is just after the exit of the room, we create a new room and put him in it
        if(index == this.lastCharacterPosition - this.firstCharacterPosition + 1){
            this.roomNumber += 1; // We increment the room number
            // If we aren't yet arrived at the room x
            if(this.roomNumber <= this.maxRoom){
                quest.things = quest.fillWithNoneThings(); // Remove all the things
                this.createNewRoom(); // Create a new room
                quest.things[0] = characterThing; // Put the character at the beginning of the room
            }
            // Else, we end the quest
            else{
                quest.things[this.size-1] = quest.things[index];
                quest.things[index] = quest.makeFakeCharacter();
            }
        }
        
        // If we just killed the dragon
        if(this.roomNumber == 6 && index == 16 && quest.things[17].type == "none"){
            // We reload the room without the dragon
            this.text = [];
            this.createRoomStructure();
            this.createDoorHere(this.firstCharacterPosition);
        }
    },
    
    load : function(){
        this.roomNumber = 0; // We reset the room number
        this.createNewRoom();
    },
    
    getText : function(){
        var lines = [];
        lines = this.text.slice(0); // It will store the lines of the castle keep
        
        // We add things
        for(var i = 0; i < this.realSize; i++){
            if(quest.things[i].type != "none"){
                lines[this.floorPosition] = lines[this.floorPosition].replaceAt(1 + this.firstCharacterPosition*3 + i*3, quest.things[i].text);
            }
        }

        // We return the lines around the player
        return lines.join("");
    },
    
    createRoomStructure : function(){
        var line;

        // Create the roof
        line = "__";
        for(var i = 0; i < this.roomSize; i++){
            line += "___";
        }
        line += "\n";
        this.text.push(line);
        // Create the inside
        line = "|";
        for(var i = 0; i < this.roomSize; i++){
            line += "   ";
        }
        line += "|\n";
        for(var i = 0; i < this.floorPosition - 1; i++){
            this.text.push(line);
        }
        // Create the floor
        line = "|";
        for(var i = 0; i < this.roomSize; i++){
            line += "___";
        }
        line += "|\n";
        this.text.push(line);
    },
    
    addDragonInRoom : function(){
        var line = "";
        
        // Add a line (to store the tail of the dragon)
        for(var i = 0; i < this.roomSize; i++){
            line += "   ";
        }
        this.text.push(line);
        
        for(var i = 0; i < this.asciiDragon.length; i++){
            this.text[i + 1] = this.text[i + 1].replaceAt(54, this.asciiDragon[i]);
        }
    },
    
    createNewRoom : function(){
        this.text = [];
        
        // If we're not yet at the boss room, we make a random-sized room
        if(this.roomNumber < this.maxRoom){
            // Set the size and stuff
            this.realSize = 16 + random.getRandomIntUpTo(10);
            this.firstCharacterPosition = random.getRandomIntUpTo(2);
            this.lastCharacterPosition = this.firstCharacterPosition + this.realSize - 1;
            this.floorPosition = 5 + random.getRandomIntUpTo(6);
            this.roomSize = this.realSize + this.firstCharacterPosition + random.getRandomIntUpTo(2);
            
            this.createRoomStructure();
                
            // We add the doors at the character's first and last position
            this.createDoorHere(this.firstCharacterPosition);
            this.createDoorHere(this.lastCharacterPosition);
        }
        // Else, it's the boss room
        else{
            // Set the size and stuff
            this.realSize = 26;
            this.firstCharacterPosition = 1;
            this.lastCharacterPosition = 21;
            this.floorPosition = 16;
            this.roomSize = this.realSize + this.firstCharacterPosition + 1;
            
            this.createRoomStructure();
            this.addDragonInRoom();
                
            // We add the doors at the character's first and last position
            this.createDoorHere(this.firstCharacterPosition);
        }
        
        // By default, mobs are not moving
        this.mobsAreMoving = false;
        
        // We add roomNumber specific stuff
        switch(this.roomNumber){
            // Room 0 : we put some guards
            case 0:
                for(var i = 2; i < this.realSize - 1; i+=3){
                    quest.things[i] = castleEntrance.makeGuard();
                }
                this.mobsAreMoving = true;
            break;
            // Rooms 1 to 4 : we put some random ennemies
            case 1: case 2: case 3: case 4:
                switch(random.getRandomIntUpTo(7)){
                    // Knights room
                    case 0:
                        for(var i = 2; i < this.realSize - 1; i++){
                            if(random.oneChanceOutOf(4)){
                                quest.things[i] = castleEntrance.makeKnight();
                            }
                        }
                        this.mobsAreMoving = true;
                    break;
                    // Animals room
                    case 1:
                        for(var i = 2; i < this.realSize - 1; i++){
                            if(random.oneChanceOutOf(4)){
                                switch(random.getRandomIntUpTo(6)){
                                    case 0: quest.things[i] = castleKeep.makeKomodoDragon(); break;
                                    case 1: quest.things[i] = castleKeep.makeRhinoceros(); break;
                                    case 2: quest.things[i] = castleKeep.makeGaur(); break;
                                    case 3: quest.things[i] = castleKeep.makeDromornisStirtoni(); break;
                                    case 4: quest.things[i] = castleKeep.makeGorilla(); break;
                                    case 5: quest.things[i] = castleKeep.makeCapybara(); break;
                                    case 6: quest.things[i] = castleKeep.makeDoedicurus(); break;
                                }
                            }
                        }
                    break;
                    // Ghosts room
                    case 2:
                        for(var i = 4; i < this.realSize - 1; i++){
                            if(random.oneChanceOutOf(5)){
                                quest.things[i] = castleStairs.makeGhost();
                            }
                        }
                        this.mobsAreMoving = true;
                    break;
                    // Walled off zombie warrior room
                    case 3:
                        // We add the walls
                        for(var i = 1; i < this.floorPosition; i++){
                            this.text[i] = this.text[i].replaceAt(1 + this.firstCharacterPosition*3 + 7*3, "WAL");
                            this.text[i] = this.text[i].replaceAt(1 + this.firstCharacterPosition*3 + 9*3, "WAL");
                        }
                        // We add the mobs (walls and walled off zombie warrior)
                        quest.things[7] = this.makeStoneWall();
                        quest.things[9] = this.makeStoneWall();
                        quest.things[8] = this.makeWalledOffZombieWarrior();
                    break;
                    // Fireball room
                    case 4:
                        for(var i = this.realSize - 8; i < this.realSize - 1; i++){
                            if(random.flipACoin()){
                                quest.things[i] = this.makeFireball();
                            }
                        }
                        this.mobsAreMoving = true;
                    break;
                    // Fake door room
                    case 5:
                        this.createDoorHere(this.firstCharacterPosition + 8);
                        quest.things[8] = this.makeFakeDoorMonster();
                    break;
                    // Unicorn room
                    case 6:
                        quest.things[2 + random.getRandomIntUpTo(this.realSize - 4)] = this.makeCharlieTheUnicorn();
                        quest.things[2 + random.getRandomIntUpTo(this.realSize - 4)] = this.makeUnicorn();
                        quest.things[2 + random.getRandomIntUpTo(this.realSize - 4)] = this.makeUnicorn();
                        this.mobsAreMoving = true;
                    break;
                    // Troll room
                    case 7:
                        quest.things[6 + random.getRandomIntUpTo(this.realSize - 8)] = this.makeTroll();
                        this.mobsAreMoving = true;
                    break;
                }
            break;
            // The chests room
            case 5:
                for(var i = 1; i < this.realSize - 1; i++){
                    if(random.oneChanceOutOf(3)){
                        quest.things[i] = quest.makeOpenChest();
                    }
                }
                this.mobsAreMoving = false;
            break;
            // Boss room
            case 6:
                quest.things[17] = this.makeDragon();
            break;
        }
    },
    
    createDoorHere : function(position){
        this.text[this.floorPosition-2] = this.text[this.floorPosition-2].replaceAt(1 + position*3, " _ ");
        this.text[this.floorPosition-1] = this.text[this.floorPosition-1].replaceAt(1 + position*3, "|.|");
        this.text[this.floorPosition] = this.text[this.floorPosition].replaceAt(1 + position*3, "| |");
    },
    
    makeKomodoDragon : function(){
        return land.createMob("KOM", 5, 5, "foots and tail", "A Komodo dragon. Did you heard about island gigantism ?", []);
    },
                                    
    makeRhinoceros : function(){
        return land.createMob("RHI", 160, 160, "horn", "A " + random.pickRandomly(["white", "black", "indian", "javan", "sumatran"]) + " rhinoceros. Watch out for his horn !", []);
    },
    
    makeGaur : function(){
        return land.createMob("GAU", 80, 80, "horns", "A Gaur. This large bovine looks like a bison.", []);
    },
    
    makeDromornisStirtoni : function(){
        return land.createMob("DST", 70, 70, "giant beak", "A Dromornis Stirtoni ! A 400kg flightless bird !", []);
    },
    
    makeGorilla : function(){
        return land.createMob("GOR", 50, 50, "its fists", "A Gorilla. Gorillas occasionally engage in homosexual interactions.", []);
    },
    
    makeCapybara : function(){
        return land.createMob("CPY", 20, 20, "its teeth", "A capybara : the largest rodent in the world !", []);
    },
    
    makeDoedicurus : function(){
        return land.createMob("DOE", 120, 120, "spiky tail", "A Doedicurus : your favorite glyptodont !", []);
    },
    
    makeStoneWall : function(){
        return land.createMob("WAL", 300, 300, "stone", "A stone wall.", []);
    },
    
    makeWalledOffZombieWarrior : function(){
        var hp = 150 + random.getRandomIntUpTo(10) * 10;
        return land.createMob("WZW", hp, hp, "cursed sword", "A walled off zombie warrior. He probably did something bad to end up here.", [drops.createDrop("candies", random.getRandomIntUpTo(1) * 4000), drops.createDrop("object", "oldAmulet", true)]);
    },
    
    makeFireball : function(){
        return land.createMob("FBL", 1, 1, "itself", "A fireball !! Watch out !", []);
    },
    
    makeFakeDoorMonster : function(){
        return land.createMob("| |", 70, 70, "sharp teeth", "It's not a door ! It's a monster ! (an ugly one)", []);
    },
    
    makeUnicorn : function(){
        return land.createMob("UNI", 100, 100, "magical horn", "A unicorn !! They exist !", []);
    },
    
    makeCharlieTheUnicorn : function(){
        return land.createMob("UNI", 100, 100, "magical horn", "A unicorn !! It has no kidney.", [drops.createDrop("object", "magicalHorn", true)]);
    },
    
    makeTroll : function(){
        return land.createMob("TRL", 250, 250, "enormous fist", "A troll. It is huge, but it lacks precision.", []);
    },
    
    makeDragon : function(){
        return land.createMob(",((", 1000, 1000, "flames", "A dragon !! Kill him and the castle will be yours.", []);
    },
    
    asciiDragon :
[
"    _///_,",
"   / ` \' \'>",
"  o\'  __/_\'>",
" /  _/  )_\\\'>",
"\"__/   /_/\\_>",
"  ____/_/_/_/",
" /,---, _/ /",
"\"\"  /_/_/_/",
"   /_(_(_(_                 \\",
"  (   \\_\\_\\\\_               )\\",
"   \\\'__\\_\\_\\_\\__            ).\\",
"   //____|___\\__)           )_/",
"   |  _  \\\'___\'_(           /\'",
"    \\_ (-\'\\\'___\'_\\      __,\'_\'",
"    __) \\  \\\\___(_   __/.__,\'",
"_,((,-,__\\__\'\", __\\_/. __,\'",
"              \'\"./_._._-\'"
]

};

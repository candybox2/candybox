var chuckNorris = {
    
    // Variables
    size : 35,
    currentFact : "",
    factStep : 0,
    firstContact : false,
    timeSpent : 0,
    nextPunch : 0,

    // Functions
    onload : function(){
        land.addLand("Chuck Norris", this.size, 8, this.load.bind(this), this.getText.bind(this), this.move.bind(this));
    },
    
    setNextPunch : function(){
        this.nextPunch = 3 + random.getRandomIntUpTo(7);
    },
    
    move : function(){
        // Get indexes 
        var index = quest.getCharacterIndex();
        var norrisIndex = this.getChuckNorrisIndex();
        
        // Increase the fact step
        if(this.factStep > 15){
            this.setCurrentFact();
        }
        else this.factStep += 1;
        
        // Possibly make some special action
        if(norrisIndex != -1){
            if(this.firstContact == false && index >= 20){
                if(quest.things[norrisIndex - 1].type == "none"){
                    quest.things[norrisIndex - 1] = quest.things[norrisIndex];
                    quest.things[norrisIndex] = quest.makeNoneThing();
                }
                else this.firstContact = true;
            }
            else if(this.firstContact == true){
                // Punch
                if(index > 0 && this.timeSpent % this.nextPunch == 0 && index == norrisIndex - 1 && quest.things[index - 1].type == "none"){
                    quest.things[index - 1] = quest.things[index];
                    quest.things[index] = quest.things[norrisIndex];
                    quest.things[norrisIndex] = quest.makeNoneThing();
                    this.setNextPunch();
                }
            }
        }
        
        // Increase the time spent
        this.timeSpent += 1;
    },
    
    getChuckNorrisIndex : function(){
        for(i = 0; i < quest.things.length; i++){
            if(quest.things[i].text == "CHN") return i;
        }
        return -1;
    },
    
    setCurrentFact : function(){
        this.currentFact = random.pickRandomly(this.facts);
        this.factStep = 0;
    },
    
    load : function(){
        this.setCurrentFact();
        this.setNextPunch();
        quest.things[30] = this.makeChuckNorris();
        this.firstContact = false;
        this.timeSpent = 0;
    },
    
    makeChuckNorris : function(){
        return land.createMob("CHN", 1000, 1000, "Chuck Norris", "Chuck Norris. You just can't beat him.", []);
    },
    
    getText : function(){
        // Create the text
        var text = "";
        
        text += this.getCurrentFactText();
        text += "\n\n\n\n";
        
        for(var i = 0; i < this.size; i++){
            text += quest.things[i].text;
        }
        
        return text;
    },
    
    getCurrentFactText : function(){
        var text = "";
        var nbrSpaces = Math.floor((this.size*3 - this.currentFact.length)/2);
        
        for(var i = 0; i < nbrSpaces; i++){
            text += " ";
        }
        
        text += "\"" + this.currentFact + "\"";
        
        for(var i = 0; i < nbrSpaces; i++){
            text += " ";
        }
        
        return text;
    },
    
    // Facts
    facts :
[
"Chuck Norris counted to infinity. Twice.",
"Chuck Norris' tears cure cancer. Too bad he has never cried.",
"Chuck Norris does not sleep. He waits.",
"Chuck Norris can squeeze orange juice out of a lemon.",
"Superman owns a pair of Chuck Norris pajamas.",
"Chuck Norris can kill two stones with one bird.",
"Chuck Norris doesn't read books. He stares them down until he gets the information he wants.",
"Chuck Norris doesn't have hair on his testicles, because hair does not grow on steel.",
"Chuck Norris can build a snowman out of rain.",
"Chuck Norris once punched a man in the soul.",
"Chuck Norris can drown a fish.",
"Leaving a criminal in the same room as Chuck Norris is cruel and unusual punishment.",
"Chuck Norris can pick oranges from an apple tree and make the best lemonade youve ever tasted.",
"Once a cobra bit Chuck Norris' leg. After five days of excruciating pain, the cobra died.",
"Chuck Norris doesn't play \"hide-and-seek.\" He plays \"hide-and-pray-I-don't-find-you.\"",
"Chuck Norris beat the sun in a staring contest.",
"Chuck Norris makes onions cry.",
"Chuck Norris can divide by zero.",
"Chuck Norris hears every tree that falls in the woods."
]
    
};

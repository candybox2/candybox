var candies = {

    // Variables
    nbrOwned : 0,
    nbrEaten : 0,
    nbrThrown : 0,
    nbrTotal : 0, // The total number we earned in all times
    candiesPerSecond : 1,
    indoorGrow: 0,
    outdoorGrow: 0,
    dispensary: 0,

    
    // Functions
    onload : function(){
        candies.setNbrOwned(0); // We first have 0 candies
    },
    
    eat : function(){
        this.setNbrEaten(this.nbrEaten + this.nbrOwned);
        this.setNbrOwned(0);
    },
    
    setNbrTotal : function(value){
        this.nbrTotal = value;
    },
    
    setNbrOwned : function(value){
        // If this is an increase, we increase nbr total too
        if(value > this.nbrOwned){
            this.setNbrTotal(this.nbrTotal + value - this.nbrOwned);
        }
        
        this.nbrOwned = value;
        if(this.nbrOwned != 1) htmlInteraction.setInnerHtml("candies", "You have " + this.nbrOwned + " grams!");
        else htmlInteraction.setInnerHtml("candies", "You have 1 gram!");
        // buttons.checkCandies();
        // shop.check();
        // cauldron.updateActionsInfoOnPage();
    },
    
    setNbrEaten : function(value){
        this.nbrEaten = value;
        if(this.nbrEaten != 1) htmlInteraction.setInnerHtml("candies_eaten", "You have smoked " + this.nbrEaten + " grams!");
        else htmlInteraction.setInnerHtml("candies_eaten", "You have smoked 1 gram!");
        htmlInteraction.setElementVisibility("candies_eaten", true);
    },
    
    setCandiesPerSecond : function(value){
        this.candiesPerSecond = value;
    },

    addIndoorGrow : function(){
        this.candiesPerSecond = this.candiesPerSecond + 3;
        this.indoorGrow++
        console.log(`candiesPerSecond is now ${this.candiesPerSecond}`);
        if(this.indoorGrow != 1) htmlInteraction.setInnerHtml("indoorGrow", this.indoorGrow + " Indoor grows (+3 per), closer to home!");
        else htmlInteraction.setInnerHtml("indoorGrow", "Who needs candles when you grow indoors! (+3 gps)");
        htmlInteraction.setElementVisibility("indoorGrowBox", true);
    },

    addOutdoorGrow : function(){
        this.candiesPerSecond = this.candiesPerSecond + 10;
        this.outdoorGrow++;
        console.log(`candiesPerSecond is now ${this.candiesPerSecond}`);
        if(this.outdoorGrow != 1) htmlInteraction.setInnerHtml("outdoorGrow", this.outdoorGrow + " Outdoor grows (+10 per) - out on some secluded land!")
        else htmlInteraction.setInnerHtml("outdoorGrow", "Now you're growing - outside! (+10 gps)");
        htmlInteraction.setElementVisibility("outdoorGrowBox", true);
    },

    addDispensary : function(){
        this.candiesPerSecond = this.candiesPerSecond + 20;
        this.dispensary++
        console.log(`candiesPerSecond is now ${this.candiesPerSecond}`);
        if(this.dispensary != 1) htmlInteraction.setInnerHtml("dispensary", + this.dispensary + " Dispensaries (+20 per) running - CASH MONEY!");
        else htmlInteraction.setInnerHtml("dispensary", "You've got your FIRST dispensary up and running! (+20 gps)");
        htmlInteraction.setElementVisibility("dispensaryBox", true);
    },
    
    setNbrThrown : function(value){
        this.nbrThrown = value;
        
        // We choose which smiley we want to add at the end of the sentence
        if(this.nbrThrown <= 10) smiley = ".";
        else if(this.nbrThrown <= 20) smiley = "...";
        else if(this.nbrThrown <= 30) smiley = "...?";
        else if(this.nbrThrown <= 40) smiley = "...? <tt>:|</tt>";
        else if(this.nbrThrown <= 60) smiley = "...? <tt>:(</tt>";
        else if(this.nbrThrown <= 70) smiley = "...? <tt>:[</tt>";
        else if(this.nbrThrown <= 80) smiley = "...? <tt>:{</tt>";
        else if(this.nbrThrown <= 90) smiley = "...? <tt>:'(</tt>";
        else smiley = "...? <tt>(;_;)</tt>";

        darkMode.check();
        
        if(this.nbrThrown != 1) htmlInteraction.setInnerHtml("candies_thrown", "You sold " + this.nbrThrown + " grams to your buddy" + smiley);
        else htmlInteraction.setInnerHtml("candies_thrown", "You sold 1 gram to your buddy" + smiley);
        htmlInteraction.setElementVisibility("candies_thrown", true);
    },
    
    throw10Candies : function(){
        if(this.nbrOwned >= 10){ // If we have at least 10 candies
            this.setNbrOwned(this.nbrOwned - 10);
            this.setNbrThrown(this.nbrThrown + 10);
        }
    },

    setDispensaryCount : function(value){
        this.nbrOwned = value;
        if(this.nbrOwned != 1) htmlInteraction.setInnerHtml("dispensaries_owned", "You have " + this.nbrOwned + " dispensaries!");
        else htmlInteraction.setInnerHtml("dispensaries_owned", "You've opened your first dispensary!");
        htmlInteraction.setElementVisibility("dispensaries_owned", true);
    }
  
};

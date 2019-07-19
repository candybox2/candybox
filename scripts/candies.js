var candies = {

    // Variables
    nbrOwned : 0,
    nbrEaten : 0,
    nbrThrown : 0,
    nbrTotal : 0, // The total number we earned in all times
    candiesPerSecond : 1,
    
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
        if(this.nbrOwned != 1) htmlInteraction.setInnerHtml("candies", "You've computed " + this.nbrOwned + " hashes!");
        else htmlInteraction.setInnerHtml("candies", "You've computed 1 hash!");
        buttons.checkCandies();
        shop.check();
        cauldron.updateActionsInfoOnPage();
    },
    
    setNbrEaten : function(value){
        this.nbrEaten = value;
        if(this.nbrEaten != 1) htmlInteraction.setInnerHtml("candies_eaten", "You've spent " + this.nbrEaten + " hashes securing the network.");
        else htmlInteraction.setInnerHtml("candies_eaten", "You've spent 1 hash securing the network.");
        htmlInteraction.setElementVisibility("candies_eaten", true);
    },
    
    setCandiesPerSecond : function(value){
        this.candiesPerSecond = value;
    },
    
    setNbrThrown : function(value){
        this.nbrThrown = value;
        
        // We choose which smiley we want to add at the end of the sentence
        if(this.nbrThrown <= 10) smiley = ".";
        else if(this.nbrThrown <= 20) smiley = "...";
        else if(this.nbrThrown <= 30) smiley = "...?";
        else if(this.nbrThrown <= 40) smiley = "...? <tt>:|</tt>";
        else if(this.nbrThrown <= 50) smiley = "...? <tt>:/</tt>";
        else if(this.nbrThrown <= 60) smiley = "...? <tt>:(</tt>";
        else if(this.nbrThrown <= 70) smiley = "...? <tt>:[</tt>";
        else if(this.nbrThrown <= 80) smiley = "...? <tt>:{</tt>";
        else if(this.nbrThrown <= 90) smiley = "...? <tt>:'(</tt>";
        else smiley = "...? <tt>(;_;)</tt>";
        
        if(this.nbrThrown != 1) htmlInteraction.setInnerHtml("candies_thrown", "You've deleted " + this.nbrThrown + " hashes" + smiley);
        else htmlInteraction.setInnerHtml("candies_thrown", "You've deleted 1 hash" + smiley);
        htmlInteraction.setElementVisibility("candies_thrown", true);
    },
    
    throw10Candies : function(){
        if(this.nbrOwned >= 10){ // If we have at least 10 candies
            this.setNbrOwned(this.nbrOwned - 10);
            this.setNbrThrown(this.nbrThrown + 10);
        }
    }
  
};

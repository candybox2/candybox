var harvestLevel = {
    
    // Variables
    levelMultiplier : 1.5,
    currentLevel : 0,
    price : 1500,

    // Functions

    levelUp : function(){

        if (this.currentLevel < 3 && candies.nbrOwned >= this.price) {
            candies.setNbrOwned(candies.nbrOwned - this.price);
            this.currentLevel += 1;
            this.updateCandiesPerSecond();
            this.updatePriceToLevel();
        }

        return this.currentLevel;
    },
    
    getCurrentLevel : function(){
        return this.currentLevel
    },

    getCurrentRateMultiplier : function(){
        return this.currentLevel * this.levelMultiplier
    },

    updateCandiesPerSecond : function(){
        value = Math.ceil(candies.getCandiesPerSecond() * this.levelMultiplier)
        candies.setCandiesPerSecond(value);
    },

    updatePriceToLevel : function(){
        this.price = this.price * 10;
    },

    buttonAction : function(elementId){
        newLevel = this.levelUp();
        //change Button BG color
        switch(newLevel) {
            case 1:
                $("#"+elementId).css("background-color","#E07000");
                $("#"+elementId).html("Level Up Harvesting Skills <br> cost " + this.price)
                break;
            case 2:
                $("#"+elementId).css("background-color","#0E93B4");
                $("#"+elementId).html("Level Up Harvesting Skills <br> cost " + this.price)
                break;
            case 3:
                $("#"+elementId).css("background-color","#FFB700");
                $("#"+elementId).html("Harvesting Skills <br> at max")
                break;
            default:
                break;
        }
        return newLevel;
    }

};
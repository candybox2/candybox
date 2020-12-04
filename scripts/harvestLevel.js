var harvestLevel = {
    
    // Variables
    levelMultiplier : 1.5,
    currentLevel : 1,

    // Functions

    levelUp : function(){

        if (this.currentLevel < 3) {
            this.currentLevel += 1;
            this.updateCandiesPerSecond();
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
        value = Math.ceil(candies.getCandiesPerSecond() * this.currentLevel)
        candies.setCandiesPerSecond(value);
    }

};
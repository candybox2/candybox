var harvestLevel = {
    
    // Variables
    levelMultiplier = 1.5,
    currentLevel = 1,

    // Functions
    levelUp : function(){
        
        function updateCandiesPerSecond(){
            candies.setCandiesPerSecond = candies.getCandiesPerSecond * this.currentLevel;
        }

        if (this.currentLevel < 3) {
            this.currentLevel += 1;
            updateCandiesPerSecond()
        }

        return this.currentLevel
    },
    
    
    getCurrentLevel : function(){
        return this.currentLevel
    },

    getCurrentRateMultiplier : function(){
        return this.currentLevel * this.levelMultiplier
    }
};
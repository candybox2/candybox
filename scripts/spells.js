var spells = {

    // Variables
    list : [],
    fasterCandiesFiboPrev : 1,
    fasterCandiesFiboCurr : 2,
    
    // Functions
    onload : function(){
        // We add the spells
        this.addSpell("Candies, faster candies !", this.getFasterCandiesPrice.bind(this), this.fasterCandies.bind(this), "Congratulations ! You will now gain more candies each second !", []);
        this.addSpell("Candies, more candies !", this.getMoreCandiesPrice.bind(this), this.moreCandies.bind(this), "///", []);
        this.addSpell("Sword, better sword !", this.getBetterSwordPrice.bind(this), this.betterSword.bind(this), "///", ["specialSword"]);
    
        // We sort the list
        this.sortListDependingOnPrice();
    },
    
    sortListDependingOnPrice : function(){
        this.list.sort(this.priceSortFunction);
    },
    
    priceSortFunction : function(spellA, spellB){
        var priceA = spellA.price();
        var priceB = spellB.price();
        
        if(priceA < priceB) return -1;
        else if(priceB < priceA) return 1;
        return 0;
    },
    
    getBetterSwordPrice : function(){
        return Math.floor(Math.pow(sword.specialPower+1, 2.6)) * 10000;
    },
    
    getFasterCandiesPrice : function(){
        return Math.pow(this.fasterCandiesFiboCurr, 2) * 10000;
    },
    
    addSpell : function(name, price, effect, speech, conditions){
        this.list.push({name:name, price:price, effect:effect, speech:speech, conditions:conditions});
    },
    
    getMoreCandiesPrice : function(){
        return 300000;
    },
    
    betterSword : function(){
        sword.setSpecialPower(sword.specialPower + 1);
        this.sortListDependingOnPrice();
        
        // And we change the hut's speech by ourselves
        switch(sword.name){
            case "Sword of Life":
                hut.setSpeech("Your Sword of Life will now drain more energy from your enemies.");
            break;
            case "Sword of Flames":
                hut.setSpeech("Your Sword of Flames is now more powerful.")
            break;
            case "Sword of Summoning":
                hut.setSpeech("You can now summon " + sword.summonList[sword.getIndexOfBetterToSummon()].name + " !");
            break;
        }
    },
    
    moreCandies : function(){
        var nbr = Math.floor(candies.nbrTotal/20);
        
        // We can't gain more candies than the price we pay for the spell !
        if(nbr > 300000) nbr = 300000;
        
        candies.setNbrOwned(candies.nbrOwned + nbr);
        hut.setSpeech("Here's " + nbr + " candies for you !");
    },
    
    nextFasterCandiesFiboStep : function(){
        this.setFasterCandiesFibo(this.fasterCandiesFiboCurr, this.fasterCandiesFiboPrev + this.fasterCandiesFiboCurr);
    },
    
    setFasterCandiesFibo : function(prev, curr){
        // Set the new values
        this.fasterCandiesFiboPrev = prev;
        this.fasterCandiesFiboCurr = curr;
        
        // Sort the spells list depending on their price, since the price of the faster candies spell just changed
        this.sortListDependingOnPrice();
    },
    
    fasterCandies : function(){
        // We change candies per second
        candies.setCandiesPerSecond(this.fasterCandiesFiboCurr);
        
        // We continue fibo
        this.nextFasterCandiesFiboStep();
    }

};

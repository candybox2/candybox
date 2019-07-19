var spells = {

    // Variables
    list : [],
    fasterhashesFiboPrev : 1,
    fasterhashesFiboCurr : 2,
    
    // Functions
    onload : function(){
        // We add the spells
        this.addSpell("hashes, faster hashes !", this.getFasterhashesPrice.bind(this), this.fasterhashes.bind(this), "Congratulations ! You will now gain more hashes each second !", []);
        this.addSpell("hashes, more hashes !", this.getMorehashesPrice.bind(this), this.morehashes.bind(this), "///", []);
        this.addSpell("gpu, better gpu !", this.getBettergpuPrice.bind(this), this.bettergpu.bind(this), "///", ["specialgpu"]);
    
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
    
    getBettergpuPrice : function(){
        return Math.floor(Math.pow(gpu.specialPower+1, 2.6)) * 10000;
    },
    
    getFasterhashesPrice : function(){
        return Math.pow(this.fasterhashesFiboCurr, 2) * 10000;
    },
    
    addSpell : function(name, price, effect, speech, conditions){
        this.list.push({name:name, price:price, effect:effect, speech:speech, conditions:conditions});
    },
    
    getMorehashesPrice : function(){
        return 300000;
    },
    
    bettergpu : function(){
        gpu.setSpecialPower(gpu.specialPower + 1);
        this.sortListDependingOnPrice();
        
        // And we change the hut's speech by ourselves
        switch(gpu.name){
            case "gpu of Life":
                hut.setSpeech("Your gpu of Life will now drain more energy from your enemies.");
            break;
            case "gpu of Flames":
                hut.setSpeech("Your gpu of Flames is now more powerful.")
            break;
            case "gpu of Summoning":
                hut.setSpeech("You can now summon " + gpu.summonList[gpu.getIndexOfBetterToSummon()].name + " !");
            break;
        }
    },
    
    morehashes : function(){
        var nbr = Math.floor(hashes.nbrTotal/20);
        
        // We can't gain more hashes than the price we pay for the spell !
        if(nbr > 300000) nbr = 300000;
        
        hashes.setNbrOwned(hashes.nbrOwned + nbr);
        hut.setSpeech("Here's " + nbr + " hashes for you !");
    },
    
    nextFasterhashesFiboStep : function(){
        this.setFasterhashesFibo(this.fasterhashesFiboCurr, this.fasterhashesFiboPrev + this.fasterhashesFiboCurr);
    },
    
    setFasterhashesFibo : function(prev, curr){
        // Set the new values
        this.fasterhashesFiboPrev = prev;
        this.fasterhashesFiboCurr = curr;
        
        // Sort the spells list depending on their price, since the price of the faster hashes spell just changed
        this.sortListDependingOnPrice();
    },
    
    fasterhashes : function(){
        // We change hashes per second
        hashes.sethashesPerSecond(this.fasterhashesFiboCurr);
        
        // We continue fibo
        this.nextFasterhashesFiboStep();
    }

};

var main = {
    
    // Variables
    nbrOfSecondsSinceLastMinInterval : 0,
    nbrOfSecondsSinceLastHourInterval : 0,
    nbrOfSecondsSinceLastDayInterval : 0,
    saveShown : false,
    
    // Functions
    onload : function(){
        // Prevents some stupid refresh bugs of the browser
        htmlInteraction.enableButtonClass("home_button");
        
        // Various loads
     
        candies.onload();
        
        // Loading after various loads
        quest.onloadAfter(); // This must be call after other loads because it needs the different quests to be loaded
        
        // Loading save from cookie
		if(cookie.readCookie("CandyCookie") != null)
		{
			cookie.setData();
		}
		else
		{
			console.log("INFO: Couldn't find a Cookie.");
		}
		
                        
        // First actions
        window.setInterval(this.oneTenthSecInterval.bind(this), 100);
        window.setInterval(this.secInterval.bind(this), 1000);
		cookie.cookiehandler = window.setInterval(cookie.autoSave, 1000);
    },
    
    oneTenthSecInterval : function(){
        // We try to convert candies into lollipops
        candiesConverter.convert();
    },

    secInterval : function(){
        // Candies
        if(objects.list.oldAmulet.have == false) candies.setNbrOwned(candies.nbrOwned + candies.candiesPerSecond);
        else candies.setNbrOwned(candies.nbrOwned + candies.candiesPerSecond*3);
        
        // Quest tired time
        // if(objects.list.pinkRing.have == false) quest.setTiredTime(quest.tiredTime - 1);
        // else quest.setTiredTime(quest.tiredTime - 2);
        
        // Lollipop farm
        if(farm.productionDelayType == "sec"){
            if(objects.list.hornOfPlenty.have == false) lollipops.setNbrOwned(lollipops.nbrOwned + farm.lollipopsProduction);
            else lollipops.setNbrOwned(lollipops.nbrOwned + farm.lollipopsProduction*3);
        }
        
        // Cauldron
        cauldron.moveSmoke();
        cauldron.increaseActionTimer();
        
        // We increase nbrOfSeconds variables
        this.nbrOfSecondsSinceLastMinInterval += 1;
        this.nbrOfSecondsSinceLastHourInterval += 1;
        this.nbrOfSecondsSinceLastDayInterval += 1;
        
        // We possibly trigger minInterval
        if(this.nbrOfSecondsSinceLastMinInterval >= 60){
            this.nbrOfSecondsSinceLastMinInterval = 0;
            this.minInterval();
        }
        
        // We possibly trigger hourInterval
        if(this.nbrOfSecondsSinceLastHourInterval >= 3600){
            this.nbrOfSecondsSinceLastHourInterval = 0;
            this.hourInterval();
        }
        
        // We possibily trigger dayInterval
        if(this.nbrOfSecondsSinceLastDayInterval >= 86400){
            this.nbrOfSecondsSinceLastDayInterval = 0;
            this.dayInterval();
        }
    },
    
    minInterval : function(){
        // Lollipop farm
        if(farm.productionDelayType == "min"){
            if(objects.list.hornOfPlenty.have == false) lollipops.setNbrOwned(lollipops.nbrOwned + farm.lollipopsProduction);
            else lollipops.setNbrOwned(lollipops.nbrOwned + farm.lollipopsProduction*3);
        }
    },
    
    hourInterval : function(){
        // Lollipop farm
        if(farm.productionDelayType == "hour"){
            if(objects.list.hornOfPlenty.have == false) lollipops.setNbrOwned(lollipops.nbrOwned + farm.lollipopsProduction);
            else lollipops.setNbrOwned(lollipops.nbrOwned + farm.lollipopsProduction*3);
        }
    },
    
    dayInterval : function(){
        // Lollipop farm
        if(farm.productionDelayType == "day"){
            if(objects.list.hornOfPlenty.have == false) lollipops.setNbrOwned(lollipops.nbrOwned + farm.lollipopsProduction);
            else lollipops.setNbrOwned(lollipops.nbrOwned + farm.lollipopsProduction*3);
        }
    },
    
    setNbrOfSecondsSinceLastMinInterval : function(value){
        this.nbrOfSecondsSinceLastMinInterval = value;
    },
    
    setNbrOfSecondsSinceLastHourInterval : function(value){
        this.nbrOfSecondsSinceLastHourInterval = value;
    },
    
    setNbrOfSecondsSinceLastDayInterval : function(value){
        this.nbrOfSecondsSinceLastDayInterval = value;
    }
};    

window.onload = main.onload.bind(main);

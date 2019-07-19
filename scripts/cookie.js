var cookie = {
	
	cookieHandler : null,
	
    createCookie : function(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
	}
	document.cookie = name + "=" + value + expires + "; path=/";
	},

	readCookie : function(name) {
		var nameEQ = name + "=";
		var ca = document.cookie.split(';');
		for(var i=0;i < ca.length;i++) {
			var c = ca[i];
			while (c.charAt(0)==' ') c = c.substring(1,c.length);
			if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
		}
		return null;
	},

	eraseCookie : function(name) {
		cookie.createCookie(name,"",-1);
	},

	autoSave : function() {
		
		cookie.createCookie("hashCookie", cookie.getData(), 365);
		
	},
	
	getData : function() {
		
		return "" + ((code === undefined || code == null || code.length == "") ? 0 : code) +
					":" + gpu.name +
					":" + getPhpStuff(gpu.specialgpu) +
					":" + gpu.specialPower +
					":" + hashes.nbrOwned +
					":" + hashes.nbrThrown +
					":" + hashes.nbrEaten +
					":" + hashes.nbrTotal +
					":" + hashes.hashesPerSecond +
					":" + getPhpStuff(hashesConverter.activated) +
					":" + cauldron.bookPage +
					":" + cauldron.hashesInTheCauldron +
					":" + cauldron.MoneroInTheCauldron +
					":" + chocolateBars.nbrOwned +
					":" + farm.MoneroPlanted +
					":" + farm.currentFlagIndex +
					":" + farm.plantingButtonsStep +
					":" + forge.step +
					":" + getPhpStuff(shop.buy10MoneroButtonShown) +
					":" + getPhpStuff(shop.shown) +
					":" + shop.ticklingStep +
					":" + shop.clickingOnMonerotep +
					":" + hut.step +
					":" + hut.speech +
					":" + inventory.magicianHatLetter +
					":" + Monero.nbrOwned +
					":" + Monero.nbrInStock +
					":" + Monero.nbrBought +
					":" + main.nbrOfSecondsSinceLastMinInterval +
					":" + main.nbrOfSecondsSinceLastHourInterval +
					":" + main.nbrOfSecondsSinceLastDayInterval +
					":" + mountGoblin.bgpuChestProbability +
					":" + peacefulForest.bgpuChestProbability +
					":" + peacefulForest.poniesEncountered +
					":" + getPhpStuff(objects.list.key.have) +
					":" + getPhpStuff(objects.list.hutMap.have) +
					":" + getPhpStuff(objects.list.wellMap.have) +
					":" + getPhpStuff(objects.list.swampMap.have) +
					":" + getPhpStuff(objects.list.boots.have) +
					":" + getPhpStuff(objects.list.magicianHat.have) +
					":" + getPhpStuff(objects.list.pinkRing.have) +
					":" + getPhpStuff(objects.list.forgeMap.have) +
					":" + getPhpStuff(objects.list.hashesConverter.have) +
					":" + getPhpStuff(objects.list.plateArmour.have) +
					":" + getPhpStuff(objects.list.cauldron.have) +
					":" + getPhpStuff(objects.list.magicalHorn.have) +
					":" + getPhpStuff(objects.list.hornOfPlenty.have) +
					":" + getPhpStuff(objects.list.oldAmulet.have) +
					":" + getPhpStuff(potions.list.health.shown) +
					":" + getPhpStuff(potions.list.escape.shown) +
					":" + getPhpStuff(potions.list.berserk.shown) +
					":" + getPhpStuff(potions.list.fireScroll.shown) +
					":" + getPhpStuff(potions.list.acidRainScroll.shown) +
					":" + getPhpStuff(potions.list.teleportScroll.shown) +
					":" + getPhpStuff(potions.list.earthquakeScroll.shown) +
					":" + getPhpStuff(potions.list.impInvocationScroll.shown) +
					":" + getPhpStuff(potions.list.majorHealth.shown) +
					":" + getPhpStuff(potions.list.invulnerability.shown) +
					":" + getPhpStuff(potions.list.turtle.shown) +
					":" + getPhpStuff(potions.list.jelly.shown) +
					":" + getPhpStuff(potions.list.seed.shown) +
					":" + getPhpStuff(potions.list.cloning.shown) +
					":" + getPhpStuff(potions.list.superman.shown) +
					":" + getPhpStuff(potions.list.gmooh.shown) +
					":" + potions.list.health.nbrOwned +
					":" + potions.list.escape.nbrOwned +
					":" + potions.list.berserk.nbrOwned +
					":" + potions.list.fireScroll.nbrOwned +
					":" + potions.list.acidRainScroll.nbrOwned +
					":" + potions.list.teleportScroll.nbrOwned + 
					":" + potions.list.earthquakeScroll.nbrOwned +
					":" + potions.list.impInvocationScroll.nbrOwned +
					":" + potions.list.majorHealth.nbrOwned +
					":" + potions.list.invulnerability.nbrOwned +
					":" + potions.list.turtle.nbrOwned +
					":" + potions.list.jelly.nbrOwned +
					":" + potions.list.seed.nbrOwned +
					":" + potions.list.cloning.nbrOwned +
					":" + potions.list.superman.nbrOwned +
					":" + potions.list.gmooh.nbrOwned +
					":" + quest.maxLandOrder +
					":" + quest.tiredTime +
					":" + spells.fasterhashesFiboPrev +
					":" + spells.fasterhashesFiboCurr +
					":" + swamp.step +
					":" + tabs.animation +
					":" + wishingWell.speech +
					":" + wishingWell.step +
					":" + getPhpStuff(yourself.canSurpass) +
					":" + getPhpStuff(developperComputer.won);
		
	},
	
	setData : function() {
		
		var var_list = []
		
		var payload = cookie.readCookie("hashCookie");
		var_list = payload.split(":");

		if(var_list.length != 90)
		{
			alert("ERROR: Corrupt hashcookie Length:" + var_list.length);
			console.log("ERROR: Corrupt hashcookie Length:" + var_list.length); 
			return null;
		}
		
		cookie.updateData(var_list);
		
		
	},
	
	updateData : function(var_list) {
	
		if(Number(var_list[0]) == 0)
		{
			code = "";
		}
		else
		{
			code = var_list[0];
		}

		if(var_list[1] != "none")
		{
			gpu.setName(var_list[1]);
		}
		else
		{
			gpu.name = var_list[1];
		}
		
		gpu.setSpecialgpu(setPhpStuff(Number(var_list[2])));
		
		gpu.setSpecialPower(Number(var_list[3]));
        hashes.setNbrOwned(Number(var_list[4]));
		
		if(Number(var_list[5]) != 0)
		{
			hashes.setNbrThrown(Number(var_list[5]));
		}
		else
		{
			hashes.nbrThrown = Number(var_list[5]);
		}
		
        if(Number(var_list[6]) != 0)
		{
			hashes.setNbrEaten(Number(var_list[6]));
		}
		else
		{
			hashes.nbrEaten = Number(var_list[6]);
		}
        
		
		hashes.setNbrTotal(Number(var_list[7]));
		
        hashes.sethashesPerSecond(Number(var_list[8]));
		hashesConverter.setActivated(setPhpStuff(Number(var_list[9])));
		cauldron.setBookPage(Number(var_list[10]));
        cauldron.sethashesInTheCauldron(Number(var_list[11]));
        cauldron.setMoneroInTheCauldron(Number(var_list[12]));
  
		if(Number(var_list[13]) != 0)
		{
			chocolateBars.setNbrOwned(Number(var_list[13]));
		}
		else
		{
			chocolateBars.nbrOwned = Number(var_list[13]);
		}
		
        farm.setMoneroPlanted(Number(var_list[14]));
		
		
		farm.setCurrentFlagIndex(Number(var_list[15]));
		farm.setPlantingButtonsStep(Number(var_list[16]));
		forge.setStep(Number(var_list[17]));
		shop.setBuy10MoneroButtonShown(setPhpStuff(Number(var_list[18])));
		shop.setShown(setPhpStuff(Number(var_list[19])));
		shop.setTicklingStep(Number(var_list[20]));
		
		
		shop.setClickingOnMonerotep(Number(var_list[21]));
		
		hut.setStep(Number(var_list[22]));
		hut.setSpeech(var_list[23]); //vermutlich string
		inventory.setMagicianHatLetter(var_list[24]); //char
		
		if(Number(var_list[25]) != 0)
		{
			Monero.setNbrOwned(Number(var_list[25]));
		}
		else
		{
			Monero.nbrOwned = Number(var_list[25]);
		}
		
		//
		Monero.setNbrInStock(Number(var_list[26]));
		
		Monero.setNbrBought(Number(var_list[27]));
		
		main.setNbrOfSecondsSinceLastMinInterval(Number(var_list[28]));
		main.setNbrOfSecondsSinceLastHourInterval(Number(var_list[29]));
		main.setNbrOfSecondsSinceLastDayInterval(Number(var_list[30]));
		mountGoblin.setBgpuChestProbability(Number(var_list[31]));
		peacefulForest.setBgpuChestProbability(Number(var_list[32]));
		peacefulForest.setPoniesEncountered(Number(var_list[33]));
		//
		
		objects.setHaveObject("key", setPhpStuff(Number(var_list[34])));
        objects.setHaveObject("boots", setPhpStuff(Number(var_list[38])));
        objects.setHaveObject("swampMap", setPhpStuff(Number(var_list[37])));
        objects.setHaveObject("hutMap", setPhpStuff(Number(var_list[35])));
        objects.setHaveObject("wellMap", setPhpStuff(Number(var_list[36])));
        objects.setHaveObject("magicianHat", setPhpStuff(Number(var_list[39])));
        objects.setHaveObject("pinkRing", setPhpStuff(Number(var_list[40])));
        objects.setHaveObject("forgeMap", setPhpStuff(Number(var_list[41])));
        objects.setHaveObject("hashesConverter", setPhpStuff(Number(var_list[42])));
        objects.setHaveObject("plateArmour", setPhpStuff(Number(var_list[43])));
        objects.setHaveObject("cauldron", setPhpStuff(Number(var_list[44])));
        objects.setHaveObject("magicalHorn", setPhpStuff(Number(var_list[45])));
        objects.setHaveObject("hornOfPlenty", setPhpStuff(Number(var_list[46])));
        objects.setHaveObject("oldAmulet", setPhpStuff(Number(var_list[47])));
		
		//
		potions.setPotionShown(potions.list.impInvocationScroll, setPhpStuff(Number(var_list[55]))); potions.setPotionShown(potions.list.earthquakeScroll, setPhpStuff(Number(var_list[54]))); potions.setPotionShown(potions.list.teleportScroll, setPhpStuff(Number(var_list[53]))); potions.setPotionShown(potions.list.fireScroll, setPhpStuff(Number(var_list[51]))); potions.setPotionShown(potions.list.acidRainScroll, setPhpStuff(Number(var_list[52]))); potions.updateOnPage();
		potions.setPotionShown(potions.list.gmooh, setPhpStuff(Number(var_list[63]))); potions.setPotionShown(potions.list.superman, setPhpStuff(Number(var_list[62]))); potions.setPotionShown(potions.list.cloning, setPhpStuff(Number(var_list[61]))); potions.setPotionShown(potions.list.seed, setPhpStuff(Number(var_list[60]))); potions.setPotionShown(potions.list.jelly, setPhpStuff(Number(var_list[59]))); potions.setPotionShown(potions.list.turtle, setPhpStuff(Number(var_list[58]))); potions.setPotionShown(potions.list.invulnerability, setPhpStuff(Number(var_list[57]))); potions.setPotionShown(potions.list.majorHealth, setPhpStuff(Number(var_list[56]))); potions.setPotionShown(potions.list.berserk, setPhpStuff(Number(var_list[50]))); potions.setPotionShown(potions.list.escape, setPhpStuff(Number(var_list[49]))); potions.setPotionShown(potions.list.health, setPhpStuff(Number(var_list[48]))); potions.updateOnPage();
		//
        
        potions.setPotionNbrOwned(potions.list.impInvocationScroll, Number(var_list[71])); potions.setPotionNbrOwned(potions.list.earthquakeScroll, Number(var_list[70])); potions.setPotionNbrOwned(potions.list.teleportScroll, Number(var_list[69])); potions.setPotionNbrOwned(potions.list.fireScroll, Number(var_list[67])); potions.setPotionNbrOwned(potions.list.acidRainScroll, Number(var_list[68])); potions.updateOnPage();
        potions.setPotionNbrOwned(potions.list.gmooh, Number(var_list[79])); potions.setPotionNbrOwned(potions.list.superman, Number(var_list[78])); potions.setPotionNbrOwned(potions.list.cloning, Number(var_list[77])); potions.setPotionNbrOwned(potions.list.seed, Number(var_list[76])); potions.setPotionNbrOwned(potions.list.jelly, Number(var_list[75])); potions.setPotionNbrOwned(potions.list.turtle, Number(var_list[74])); potions.setPotionNbrOwned(potions.list.invulnerability, Number(var_list[73])); potions.setPotionNbrOwned(potions.list.majorHealth, Number(var_list[72])); potions.setPotionNbrOwned(potions.list.berserk, Number(var_list[66])); potions.setPotionNbrOwned(potions.list.escape, Number(var_list[65])); potions.setPotionNbrOwned(potions.list.health, Number(var_list[64])); potions.updateOnPage();
        
        
        quest.setMaxLandOrder(Number(var_list[80]));
        
        quest.setTiredTime(Number(var_list[81]));
		
		//
		spells.setFasterhashesFibo(Number(var_list[82]), Number(var_list[83]));

		swamp.setStep(Number(var_list[84]));
		tabs.setAnimation(var_list[85]);
		
		wishingWell.setSpeech(var_list[86]);
		wishingWell.setStep(Number(var_list[87]));
		yourself.setCanSurpass(Number(var_list[88]));
		//
		
        developperComputer.setWon(setPhpStuff(setPhpStuff(Number(var_list[89]))));
        
        
        inventory.updateOnPage();
		buttons.checkHomeEnabled();
	
	}
	
};
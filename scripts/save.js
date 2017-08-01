var code = "";

function getPhpStuff(boolean){
    if(boolean == true) return 1;
    return 0;
}

function setPhpStuff(int){
    if(int == 1) return true;
    return false;
}

function save() {
	var date = new Date();
	
	var month = date.getMonth() + 1;
    var day = date.getDate();
    var hour = date.getHours();
    var min = date.getMinutes();
	var year = date.getFullYear() + "";

    month = (month < 10 ? "0" : "") + month;
    day = (day < 10 ? "0" : "") + day;
    hour = (hour < 10 ? "0" : "") + hour;
    min = (min < 10 ? "0" : "") + min;
	
	var save_text = "code: " + ((code === undefined || code == null || code.length == "") ? 0 : code) + "\n" + 
					"swordName: " + sword.name + "\n" + 
					"swordSpecialSword: " + getPhpStuff(sword.specialSword) + "\n" + 
					"swordSpecialPower: " + sword.specialPower + "\n" + 
					"candiesNbrOwned: " + candies.nbrOwned + "\n" + 
					"candiesNbrThrown: " + candies.nbrThrown + "\n" + 
					"candiesNbrEaten: " + candies.nbrEaten + "\n" + 
					"candiesNbrTotal: " + candies.nbrTotal + "\n" + 
					"candiesCandiesPerSecond: " + candies.candiesPerSecond + "\n" + 
					"candiesConverterActivated: " + getPhpStuff(candiesConverter.activated) + "\n" + 
					"cauldronBookPage: " + cauldron.bookPage + "\n" + 
					"cauldronCandies: " + cauldron.candiesInTheCauldron + "\n" + 
					"cauldronLollipops: " + cauldron.lollipopsInTheCauldron + "\n" + 
					"chocolateBarsNbrOwned: " + chocolateBars.nbrOwned + "\n" + 
					"farmLollipopsPlanted: " + farm.lollipopsPlanted + "\n" + 
					"farmCurrentFlagIndex: " + farm.currentFlagIndex + "\n" + 
					"farmPlantingButtonsStep: " + farm.plantingButtonsStep + "\n" + 
					"forgeStep: " + forge.step + "\n" + 
					"shopLollipopsButtonsShown: " + getPhpStuff(shop.buy10LollipopsButtonShown) + "\n" + 
					"shopShown: " + getPhpStuff(shop.shown) + "\n" + 
					"shopTicklingStep: " + shop.ticklingStep + "\n" + 
					"shopClickingOnLollipopStep: " + shop.clickingOnLollipopStep + "\n" + 
					"hutStep: " + hut.step + "\n" + 
					"hutSpeech: " + hut.speech + "\n" + 
					"inventoryMagicianHatLetter: " + inventory.magicianHatLetter + "\n" + 
					"lollipopsNbrOwned: " + lollipops.nbrOwned + "\n" + 
					"lollipopsNbrInStock: " + lollipops.nbrInStock + "\n" + 
					"lollipopsNbrBought: " + lollipops.nbrBought + "\n" + 
					"mainNbrOfSecondsSinceLastMinInterval: " + main.nbrOfSecondsSinceLastMinInterval + "\n" + 
					"mainNbrOfSecondsSinceLastHourInterval: " + main.nbrOfSecondsSinceLastHourInterval + "\n" + 
					"mainNbrOfSecondsSinceLastDayInterval: " + main.nbrOfSecondsSinceLastDayInterval + "\n" + 
					"mountGoblinBasicChestProbability: " + mountGoblin.basicChestProbability + "\n" + 
					"peacefulForestBasicChestProbability: " + peacefulForest.basicChestProbability + "\n" + 
					"peacefulForestPoniesEncountered: " + peacefulForest.poniesEncountered + "\n" + 
					"objectsHaveObjectKey: " + getPhpStuff(objects.list.key.have) + "\n" + 
					"objectsHaveObjectHutMap: " + getPhpStuff(objects.list.hutMap.have) + "\n" + 
					"objectsHaveObjectWellMap: " + getPhpStuff(objects.list.wellMap.have) + "\n" + 
					"objectsHaveObjectSwampMap: " + getPhpStuff(objects.list.swampMap.have) + "\n" + 
					"objectsHaveObjectBoots: " + getPhpStuff(objects.list.boots.have) + "\n" + 
					"objectsHaveObjectMagicianHat: " + getPhpStuff(objects.list.magicianHat.have) + "\n" + 
					"objectsHaveObjectPinkRing: " + getPhpStuff(objects.list.pinkRing.have) + "\n" + 
					"objectsHaveObjectForgeMap: " + getPhpStuff(objects.list.forgeMap.have) + "\n" + 
					"objectsHaveObjectCandiesConverter: " + getPhpStuff(objects.list.candiesConverter.have) + "\n" + 
					"objectsHaveObjectPlateArmour: " + getPhpStuff(objects.list.plateArmour.have) + "\n" + 
					"objectsHaveObjectCauldron: " + getPhpStuff(objects.list.cauldron.have) + "\n" + 
					"objectsHaveObjectMagicalHorn: " + getPhpStuff(objects.list.magicalHorn.have) + "\n" + 
					"objectsHaveObjectHornOfPlenty: " + getPhpStuff(objects.list.hornOfPlenty.have) + "\n" + 
					"objectsHaveObjectOldAmulet: " + getPhpStuff(objects.list.oldAmulet.have) + "\n" + 
					"potionsShownHealth: " + getPhpStuff(potions.list.health.shown) + "\n" + 
					"potionsShownEscape: " + getPhpStuff(potions.list.escape.shown) + "\n" + 
					"potionsShownBerserk: " + getPhpStuff(potions.list.berserk.shown) + "\n" + 
					"potionsShownFireScroll: " + getPhpStuff(potions.list.fireScroll.shown) + "\n" + 
					"potionsShownAcidRainScroll: " + getPhpStuff(potions.list.acidRainScroll.shown) + "\n" + 
					"potionsShownTeleportScroll: " + getPhpStuff(potions.list.teleportScroll.shown) + "\n" + 
					"potionsShownEarthquakeScroll: " + getPhpStuff(potions.list.earthquakeScroll.shown) + "\n" + 
					"potionsShownImpInvocationScroll: " + getPhpStuff(potions.list.impInvocationScroll.shown) + "\n" + 
					"potionsShownMajorHealth: " + getPhpStuff(potions.list.majorHealth.shown) + "\n" + 
					"potionsShownInvulnerability: " + getPhpStuff(potions.list.invulnerability.shown) + "\n" + 
					"potionsShownTurtle: " + getPhpStuff(potions.list.turtle.shown) + "\n" + 
					"potionsShownJelly: " + getPhpStuff(potions.list.jelly.shown) + "\n" + 
					"potionsShownSeed: " + getPhpStuff(potions.list.seed.shown) + "\n" + 
					"potionsShownCloning: " + getPhpStuff(potions.list.cloning.shown) + "\n" + 
					"potionsShownSuperman: " + getPhpStuff(potions.list.superman.shown) + "\n" + 
					"potionsShownGmooh: " + getPhpStuff(potions.list.gmooh.shown) + "\n" + 
					"potionsNbrOwnedHealth: " + potions.list.health.nbrOwned + "\n" + 
					"potionsNbrOwnedEscape: " + potions.list.escape.nbrOwned + "\n" + 
					"potionsNbrOwnedBerserk: " + potions.list.berserk.nbrOwned + "\n" + 
					"potionsNbrOwnedFireScroll: " + potions.list.fireScroll.nbrOwned + "\n" + 
					"potionsNbrOwnedAcidRainScroll: " + potions.list.acidRainScroll.nbrOwned + "\n" + 
					"potionsNbrOwnedTeleportScroll: " + potions.list.teleportScroll.nbrOwned + "\n" + 
					"potionsNbrOwnedEarthquakeScroll: " + potions.list.earthquakeScroll.nbrOwned + "\n" + 
					"potionsNbrOwnedImpInvocationScroll: " + potions.list.impInvocationScroll.nbrOwned + "\n" + 
					"potionsNbrOwnedMajorHealth: " + potions.list.majorHealth.nbrOwned + "\n" + 
					"potionsNbrOwnedInvulnerability: " + potions.list.invulnerability.nbrOwned + "\n" + 
					"potionsNbrOwnedTurtle: " + potions.list.turtle.nbrOwned + "\n" + 
					"potionsNbrOwnedJelly: " + potions.list.jelly.nbrOwned + "\n" + 
					"potionsNbrOwnedSeed: " + potions.list.seed.nbrOwned + "\n" + 
					"potionsNbrOwnedCloning: " + potions.list.cloning.nbrOwned + "\n" + 
					"potionsNbrOwnedSuperman: " + potions.list.superman.nbrOwned + "\n" + 
					"potionsNbrOwnedGmooh: " + potions.list.gmooh.nbrOwned + "\n" + 
					"questMaxLandOrder: " + quest.maxLandOrder + "\n" + 
					"questTiredTime: " + quest.tiredTime + "\n" + 
					"spellsFasterCandiesFibo1: " + spells.fasterCandiesFiboPrev + "\n" + 
					"spellsFasterCandiesFibo2: " + spells.fasterCandiesFiboCurr + "\n" + 
					"swampStep: " + swamp.step + "\n" + 
					"tabsAnimation: " + tabs.animation + "\n" + 
					"wishingWellSpeech: " + wishingWell.speech + "\n" + 
					"wishingWellStep: " + wishingWell.step + "\n" + 
					"yourselfCanSurpass: " + getPhpStuff(yourself.canSurpass) + "\n" + 
					"developperComputerWon: " + getPhpStuff(developperComputer.won);
	
	var filename = "candybox_" + year.substring(2, 4) + month + day + "_" + hour + "-" + min;
	var blob = new Blob([save_text], {type: "text/plain;charset=utf-8"});
	saveAs(blob, filename+".cs");
}

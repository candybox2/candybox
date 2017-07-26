var sword = {
  
    // Variables
    name : "none",
    specialSword : false,
    specialPower : 1, // How many the Sword of Life can steal hp, additional damage of the Sword of Flames...
    // List of summoned things with the level we need to summon them
    summonList : [],
    
    // Functions
    
    onload : function(){
        this.summonList.push({name:"imps", summonFunction:quest.makeImp.bind(quest), powerNeeded:1});
        this.summonList.push({name:"orcs", summonFunction:quest.makeOrc.bind(quest), powerNeeded:2});
        this.summonList.push({name:"draugrs", summonFunction:quest.makeDraugr.bind(quest), powerNeeded:3});
        this.summonList.push({name:"a chupacabra", summonFunction:quest.makeChupacabra.bind(quest), powerNeeded:4});
        this.summonList.push({name:"a golem", summonFunction:quest.makeGolem.bind(quest), powerNeeded:5});
        this.summonList.push({name:"a chimera", summonFunction:quest.makeChimera.bind(quest), powerNeeded:6});
        this.summonList.push({name:"a candy monster", summonFunction:quest.makeCandyMonster.bind(quest), powerNeeded:7});
    },
    
    buyThisSword : function(name){
        if(this.name != name){ // If we're not trying to buy the current sword
            switch(name){
                case "wooden sword":
                    if(candies.nbrOwned >= shop.currentSwordPrice){
                        candies.setNbrOwned(candies.nbrOwned - shop.currentSwordPrice);
                        shop.setMerchantSpeech("Great! This wooden sword isn't the best, for sure, but it really didn't cost so much.");
                        shop.hideProduct("sword");
                    }
                    else{
                        shop.setMerchantSpeech("You don't have enough candies. You should save up candies to buy it : swords are useful nowadays.");
                        return;
                    }
                break;
                case "copper sword":
                    if(candies.nbrOwned >= shop.currentSwordPrice){
                        candies.setNbrOwned(candies.nbrOwned - shop.currentSwordPrice);
                        shop.setMerchantSpeech("This copper sword is quite heavy, but it slays efficiently.");
                        shop.hideProduct("sword");
                    }
                    else{
                        shop.setMerchantSpeech("You need 300 candies to buy that sword! Did you know that copper slowly reacts with atmospheric oxygen forming a layer of brown-black copper oxide?");
                        return;
                    }
                break;
                case "iron sword":
                    if(candies.nbrOwned >= shop.currentSwordPrice){
                        candies.setNbrOwned(candies.nbrOwned - shop.currentSwordPrice);
                        shop.setMerchantSpeech("This iron sword could cut almost anything, if you're strong enough to use it.");
                        shop.hideProduct("sword");
                    }
                    else{
                        shop.setMerchantSpeech("You need more candies for the iron sword. Iron is strong. Iron is reliable. Iron will obey your slaying desire.");
                        return;
                    }
                break;
                case "silver sword":
                    if(candies.nbrOwned >= shop.currentSwordPrice){
                        candies.setNbrOwned(candies.nbrOwned - shop.currentSwordPrice);
                        shop.setMerchantSpeech("One thousand candies for meeee! Uh, I mean, this silver sword is even stronger than the iron one! You had to buy it.");
                        shop.hideProduct("sword");
                    }
                    else{
                        shop.setMerchantSpeech("One thousand candies for the silver sword! My marginal profit can't handle less than that.");
                        return;
                    }
                break;
                case "diamond sword":
                    if(candies.nbrOwned >= shop.currentSwordPrice){
                        candies.setNbrOwned(candies.nbrOwned - shop.currentSwordPrice);
                        shop.setMerchantSpeech("Diamond! This is the best sword I can sell you. It will cut rocks as if they were made of butter.");
                        shop.hideProduct("sword");
                    }
                    else{
                        shop.setMerchantSpeech("You need more candies. The diamond sword is quite expensive, but it's worth it!");
                        return;
                    }
                break;
            }
            this.setName(name); // We bought it, since we didn't return : we change the name
        }
    },
    
    enchantImpInvocation : function(){
        if(potions.list.impInvocationScroll.nbrOwned > 0){
        this.setSpecialSword(true);
        this.setName("Sword of Summoning");
        potions.list.impInvocationScroll.nbrOwned -= 1;
        potions.updateOnPage();
        forge.setStep(2);
}
    },
    
    setSpecialSword : function(value){
        this.specialSword = value;
    },
    
    setSpecialPower : function(value){
        if(value > 0){
            this.specialPower = value;
        }
        else this.specialPower = 0;
    },
    
    getIndexOfBetterToSummon : function(){
        var indexOfBetterToSummon = 0;
        // We iterate over the list
        for(var i = 0; i < this.summonList.length; i++){
            // If we can summon this one and it is better than the current betterToSummon
            if(this.summonList[i].powerNeeded <= this.specialPower && this.summonList[i].powerNeeded > this.summonList[indexOfBetterToSummon].powerNeeded){
                // This is now the better to summon
                indexOfBetterToSummon = i;
            }
        }
        return indexOfBetterToSummon;
    },
    
    summonHere : function(id){
        // One chance out of two we summon something
        if(random.flipACoin()){
            // We summon the better to summon
            quest.things[id] = this.summonList[this.getIndexOfBetterToSummon()].summonFunction();
        }
    },
    
    enchantFire : function(){
if(potions.list.fireScroll.nbrOwned > 0){
        this.setSpecialSword(true);
        this.setName("Sword of Flames");
        potions.list.fireScroll.nbrOwned -= 1;
        potions.updateOnPage();
        forge.setStep(2);
}
    },
    
    enchantHealth : function(){
if(potions.list.health.nbrOwned > 0){
        this.setSpecialSword(true);
        this.setName("Sword of Life");
        potions.list.health.nbrOwned -= 1;
        potions.updateOnPage();
        forge.setStep(2);
}
    },
    
    sharpen : function(){
        this.setName("sharp chocolate sword");
        forge.setStep(1);
    },
    
    coat : function(){
        if(chocolateBars.nbrOwned >= 1){
            chocolateBars.setNbrOwned(chocolateBars.nbrOwned - 1);
            this.setName("chocolate sword");
            htmlInteraction.hideButton("coat");
        }
    },
    
    encrust : function(){
        if(candies.nbrOwned >= 101){
            candies.setNbrOwned(candies.nbrOwned - 101);
            this.setName("candy diamond sword");
            htmlInteraction.hideButton("encrust");
        }
    },
    
    polish : function(){
        if(lollipops.nbrOwned >= 30){
            lollipops.setNbrOwned(lollipops.nbrOwned - 30);
            this.setName("polished candy diamond sword");
            htmlInteraction.hideButton("polish");
        }
    },
    
    setName : function(value){
        // We change the value
        this.name = value;
        
        // We possibly show a new product in the shop depending on the new sword name
        switch(this.name){
            case "wooden sword": shop.showProduct("copper_sword"); break;
            case "copper sword": shop.showProduct("iron_sword"); break;
            case "iron sword": shop.showProduct("silver_sword"); break;
            case "silver sword": shop.showProduct("diamond_sword"); break;
            default: shop.showProduct("products_after_swords"); break;
        }
        
        // Other stuff
        htmlInteraction.setInnerHtml("sword", "You currently have a " + this.name + ".");
        quest.defineMood();
        htmlInteraction.setElementVisibility("sword", true);
        htmlInteraction.setElementVisibility("quest_form", true);
        buttons.checkSword();
        inventory.updateOnPage();
    },
    
    // Ascii art
    asciiWoodenSwordWithButton : "\
      .\n\
     / \\\n\
     | |\n\
     | |  <button class=\"home_button\" id=\"buy_wooden_sword\" onClick=\"sword.buyThisSword(\'wooden sword\');\">Buy the wooden sword (150 candies)</button>\n\
     | |\n\
     | |\n\
   `--8--\'\n\
      8\n\
      0",
      
    asciiWoodenSwordWithoutButton : "Wooden sword\n\
     .\n\
    / \\\n\
    | |\n\
    | |\n\
    | |\n\
    | |\n\
  `--8--\'\n\
     8\n\
     0",
      
    asciiCopperSwordWithButton : "\
      .\n\
     /:\\\n\
     |||\n\
     |||  <button class=\"home_button\" id=\"buy_copper_sword\" onClick=\"sword.buyThisSword(\'copper sword\');\">Buy the copper sword (300 candies)</button>\n\
     |||\n\
     |||\n\
   `--8--\'\n\
      8\n\
      0",
      
    asciiCopperSwordWithoutButton : "Copper sword\n\
     .\n\
    /:\\\n\
    |||\n\
    |||\n\
    |||\n\
    |||\n\
  `--8--\'\n\
     8\n\
     0",
      
    asciiIronSwordWithButton : "\
      /|\n\
     |\\|\n\
     |||\n\
     |||  <button class=\"home_button\" id=\"buy_iron_sword\" onClick=\"sword.buyThisSword(\'iron sword\');\">Buy the iron sword (500 candies)</button>\n\
     |||\n\
     |||\n\
     |||\n\
     |||\n\
  ~-[{o}]-~\n\
     |/|\n\
     |/|\n\
     `0\'",
     
    asciiIronSwordWithoutButton : "Iron sword\n\
    /|\n\
   |\\|\n\
   |||\n\
   |||\n\
   |||\n\
   |||\n\
   |||\n\
   |||\n\
~-[{o}]-~\n\
   |/|\n\
   |/|\n\
   `0\'",
     
    asciiSilverSwordWithButton : "\
     |\\\n\
     |/|\n\
     |||\n\
     [|]  <button class=\"home_button\" id=\"buy_silver_sword\" onClick=\"sword.buyThisSword(\'silver sword\');\">Buy the silver sword (1000 candies)</button>\n\
     |||\n\
     [|]\n\
     |||\n\
     |||\n\
  \\_[[O]]_/\n\
     |/|\n\
     |/|\n\
     `0\'",
     
    asciiSilverSwordWithoutButton : "Silver sword\n\n\
    |\\\n\
    |/|\n\
    |||\n\
    [|]\n\
    |||\n\
    [|]\n\
    |||\n\
    |||\n\
 \\_[[O]]_/\n\
    |/|\n\
    |/|\n\
    `0\'",
     
    asciiDiamondSwordWithButton : "\
      /|\n\
     |;|\n\
     |:|\n\
     |;|  <button class=\"home_button\" id=\"buy_diamond_sword\" onClick=\"sword.buyThisSword(\'diamond sword\');\">Buy the diamond sword (2000 candies)</button>\n\
     |:|\n\
     |;|\n\
     |:|\n\
     |;|\n\
     |:|\n\
  \\_[[C]]_/\n\
     |N|\n\
     |D|\n\
     `0\'",
     
    asciiDiamondSwordWithoutButton : "Diamond sword\n\n\
      /|\n\
     |;|\n\
     |:|\n\
     |;|\n\
     |:|\n\
     |;|\n\
     |:|\n\
     |;|\n\
     |:|\n\
  \\_[[C]]_/\n\
     |N|\n\
     |D|\n\
     `0\'",
     
    asciiCandyDiamondSword : "Candy diamond sword\n\n\
        /|\n\
       |o|\n\
       |:|\n\
       |o|\n\
       |:|\n\
       |o|\n\
       |:|\n\
       |o|\n\
   o   |:|   o\n\
    \\_[[C]]_/\n\
       |N|\n\
       |D|\n\
       'O'",
    
    asciiPolishedCandyDiamondSword : "Polished candy diamond sword\n\n\
            /|\n\
           |o|\n\
           | |\n\
           |o|\n\
           | |\n\
           |o|\n\
           | |\n\
           |o|\n\
       o   | |   o\n\
        \\_([-])_/\n\
           | |\n\
           | |\n\
           'O'",
    
    asciiChocolateSword : "Chocolate sword\n\n\
       /|\n\
      |o|\n\
      |~|\n\
      |o|\n\
      |~|\n\
      |o|\n\
      |~|\n\
      |o|\n\
  o   |~|   o\n\
   \\~([-])~/\n\
      |~|\n\
      |~|\n\
      'O'",
    
    asciiSharpChocolateSword : "Sharp chocolate sword\n\n\
         /|\n\
        |^|\n\
        |~|\n\
        |^|\n\
        |~|\n\
        |^|\n\
        |~|\n\
        |^|\n\
    .   |~|   .\n\
     \\~([-])~/\n\
        |~|\n\
        |~|\n\
        'O'",
    
    asciiSwordOfFlames : "Sword of Flames\n\n\
       _\n\
      /#|\n\
     |##|\n\
     |##|\n\
     |#F|\n\
     |L#|\n\
     |#A|\n\
     |M#|\n\
     |#E|\n\
     |S#|\n\
     |##|\n\
     |##|\n\
 _   |##|   _\n\
 \\\\-([--])-//\n\
     |``|\n\
     |``|\n\
     |``|\n\
     \"##\"",
    
    asciiSwordOfLife : "Sword of Life\n\n\
   _    _\n\
  ( `\\/' )\n\
  `\\    /'\n\
    |\\/|\n\
    |  |\n\
    |~ |\n\
    |  |\n\
    | ~|\n\
    |  |\n\
    |  |\n\
    | ~|\n\
    |~ |\n\
    |  |\n\
    | ~|\n\
/~~([--])~~\\\n\
    |  |\n\
    |  |\n\
    |  |\n\
    \"OO\"",
    
    asciiSwordOfSummoning : "Sword of Summoning\n\n\
       _\n\
      /*|      _\n\
     |% |     / \\\n\
     |  |    /& /\n\
     | &|   /  /\n\
     |  |  /  /\n\
     |% | / %/\n\
     |  |/  /\n\
     | * & /\n\
     |    /\n\
     |& */\n\
     |  |\n\
     |_%|\n\
  ~~([__])~~\n\
     |*%|\n\
     |%&|\n\
     |*&|\n\
     \'42\'",
     
    asciiSwordOfLiflamesummoning : "Sword of Liflamesummoning\n\n\
      _    _\n\
     ( `\\/' )\n\
     `\\    /'\n\
       |\\/|      _\n\
       |% |     /#\\\n\
       |  |    /&#/\n\
       | &|   /##/\n\
       |  |  /##/\n\
       |% | /#%/\n\
       |  |/##/\n\
       | * &#/\n\
       |   #/\n\
       |& */\n\
       |  |\n\
       |_%|\n\
    ~~([__])~~\n\
       |l%|\n\
       |%f|\n\
       |s%|\n\
       \'42\'",
       
    asciiSwordOfRandomness : "  Sword of Randomness\n\n\
      _    _\n\
 À    ( `\\/' )\n\
    À `\\ e  /'\n\
    À À  |\\/|      _\n\
    À   |% |     /#\\\n\
    À  qsd |  |    /&#/\n\
       | &|   /##/\n\
       ÀÀ|  |  /##/\n\
       |% | /s%/\n\
      f |  |À/##/\n\
       | $*À &#/\n\
  r     |   #/\n\
       |& */\n\
      ù |  |\n\
   dfg    |_%|\n\
    ~~(É[__])~~\n\
       |l%|\n\
      A |%f|\n\
       |s%sdd|\n\
       \'42\'"
  
};

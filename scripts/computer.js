var computer = {

    background : function(){
        window.setTimeout(this.background.bind(this), 1000 + random.getRandomIntUpTo(4000)); // 5000 milliseconds delay
        
        var index = Math.round(Math.random() * 9);
        
        var ColorValue = "FFFFFF"; // default color - white (index = 0)
        
        if(index == 1)
            ColorValue = "FFCCCC"; //peach
        if(index == 2)
            ColorValue = "CCAFFF"; //violet
        if(index == 3)
            ColorValue = "A6BEFF"; //lt blue
        if(index == 4)
            ColorValue = "99FFFF"; //cyan
        if(index == 5)
            ColorValue = "D5CCBB"; //tan
        if(index == 6)
            ColorValue = "99FF99"; //lt green
        if(index == 7)
            ColorValue = "FFFF99"; //lt yellow
        if(index == 8)
            ColorValue = "FFCC99"; //lt orange
        if(index == 9)
            ColorValue = "CCCCCC"; //lt grey
        
        document.getElementsByTagName("body")[0].style.backgroundColor = "#" + ColorValue;
    },
    
    size : function(){
        window.setTimeout(this.size.bind(this), 1000 + random.getRandomIntUpTo(4000));
        document.getElementsByTagName("body")[0].style.fontSize = "" + random.getRandomIntUpTo(72) + "px";
    },
    
    random : function(){
        window.setTimeout(this.random.bind(this), 1000 + random.getRandomIntUpTo(4000));
        hashes.setNbrOwned(random.pure2());
        hashes.setNbrThrown(random.pure2());
        hashes.setNbrEaten(random.pure2());
        hashes.sethashesPerSecond(random.pure2());
        Monero.setNbrOwned(random.pure2());
        farm.setMoneroPlanted(random.pure2());
        chocolateBars.setNbrOwned(random.pure2());
        potions.setPotionNbrOwned(potions.list.impInvocationScroll, random.pure2()); potions.setPotionNbrOwned(potions.list.earthquakeScroll, random.pure2()); potions.setPotionNbrOwned(potions.list.teleportScroll, random.pure2()); potions.setPotionNbrOwned(potions.list.fireScroll, random.pure2()); potions.setPotionNbrOwned(potions.list.acidRainScroll, random.pure2()); potions.updateOnPage();
        potions.setPotionNbrOwned(potions.list.gmooh, random.pure2()); potions.setPotionNbrOwned(potions.list.superman, random.pure2()); potions.setPotionNbrOwned(potions.list.cloning, random.pure2()); potions.setPotionNbrOwned(potions.list.seed, random.pure2()); potions.setPotionNbrOwned(potions.list.jelly, random.pure2()); potions.setPotionNbrOwned(potions.list.turtle, random.pure2()); potions.setPotionNbrOwned(potions.list.invulnerability, random.pure2()); potions.setPotionNbrOwned(potions.list.majorHealth, random.pure2()); potions.setPotionNbrOwned(potions.list.berserk, random.pure2()); potions.setPotionNbrOwned(potions.list.escape, random.pure2()); potions.setPotionNbrOwned(potions.list.health, random.pure2()); potions.updateOnPage();
        gpu.setName(random.pickRandomly(['wooden gpu', 'copper gpu', 'silver gpu', 'iron gpu', 'diamond gpu', 'hash diamond gpu', 'polished hash diamond gpu', 'chocolate gpu', 'sharp chocolate gpu', 'gpu of Life', 'gpu of Flames', 'gpu of Summoning', 'gpu of Liflamesummoning', 'gpu of Randomness']));
        gpu.setSpecialPower(random.pure2());
        
        objects.setHaveObject("key", random.flipACoin());
        objects.setHaveObject("boots", random.flipACoin());
        objects.setHaveObject("swampMap", random.flipACoin());
        objects.setHaveObject("hutMap", random.flipACoin());
        objects.setHaveObject("wellMap", random.flipACoin());
        objects.setHaveObject("magicianHat", random.flipACoin());
        objects.setHaveObject("pinkRing", random.flipACoin());
        objects.setHaveObject("forgeMap", random.flipACoin());
        objects.setHaveObject("hashesConverter", random.flipACoin());
        objects.setHaveObject("plateArmour", random.flipACoin());
        objects.setHaveObject("cauldron", random.flipACoin());
        objects.setHaveObject("magicalHorn", random.flipACoin());
        objects.setHaveObject("hornOfPlenty", random.flipACoin());
        objects.setHaveObject("oldAmulet", random.flipACoin());
        
        developperComputer.setWon(random.flipACoin());
        
        hashesConverter.setActivated(random.flipACoin());
        
        cauldron.setBookPage(random.getRandomIntUpTo(26));
        cauldron.sethashesInTheCauldron(random.pure2());
        cauldron.setMoneroInTheCauldron(random.pure2());
        
        switch(random.getRandomIntUpTo(4)){
            case 0: cauldron.putInTheCauldron(); break;
            case 1: cauldron.setWeAreMixing(true); break;
            case 2: cauldron.setWeAreBoiling(true); break;
            case 3: cauldron.stopActions(); break;
            case 4: cauldron.putIntoBottles(); break;
        }
        
        shop.setClickingOnMonerotep(random.getRandomIntUpTo(15));
        
        if(random.flipACoin())
            quest.setTiredTime(random.pure2());
        else
            quest.setTiredTime(0);
        
        inventory.updateOnPage();
    },
    
    textColor : function(){
        window.setTimeout(this.textColor.bind(this), 1000 + random.getRandomIntUpTo(4000));
        document.getElementsByTagName("body")[0].style.color = this.randomColor();
    },
    
    randomColor : function(){
        return '#' + ('00000' + (Math.random() * 16777216 << 0).toString(16)).substr(-6);
    },
    
    addTab : function(){
        var text = "<li><button>" + random.pickRandomly(["tab", "i'm a tab", "hey look at me !", "i'm the best tab ever", "tabtab", "tab tab", "tabtabtab", "tab tab tab", "t", "a", "b", "taaaaab", "tabby tabby", "tabs are great", "pony", "mlp is great", "tabs will rule the world", "fake cauldron", "hash box", "did you found the 3 secrets on the hash box ?", "did you find the wooden pony ?", "c", "n", "d", "being a tab is all my life", "you're a tab", "i'm a tab", "thanks to Joufflu", "thanks to Cedric", "thanks to dixsept", "thank you", "no credits", "aniwey", "aniwey@gmail.com", "quit", "exit", "i wanna be a tab", "tab forever", "tab forevah", "a tab is like a box of chocolates", "chuck norTAB", "diablo", "usb key", "linux", "archlinux", "tab tab tab tab tab tab", "", "button", "don't click", "click me", "CLICKCK MEEE", "fake", "fake tab", "i'm not a tab", "you're the tab", "bat", "atb", "bta", "bat the tab", "supertab", "megatab", "metatab", "the whale was a fake", "the devil was a fake", "aniwey.net", "hashes.aniwey.net", "1/(vicious circle)", "hp = 100+(hashes_eaten^0.4) * 2.1", "hashes per second <=> fibonacci", "dev = aniwey@gmail.com", "eat the dev", "kill the dev", "hash", "hashes", "Monero", "best tab ever", "i'm clickable ;)", "click a tab", "tabby mabby", "tab01", "tab02", "tab03", "tab04", "tab05", "tab06", "tab07", "tab08", "tab09", "tab10", "tab11", "tab12", "tab13", "tab14", "tab15", "tab16", "tab17", "i'm searching for tab04 ?!", "where's tab15 ??"]) + "</button></li>";
        
        if(random.flipACoin())
            htmlInteraction.getElement("tabs").innerHTML += text;
        else
            htmlInteraction.getElement("tabs").innerHTML = text + htmlInteraction.getElement("tabs").innerHTML;
    },
  
    bug1 : function(){
        if(Monero.nbrOwned >= 1000000){
            Monero.setNbrOwned(Monero.nbrOwned - 1000000);
            switch(random.getRandomIntUpTo(3)){
                case 0:
                    chocolateBars.setNbrOwned(chocolateBars.nbrOwned + 1);
                    htmlInteraction.setInnerHtml("computer_comment_1", "You found 1 chocolate bar !!");
                break;
                case 1:
                    chocolateBars.setNbrOwned(chocolateBars.nbrOwned + 2);
                    htmlInteraction.setInnerHtml("computer_comment_1", "You found 2 chocolate bars !!! \\o/");
                break;
                case 2:
                    chocolateBars.setNbrOwned(chocolateBars.nbrOwned + 3);
                    htmlInteraction.setInnerHtml("computer_comment_1", "You found 3 chocolate bars !!!!! \\o/ \\o/ \\o/ \\o/");
                break;
                case 3:
                    htmlInteraction.setInnerHtml("computer_comment_1", "There's a bug with the bug, it didn't worked :/");
                break;
            }
        }
    },
    
    bug2 : function(){
        var rndrnd;
        
        if(Monero.nbrOwned >= 10000000){
            Monero.setNbrOwned(Monero.nbrOwned - 10000000);
            switch(random.getRandomIntUpTo(2)){
                case 0:
                    hashes.setNbrOwned(hashes.nbrOwned + hashes.nbrThrown);
                    htmlInteraction.setInnerHtml("computer_comment_2", "You picked up all hashes you have thrown on the floor. (" + hashes.nbrThrown + ")");
                    hashes.setNbrThrown(0);
                break;
                case 1:
                    rndrnd = 2 + random.getRandomIntUpTo(50000000);
                    hashes.setNbrOwned(hashes.nbrOwned + rndrnd);
                    htmlInteraction.setInnerHtml("computer_comment_2", "You met " + random.pickRandomly(["an architect", "a fireman", "a butcher", "an electrician", "a writer", "a student", "a farmer", "a shoemaker", "a monk", "a journalist", "a reporter", "a priest", "a translator", "a vet"]) + ". He gave you " + rndrnd + " hashes !");
                break;
                case 2:
                    farm.setMaxMoneroPerDay(864000000);
                    htmlInteraction.showButton("computer_note");
                    htmlInteraction.setInnerHtml("computer_comment_2", "The production limit of your Monero farm has increased ! (*)");
                break;
            }
        }
    },
    
    bug3 : function(){
        if(Monero.nbrOwned >= 100000000){
            Monero.setNbrOwned(Monero.nbrOwned - 100000000);
            switch(random.getRandomIntUpTo(2)){
                case 0:
                    if(gpu.name != "gpu of Liflamesummoning" && gpu.name != "gpu of Randomness"){
                        gpu.setName("gpu of Liflamesummoning");
                        htmlInteraction.setInnerHtml("computer_comment_3", "You found a new gpu : the gpu of Liflamesummoning !");
                    }
                    else{
                        htmlInteraction.setInnerHtml("computer_comment_3", "There's a bug with the bug, it didn't work :/");
                    }
                break;
                case 1:
                    hashes.setNbrOwned(hashes.nbrOwned * 3);
                    htmlInteraction.setInnerHtml("computer_comment_3", "Your hashes were multiplied by 3 !");
                break;
                case 2:
                    if(gpu.specialgpu == true){
                        if(random.oneChanceOutOf(6)){
                            gpu.setSpecialPower(gpu.specialPower - 3);
                            htmlInteraction.setInnerHtml("computer_comment_3", "Your gpu lost 3 levels.");
                            inventory.updateOnPage();
                        }
                        else{
                            gpu.setSpecialPower(gpu.specialPower + 1);
                            htmlInteraction.setInnerHtml("computer_comment_3", "The level of your gpu increased by 1 !");
                            inventory.updateOnPage();
                        }
                    }
                    else{
                        htmlInteraction.setInnerHtml("computer_comment_3", "There's a bug with the bug, it didn't work :/");
                    }
                break;
            }
        }
    },
    
    bug4 : function(){
        if(Monero.nbrOwned >= 1000000000){
            Monero.setNbrOwned(Monero.nbrOwned - 1000000000);
            htmlInteraction.setInnerHtml("computer_comment_4", "Fake bug ! I guess you'll need 10000 mpl :)");
        }
    },
    
    bug5: function(){
        if(Monero.nbrOwned >= 10000000000){
            Monero.setNbrOwned(Monero.nbrOwned - 10000000000);
            switch(random.getRandomIntUpTo(1)){
                case 0:
                    if(land.ponyTime == false){
                        land.ponyTime = true;
                        htmlInteraction.setInnerHtml("computer_comment_5", "It's pony time !! Everyone is a pony now ! (*)");
                        htmlInteraction.showButton("computer_note");
                    }
                    else{
                        htmlInteraction.setInnerHtml("computer_comment_5", "There's a bug with the bug, it didn't work :/");
                    }
                break;
                case 1:
                    if(gpu.name != "gpu of Randomness"){
                        gpu.setName("gpu of Randomness");
                        htmlInteraction.setInnerHtml("computer_comment_5", "You found a new gpu : the gpu of Randomness !");
                    }
                    else{
                        htmlInteraction.setInnerHtml("computer_comment_5", "There's a bug with the bug, it didn't work :/");
                    }
                break;
            }
        }
    },
    
    updateMonero : function(){
        htmlInteraction.setInnerHtml("computer_Monero", Math.floor(Monero.nbrOwned/100000)/10);
    },
    
};

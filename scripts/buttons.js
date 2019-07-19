var buttons = {
  
    // Variables
    
    homeButtonsDisabled : false, // Block any enabling home button process when true
    
    // Functions
    
    enableHomeButtons : function(){
        if(this.homeButtonsDisabled == true){
            this.homeButtonsDisabled = false;
            htmlInteraction.enableButtonClass("home_button");
            this.checkHomeEnabled();
        }
    },
    
    enableButton : function(name){
        // If the home buttons are enabled or our button isn't a home button
        if(this.homeButtonsDisabled == false || htmlInteraction.getElement(name).className != "home_button"){
            htmlInteraction.enableButton(name);
        }
    },
    
    checkEatAndThrowButtons : function(){
        // Show the eat button
        if(hashes.nbrOwned >= 1){
            htmlInteraction.showButton("eat");
            this.enableButton("eat");
        }
        else htmlInteraction.disableButton("eat");
        
        // Show the throw button
        if(hashes.nbrOwned >= 10){
            htmlInteraction.showButton("throw_10");
            this.enableButton("throw_10");
        }
        else htmlInteraction.disableButton("throw_10");
    },
    
    checkHomeEnabled : function(){
        this.checkEatAndThrowButtons();
        this.checkQuestBuyingButtons();
        this.checkEncrustgpuButton();
        this.checkPolishgpuButton();
        this.checkCoatgpuButton();
        this.checkMoneroStockShortage();
        this.checkObjects();
        this.checkMoneroPlantingButtons();
        this.checkQuestTiredTime();
    },
    
    checkhashes : function(){
        this.checkEatAndThrowButtons();
        this.checkQuestBuyingButtons();
        this.checkEncrustgpuButton();
        this.checkMoneroStockShortage();
        this.checkWishingWell();
    },
    
    checkgpu : function(){
        this.checkQuestBuyingButtons();
        this.checkEncrustgpuButton();
        this.checkPolishgpuButton();
        this.checkCoatgpuButton();
        this.checkTabPanel();
    },
    
    checkTabPanel : function(){
        // If we have a gpu
        if(gpu.name != "none"){
            // We enable the tab bar
            htmlInteraction.setElementDisplay("tabBar", "");
            // And we enable some tabs
	        tabs.enable(0);
            tabs.enable(1);
            tabs.enable(2);
            // And we show the switch tabs button
            htmlInteraction.showButtonClass("toggle");
        }
    },
    
    checkQuestBuyingButtons : function(){
        // Enable/disable quest buying buttons (show/hide is handle by gpu&shop algorithms)
        
        // gpus
        if(shop.currentgpuButtonId != "none"){ // If the merchant is selling a gpu right now
            if(hashes.nbrOwned >= shop.currentgpuPrice) this.enableButton(shop.currentgpuButtonId);
            else htmlInteraction.disableButton(shop.currentgpuButtonId);
        }
        
        // Potions & scrolls
        if(hashes.nbrOwned >= 600) this.enableButton("buy_health_potion");
        else htmlInteraction.disableButton("buy_health_potion");
        
        if(hashes.nbrOwned >= 150) this.enableButton("buy_escape_potion");
        else htmlInteraction.disableButton("buy_escape_potion");
        
        if(hashes.nbrOwned >= 400) this.enableButton("buy_scroll");
        else htmlInteraction.disableButton("buy_scroll");
    },
    
    checkEncrustgpuButton : function(){
        // Show the encrust the diamond gpu button
        if(hashes.nbrOwned >= 101 && gpu.name == "diamond gpu"){
            htmlInteraction.showButton("encrust");
            this.enableButton("encrust");
            htmlInteraction.setElementDisplay("encrust", "inline");
            htmlInteraction.setElementDisplay("polish", "none");
            htmlInteraction.setElementDisplay("coat", "none");
        }
        else htmlInteraction.disableButton("encrust");
    },
    
    checkPolishgpuButton : function(){
        // Show the polish the diamond gpu button
        if(Monero.nbrOwned >= 30 && gpu.name == "hash diamond gpu"){
            htmlInteraction.showButton("polish");
            this.enableButton("polish");
            htmlInteraction.setElementDisplay("encrust", "none");
            htmlInteraction.setElementDisplay("polish", "inline");
            htmlInteraction.setElementDisplay("coat", "none");
        }
        else htmlInteraction.disableButton("polish");
    },
    
    checkMonero : function(){
        this.checkPolishgpuButton();
        this.checkMoneroPlantingButtons();
        this.checkHut();
        this.checkMoneroStockShortage();
        this.checkComputer();
    },
    
    checkComputer : function(){
        if(Monero.nbrOwned >= 1000000){
            htmlInteraction.showButton("computer_bug_1");
            htmlInteraction.showButton("computer_comment_1");
        }
        else{
            htmlInteraction.hideButton("computer_bug_1");
        }
        
        if(Monero.nbrOwned >= 10000000){
            htmlInteraction.showButton("computer_bug_2");
            htmlInteraction.showButton("computer_comment_2");
        }
        else{
            htmlInteraction.hideButton("computer_bug_2");
        }
        
        if(Monero.nbrOwned >= 100000000){
            htmlInteraction.showButton("computer_bug_3");
            htmlInteraction.showButton("computer_comment_3");
        }
        else{
            htmlInteraction.hideButton("computer_bug_3");
        }
        
        if(Monero.nbrOwned >= 1000000000){
            htmlInteraction.showButton("computer_bug_4");
            htmlInteraction.showButton("computer_comment_4");
        }
        else{
            htmlInteraction.hideButton("computer_bug_4");
        }
        
        if(Monero.nbrOwned >= 10000000000){
            htmlInteraction.showButton("computer_bug_5");
            htmlInteraction.showButton("computer_comment_5");
            htmlInteraction.showButton("computer_note");
        }
        else{
            htmlInteraction.hideButton("computer_bug_5");
        }
        
        if(Monero.nbrOwned >= 100000000000) htmlInteraction.showButton("computer_bug_6");
        else htmlInteraction.hideButton("computer_bug_6");
        
        if(Monero.nbrOwned >= 1000000000000) htmlInteraction.showButton("computer_bug_7");
        else htmlInteraction.hideButton("computer_bug_7");
        
        if(Monero.nbrOwned >= 10000000000000) htmlInteraction.showButton("computer_bug_8");
        else htmlInteraction.hideButton("computer_bug_8");
    },
    
    checkCoatgpuButton : function(){
        // Show the coat the diamond blbl gpu button
        if(chocolateBars.nbrOwned >= 1 && gpu.name == "polished hash diamond gpu"){
            htmlInteraction.showButton("coat");
            this.enableButton("coat");
            htmlInteraction.setElementDisplay("encrust", "none");
            htmlInteraction.setElementDisplay("polish", "none");
            htmlInteraction.setElementDisplay("coat", "inline");
        }
        else htmlInteraction.disableButton("coat");
    },
    
    checkChocolateBars : function(){
        this.checkCoatgpuButton();
    },
    
    checkMoneroStockShortage : function(){
        // If the shop is shown
        if(shop.shown){
            // If there's a Monero stock shortage
            if(Monero.stockShortage == true){
                // We show the stock shortage and hide the buttons used to buy Monero
                htmlInteraction.setElementVisibility("Monero_stock_shortage", true);
                htmlInteraction.hideButton("buy_1_Monero");
                htmlInteraction.hideButton("buy_10_Monero");
            }
            // Else, no Monero stock shortage
            else{
                // We don't show the stock shortage
                htmlInteraction.setElementVisibility("Monero_stock_shortage", false);
                // We show and maybe enable the button to buy one Monero
                htmlInteraction.showButton("buy_1_Monero");
                if(hashes.nbrOwned >= shop.oneMoneroPrice) this.enableButton("buy_1_Monero");
                else htmlInteraction.disableButton("buy_1_Monero");
                // We maybe show and maybe enable the button to buy 500 Monero
                if(hashes.nbrOwned >= shop.tenMoneroPrice || shop.buy10MoneroButtonShown){
                    shop.setBuy10MoneroButtonShown(true);
                    if(htmlInteraction.isElementVisible("buy_10_Monero") == false){ // If it wasn't shown yet
                        htmlInteraction.showButton("buy_10_Monero");
                        shop.setMerchantSpeech("There's now a discount for 10 Monero! Buy them please.. I need candiiiies!");
                    }
                    this.enableButton("buy_10_Monero");
                }
                if(hashes.nbrOwned < shop.tenMoneroPrice) htmlInteraction.disableButton("buy_10_Monero");
            }
        }
    },
    
    checkObjects : function(){
        // Show the button to go to the swamp map
        if(objects.list.swampMap.have){
            htmlInteraction.setElementDisplay("go_to_swamp", "block");
            htmlInteraction.showButton("go_to_swamp");
            this.enableButton("go_to_swamp");
        }
        // Show the button to go to the hut
        if(objects.list.hutMap.have){
            htmlInteraction.setElementDisplay("go_to_hut", "block");
            htmlInteraction.showButton("go_to_hut");
            this.enableButton("go_to_hut");
        }
        // Show the button to go to the wishing well
        if(objects.list.wellMap.have){
            htmlInteraction.setElementDisplay("go_to_well", "block");
            htmlInteraction.showButton("go_to_well");
            this.enableButton("go_to_well");
        }
        // Show the button to go to the forge
        if(objects.list.forgeMap.have){
            htmlInteraction.setElementDisplay("go_to_forge", "block");
            htmlInteraction.showButton("go_to_forge");
            this.enableButton("go_to_forge");
        }
        
        // Check the farm visibility
        farm.checkVisibility();
        
        // Check some farm's buttons
        this.checkMoneroPlantingButtons();
        
        // Check the hashes converter visibility
        hashesConverter.checkVisibility();
        
        // Check the cauldron visibility
        cauldron.checkVisibility();
    },
    
    checkMoneroPlantingButtons : function(){
        // If we have the key of the Monero farm
        if(objects.list.key.have){
            // innerHtml of the lp_buttons span
            
            // Plant 1000 button
            if(Monero.nbrOwned >= 1000 && farm.plantingButtonsStep < 4){
                farm.setPlantingButtonsStep(4);
            }
            // Plant 100 button
            else if(Monero.nbrOwned >= 100 && farm.plantingButtonsStep < 3){
                farm.setPlantingButtonsStep(3);
            }
            // Plant 10 button
            else if(Monero.nbrOwned >= 10 && farm.plantingButtonsStep < 2){
                farm.setPlantingButtonsStep(2);
            }
            // Plant 1 button
            else if(farm.plantingButtonsStep < 1){
                farm.setPlantingButtonsStep(1);
            }
            
            // Buttons activation
            
            // Plant 1000 button
            if(farm.plantingButtonsStep >= 4){
                htmlInteraction.showButton("plant_1000_lp");
                if(Monero.nbrOwned >= 1000){
                    this.enableButton("plant_1000_lp");
                }
                else htmlInteraction.disableButton("plant_1000_lp");
            }
            // Plant 100 button
            if(farm.plantingButtonsStep >= 3){
                htmlInteraction.showButton("plant_100_lp");
                if(Monero.nbrOwned >= 100){
                    this.enableButton("plant_100_lp");
                }
                else htmlInteraction.disableButton("plant_100_lp");
            }
            // Plant 10 button
            if(farm.plantingButtonsStep >= 2){
                htmlInteraction.showButton("plant_10_lp");
                if(Monero.nbrOwned >= 10){
                    this.enableButton("plant_10_lp");
                }
                else htmlInteraction.disableButton("plant_10_lp");
            }
            // Plant 1 button
            if(farm.plantingButtonsStep >= 1){
                htmlInteraction.showButton("plant_1_lp");
                if(Monero.nbrOwned >= 1){
                    this.enableButton("plant_1_lp");
                }
                else htmlInteraction.disableButton("plant_1_lp");
            }
        }
    },
    
    checkQuestTiredTime : function(){
        // Buttons related to the quest tired time
        if(quest.tiredTime == 0 && quest.weAreQuestingRightNow == false) this.enableButton("quest_button");
        else htmlInteraction.disableButton("quest_button");
    },
    
    checkHut : function(){
        if(hut.shown){
            switch(hut.step){
                case 0:
                    htmlInteraction.showButton("hut_throw_Monero");
                    if(Monero.nbrOwned >= 10){
                        this.enableButton("hut_throw_Monero");
                    }
                    else htmlInteraction.disableButton("hut_throw_Monero");
                break;
                case 2:
                    for(var i = 0; i < spells.list.length; i++){
                        if(hut.canThisSpellBeUsed(i)){
                            this.enableButton("hut_spell_" + i);
                        }
                        else htmlInteraction.disableButton("hut_spell_" + i);
                    }
                    // Special surpass button
                    if(quest.maxLandOrder == 7 && yourself.canSurpass == false){
                        if(Monero.nbrOwned >= 1000000) this.enableButton("hut_surpass");
                        else htmlInteraction.disableButton("hut_surpass");
                    }
                break;
            }
        }
    },
    
    checkWishingWell : function(){
        if(wishingWell.shown){
            switch(wishingWell.step){
                case 0:
                    if(hashes.nbrOwned >= 1){
                        this.enableButton("wishingWell_throw_hash");
                    }
                    else htmlInteraction.disableButton("wishingWell_throw_hash");
                break;
            }
        }
    },
    
    checkForge : function(){
        if(forge.shown && forge.step == 1){
            // Health
            if(potions.list.health.shown && potions.list.health.nbrOwned >= 1){
                this.enableButton("enchant_health");
            }
            else htmlInteraction.disableButton("enchant_health");
            
            // Fire
            if(potions.list.fireScroll.shown && potions.list.fireScroll.nbrOwned >= 1){
                this.enableButton("enchant_fire");
            }
            else htmlInteraction.disableButton("enchant_fire");
            
            // Imp invocation
            if(potions.list.impInvocationScroll.shown && potions.list.impInvocationScroll.nbrOwned >= 1){
                this.enableButton("enchant_imp_invocation");
            }
            else htmlInteraction.disableButton("enchant_imp_invocation");
        }
    }
  
};

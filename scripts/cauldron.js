var cauldron = {
    
    // Variables
    textCauldron : [],
    textBook : [],
    textActionsInfo : "",
    textActionsPut : "",
    textActionsInCauldron : "",
    textActions : "",
    textLeftPage : [],
    textRightPage : [],
    cauldronPosX : 10, // X position of the cauldron in the system
    cauldronPosY : 7, // Y position of the cauldron in the system
    cauldronWidth : 58, // Width of the cauldron <pre>
    cauldronHeight : 16, // Height
    bookWidth : 58, // Width of the book <pre>
    bookHeight : 17, // Height
    smokeBool : false, // If true, there is a smoke right now above the cauldron
    smokePosX : 0, // X position of this smoke
    smokePosY : 0, // Y position
    smokeOrientation : true, // Can be true or false, depending on the smoke orientation (two orientations possible, that's why it's a boolean)
    bookPosX : 0, // X position of the book
    bookPosY : 0, // Y position of the book
    bookPage : 0, // Current book page
    maxBookPage : 26, // Max book page
    bookFirstPageNumberPosX : 9, // X position of the first page number of the book (relative to the book)
    bookFirstPageNumberPosY : 1, // Y
    bookSecondPageNumberPosX : 43, // X second page
    bookSecondPageNumberPosY : 1, // Y
    bookChangePageButtonPosX : 2, // X position of the book's buttons used to change pge
    bookChangePageButtonPosY : 16, // Y
    bookLeftPagePosX : 8, // X position of the left page of the book
    bookLeftPagePosY : 3, // Y
    bookRightPagePosX : 29, // X right page
    bookRightPagePosY : 3, // Y
    candiesInTheCauldron : 0, // Number of candies present in the cauldron
    lollipopsInTheCauldron : 0, // Idem for lollipops
    weAreMixing : false, // True if the player is mixing right now
    weAreBoiling : false, // True if the player is boiling right now
    candiesWhenWeBeganAction : 0, // Number of candies in the cauldron when we began mixing
    lollipopsWhenWeBeganAction : 0, // Idem lollipops
    actionsList : [{type:"none"}, {type:"none"}, {type:"none"}], // List of actions
    actionTimer : 0, // Count the number of seconds an action lasts
    
    // Functions
    registerAction : function(type, nbrCandies, nbrLollipops, timer){
        // We add the action to the list
        this.actionsList.push({type:type, nbrCandies:nbrCandies, nbrLollipops:nbrLollipops, timer:timer});
        
        // We delete one action if there's too much actions in the list
        if(this.actionsList.length > 3){
            this.actionsList.splice(0, 1);
        }
    },
    
    onload : function(){
        this.setBookPage(0);
    },
    
    checkVisibility : function(){
        if(objects.list.cauldron.have){
            // Show the cauldron tab, which have to be hidden before this point
            tabs.enable(3);
        
            // And we update everything on page
            this.updateCauldronOnPage();
            this.updateBookOnPage();
            this.updateActionsInfoOnPage();
            this.updateActionsPutOnPage();
            this.updateActionsInCauldronOnPage();
            this.updateActionsOnPage();
        }
    },
    
    resetCauldronText : function(){
        // Init the text var by putting lots of blank spaces
        this.textCauldron = [];
        for(var i = 0; i < this.cauldronHeight; i++){
            this.textCauldron.push(""); // We add a line
            for(var j = 0; j < this.cauldronWidth; j++){
                this.textCauldron[i] += " "; // We add a blank space in this line
            }
            this.textCauldron[i] += "\n"; // We add the end of line
        }
    },
    
    resetBookText : function(){
        // Init the text var by putting lots of blank spaces
        this.textBook = [];
        for(var i = 0; i < this.bookHeight; i++){
            this.textBook.push(""); // We add a line
            for(var j = 0; j < this.bookWidth; j++){
                this.textBook[i] += " "; // We add a blank space in this line
            }
            this.textBook[i] += "\n"; // We add the end of line
        }
    },
    
    setBookPage : function(value){
        // If the new value is correct
        if(value >= 0 && value <= this.maxBookPage){
            // We set it
            this.bookPage = value;
            // We set the text of the pages
            switch(this.bookPage){
                case 0:
                    this.textLeftPage = this.asciiFirstPage;
                    this.textRightPage = this.asciiSecondPage;
                break;
                case 1:
                    this.textLeftPage = this.asciiThirdPage;
                    this.textRightPage = this.asciiFourthPage;
                break;
                case 2:
                    this.textLeftPage = this.asciiFifthPage;
                    this.textRightPage = this.asciiSixthPage;
                break;
                case 3:
                    this.textLeftPage = this.asciiSeventhPage;
                    this.textRightPage = this.asciiEighthPage;
                break;
                case 4:
                    this.textLeftPage = this.asciiNinthPage;
                    this.textRightPage = this.asciiTenthPage;
                break;
                case 5:
                    this.textLeftPage = this.asciiMinorHealthPotionP1;
                    this.textRightPage = this.asciiMinorHealthPotionP2;
                break;
                case 6:
                    this.textLeftPage = this.asciiMinorHealthPotionP3;
                    this.textRightPage = this.asciiMinorHealthPotionP4;
                break;
                case 7:
                    this.textLeftPage = this.asciiMajorHealthPotionP1;
                    this.textRightPage = this.asciiMajorHealthPotionP2;
                break;
                case 8:
                    this.textLeftPage = this.asciiMajorHealthPotionP3;
                    this.textRightPage = this.asciiMajorHealthPotionP4;
                break;
                case 9:
                    this.textLeftPage = this.asciiInvulnerabilityPotionP1;
                    this.textRightPage = this.asciiInvulnerabilityPotionP2;
                break;
                case 10:
                    this.textLeftPage = this.asciiInvulnerabilityPotionP3;
                    this.textRightPage = [];
                break;
                case 11:
                    this.textLeftPage = this.asciiTurtlePotionP1;
                    this.textRightPage = this.asciiTurtlePotionP2;
                break;
                case 12:
                    this.textLeftPage = this.asciiTurtlePotionP3;
                    this.textRightPage = this.asciiTurtlePotionP4;
                break;
                case 13:
                    this.textLeftPage = this.asciiTurtlePotionP5;
                    this.textRightPage = this.asciiTurtlePotionP6;
                break;
                case 14:
                    this.textLeftPage = this.asciiCloningPotionP1;
                    this.textRightPage = this.asciiCloningPotionP2;
                break;
                case 15:
                    this.textLeftPage = this.asciiCloningPotionP3;
                    this.textRightPage = this.asciiCloningPotionP4;
                break;
                case 16:
                    this.textLeftPage = this.asciiCloningPotionP5;
                    this.textRightPage = this.asciiCloningPotionP6;
                break;
                case 17:
                    this.textLeftPage = this.asciiGMOOHPotionP1;
                    this.textRightPage = this.asciiGMOOHPotionP2;
                break;
                case 18:
                    this.textLeftPage = this.asciiGMOOHPotionP3;
                    this.textRightPage = this.asciiGMOOHPotionP4;
                break;
                case 19:
                    this.textLeftPage = this.asciiSupermanPotionP1;
                    this.textRightPage = this.asciiSupermanPotionP2;
                break;
                case 20:
                    this.textLeftPage = this.asciiSupermanPotionP3;
                    this.textRightPage = this.asciiSupermanPotionP4; // je t'aime <3
                break;
                case 21:
                    this.textLeftPage = this.asciiSeedP1;
                    this.textRightPage = this.asciiSeedP2;
                break;
                case 22:
                    this.textLeftPage = this.asciiSeedP3;
                    this.textRightPage = this.asciiSeedP4;
                break;
                case 23:
                    this.textLeftPage = this.asciiJellyP1;
                    this.textRightPage = this.asciiJellyP2;
                break;
                case 24:
                    this.textLeftPage = this.asciiJellyP3;
                    this.textRightPage = this.asciiJellyP4;
                break;
                case 25:
                    this.textLeftPage = this.asciiJellyP5;
                    this.textRightPage = [];
                break;
                case 26:
                    this.textLeftPage = this.asciiEndP1;
                    this.textRightPage = this.asciiEndP2;
                break;
                default:
                    this.textLeftPage = [];
                    this.textRightPage = [];
                break;
            }
            // We update the book on page
            this.updateBookOnPage();
        }
    },
    
    previousPage : function(){
        this.setBookPage(this.bookPage-1);
    },
    
    nextPage : function(){
        this.setBookPage(this.bookPage+1);
    },
    
    drawBook : function(){
        // Draw the book itself
        for(i = 0; i < this.asciiBook.length; i++){
            this.textBook[this.bookPosY + i] = this.textBook[this.bookPosY + i].replaceAt(this.bookPosX, this.asciiBook[i]);
        }
        
        // Draw the page numbers
        this.textBook[this.bookPosY + this.bookFirstPageNumberPosY] = this.textBook[this.bookPosY + this.bookFirstPageNumberPosY].replaceAt(this.bookPosX + this.bookFirstPageNumberPosX, "" + this.bookPage * 2);
        this.textBook[this.bookPosY + this.bookSecondPageNumberPosY] = this.textBook[this.bookPosY + this.bookSecondPageNumberPosY].replaceAt(this.bookPosX + this.bookSecondPageNumberPosX, "" + (this.bookPage * 2 + 1));
    
        // Draw the previous and next page buttons
        this.textBook[this.bookPosY + this.bookChangePageButtonPosY] = this.textBook[this.bookPosY + this.bookChangePageButtonPosY].replaceAt(this.bookPosX + this.bookChangePageButtonPosX, "<button onclick=\"cauldron.previousPage()\">Previous page</button>                       <button onclick=\"cauldron.nextPage()\">Next page</button>");
    
        // Draw the left page text
        for(i = 0; i < this.textLeftPage.length; i++){
            this.textBook[this.bookLeftPagePosY + i] = this.textBook[this.bookLeftPagePosY + i].replaceAt(this.bookPosX + this.bookLeftPagePosX, this.textLeftPage[i]);
        }
        
        // Idem right
        for(i = 0; i < this.textRightPage.length; i++){
            this.textBook[this.bookRightPagePosY + i] = this.textBook[this.bookRightPagePosY + i].replaceAt(this.bookPosX + this.bookRightPagePosX, this.textRightPage[i]);
        }
    },
    
    drawCauldron : function(){
        // We draw the cauldron
        for(i = 0; i < this.asciiCauldron.length; i++){
            this.textCauldron[this.cauldronPosY + i] = this.textCauldron[this.cauldronPosY + i].replaceAt(this.cauldronPosX, this.asciiCauldron[i]);
        }
        
        // We add the smoke
        this.drawSmoke();
    },
    
    drawSmoke : function(){
        // Finally, if there's a smoke, we draw it
        if(this.smokeBool == true){
            if(this.smokeOrientation == true){
                this.textCauldron[this.smokePosY] = this.textCauldron[this.smokePosY].replaceAt(this.smokePosX, "(");
                this.textCauldron[this.smokePosY-1] = this.textCauldron[this.smokePosY-1].replaceAt(this.smokePosX + 1, ")");
            }
            else{
                this.textCauldron[this.smokePosY] = this.textCauldron[this.smokePosY].replaceAt(this.smokePosX + 1, ")");
                this.textCauldron[this.smokePosY-1] = this.textCauldron[this.smokePosY-1].replaceAt(this.smokePosX, "(");
            }
        }
    },
    
    moveSmoke : function(){
        // If we have the cauldron
        if(objects.list.cauldron.have){
            // If there's no smoke yet, we create one
            if(this.smokeBool == false){
                this.smokeBool = true; // Bool is true
                this.smokePosX = this.cauldronPosX + 7 + random.getRandomIntUpTo(10); // PosX
                this.smokePosY = this.cauldronPosY; // PosY
                // Random orientation
                if(random.flipACoin()) this.smokeOrientation = true;
                else this.smokeOrientation = false;
            }
            // Else, there's a smoke
            else{
                // We make it go up
                this.smokePosY -= 1;
                // We switch its orientation
                if(this.smokeOrientation == true) this.smokeOrientation = false;
                else this.smokeOrientation = true;
                // If it's too high : there's no smoke anymore
                if(this.cauldronPosY - this.smokePosY > 3){
                    this.smokeBool = false;
                }
            }
        }
        
        this.updateCauldronOnPage();
    },
    
    drawActionsInfo : function(){
        this.textActionsInfo = "<br/><b>What you have :</b><br/>";
        
        // Add candies and lollipops info
        this.textActionsInfo += "    Candies :   " + candies.nbrOwned;
        this.textActionsInfo += "<br/>    Lollipops : " + lollipops.nbrOwned;
    },
    
    drawActionsPut : function(){
        this.textActionsPut = "<b>What you want to put in the cauldron :</b><br/><br/>"
        this.textActionsPut += "<input id=\"cauldron_candies_quantity\" type=\"text\" size=\"10\"/> candies<br/>";
        this.textActionsPut += "<input id=\"cauldron_lollipops_quantity\" type=\"text\" size=\"10\"/> lollipops<br/>";
        this.textActionsPut += "<button onclick=\"cauldron.putInTheCauldron()\">Put all that in the cauldron</button> <span id=\"cauldron_comment\"></span><br/>";
    },
    
    drawActionsInCauldron : function(){
        this.textActionsInCauldron += "<b>What is in the cauldron :</b><br/>";
        this.textActionsInCauldron += "    Candies :   " + this.candiesInTheCauldron;
        this.textActionsInCauldron += "<br/>    Lollipops : " + this.lollipopsInTheCauldron + "<br/>";
    },
    
    drawActions : function(){
        this.textActions += "<b>What you can do with it :</b><br/>";
        this.textActions += "<button id=\"cauldron_mix\" onclick=\"cauldron.setWeAreMixing(true)\">Mix</button><button id=\"cauldron_boil\" onclick=\"cauldron.setWeAreBoiling(true)\">Boil</button><button disabled=\"disabled\" id=\"cauldron_stop\" onclick=\"cauldron.stopActions()\">Stop</button><br/><br/>";
        this.textActions += "<span id=\"cauldron_action_text\"></span>";
        this.textActions += "<button id=\"cauldron_put_into_bottles\" onclick=\"cauldron.putIntoBottles()\">Put everything into bottles</button><br/><br/>";
        this.textActions += "<span id=\"cauldron_results_text\"></span>";
    },
    
    increaseActionTimer : function(){
        this.setActionTimer(this.actionTimer + 1);
    },
    
    setActionTimer : function(value){
        // We set the value
        this.actionTimer = value;
        
        // We change on the page
        if(this.weAreMixing){
            if(this.actionTimer < 60){
                // If we just began mixing or we're mixing something
                if(this.actionTimer < 5 || (this.candiesInTheCauldron != 0 || this.lollipopsInTheCauldron != 0)){
                    // We show the timer
                    htmlInteraction.setInnerHtml("cauldron_timer", this.actionTimer);
                }
                // Else
                else{
                    // We show a special message
                    htmlInteraction.setInnerHtml("cauldron_timer", this.actionTimer + " ... You do realize that you're not mixing anything, right ?");
                }
            }
            else
                htmlInteraction.setInnerHtml("cauldron_timer", "too much mixing, your arms are hurting.");
        }
        else if(this.weAreBoiling){
            if(this.actionTimer < 3)
                htmlInteraction.setInnerHtml("cauldron_timer", "cold.");
            else if(this.actionTimer < 6)
                htmlInteraction.setInnerHtml("cauldron_timer", "lukewarm.");
            else if(this.actionTimer < 9)
                htmlInteraction.setInnerHtml("cauldron_timer", "hot..");
            else if(this.actionTimer < 11)
                htmlInteraction.setInnerHtml("cauldron_timer", "very hot...");
            else if(this.actionTimer < 13)
                htmlInteraction.setInnerHtml("cauldron_timer", "very very hot !");
            else if(this.actionTimer < 14)
                htmlInteraction.setInnerHtml("cauldron_timer", "bubbles begin to appear...");
            else if(this.actionTimer < 15)
                htmlInteraction.setInnerHtml("cauldron_timer", "bubbles begin to appear... and..");
            else if(this.actionTimer < 32)
                htmlInteraction.setInnerHtml("cauldron_timer", "BOILING !");
            else
                htmlInteraction.setInnerHtml("cauldron_timer", "the water is burnt ! How is that even possible ?");
        }
    },
    
    setWeAreMixing : function(value){
        // If we want to stop mixing
        if(value == false && this.weAreMixing == true){
            // Then we stop
            this.weAreMixing = false;
            // We register the mixing
            this.registerAction("mix", this.candiesWhenWeBeganAction, this.lollipopsWhenWeBeganAction, this.actionTimer);
        }
        // Else, if we want to begin mixing
        else if(value == true && this.weAreMixing == false){
            // Then we begin
            this.weAreMixing = true;
            this.disableActionsButtons();
            // We set the text
            htmlInteraction.setInnerHtml("cauldron_action_text", "Mixing... <span id=\"cauldron_timer\"></span><br/><br/>");
            // We set the timer
            this.setActionTimer(0);
            // We store some info
            this.candiesWhenWeBeganAction = this.candiesInTheCauldron;
            this.lollipopsWhenWeBeganAction = this.lollipopsInTheCauldron;
        }
    },
    
    setWeAreBoiling : function(value){
        // If we want to stop Boiling
        if(value == false && this.weAreBoiling == true){
            // Then we stop
            this.weAreBoiling = false;
            // We register the Boiling
            this.registerAction("boil", this.candiesWhenWeBeganAction, this.lollipopsWhenWeBeganAction, this.actionTimer);
        }
        // Else, if we want to begin Boiling
        else if(value == true && this.weAreBoiling == false){
            // Then we begin
            this.weAreBoiling = true;
            this.disableActionsButtons();
            // We set the text
            htmlInteraction.setInnerHtml("cauldron_action_text", "Boiling... <span id=\"cauldron_timer\"></span><br/><br/>");
            // We set the timer
            this.setActionTimer(0);
            // We store some info
            this.candiesWhenWeBeganAction = this.candiesInTheCauldron;
            this.lollipopsWhenWeBeganAction = this.lollipopsInTheCauldron;
        }
    },
    
    putIntoBottles : function(){
        // We create the vars which will store the results for a final drawing on the page
        var resultsList = [];
        var resultsText = "";
        
        // We store actions into vars for easier use
        var lastAc = this.actionsList[this.actionsList.length - 1];
        var lastLastAc = this.actionsList[this.actionsList.length - 2];
        var lastLastLastAc = this.actionsList[this.actionsList.length - 3];
        
        // Check for minor health potion
        if(lastAc.type == "mix" // Last action was mixing
        && lastAc.nbrLollipops == 0 // We mixed no lollipop
        && lastAc.nbrCandies > 0 // We mixed at least one candy
        && lastAc.nbrCandies % 100 == 0 // The candies we mixed were a multiple of 100
        && lastAc.nbrCandies == this.candiesInTheCauldron && lastAc.nbrLollipops == this.lollipopsInTheCauldron // We didn't add anything while mixing
        && lastAc.timer >= 11 && lastAc.timer <= 19){ // It took between 11 and 19 seconds
            potions.getPotions(potions.list.health, Math.floor(lastAc.nbrCandies/100)); // We add the potions to our stock
            resultsList.push({type:"minor health", nbr:Math.floor(lastAc.nbrCandies/100)}); // We add the result to the list
        }
        
        // Check for major health potion
        if(lastAc.type == "mix" // Last action was mixing
        && lastAc.nbrLollipops > 0 // We mixed at least one lollipop
        && lastAc.nbrLollipops % 100 == 0 // The lollipops we mixed were a multiple of 100
        && lastAc.nbrCandies == 0 // We mixed no candy
        && lastAc.nbrLollipops == this.lollipopsInTheCauldron // We didn't add any lollipop while mixing
        && this.candiesInTheCauldron == lastAc.nbrLollipops // While mixing, we added as many candies as we had lollipops at the beginning
        && lastAc.timer >= 16 && lastAc.timer <= 24){ // It took between 16 and 24 seconds
            potions.getPotions(potions.list.majorHealth, Math.floor(lastAc.nbrLollipops/100)); // We add the potions to our stock
            resultsList.push({type:"major health", nbr:Math.floor(lastAc.nbrLollipops/100)}); // We add the result to the list
        }
        
        // Check for turtle potion
        if(
        /* LAST ACTION */
        lastAc.type == "boil" // Last action was boiling
        && lastAc.nbrCandies == 0 // We boiled no candy
        && lastAc.nbrLollipops > 0 // We boiled at least one lollipop
        && lastAc.nbrLollipops % 20000 == 0 // The lollipops we boiled were a multiple of 20000
        && lastAc.nbrLollipops == this.lollipopsInTheCauldron // We didn't add any lollipop while boiling
        && lastAc.nbrCandies == this.candiesInTheCauldron // We didn't add any candy while boiling
        && lastAc.timer >= 15 && lastAc.timer < 32 // It was boiling when we stopped boiling
        /* LAST LAST ACTION */
        && lastLastAc.type == "mix" // Last last action was mixing
        /* LAST LAST LAST ACTION */
        && lastLastLastAc.type == "boil" // Last last last action was boiling
        && lastLastLastAc.nbrCandies == 0 // We boiled no candy
        && lastLastLastAc.nbrLollipops > 0 // We boiled at least one lollipop
        && lastLastLastAc.nbrLollipops % 10000 == 0 // The lollipops we boiled were a multiple of 10000
        && lastLastLastAc.timer >= 15 && lastLastLastAc.timer < 32 // It was boiling when we stopped boiling
        /* STUFF BETWEEN ACTIONS */
        && lastAc.nbrLollipops == 2 * lastLastLastAc.nbrLollipops){ // We boiled at the end twice more lollipops than what we boiled at first
            potions.getPotions(potions.list.turtle, Math.floor(lastAc.nbrLollipops/20000)); // We add the potions to our stock
            resultsList.push({type:"turtle", nbr:Math.floor(lastAc.nbrLollipops/20000)}); // We add the result to the list
        }
        
        // Check for invulnerability potion
        if(lastAc.type == "mix" // Last action was mixing
        && lastAc.nbrLollipops == 0 // We mixed no lollipop
        && lastAc.nbrCandies > 0 // We mixed at least one candy
        && lastAc.nbrCandies % 2000 == 0 // The candies we mixed were a multiple of 2000
        && lastAc.nbrCandies == this.candiesInTheCauldron && lastAc.nbrLollipops == this.lollipopsInTheCauldron // We didn't add anything while mixing
        && lastAc.timer >= 60){ // It took >= 60 seconds
            potions.getPotions(potions.list.invulnerability, Math.floor(lastAc.nbrCandies/2000)); // We add the potions to our stock
            resultsList.push({type:"invulnerability", nbr:Math.floor(lastAc.nbrCandies/2000)}); // We add the result to the list
        }
        
        // Check for cloning potion
        if(lastAc.type == "boil" // Last action was boiling
        && lastAc.nbrLollipops == 0 // We boiled no lollipop
        && lastAc.nbrCandies == 0 // We boiled no candy
        && this.lollipopsInTheCauldron == 0 // We didn't add any lollipop while boiling
        && this.convertCandiesToPotionsForTheCloningPotion(this.candiesInTheCauldron) > 0 // With the candies we added while boiling (or after), we can make at least one potion
        && lastAc.timer >= 32){ // The water burnt while boiling
            potions.getPotions(potions.list.cloning, this.convertCandiesToPotionsForTheCloningPotion(this.candiesInTheCauldron)); // We add the potions to our stock
            resultsList.push({type:"cloning", nbr:this.convertCandiesToPotionsForTheCloningPotion(this.candiesInTheCauldron)}); // We add the result to the list
        }
        
        // Check for G.M.O.O.H. potion
        if(lastAc.type == "mix" // Last action was mixing
        && lastAc.nbrLollipops > 0 // We mixed at least one lollipop
        && lastAc.nbrLollipops % 500 == 0 // The lollipops we mixed were a multiple of 500
        && lastAc.nbrCandies == 10000 // We mixed 10000 candies
        && this.candiesInTheCauldron == lastAc.nbrCandies // We didn't add any candy while mixing
        && this.lollipopsInTheCauldron == lastAc.nbrLollipops){ // We didn't add any lollipop while mixing
            potions.getPotions(potions.list.gmooh, Math.floor(lastAc.nbrLollipops/500)); // We add the potions to our stock
            resultsList.push({type:"G.M.O.O.H.", nbr:Math.floor(lastAc.nbrLollipops/500)}); // We add the result to the list
        }
        
        // Check for superman potion
        if(lastAc.type == "mix" // Last action was mixing
        && lastAc.nbrLollipops == 0 // We mixed no lollipop
        && lastAc.nbrCandies > 0 // We mixed at least one candy
        && lastAc.nbrCandies % 180 == 0 // The candies we mixed were a multiple of 180
        && lastAc.nbrCandies == this.candiesInTheCauldron && lastAc.nbrLollipops == this.lollipopsInTheCauldron){ // We didn't add anything while mixing
            potions.getPotions(potions.list.superman, Math.floor(lastAc.nbrCandies/180)); // We add the potions to our stock
            resultsList.push({type:"superman", nbr:Math.floor(lastAc.nbrCandies/180)}); // We add the result to the list
        }
        
        // Check for seed
        if(lastAc.type == "boil" // Last action was boiling
        && lastAc.nbrLollipops == 0 // We boiled no lollipop
        && lastAc.nbrCandies == 0 // We boiled no candy
        && this.lollipopsInTheCauldron == 0 // We didn't add any lollipop while boiling
        && this.candiesInTheCauldron > 0 // We added at least one candy while or after boiling
        && this.candiesInTheCauldron % 650 == 0){ // The candies we added while or after boiling are a multiple of 650
            potions.getPotions(potions.list.seed, Math.floor(this.candiesInTheCauldron/650)); // We add the potions to our stock
            resultsList.push({type:"seed", nbr:Math.floor(this.candiesInTheCauldron/650), special:true, plural:"seeds"}); // We add the result to the list
        }
        
        // Check for jelly
        if(
        /* ACTIONS TYPES */
        lastAc.type == "boil" // Last action was boiling
        && lastLastAc.type == "mix" // Last last action was mixing
        && lastLastLastAc.type == "boil" // Last last last action was boiling
        /* LAST LAST LAST ACTION */
        && lastLastLastAc.nbrLollipops == 0 // No lollipop
        && lastLastLastAc.nbrCandies > 0 // At least one candy
        && lastLastLastAc.nbrCandies % 600 == 0 // Candies multiple of 600
        /* LAST LAST ACTION */
        && lastLastAc.nbrLollipops > 0 // At least one lollipop
        && lastLastAc.nbrLollipops % 6000 == 0 // Lollipops mutiple of 6000
        && lastLastAc.nbrLollipops == 10*lastLastLastAc.nbrCandies // Lollipops = 10*candies of last last last action
        && lastLastAc.nbrCandies == lastLastLastAc.nbrCandies // As many candies as last last last action
        /* LAST ACTION */
        && lastAc.nbrLollipops == lastLastAc.nbrLollipops // As many lollipops as last last action
        && lastAc.nbrCandies == lastLastLastAc.nbrCandies*2 // Twice more candies than last last last action
        && lastAc.nbrLollipops == this.lollipopsInTheCauldron // We didn't add any lollipop
        && lastAc.nbrCandies == this.candiesInTheCauldron){ // We didn't add any candy
            potions.getPotions(potions.list.jelly, Math.floor(lastAc.nbrCandies/600)); // We add the potions to our stock
            resultsList.push({type:"jelly", nbr:Math.floor(lastAc.nbrCandies/600), special:true, plural:"jellies"}); // We add the result to the list
        }
        
        // We show the result on the page if there's any result
        if(resultsList.length > 0){
            for(var i = 0; i < resultsList.length; i++){
                if(resultsList[i].special != true){
                    if(resultsList[i].nbr > 1){
                        resultsText += "You made " + resultsList[i].nbr + " " + resultsList[i].type + " potions !<br/>";
                    }
                    else{
                        resultsText += "You made a " + resultsList[i].type + " potion.<br/>";
                    }
                }
                else{
                    if(resultsList[i].nbr > 1){
                        resultsText += "You made " + resultsList[i].nbr + " " + resultsList[i].plural + " !<br/>";
                    }
                    else{
                        resultsText += "You made a " + resultsList[i].type + ".<br/>";
                    }
                }
            }
            htmlInteraction.setInnerHtml("cauldron_results_text", resultsText);
        }
        else{
            htmlInteraction.setInnerHtml("cauldron_results_text", "You don't manage to get anything interesting with that preparation.<br/>Did you follow the manual's instructions ?");
        }
        
        // We empty the cauldron
        this.setCandiesInTheCauldron(0);
        this.setLollipopsInTheCauldron(0);
        
        // We reset the actions list
        this.actionsList = [{type:"none"}, {type:"none"}, {type:"none"}];
    },
    
    convertCandiesToPotionsForTheCloningPotion : function(howMuch){
        return Math.floor(howMuch / 1337);
    },
    
    disableActionsButtons : function(){
        // We disable the mixing button
        htmlInteraction.disableButton("cauldron_mix");
        // We disable the put into bottles button
        htmlInteraction.disableButton("cauldron_put_into_bottles");
        // We disable the boiling button
        htmlInteraction.disableButton("cauldron_boil");
        // We enable the stopping button
        htmlInteraction.enableButton("cauldron_stop");
    },
    
    enableActionsButtons : function(){
        // We re enable the mixing button
        htmlInteraction.enableButton("cauldron_mix");
        // We re enable the put into bottles button
        htmlInteraction.enableButton("cauldron_put_into_bottles");
        // We re enable the boiling button
        htmlInteraction.enableButton("cauldron_boil");
        // We disable the button
        htmlInteraction.disableButton("cauldron_stop");
    },
    
    stopActions : function(){
        // Stop all actions
        this.setWeAreMixing(false);
        this.setWeAreBoiling(false);
        
        // Re enable buttons
        this.enableActionsButtons();
        
        // Empty the action text
        htmlInteraction.setInnerHtml("cauldron_action_text", "");
    },
    
    putInTheCauldron : function(){
        // We get the values of the text inputs
        var candiesInput = htmlInteraction.getElement("cauldron_candies_quantity").value;
        var lollipopsInput = htmlInteraction.getElement("cauldron_lollipops_quantity").value;
        
        // We get the quantities
        if(candiesInput != ""){
            var candiesQuantity = parseInt(candiesInput);
        }
        else candiesQuantity = 0;
        
        if(lollipopsInput != ""){
            var lollipopsQuantity = parseInt(lollipopsInput);
        }
        else lollipopsQuantity = 0;
        
        // If the quantities are incorrect
        if(isNaN(candiesQuantity) || isNaN(lollipopsQuantity)){
            // If both values are incorrect
            if(isNaN(candiesQuantity) && isNaN(lollipopsQuantity)){
                htmlInteraction.setInnerHtml("cauldron_comment", "The values you entered are not numbers.");
            }
            // If only the candies value is incorrect
            else if(isNaN(candiesQuantity)){
                htmlInteraction.setInnerHtml("cauldron_comment", "The value you entered for candies is not a number.");
            }
            // Else, only the lollipops value is incorrect
            else{
                htmlInteraction.setInnerHtml("cauldron_comment", "The value you entered for lollipops is not a number.");
            }
        }
        // Else, if we don't have enough candies or lollipops to put all that in the cauldron
        else if(candiesQuantity > candies.nbrOwned || lollipopsQuantity > lollipops.nbrOwned){
            htmlInteraction.setInnerHtml("cauldron_comment", "You don't have enough to put all that in the cauldron !");
        }
        // Else, if one if the value is negative
        else if(candiesQuantity < 0 || lollipopsQuantity < 0){
            htmlInteraction.setInnerHtml("cauldron_comment", "Don't put negative values !");
        }
        // Else, we put all that in the cauldron !
        else{
            htmlInteraction.setInnerHtml("cauldron_comment", ""); // We empty the comment
            // We clear the text inputs
            htmlInteraction.getElement("cauldron_candies_quantity").value = "";
            htmlInteraction.getElement("cauldron_lollipops_quantity").value = "";
            // We substract candies from our stock
            candies.setNbrOwned(candies.nbrOwned - candiesQuantity);
            lollipops.setNbrOwned(lollipops.nbrOwned - lollipopsQuantity);
            // And we add them in the cauldron
            this.setCandiesInTheCauldron(this.candiesInTheCauldron + candiesQuantity);
            this.setLollipopsInTheCauldron(this.lollipopsInTheCauldron + lollipopsQuantity);
        }
    },
    
    setCandiesInTheCauldron : function(value){
        this.candiesInTheCauldron = value;
        this.updateActionsInCauldronOnPage();
    },
    
    setLollipopsInTheCauldron : function(value){
        this.lollipopsInTheCauldron = value;
        this.updateActionsInCauldronOnPage();
    },
    
    updateCauldronOnPage : function(){
        this.resetCauldronText();
        this.drawCauldron();
        htmlInteraction.setInnerHtml("cauldron_cauldron", this.textCauldron.join(""));
    },
    
    updateBookOnPage : function(){
        this.resetBookText();
        this.drawBook();
        htmlInteraction.setInnerHtml("cauldron_book", this.textBook.join(""));
    },
    
    updateActionsInfoOnPage : function(){
        this.textActionsInfo = "";
        this.drawActionsInfo();
        htmlInteraction.setInnerHtml("cauldron_actions_info", this.textActionsInfo);
    },
    
    updateActionsPutOnPage : function(){
        this.textActionsPut = "";
        this.drawActionsPut();
        htmlInteraction.setInnerHtml("cauldron_actions_put", this.textActionsPut);
    },
    
    updateActionsInCauldronOnPage : function(){
        this.textActionsInCauldron = "";
        this.drawActionsInCauldron();
        htmlInteraction.setInnerHtml("cauldron_actions_in_cauldron", this.textActionsInCauldron);
    },
    
    updateActionsOnPage : function(){
        this.textActions = "";
        this.drawActions();
        htmlInteraction.setInnerHtml("cauldron_actions", this.textActions);
    },
    
    // Ascii
    asciiCauldron : 
[
"       ___________",
"      (___________)",
"       /         \\",
"      /           \\",
"     |             |",
" ____\\             /____",
"()____\'.__     __.\'____()",
"     .\'` .\'```\'. `-.",
"    ().\'`       `\'.()"
],

    asciiBook :
[
"      ___________________   ___________________",
"  .-/|       ~~**~~      \\ /      ~~**~~       |\\-.",
"  ||||                    :                    ||||",
"  ||||                    :                    ||||",
"  ||||                    :                    ||||",
"  ||||                    :                    ||||",
"  ||||                    :                    ||||",
"  ||||                    :                    ||||",
"  ||||                    :                    ||||",
"  ||||                    :                    ||||",
"  ||||                    :                    ||||",
"  ||||                    :                    ||||",
"  ||||                    :                    ||||",
"  ||||___________________ : ___________________||||",
"  ||/====================\\:/====================\\||",
"  `---------------------~___~--------------------\'\'"
],

    asciiFirstPage :
[
"Welcome to the",
"potions brewing",
"manual for",
"beginners !",
"",
" (second edition)",
"",
" __  __  __  __ ",
" )(  )(  )(  )( ",
"(__)(__)(__)(__)"
],

    asciiSecondPage :
[
"",
"The present",
"manual will focus",
"on potions that",
"require materials",
"such as : ",
" - candies",
" - lollipops",
],

    asciiThirdPage :
[
" The three rules",
"of potion brewing",
"-----------------",
"",
"1. The effect of",
"a potion depends",
"on its content as",
"well as on the",
"steps followed to",
"prepare it."
],

    asciiFourthPage :
[
"2. You can do",
"several potions",
"in one go.",
"",
"3. It's possible",
"to mix",
"instructions to",
"brew potions of",
"different types",
"in one go."
],

    asciiFifthPage :
[
"Table of contents",
"-----------------",
" Pages 10 to 20",
" (Good potions)",
"-----------------",
"",
" 10-13",
"Minor health",
"potion"
],

    asciiSixthPage :
[
"",
" 14-17",
"Major health",
"potion",
"",
" 18-20",
"Invulnerability",
"potion"
],

    asciiSeventhPage :
[
"Table of contents",
"-----------------",
" Pages 22 to 41",
"(Strange potions)",
"-----------------",
"",
" 22-27",
"Turtle potion"
],

    asciiEighthPage :
[
" 28-33",
"Cloning potion",
"",
" 34-37",
"G.M.O.O.H.",
"potion",
"",
" 38-41",
"Superman potion",
],

    asciiNinthPage :
[
"Table of contents",
"-----------------",
" Pages 42 to 50",
"(Various magical",
"objects you can",
"  brew in your",
"   cauldron)",
"-----------------"
],

    asciiTenthPage :
[
"",
"",
" 42-45",
"Magical seed",
"",
"",
" 46-50",
"Magical jelly",
],

    asciiMinorHealthPotionP1 :
[
"Minor health pot.",
"-----------------",
"The minor health",
"potion is the",
"easiest to brew",
"for beginners.",
"",
"Used during a",
"quest, it will",
"make you recover"
],

    asciiMinorHealthPotionP2 :
[
"50 health points.",
"",
"For one potion,",
"you will need 100",
"candies.",
"",
"Put them in the",
"cauldron and mix",
"during about 15",
"seconds."
],

    asciiMinorHealthPotionP3 :
[
"You can mix a",
"little more or",
"less longer, it",
"doesn't matter so",
"much.",
"",
"When you're done,",
"put the resulting",
"mixture into",
"bottles."
],

    asciiMinorHealthPotionP4 :
[
"Congratulations !",
"You just made",
"your first minor",
"health potion !",
"",
"",
"N.B. : use 200",
"candies for 2",
"potions, 300 for",
"3, etc."
],

    asciiMajorHealthPotionP1 :
[
"Major health pot.",
"-----------------",
"The major health",
"potion is a bit",
"harder to make",
"than the previous",
"one.",
"",
"But it's also",
"a lot more",
],

    asciiMajorHealthPotionP2 :
[
"efficient : by",
"drinking it",
"during a quest,",
"you will gain",
"100 health points",
"instead of 50.",
"",
"How to make a",
"major health",
"potion :"
],

    asciiMajorHealthPotionP3 :
[
"1. Put 100",
"lollipops into",
"your cauldron.",
"",
"2. Begin mixing",
"forcefully.",
"",
"3. While you're",
"mixing, add 100",
"candies into the",
],

    asciiMajorHealthPotionP4 :
[
"cauldron.",
"",
"4. Stop mixing",
"after 20 seconds.",
"",
"5. Put the result",
"into bottles.",
"",
"6. You're done !"
],

    asciiInvulnerabilityPotionP1 :
[
" Invulnerability",
"     potion",
"-----------------",
"",
"This potion,",
"although being",
"quite easy to",
"brew, require a",
"lot of candies."
],

    asciiInvulnerabilityPotionP2 :
[
"The recipe is",
"simple : just",
"put 2000 candies",
"inside your",
"cauldron and mix",
"them until your",
"arms hurt.",
"",
"This potion will",
"make you"
],

    asciiInvulnerabilityPotionP3 :
[
"invincible for",
"some time,",
"during which you",
"won't feel any",
"pain or physical",
"damage."
],

    asciiTurtlePotionP1 :
[
"  Turtle potion",
"-----------------",
"A turtle !",
"A turtle !",
"Do you want to",
"become a turtle ?",
"",
"You'll be able to",
"become one with",
"this fantastic"
],

    asciiTurtlePotionP2 :
[
"potion !",
"",
"When you will be",
"a turtle, you",
"will resist a lot",
"more to physical",
"damage. But you",
"will be slower,",
"too."
],

    asciiTurtlePotionP3 :
[
"Now, let's get",
"down to business.",
"",
"Put 10000",
"lollipops in your",
"cauldron. Do not",
"add any candy, or",
"your potion will",
"be a failure."
],

    asciiTurtlePotionP4 :
[
"Now, heat up the",
"cauldron until",
"your preparation",
"is boiling.",
"",
"When it's boiling,",
"stop heating it",
"up and mix a",
"little bit."
],

    asciiTurtlePotionP5 :
[
"Add the same",
"quantity of",
"lollipops as you",
"put at the",
"beginning, and,",
"one more time,",
"heat up",
"everything until",
"it's boiling."
],

    asciiTurtlePotionP6 :
[
"Stop boiling,",
"put into a bottle,",
"begin a quest,",
"drink the potion,",
"you're a turtle !!",
"",
"   _  .----.",
"  (_\\/      \\_,",
"    \'uu----uu~\'"
],

    asciiCloningPotionP1 :
[
"  Cloning potion",
"-----------------",
"There's a little",
"bit of candies in",
"everyone of us.",
"",
"This is actually",
"a physical law of",
"our universe."
],

    asciiCloningPotionP2 :
[
"Now, candies are",
"a very malleable",
"material.",
"",
"These two facts",
"led us to the",
"realisation of",
"this cloning",
"potion."
],

    asciiCloningPotionP3 :
[
"The potion will",
"copy your inner",
"structure and",
"make a clone of",
"you almost",
"entirely made",
"of candies",
"(there's a bit of",
"water, too)."
],

    asciiCloningPotionP4 :
[
"Steps :",
"",
"Burn the water in",
"your cauldron.",
"",
"Then, while it's",
"still burning,",
"add as many",
"candies as you",
"can."
],

    asciiCloningPotionP5 :
[
"It's simple : the",
"more candies you",
"put, the more",
"potions you'll",
"get !",
"",
"(be sure to put",
"   a minimum",
"quantity, though)"
],

    asciiCloningPotionP6 :
[
"  \\o/  ->  \\o/",
"",
"   ^        |",
"   |        V",
"",
"  \\o/  <-  \\o/",
"",
"  \"The circle",
"    of life\""
],

    asciiGMOOHPotionP1 :
[
"G.M.O.O.H. potion",
"-----------------",
"G.M.O.O.H. means",
"\"Get Me Out Of",
"Here\".",
"",
"This potion is to",
"be used in",
"critical",
"situations."
],

    asciiGMOOHPotionP2 :
[
"It will teleport",
"you to another",
"location.",
"",
"Maybe it will",
"be safer, maybe",
"it won't. Who",
"knows ?",
"Quite exciting",
"isn't it ?"
],

    asciiGMOOHPotionP3 :
[
"First, put in",
"your cauldron a",
"base quantity of",
"10 000 candies.",
"",
"Then, add 500",
"lollipops for",
"each potion you",
"want to brew."
],

    asciiGMOOHPotionP4 :
[
"Never change the",
"base quantity of",
"10 000 candies.",
"",
"Then, mix a little",
"bit and put into",
"bottles.",
"",
"Enjoy your random",
"potions !"
],

    asciiSupermanPotionP1 :
[
" Superman potion",
"-----------------",
"This potion will",
"transform you",
"into Superman,",
"providing you",
"a fantastic cape.",
"",
"Some people say",
"that this isn't"
],

    asciiSupermanPotionP2 :
[
"useful.",
"",
"We respond them",
"that it is just",
"so cooooool !",
"",
"Anyway, to make",
"one :",
"",
"Put 180 candies"
],

    asciiSupermanPotionP3 :
[
"in your cauldron.",
"",
"Mix them.",
"",
"Think about",
"Superman.",
"",
"Think once again.",
"",
"Put into bottle."
],

    asciiSupermanPotionP4 :
[
"You're done !",
"",
"   ___________",
"  /.\'_______` \\",
" /( <_______`-\'\\",
" `.`.______  \\.\'",
"   `..-.___>.\'",
"     `.__ .\'",
"       `.\'"
],

    asciiSeedP1 :
[
"      Seed",
"-----------------",
"According to an",
"ancient legend,",
"trees would be",
"the source of all",
"candies in the",
"whole world.",
"",
"There would exist"
],

    asciiSeedP2 :
[
"somewhere in the",
"universe a giant",
"tree, which",
"remains unnamed.",
"",
"This tree would",
"provide its",
"discoverer an",
"infinite flow of",
"candies."
],

    asciiSeedP3 :
[
"Anyway, we didn't",
"find it yet, but",
"we found that it",
"was possible to",
"craft a magical",
"seed so that it",
"grows a resistant",
"tree. And this",
"can be useful",
"during a quest."
],

    asciiSeedP4 :
[
"Heat up the water",
"in your cauldron.",
"",
"Add 650 candies,",
"stop boiling and",
"put the seed into",
"a bottle.",
"",
"Now, plant some",
"trees !"
],

    asciiJellyP1 :
[
"      Jelly",
"-----------------",
"Did you ever",
"thought about",
"some kind of bomb",
"that you could",
"use during a",
"quest ? If so,",
"then this magical",
"jelly should"
],

    asciiJellyP2 :
[
"please you !",
"",
"It is a bit hard",
"to prepare, but",
"it's quite",
"powerful.",
"",
"This jelly",
"explodes on",
"contact and deals"
],

    asciiJellyP3 :
[
"high damage.",
"",
"There are three",
"peparation steps",
"which correspond",
"to the three",
"layers of the",
"jelly.",
"",
"First step :"
],

    asciiJellyP4 :
[
"Put 600 candies,",
"boil the water,",
"stop boiling.",
"",
"Second step :",
"",
"Add 6 000",
"lollipops,",
"mix,",
"stop mixing."
],

    asciiJellyP5 :
[
"Third step :",
"",
"Repeat first step.",
"",
"Note that you can",
"only place the",
"jelly behind you.",
"",
"Good luck for",
"your quests !"
],

    asciiEndP1 :
[
"   ~ The end ~",
"-----------------",
"",
"   Thanks for",
"    reading !",
"",
"We hope this book",
"helped you. Feel",
"     free to",
"redistribute it !",
],

    asciiEndP2 :
[
"Co-authors :",
"",
"- the sorceress",
"- the necromancer",
"- a shoemaker",
"- a mathematician",
"- ???",
"",
" Happy brewing ~"
]

};

var shop = {

    // Variables
    buy10MoneroButtonShown : false, // True if the buy 10 Monero button should be shown
    shown : false, // True if the shop is currently shown
    ticklingStep : 0, // Tickling step (increase when we click on the merchant's hat
    clickingOnMonerotep : 0, // Clicking on Monero step (increase when we clicked on the top of the Monero sold at the shop)
    oneMoneroPrice : 0, // Price of one Monero, calculated depending on the clicking on Monero step
    tenMoneroPrice : 0, // Price of ten Monero, calculated the same way as above
    currentgpuButtonId : "none", // Contains the id of the current gpu buying button
    currentgpuPrice : 0, // Contains the price of the current gpu being sold by the merchant
    
    // Functions
    onload : function(){
        Monero.delivery(); // The merchant must have some Monero in stock at the beginning, so we make a delivery
        this.setClickingOnMonerotep(0); // This also set the Monero price !
    },
    
    check : function(){
        if(hashes.nbrOwned >= this.oneMoneroPrice){
            this.setShown(true);
        }
        if(hashes.nbrOwned >= 150){
            // If we don't have any gpu and there's no gpu to sell yet, we show the wooden gpu
            if(gpu.name == "none" && this.currentgpuButtonId == "none"){
                this.showProduct("wooden_gpu");
            }
        }
    },
    
    setBuy10MoneroButtonShown : function(value){
        this.buy10MoneroButtonShown = value;
    },
    
    clickedOnHat : function(){
        switch(this.ticklingStep){
            case 0:
                this.setMerchantSpeech("Hey ! You touched my hat !");
            break;
            case 1:
                this.setMerchantSpeech("Stop that, stop that ! You're tickling me !");
            break;
            case 2:
                this.setMerchantSpeech("Hahahaha ! I'm so ticklish !");
            break;
            case 3:
                this.setMerchantSpeech("Listen, listen : I give you 100 hashes ! But stop that please !");
                hashes.setNbrOwned(hashes.nbrOwned + 100);
            break;
        }
        
        this.setTicklingStep(this.ticklingStep + 1);
    },
    
    setTicklingStep : function(value){
        this.ticklingStep = value;
    },
    
    setClickingOnMonerotep : function(value){
        this.clickingOnMonerotep = value;
        
        // Set the buttons value if the step is 0 or the price is reducing or is reduced
        if(this.clickingOnMonerotep <= 4){
            this.oneMoneroPrice = 60;
            this.tenMoneroPrice = 500;
            htmlInteraction.setInnerHtml("buy_1_Monero", "Buy 1 Monero (60 hashes)");
            htmlInteraction.setInnerHtml("buy_10_Monero", "Buy 10 Monero (500 hashes)");
        }
        else if(this.clickingOnMonerotep >= 5 && this.clickingOnMonerotep < 15){
            this.oneMoneroPrice = 60 - (this.clickingOnMonerotep - 4);
            this.tenMoneroPrice = 500 - (this.clickingOnMonerotep - 4) * 5;
            htmlInteraction.setInnerHtml("buy_1_Monero", "Buy a Monero (" + this.oneMoneroPrice + " hashes)");
            htmlInteraction.setInnerHtml("buy_10_Monero", "Buy 10 Monero (" + this.tenMoneroPrice + " hashes)");
        }
        else{
            this.oneMoneroPrice = 60 - (14 - 4);
            this.tenMoneroPrice = 500 - (14 - 4) * 5;
            htmlInteraction.setInnerHtml("buy_1_Monero", "Buy a Monero (" + this.oneMoneroPrice + " hashes)");
            htmlInteraction.setInnerHtml("buy_10_Monero", "Buy 10 Monero (" + this.tenMoneroPrice + " hashes)");
        }
    },
    
    clickedOnMonero : function(){
        this.setClickingOnMonerotep(this.clickingOnMonerotep + 1);
        
        // Possibly change the merchant speech
        switch(this.clickingOnMonerotep){
            case 1:
                this.setMerchantSpeech("Hey ! Don't touch the products !");
            break;
            case 2:
                this.setMerchantSpeech("Seriously, don't touch this Monero.");
            break;
            case 3:
                this.setMerchantSpeech("Don't touch it ! Other customers may lick it after that, that's gross !");
            break;
            case 4:
                this.setMerchantSpeech("Stop now or I'll be force to do something.");
            break;
            case 15:
                this.setMerchantSpeech("I can't make a lower price... Please stop.");
            break;
        }
        
        if(this.clickingOnMonerotep >= 5 && this.clickingOnMonerotep < 15){
            this.setMerchantSpeech("Okay, okay, I lower the price, but stop touching it !");
        }
    },
    
    showProduct : function(id){
        switch(id){
            // If it's a special product
            case "wooden_gpu":
                htmlInteraction.setInnerHtml("gpu_with_button", gpu.asciiWoodengpuWithButton);
                this.currentgpuButtonId = "buy_wooden_gpu";
                this.currentgpuPrice = 150;
            break;
            case "copper_gpu":
                htmlInteraction.setInnerHtml("gpu_with_button", gpu.asciiCoppergpuWithButton);
                this.currentgpuButtonId = "buy_copper_gpu";
                this.currentgpuPrice = 300;
            break;
            case "iron_gpu":
                htmlInteraction.setInnerHtml("gpu_with_button", gpu.asciiIrongpuWithButton);
                this.currentgpuButtonId = "buy_iron_gpu";
                this.currentgpuPrice = 500;
            break;
            case "silver_gpu":
                htmlInteraction.setInnerHtml("gpu_with_button", gpu.asciiSilvergpuWithButton);
                this.currentgpuButtonId = "buy_silver_gpu";
                this.currentgpuPrice = 1000;
            break;
            case "diamond_gpu":
                htmlInteraction.setInnerHtml("gpu_with_button", gpu.asciiDiamondgpuWithButton);
                this.currentgpuButtonId = "buy_diamond_gpu";
                this.currentgpuPrice = 2000;
            break;
            // Else, we just show the html element corresponding to the received id
            default:
                htmlInteraction.setElementVisibility(id, true);
                htmlInteraction.setElementDisplay(id, "block");
            break;
        }
    },
    
    show : function(){
        // We show the shop
        if(htmlInteraction.isElementVisible("shop") == false){ // If the shop isn't already visible
            htmlInteraction.setElementVisibility("shop", true);
            this.setMerchantSpeech("Hello, I'm the hash merchant. I would do anything for hashes. My Monero are delicious!");
        }
        
        // And the Monero we can buy :)
        this.showProduct("Monero");
    },
    
    setShown : function(value){
        // If the new value is true but it was false before, we show the shop
        if(value == true && this.shown == false)
        {
			this.show();
		}
        
        // We change the value
        this.shown = value;
    },
    
    hideProduct : function(id){
        // If it's a special product
        if(id == "gpu"){
            this.currentgpuButtonId = "none";
            htmlInteraction.setInnerHtml("gpu_with_button", "");
        }
        // Else
        else{
            htmlInteraction.setElementVisibility(id, false);
            htmlInteraction.setElementDisplay(id, "none");
        }
    },
    
    setMerchantSpeech : function(text){
        htmlInteraction.setInnerHtml("merchant_speech", speech.makeSpeechFromText(text, 20, " "));
    }
    
};

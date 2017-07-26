var candiesConverter = {
    
    // Variables
    activated : false, // If true, the candiesConverter is activated
    speed : 1, // How many candies the converter can convert into lollipops each 1/10 seconds. The more the candies converted without stopping, the more the speed increase.
    
    // Functions
    checkVisibility : function(){
        // If we have the candies conveter
        if(objects.list.candiesConverter.have){
            // We show it on the page
            htmlInteraction.setElementDisplay("candies_converter", "inline");
        }
    },
    
    checkedValueChange : function(){
        if(htmlInteraction.getElement("candies_converter_checkbox").checked){
            this.setActivated(true);
        }
        else{
            this.setActivated(false);
        }
    },
    
    convert : function(){
        var howMany = 0;
        
        // If we are activated and have candies to convert
        if(this.activated && candies.nbrOwned > 0){
            // We calculate how many candies we will convert
            if(this.speed > candies.nbrOwned){
                howMany = candies.nbrOwned;
            }
            else howMany = this.speed;
            
            // We convert them
            candies.setNbrOwned(candies.nbrOwned - howMany);
            lollipops.setNbrOwned(lollipops.nbrOwned + howMany);
            
            // We increment the speed
            if(this.speed < 10000) this.speed += 1;
            else this.speed *= 2;
        }
        // Else
        else{
            // We reset speed
            this.speed = 1;
        }
    },
    
    setActivated : function(value){
        this.activated = value;
        htmlInteraction.getElement("candies_converter_checkbox").checked = value;
    }
    
};

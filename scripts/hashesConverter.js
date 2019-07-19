var hashesConverter = {
    
    // Variables
    activated : false, // If true, the hashesConverter is activated
    speed : 1, // How many hashes the converter can convert into Monero each 1/10 seconds. The more the hashes converted without stopping, the more the speed increase.
    
    // Functions
    checkVisibility : function(){
        // If we have the hashes conveter
        if(objects.list.hashesConverter.have){
            // We show it on the page
            htmlInteraction.setElementDisplay("hashes_converter", "inline");
        }
    },
    
    checkedValueChange : function(){
        if(htmlInteraction.getElement("hashes_converter_checkbox").checked){
            this.setActivated(true);
        }
        else{
            this.setActivated(false);
        }
    },
    
    convert : function(){
        var howMany = 0;
        
        // If we are activated and have hashes to convert
        if(this.activated && hashes.nbrOwned > 0){
            // We calculate how many hashes we will convert
            if(this.speed > hashes.nbrOwned){
                howMany = hashes.nbrOwned;
            }
            else howMany = this.speed;
            
            // We convert them
            hashes.setNbrOwned(hashes.nbrOwned - howMany);
            Monero.setNbrOwned(Monero.nbrOwned + howMany);
            
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
        htmlInteraction.getElement("hashes_converter_checkbox").checked = value;
    }
    
};

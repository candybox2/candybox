var land = {
    
    // Variables
    list : [],
    ponyTime : false,
    
    // Functions
    createMob : function(text, max_hp, hp, weapon, description, drops){
        if(this.ponyTime == false)
            return {type:"mob", text:text, max_hp:max_hp, hp:hp, weapon:weapon, description:description, drops:drops};
        else return {type:"mob", text:"PON", max_hp:max_hp, hp:hp, weapon:weapon, description:"A pony", drops:drops};
    },
    
    createFakeCharacter : function(){
        if(this.ponyTime == false)
            return {type:"fake", text:"\\o/", max_hp:0, hp:0, weapon:"none", description:"", drops:[]};
        else return {type:"fake", text:"PON", max_hp:0, hp:0, weapon:"none", description:"A pony", drops:[]};
    },
    
    createAlly : function(text, max_hp, hp, weapon, description, drops){
        if(this.ponyTime == false)
            return {type:"ally", text:text, max_hp:max_hp, hp:hp, weapon:weapon, description:description, drops:drops};
        else return {type:"ally", text:"PON", max_hp:max_hp, hp:hp, weapon:weapon, description:"A pony", drops:drops};
    },
    
    createTrap : function(text, max_hp, hp, weapon, description, drops){
        if(this.ponyTime == false)
            return {type:"trap", text:text, max_hp:max_hp, hp:hp, weapon:weapon, description:description, drops:drops};
        else return {type:"trap", text:"PON", max_hp:max_hp, hp:hp, weapon:weapon, description:"A pony", drops:drops};
    },
    
    addLand : function(name, size, order, loadFunction, getTextFunction, moveFunction){
        this.list.push({name:name, size:size, order:order, unlocked:false, loadFunction:loadFunction, getTextFunction:getTextFunction, moveFunction:moveFunction});
    },
    
    getLandIndexFromOrder : function(order){
        for(var i = 0; i < this.list.length; i++){
            if(this.list[i].order == order){
                return i;
            }
        }
        return -1;
    },
    
    getLandIndexFromName : function(name){
        for(var i = 0; i < this.list.length; i++){
            if(this.list[i].name == name){
                return i;
            }
        }
        return -1;
    },
    
    updateListOnPage : function(maxOrder){
        var index, list, option;
        
        // We iterate over all order from 0 to maxOrder
        for(var i = 0; i <= maxOrder; i++){
            index = this.getLandIndexFromOrder(i); // We get the index of the land with the order i
            // If the land of index "index" isn't already unlocked and is correct (!= -1)
            if(index != -1 && this.list[index].unlocked == false){
                list = htmlInteraction.getElement("quest_destination"); // We get the list
                option = document.createElement("option"); // We create the new element to add to the list
                option.text = this.list[index].name; // We set its text
                // We add it to the list
                try{ list.add(option, list.options[null]); }
                catch(e){ list.add(option, null); }
                // We set that it is unlocked now
                this.list[index].unlocked = true;
            }
        }
    },
    
    getText : function(){
        return this.list[quest.currentLandIndex].getTextFunction();
    },
    
    load : function(){
        return this.list[quest.currentLandIndex].loadFunction();
    }
    
};

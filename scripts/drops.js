var drops = {
    
    createDrop : function(type, param1, param2){
        return {type:type, param1:param1, param2:param2};
    },
    
    getText : function(){
        var text = "";
        
        // hashes found
        if(quest.hashesFound != 1) text += "You found " + quest.hashesFound + " hashes.";
        else text += "You found 1 hash.";
    
        // Objects found
        for(obj in objects.list){
            if(objects.list[obj].found){
                text += "\n<b>You found " + objects.list[obj].text + ".</b>";
            }
        }
        
        // Notice
        text += "\n\nThings found will be yours only if you finish the quest without dying.";
        
        return text;
    },
    
    gainDrops : function(){
        // Gain the hashes
        hashes.setNbrOwned(hashes.nbrOwned + quest.hashesFound);
        
        // Gain the objects
        for(obj in objects.list){
            if(objects.list[obj].found){ // If we found this object but didn't have it already
                objects.setHaveObject(obj, true);
            }
        }
    },
    
    getAllDropsFromList : function(list){
        for(var i = 0; i < list.length; i++){
            switch(list[i].type){
                case "hashes":
                    quest.sethashesFound(quest.hashesFound + list[i].param1);
                break;
                case "object":
                    if(list[i].param2 == true) this.foundObject(list[i].param1);
                break;
            }
        }
    },
    
    foundObject : function(name){
        // If we don't already have this object, then we just found it !
        if(objects.list[name].have == false) objects.list[name].found = true;
    }
    
};
    

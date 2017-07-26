var status2 = {
    
    getText : function(){
        var statusLines = [];
        
        var character = this.getLinesFromThingIndex(quest.getCharacterIndex());
        if(quest.getCharacterIndex() + 1 < quest.things.length && quest.things[quest.getCharacterIndex() + 1].type != "none"){
            statusLines.push(this.formatLines(character));
            if(quest.things[quest.getCharacterIndex() + 1].type == "mob") // If it's a mob
                statusLines.push(this.formatLines(["", "VERSUS", "", ""]));
            if(quest.things[quest.getCharacterIndex() + 1].type == "ally") // If it's an ally
                statusLines.push(this.formatLines(["", " WITH ", "", ""]));
            statusLines.push(this.getLinesFromThingIndex(quest.getCharacterIndex() + 1));
        }
        else{
            statusLines.push(character);
        }
        
        return this.formatStatusLines(statusLines);
    },
    
    formatLines : function(lines){
        var max_len = 0;
        for(var i = 0; i < lines.length; i++){
            if(lines[i].length > max_len) max_len = lines[i].length;
        }
        
        for(var i = 0; i < lines.length; i++){
            if(lines[i].length < max_len){
                for(var j = lines[i].length; j < max_len; j++){
                    lines[i] += " ";
                }
            }
            lines[i] += " | ";
        }
        return lines;
    },
    
    formatStatusLines : function(lines){
        var text = "";
        var stop = false;
        var i = 0;
        while(stop == false){
            stop = true;
            text += "\n";
            for(var j = 0; j < lines.length; j++){
                if(lines[j].length > i){
                    text += lines[j][i];
                    stop = false; // While we have something to add, we continue
                }
            }
            i++;
        }
        return text;
    },
    
    getLinesFromThingIndex : function(i){
        var lines = [];
        lines.push("  " + quest.things[i].text);
        lines.push("HP : " + quest.things[i].hp + "/" + quest.things[i].max_hp);
        lines.push("Weapon : " + quest.things[i].weapon);
        lines.push("\"" + quest.things[i].description + "\"");
        return lines;
    }

};

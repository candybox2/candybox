var sea = {
    
    // Variables
    size : 25,

    // Functions
    onload : function(){
        land.addLand("sea", this.size, -1, this.load.bind(this), this.getText.bind(this));
    },
    
    load : function(){
        
    },
    
    getText : function(){
        // Get the character position
        var index = quest.getCharacterIndex();
        
        // Create the text
        var text = "                                 \"The sea\"\n\n\n";
        
        for(var i = 0; i < index; i++){
            text += "   ";
        }
        text += "     _\n";
        
        for(var i = 0; i < index; i++){
            text += "   ";
        }
        text += "    /|\\\n";
        
        for(var i = 0; i < index; i++){
            text += "   ";
        }
        text += "   /_|_\\\n";
        
        for(var i = 0; i < index; i++){
            text += "   ";
        }
        text += " ____|\\o/_\n";
        
        for(var i = 0; i < index; i++){
            text += "   ";
        }
        text += " \\_______/\n";
        
        for(var i = 0; i < this.size + 2; i++){
            text += " ~ ";
        }
        text += "\n  ";
    
        for(var i = 0; i < this.size + 1; i++){
            text += " ~ ";
        }
        
        return text;
    }
    
/*
     _
    /|\
   /_|_\
 ____|\o/_
 \_______/

*/
    
};

var speech = {
    
    makeLineFromWords : function(words, size){
        var line = words[0];
        var length = words[0].length;
        for(var i = 1; i < words.length; i++){
            line += " " + words[i];
            length += 1 + words[i].length;
        }
        var spaces = Math.floor((size - length)/2);
        for(var i = 0; i < spaces; i++){
            line = " " + line + " ";
            length += 2;
        }
        if(length == (size-1)) line += " ";
        return line;
    },
    
    makeSpeechFromText : function(text, size, spaces_add){
        var words = text.split(" ");
        var current_line_size = 0;
        var current_line = [];
        var final_text = "";
        var a_line_has_been_added = false;
        for(var i = 0; i < words.length; i++){
            current_line_size += 1 + words[i].length;
            if(current_line_size > size){ // If, with this word, the line is too big
                if(a_line_has_been_added == true) final_text += spaces_add + " ";
                final_text += this.makeLineFromWords(current_line, size) + "\n"; // We add the current line to the final text
                a_line_has_been_added = true;
                current_line_size = words[i].length;
                current_line = [];
                current_line.push(words[i]);
            }
            else{
                current_line.push(words[i]);
            }
        }
        if(current_line.length != 0){
            if(a_line_has_been_added == true) final_text += spaces_add + " ";
            final_text += this.makeLineFromWords(current_line, size);
        }
        return spaces_add + "\"" + final_text + "\"";
    }
    
};
    

var desert = {
    
    // Variables
    size : 25,

    // Functions
    onload : function(){
        land.addLand("desert", this.size, -1, this.load.bind(this), this.getText.bind(this));
    },
    
    load : function(){

    },
    
    getText : function(){
        var lines = this.asciiDesert.slice(0);
        
        for(var i = 0; i < this.size; i++){
            if(quest.things[i].type == "character"){
                if(i == 12) lines[12] = lines[12].replaceAt(i*3, quest.things[i].text[0]);
                else if(i == 13) lines[12] = lines[12].replaceAt(i*3, quest.things[i].text[0]);
                else if(i == 14) lines[12] = lines[12].replaceAt(i*3 + 1, quest.things[i].text[1]);
                else if(i == 15) lines[12] = lines[12].replaceAt(i*3 + 1, quest.things[i].text[1] + quest.things[i].text[2]);
                else if(i == 17) lines[12] = lines[12].replaceAt(i*3, quest.things[i].text[0] + quest.things[i].text[1]);
                else if(i == 18 || i == 19) ;
                else if(i == 20) lines[12] = lines[12].replaceAt(i*3 + 2, quest.things[i].text[2]);
                else lines[12] = lines[12].replaceAt(i*3, quest.things[i].text);
            }
        }
        
        return lines.join("");
    },
    
    // Ascii
    asciiDesert :
[
"                              \"The desert\"                               \n",
"                                                                           \n",
"                                                                           \n",
"       _                             _                                     \n",
"      / \\              _            / \\                          _         \n",
"    , | | ,           / \\         , | | ,                       / \\        \n",
"   ((_| |_))        , | | ,      ((_| |_))                    , | | ,      \n",
"   `--, ,--`       ((_| |_))     `--, ,--`                   ((_| |_))     \n",
"      | |          `--, ,--`        | |                  _   `--, ,--`     \n",
"      | |             | |           | |  _              / \\     | |        \n",
"     `\"\"\"`            | |          `\"\"\"`/ \\           , | | ,   | |        \n",
"                     `\"\"\"`            , | | ,        ((_| |_)) `\"\"\"`       \n",
"                                     ((_| |_))       `--, ,--`             \n",
"                                     `--, ,--`          | |                \n",
"                                        | |             | |                \n",
"                                        | |            `\"\"\"`               \n",
"                                       `\"\"\"`                               \n"
]
    
};

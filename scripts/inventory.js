var inventory = {
    
    // Variables
    magicianHatLetter : "",
    
    // Functions
    setMagicianHatLetter : function(value){
        this.magicianHatLetter = value;
    },
    
    updateOnPage : function(){
        // Check for the magician hat letter : if we have the magician hat but no letter is set yet
        if(objects.list.magicianHat.have && this.magicianHatLetter == ""){
            this.setMagicianHatLetter("     " + random.getRandomLetter());
        }
        
        // gpu
        switch(gpu.name){
            case "wooden gpu": htmlInteraction.setInnerHtml("gpu_without_button", gpu.asciiWoodengpuWithoutButton); break;
            case "copper gpu": htmlInteraction.setInnerHtml("gpu_without_button", gpu.asciiCoppergpuWithoutButton); break;
            case "iron gpu": htmlInteraction.setInnerHtml("gpu_without_button", gpu.asciiIrongpuWithoutButton); break;
            case "silver gpu": htmlInteraction.setInnerHtml("gpu_without_button", gpu.asciiSilvergpuWithoutButton); break;
            case "diamond gpu": htmlInteraction.setInnerHtml("gpu_without_button", gpu.asciiDiamondgpuWithoutButton); break;
            case "hash diamond gpu": htmlInteraction.setInnerHtml("gpu_without_button", gpu.asciihashDiamondgpu); break;
            case "polished hash diamond gpu": htmlInteraction.setInnerHtml("gpu_without_button", gpu.asciiPolishedhashDiamondgpu); break;
            case "chocolate gpu": htmlInteraction.setInnerHtml("gpu_without_button", gpu.asciiChocolategpu); break;
            case "sharp chocolate gpu": htmlInteraction.setInnerHtml("gpu_without_button", gpu.asciiSharpChocolategpu); break;
            case "gpu of Flames": htmlInteraction.setInnerHtml("gpu_without_button", gpu.asciigpuOfFlames + "\n\nLevel : " + gpu.specialPower); break;
            case "gpu of Life": htmlInteraction.setInnerHtml("gpu_without_button", gpu.asciigpuOfLife + "\n\nLevel : " + gpu.specialPower); break;
            case "gpu of Summoning": htmlInteraction.setInnerHtml("gpu_without_button", gpu.asciigpuOfSummoning + "\n\nLevel : " + gpu.specialPower); break;
            case "gpu of Liflamesummoning": htmlInteraction.setInnerHtml("gpu_without_button", gpu.asciigpuOfLiflamesummoning + "\n\nLevel : " + gpu.specialPower); break;
            case "gpu of Randomness": htmlInteraction.setInnerHtml("gpu_without_button", gpu.asciigpuOfRandomness + "\n\nLevel : infinite + " + gpu.specialPower); break;
        }
        
        // Objects
        this.updateObjectOnPage("inventory_key", objects.list.key, this.asciiKey, this.asciiNoObject);
        this.updateObjectOnPage("inventory_boots", objects.list.boots, this.asciiBoots, this.asciiNoObject);
        this.updateObjectOnPage("inventory_magician_hat", objects.list.magicianHat, this.magicianHatLetter + "\n" + this.asciiMagicianHat, this.asciiNoObject);
        this.updateObjectOnPage("inventory_pink_ring", objects.list.pinkRing, this.asciiPinkRing, this.asciiNoObject);
        this.updateObjectOnPage("inventory_hashes_converter", objects.list.hashesConverter, this.asciihashesConverter, this.asciiNoObject);
        this.updateObjectOnPage("inventory_plate_armour", objects.list.plateArmour, this.asciiPlateArmour, this.asciiNoObject);
        this.updateObjectOnPage("inventory_cauldron", objects.list.cauldron, this.asciiCauldron, this.asciiNoObject);
        this.updateObjectOnPage("inventory_magical_horn", objects.list.magicalHorn, this.asciiMagicalHorn, this.asciiNoObject);
        this.updateObjectOnPage("inventory_horn_of_plenty", objects.list.hornOfPlenty, this.asciiHornOfPlenty, this.asciiNoObject);
        this.updateObjectOnPage("inventory_old_amulet", objects.list.oldAmulet, this.asciiOldAmulet, this.asciiNoObject);
        
        if(developperComputer.won){
            htmlInteraction.setInnerHtml("inventory_won1", "<pre>" + this.asciiWon1 + "</pre>");
            htmlInteraction.setInnerHtml("inventory_won2", "<pre>" + this.asciiWon2 + "</pre>");
            htmlInteraction.showButton("hardmode");
        }
        else{
            htmlInteraction.setInnerHtml("inventory_won1", "<pre>" + this.asciiNoObject + "</pre>");
            htmlInteraction.setInnerHtml("inventory_won2", "<pre>" + this.asciiNoObject + "</pre>");
            htmlInteraction.hideButton("hardmode");
        }
        
        // Maps
        this.updateObjectOnPage("inventory_swamp_map", objects.list.swampMap, this.asciiSwampMap, this.asciiNoObject);
        this.updateObjectOnPage("inventory_hut_map", objects.list.hutMap, this.asciiHutMap, this.asciiNoObject);
        this.updateObjectOnPage("inventory_forge_map", objects.list.forgeMap, this.asciiForgeMap, this.asciiNoObject);
        this.updateObjectOnPage("inventory_well_map", objects.list.wellMap, this.asciiWellMap, this.asciiNoObject);
    },
    
    updateObjectOnPage : function(id, obj, ascii, asciiNoObject){
        if(obj.have){
            htmlInteraction.setInnerHtml(id, "<pre>" + ascii + "</pre><span><b>" + obj.name + "</b><br/>" + obj.description);
        }
        else{
            htmlInteraction.setInnerHtml(id, "<pre>" + asciiNoObject + "</pre>");
        }
    },
    
    // Ascii art
    
    asciiKey : " __\n\
/o \\_____\n\
\\__/-=\"=\"`",

    asciiBoots : "  ____\n\
  \\  _|__\n\
 __)|   /\n\
(___|  (__\n\
    (_-___)",
    
    asciiMagicianHat : "    / \\\n\
   /   \\\n\
  /     \\\n\
 /_______\\",
    
    asciiPinkRing : "   .--.\n\
  //  \\\\\n\
  \\\\__//\n\
   \'--\'",
   
    asciiSwampMap : " _________\n\
|         |\n\
| SWAMP   |\n\
|    ---> |\n\
|.-._.-._.|",

    asciiHutMap : " _________\n\
|  __     |\n\
| /lp\\ -> |\n\
| |__|    |\n\
|._.-._.__|",

    asciiForgeMap : " _________\n\
/  anvil  \\\n\
|   this  |\n\
| <-- way |\n\
\\_________/",

    asciiWellMap : " .-~-~-~-.\n\
!  ~    ~ !\n\
!~    ~   !\n\
! ~  ~  ~ !\n\
 \'-~-~-~-\'",
 
    asciihashesConverter : "   ______\n\
  /+|  |+\\\n\
 |=={==}==|\n\
  \\_|__|_/",
 
    asciiPlateArmour : "-;`\\..../`;-\n\
 |...::...|\n\
 /\'\'\'::\'\'\'\\\n\
/\\   ::   /\\\n\
  >._::_.<",
  
    asciiCauldron : "  ________\n\
 (________)\n\
  )      (\n\
 /        \\\n\
|          |\n\
\\__________/",

    asciiMagicalHorn : "  \\.\n\
   \\\'.\n\
    \\ \'.\n\
     \\,-\'",

    asciiHornOfPlenty : "  .\\\n\
   \\\'.\n\
    \\ \'.\n\
     \\__)",
     
    asciiOldAmulet : "   /   \\\n\
   o   o\n\
    \\_/\n\
    .^.\n\
   \'cnd\'\n\
   \'. .\'",
   
    asciiWon1 : "Bravo !\nYou won\nthe game :)\nYou now have\nall the\nhashes in\nthe world.",
   
    asciiWon2 : "(you can now\nask the dev\nfor a real\nhash, if you\nfind him !)",
   
    asciiNoObject : "            \n            \n            "

};

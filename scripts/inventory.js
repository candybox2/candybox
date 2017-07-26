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
        
        // Sword
        switch(sword.name){
            case "wooden sword": htmlInteraction.setInnerHtml("sword_without_button", sword.asciiWoodenSwordWithoutButton); break;
            case "copper sword": htmlInteraction.setInnerHtml("sword_without_button", sword.asciiCopperSwordWithoutButton); break;
            case "iron sword": htmlInteraction.setInnerHtml("sword_without_button", sword.asciiIronSwordWithoutButton); break;
            case "silver sword": htmlInteraction.setInnerHtml("sword_without_button", sword.asciiSilverSwordWithoutButton); break;
            case "diamond sword": htmlInteraction.setInnerHtml("sword_without_button", sword.asciiDiamondSwordWithoutButton); break;
            case "candy diamond sword": htmlInteraction.setInnerHtml("sword_without_button", sword.asciiCandyDiamondSword); break;
            case "polished candy diamond sword": htmlInteraction.setInnerHtml("sword_without_button", sword.asciiPolishedCandyDiamondSword); break;
            case "chocolate sword": htmlInteraction.setInnerHtml("sword_without_button", sword.asciiChocolateSword); break;
            case "sharp chocolate sword": htmlInteraction.setInnerHtml("sword_without_button", sword.asciiSharpChocolateSword); break;
            case "Sword of Flames": htmlInteraction.setInnerHtml("sword_without_button", sword.asciiSwordOfFlames + "\n\nLevel : " + sword.specialPower); break;
            case "Sword of Life": htmlInteraction.setInnerHtml("sword_without_button", sword.asciiSwordOfLife + "\n\nLevel : " + sword.specialPower); break;
            case "Sword of Summoning": htmlInteraction.setInnerHtml("sword_without_button", sword.asciiSwordOfSummoning + "\n\nLevel : " + sword.specialPower); break;
            case "Sword of Liflamesummoning": htmlInteraction.setInnerHtml("sword_without_button", sword.asciiSwordOfLiflamesummoning + "\n\nLevel : " + sword.specialPower); break;
            case "Sword of Randomness": htmlInteraction.setInnerHtml("sword_without_button", sword.asciiSwordOfRandomness + "\n\nLevel : infinite + " + sword.specialPower); break;
        }
        
        // Objects
        this.updateObjectOnPage("inventory_key", objects.list.key, this.asciiKey, this.asciiNoObject);
        this.updateObjectOnPage("inventory_boots", objects.list.boots, this.asciiBoots, this.asciiNoObject);
        this.updateObjectOnPage("inventory_magician_hat", objects.list.magicianHat, this.magicianHatLetter + "\n" + this.asciiMagicianHat, this.asciiNoObject);
        this.updateObjectOnPage("inventory_pink_ring", objects.list.pinkRing, this.asciiPinkRing, this.asciiNoObject);
        this.updateObjectOnPage("inventory_candies_converter", objects.list.candiesConverter, this.asciiCandiesConverter, this.asciiNoObject);
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
 
    asciiCandiesConverter : "   ______\n\
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
   
    asciiWon1 : "Bravo !\nYou won\nthe game :)\nYou now have\nall the\ncandies in\nthe world.",
   
    asciiWon2 : "(you can now\nask the dev\nfor a real\ncandy, if you\nfind him !)",
   
    asciiNoObject : "            \n            \n            "

};

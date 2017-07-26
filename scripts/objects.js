var objects = {

    // Variables
    list : {
        key : {have:false, found:false, text:"a key", name:"The lollipop farm's key.", description:"This key brings a lollipop farm to your candy box."},
        boots : {have:false, found:false, text:"a pair of boots", name:"The seven-league boots.", description:"These boots increase your speed during quests."},
        swampMap : {have:false, found:false, text:"a map", name:"The map to the Swampy Swamp.", description:"The Swampy Swamp is the swampiest swamp you've ever seen."},
        hutMap : {have:false, found:false, text:"a map", name:"The map to the sorceress' hut.", description:"In this hut lives a powerful witch ! She might help you... but not for free."},
        wellMap : {have:false, found:false, text:"a map", name:"The map to the wishing well.", description:"Make a wish, make it so, you may shine, you may glow..."},
        magicianHat : {have:false, found:false, text:"a hat", name:"The magician's hat.", description:"Wearing this hat enhances your magic."},
        pinkRing : {have:false, found:false, text:"a ring", name:"The pink ring of calmness.", description:"This pink ring will help you control your breath. You will recover faster after a quest."},
        forgeMap : {have:false, found:false, text:"a map", name:"The map to the forge.", description:"An anvil can be really useful, if you have the appropriate sword.."},
        candiesConverter : {have:false, found:false, text:"a strange object", name:"The candies converter.", description:"When activated in your candy box, this surprising object quickly converts all your candies into lollipops. One candy gives one lollipop !"},
        plateArmour : {have:false, found:false, text:"a strong armour", name:"A plate armour.", description:"This strong armour protects you from your enemies. You will lose less health points."},
        cauldron : {have:false, found:false, text:"a big container", name:"A cauldron.", description:"This cauldron allows you to brew a large variety of potions, using raw, common materials like candies or lollipops."},
        magicalHorn : {have:false, found:false, text:"a horn", name:"A magical horn.", description:"This magical horn belonged to a unicorn. Carrying it will make you regain health points continuously during a quest !"},
        hornOfPlenty : {have:false, found:false, text:"a horn", name:"The horn of plenty.", description:"The horn of plenty, stolen from Ploutos by the cow king, who thought it was a real horn. This mythical object will multiply by three your lollipop farm production."},
        oldAmulet : {have:false, found:false, text:"an amulet", name:"An old amulet.", description:"This old amulet, found on the corpse of a dead warrior, is known to bring prosperity to its owner. It will multiply by three your candies production."}
    },
    
    leave : function(){
        hut.leave();
        wishingWell.leave();
        swamp.leave();
        forge.leave();
    },
    
    // Functions
    setHaveObject : function(name, value){
        // We set the new "have" value
        this.list[name].have = value;
        
        // We check the buttons related to objects, since they may have changed
        buttons.checkObjects();
        
        // We update the inventory
        inventory.updateOnPage();
    }
    
};

var damage = {

    getWeaponDamage : function(weapon){
        switch(weapon){
            // Us
            case "none": return 0; break;
            case "wooden sword": return 1; break;
            case "copper sword": return 2; break;
            case "iron sword": return 3; break;
            case "silver sword": return 4; break;
            case "diamond sword": return 5; break;
            case "candy diamond sword": return 7; break;
            case "polished candy diamond sword": return 10; break;
            case "chocolate sword": return 12; break;
            case "sharp chocolate sword": return 14; break;
            case "Sword of Life": return 14; break;
            case "Sword of Flames":
                if(random.oneChanceOutOf(3)){
                    return 16 + Math.floor(sword.specialPower/2) + sword.specialPower*2;
                }
                else{
                    return 16 + Math.floor(sword.specialPower/2);
                }
            break;
            case "Sword of Summoning": return 14; break;
            case "Sword of Liflamesummoning": return 16 + sword.specialPower*5; break;
            case "Sword of Randomness":
                var index = quest.getCharacterIndex();
                switch(random.getRandomIntUpTo(4)){
                    case 0: quest.things[index].text = "   "; break;
                    case 1: quest.things[index].text = "___"; break;
                    case 2: quest.things[index].text = "r" + random.pickRandomly(["a", "p", "^", "'", "-", "+", "n", "m", "s", "o", ","]) + "r"; break;
                    case 3: quest.things[index].hp = Math.floor(quest.things[index].hp * random.getRandomFloat() * 2); break;
                    case 4: quest.things[index].hp = Math.floor(quest.things[index].max_hp * random.getRandomFloat() * 2); break;
                }
                return random.getRandomIntUpTo(sword.specialPower*114);
            break;
            // Traps
            case "powerful explosion": return 100; break;
            // Clone
            case "cloned sword": return 12; break;
            // Invocations
            case "its whole body": return 5; break;
            case "bludgeon": return 6; break;
            case "various bones": return 7; break;
            case "fangs": return 11; break;
            case "rock": return 7; break;
            case "fire": return 14; break;
            case "exploding candies":
                return 8 + Math.floor(sword.specialPower/2);
            break;
            // Peaceful forst
            case "hooves": return 1; break;
            // Mount Goblin
            case "claws": return 1; break;
            case "dagger": return 2; break;
            // Underwater cave
            case "fins": return 2; break;
            case "tentacles": return 1 + random.getRandomIntUpTo(5); break;
            case "giant tail": return 8; break;
            case "electric tail": return 9 + random.getRandomIntUpTo(2); break;
            // Castle's entrance
            case "spear": return 7; break;
            case "sharp sword": return 10; break;
            // Castle's stairs
            case "magic staff": return 6; break;
            case "damaged sword": return 5; break;
            // Castle's keep
            case "horn": return 9; break;
            case "horns": return 7; break;
            case "foots and tail": return 7; break;
            case "giant beak": return 7; break;
            case "its fists": return 6; break;
            case "its teeth": return 4; break;
            case "spiky tail": return 10; break;
            case "cursed sword": return 3 + random.getRandomIntUpTo(20); break;
            case "itself": return 45; break;
            case "sharp teeth": return 16; break;
            case "magical horn": return 12; break;
            case "enormous fist":
                if(random.oneChanceOutOf(3)){
                    return 20;
                }
                return 0;
            break;
            case "flames": return 40; break;
            // Cow level
            case "horns": return 7; break;
            // Desert
            case "cactus thorns": return 4; break;
            // Hell
            case "religion": return 80; break;
            case "demon claws": return 40; break;
            case "spikes": return 15; break;
            case "?": return 50; break;
            // Chuck norris
            case "Chuck Norris": return random.getRandomIntUpTo(chuckNorris.timeSpent*8); break;
            // Developper's garden
            case "ultra plasma gun": return 8; break;
            // Developper's computer
            case "bugs": return Math.floor(quest.getCharacterMaxHp()/4) + 5; break;
        }
        
        return 0;
    },
    
    makeTwoQuestThingsFighting : function(i, j){
        var theFirstIsTheCharacter = false; // True if the first of the fighting things is the character
        var howManyDamage = 0; // Used to calculate some stuff
        
        // If the first thing is the character
        if(quest.things[i].type == "character"){
            theFirstIsTheCharacter = true;
        }
        // If the second thing is the character
        else if(quest.things[j].type == "character"){
            // Then it's the first one in fact :)
            var temp = i;
            i = j;
            j = i;
            theFirstIsTheCharacter = true;
        }
        
        // The second thing get hit by the first
        quest.things[j].hp -= this.getWeaponDamage(quest.things[i].weapon);
        
        // If the first isn't the character
        if(theFirstIsTheCharacter == false){
            quest.things[i].hp -= this.getWeaponDamage(quest.things[j].weapon); // The first thing get hit by the second one
        }
        // Else, the first is the character
        else{
            howManyDamage = this.getWeaponDamage(quest.things[j].weapon); // We store the damage the mob should do to us
            // If we have a plate armour
            if(objects.list.plateArmour.have){
                howManyDamage -= 3; // We reduce the damage
            }
            // If we are a turtle
            if(quest.turtle){
                howManyDamage = Math.floor(howManyDamage/2);
            }
            // Spectral magic bonus (not influenced by the plate armour or the turtle state !)
            if(quest.things[j].weapon == "spectral magic"){
                howManyDamage = Math.ceil(quest.things[i].hp/2); // The damage is now half the life of the player
            }
            // If we are invincible
            if(quest.invulnerability){
                howManyDamage = 0; // No damage
            }
            if(howManyDamage > 0) quest.things[i].hp -= howManyDamage; // If we should still take damage, we take it
        }
        
        // Berserk bonuses : second hit
        if(quest.berserk && theFirstIsTheCharacter) quest.things[j].hp -= this.getWeaponDamage(quest.things[i].weapon);
        
        // We correct health points if they're < 0
        if(quest.things[i].hp < 0) quest.things[i].hp = 0;
        if(quest.things[j].hp < 0) quest.things[j].hp = 0;
        
        // Yourself quest can surpass bonus
        if(land.getLandIndexFromName("Yourself") == quest.currentLandIndex && yourself.canSurpass == true && theFirstIsTheCharacter == true){
            if(quest.things[i].hp == 0){
                quest.things[i].hp = 1;
                yourself.end = true;
            }
        }
    }

}

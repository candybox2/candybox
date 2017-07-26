var tabs = {
    
// Variables
    length : 0, // Number of tabs
    list : new Array(), // List of tabs buttons
    animation : "slide", // Animation to do
    active : 0, // Number of active tab
    lastKeyPress : 0, // blbl
    
// Functions
    
    // Enable the tab ( display : inline on the tab )
    enable : function(n){
        if(this.list[n].enabled == false){
            this.list[n].enabled = true;
            this.list[n].button.css("display", "inline");
        }
    },
    
    // Disable the tab ( display : none on the tab )
    disable : function(n){
        if(this.list[n].enabled == true){
            this.list[n].enabled = false;
            this.list[n].button.css("display", "none");
        }
    },
    
    // Show the tab ( slideDown/show based on the animSlide variable )
    show : function(n){
        switch(this.animation){
            case "slide":
                this.getTab(this.list[n].button).slideDown(200);
            break;
            default:
                this.getTab(this.list[n].button).show();
            break;
        }
    },
    
    // Hide the tab ( slideUp/hide based on the animSlide variable )
    hide : function(n){
        if(n == 1){ // If we're hiding the inventory tab, we try to leave all the maps
            objects.leave();
        }
        
        switch(this.animation){
            case "slide":
                this.getTab(this.list[n].button).slideUp(200);
            break;
            default:
                this.getTab(this.list[n].button).hide();
            break;
        }
    },

    // Toggle the animation ( slideDown|slideUp / show|hide )
    toggle : function(){
        switch(this.animation){
            case "slide":
                this.setAnimation("none");
            break;
            default:
                this.setAnimation("slide");
            break;
        }
    },
    
    setAnimation : function(anim){
    this.animation = anim;
        switch(this.animation){
            case "slide":
                $(".toggle").html("Tabs : Slide Effect");
            break;
            default:
                $(".toggle").html("Tabs : No Animation");
            break;
        }
    },
    
    // Select the tab
    select : function(something){
        // Remove the class "active" on the last active tab
        this.list[this.active].button.removeClass("active");
        
        // Get the new active tab
        this.active = something;
        
        // For all tabs
        for(var i = 0; i < this.length; i++){
            // If the tab is the new active tab
            if(i == this.active){
                // Add the class "active" on the new active tab
                this.list[i].button.addClass("active");
                // Show that tab
                this.show(i);
            }
            // Else, hide that tab
            else
                this.hide(i);
        }
    },
    
    // Next tab
    next : function(){
        var nextI = this.active;
    
        for(var i = 0; i < this.length; i++){
            // We search the nextI
            nextI += 1;
            if(nextI == this.length)
                nextI = 0;
            // We select the next tab if possible
            if(this.list[nextI].enabled){
                this.select(nextI);
                break;
            }
        }
    },
    
    // Prev tab
    prev : function() {
        var prevI = this.active;
    
        for(var i = this.length; i > 0; i--){
            // We search the nextI
            prevI -= 1;
            if(prevI == -1)
                prevI = this.length-1;
            // We select the next tab if possible
            if(this.list[prevI].enabled){
                this.select(prevI);
                break;
            }
        }
    },
    
    // Get the tab attribute
    getTab : function(something){
        return $("#"+something.attr("tab"));
    },
    
    bindKey : function(){
        $("body").keydown( function(e) {
            var currentTime = new Date().getTime();
        
            // Tabs keys
            if(currentTime - tabs.lastKeyPress > 50) {
                if(e.which == 39)
                    tabs.next();
                else if(e.which == 37)
                    tabs.prev();
                /*else
                    alert("Code for Key Pressed : " + e.which);*/
        
                tabs.lastKeyPress = currentTime;
            }
            
            // Quest keys
            if(e.which == 73){
                hell.goUp();
            }
            else if(e.which == 75){
                hell.goDown();
            }
            
            if(e.which == developperComputer.letter){
                developperComputer.useLetter();
            }
            
        });
    },
    
    bindToggle : function() {
        $(".toggle").bind('click', function() { tabs.toggle(); });
        $(".toggle").html("Tabs : Slide Effect");
    },
    
    //On Load
    onload : function(){
        // Get the number of tabs
        this.length = $("#tabs button").length;
        
        // Generate the list of tabs buttons
        for(var i = 0; i < this.length; i++){
            this.list.push({button:$(".tab-" + i), enabled:true});
            this.disable(i);
        }
        
        // Select the first tab
        this.select(0);
        
        // Bind click event on all tabs to do select(that tab)
        for(var i = 0; i < this.length; i++){
            this.list[i].button.bind('click', tabs.select.bind(tabs, i));
        }
        
        // Bind key
        this.bindKey();
    
        this.bindToggle();
    }
};

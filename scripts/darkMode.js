var darkMode = {
    setting: "light",

    check: function() {
        if (candies.nbrThrown >= 100) {
            this.show();
        } else {
            this.hide();
        }
    },
  
    show: function() {
        htmlInteraction.showButton("dark_mode_toggle");
    },
  
    hide: function() {
        htmlInteraction.hideButton("dark_mode_toggle");
    },
  
    update: function() {
        switch(this.setting){
            case "light":
                this.deactivate();
            break;
            default:
                this.activate();
            break;
        }
    },
    
    htmlUpdate: function() {
      if (this.setting === "dark") {
          this.activate();
      }
    },

    toggle: function() {
        switch(this.setting){
            case "light":
                this.setMode("dark");
            break;
            default:
                this.setMode("light");
            break;
        }
    },

    activate: function() {
        $("#dark_mode_toggle").html("Dark Mode: ON");
        $("body").addClass("dark_mode");
        $("button, select").addClass("dark_button");
        $("a").addClass("dark_link");
        $("td").addClass("dark_table");
    },

    deactivate: function() {
        $("#dark_mode_toggle").html("Dark Mode: OFF");
        $("body").removeClass("dark_mode");
        $("button, select").removeClass("dark_button");
        $("a").removeClass("dark_link");
        $("td").removeClass("dark_table");
    },
    
    setMode : function(mode){
        this.setting = mode;
        this.update();
    },

    bindToggle : function() {
        $("#dark_mode_toggle").bind('click', function() { darkMode.toggle(); });
        $("#dark_mode_toggle").html("Dark Mode: OFF");
    },

    onload : function(){
        this.bindToggle();
    }
}

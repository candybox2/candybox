var darkMode = {
  isOn: false,

  check: function() {
    if (candies.nbrThrown >= 100) {
      this.show();
    }
  },

  
  show: function() {
    htmlInteraction.setElementVisibility("darkModeToggle", true);
  },
  
  update: function() {
    if (this.isOn) {
      this.activate();
    } else {
      this.deactivate();
    }
  },

  toggle: function() {
    if (this.isOn) {
      this.activate();
    this.isOn = false;
  } else {
      this.deactivate();
      this.isOn = true;
  }
  },

  activate: function() {
    $(".dark_mode_toggle").html("Dark Mode: ON");
    $("body").addClass("dark_mode");
    $("button, select").addClass("dark_button");
    $("a").addClass("dark_link");
    $("td").addClass("dark_table");
  },

  deactivate: function() {
    $(".dark_mode_toggle").html("Dark Mode: OFF");
    $("body").removeClass("dark_mode");
    $("button, select").removeClass("dark_button");
    $("a").removeClass("dark_link");
    $("td").removeClass("dark_table");
  }
}

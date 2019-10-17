var htmlInteraction = {
  
    setElementDisplay : function(id, display){
        document.getElementById(id).style.display = display;
    },
    
    getElement : function(id){
        return document.getElementById(id);
    },
    
    setElementVisibility : function(id, bool){
        if(bool) document.getElementById(id).style.visibility = "visible";
        else document.getElementById(id).style.visibility = "hidden";
    },
    
    isElementVisible : function(id){
        if(document.getElementById(id).style.visibility == "hidden") return false;
        return true;
    },
    
    setInnerHtml : function(id, value){
        document.getElementById(id).innerHTML = value;
        darkMode.update();
    },
    
    disableButton : function(id){
        this.getElement(id).disabled = "disabled";
    },
    
    disableButtonClass : function(id){
        var arr = document.getElementsByClassName(id);
        for(var i = 0; i < arr.length; i++){
            arr[i].disabled = "disabled";
        }
    },
    
    enableButton : function(id){
        this.getElement(id).disabled = "";
    },
    
    enableButtonClass : function(id){
        var arr = document.getElementsByClassName(id);
        for(var i = 0; i < arr.length; i++){
            arr[i].disabled = "";
        }
    },
    
    showButton : function(id){
        htmlInteraction.setElementVisibility(id, true);
    },
    
    showButtonClass : function(id){
        var arr = document.getElementsByClassName(id);
        for(var i = 0; i < arr.length; i++){
            arr[i].style.visibility = "visible";
        }
    },
    
    hideButton : function(id){
        htmlInteraction.setElementVisibility(id, false);
    },
    
    hideButtonClass : function(id){
        var arr = document.getElementsByClassName(id);
        for(var i = 0; i < arr.length; i++){
            arr[i].style.visibility = "hidden";
        }
    },
    
    setButtonOnclick : function(id, value){
        this.getElement(id).onclick = value;
    },
    
    focusElement : function(id){
        this.getElement(id).focus();
    }
};

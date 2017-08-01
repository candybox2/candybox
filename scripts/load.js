var code = "";

function getPhpStuff(boolean){
    if(boolean == true) return 1;
    return 0;
}

function setPhpStuff(int){
    if(int == 1) return true;
    return false;
}

function load() {
	document.getElementById('my_file').click();
}

function restart() {
	clearInterval(cookie.cookiehandler);
	cookie.eraseCookie("CandyCookie");
	//location.reload();
	window.location.reload(true); 
}

function readFile (evt) {
	
	var files = evt.target.files;
	var file = files[0];           
	var reader = new FileReader();
	
	reader.onload = function(event) {
		
		var temp = event.target.result;
		var var_list = []

		var lines = temp.split("\n");
		
		if(lines.length != 90)
		{
			alert("ERROR: Corrupt Candysave Lines: " + lines.length);
			console.log("ERROR: Corrupt Candysave Lines: " + lines.length); 
			return null;
		}
		
		for (var i = 0; i < lines.length; i++) {
			
			var split = lines[i].split(": ");
			
			if(split.length != 2)
			{
				alert("ERROR: Corrupt Candysave @Line #" + (i+1));
				console.log("ERROR: Corrupt Candysave @Line #" + (i+1)); 
				return null;
			}
			
			console.log(split[1] + " | " + i); 
			
			var_list.push(split[1]);

		}
		
		//reset all
		cookie.eraseCookie("CandyCookie");
		main.onload();
		
		
		
		cookie.updateData(var_list);
		cookie.createCookie("CandyCookie", cookie.getData(), 365);
		
		window.location.reload(true); 
		
	}
	
	reader.readAsText(file)
}

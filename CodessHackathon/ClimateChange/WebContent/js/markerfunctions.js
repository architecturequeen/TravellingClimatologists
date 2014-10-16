/**
 * 
 */


function onMapClick(e) {
	
	var info = this.info;
	
	currentLocation = info;
	
	$("#panel").show();
	
	$("#panel_welcome").append("<h2> You have arrived in " + info.countryName +  "!</h2>");	
	
	console.log("you h " + this.info.countryName);
	    
	if (this.info.countryName== "Alaska, USA"){
		$("#panel_facts").append("<iframe height='700px'  width='1400px' src='pages/muir_glacier.html'></iframe>");	
	}
	
if (this.info.countryName== "Utah, USA"){
	$("#panel_facts").append("<iframe height='700px'  width='1400px' src='pages/bingham_canyon_mine'></iframe>");
		
	}

if (this.info.countryName== "Philippines"){
	$("#panel_facts").append("<iframe height='700px'  width='1400px' src='pages/haiyan_typhoon.html'></iframe>");
	
}

if (this.info.siteName== "Tewksbury"){
	$("#panel_facts").append("<iframe height='700px'  width='1400px' src='pages/tewkewsbury_flooding.html'></iframe>");
	
}

if (this.info.countryName== "France"){
	$("#panel_facts").append("<iframe height='700px'  width='1400px' src='pages/mer_de_glace.html'></iframe>");
	
}
if (this.info.siteName== "Big Ben, London"){
	$("#panel_facts").append("<iframe height='700px'  width='1400px' src='pages/london_flooding.html'></iframe>");
	
}
if (this.info.countryName== "China"){
	$("#panel_facts").append("<iframe height='700px'  width='1400px' src='pages/china_storm.html'></iframe>");
	
}

if (this.info.countryName== "Brazil"){
	$("#panel_facts").append("<iframe height='700px'  width='1400px' src='pages/amazon_rainforest.html'></iframe>");
	
}
	
		
		var text = "Lorem ipsum dolor sit amet, et elementum. Massa per vestibulum litora " +
				"sed ante vel, dolor urna elit augue vestibulum sapien, nullam cursus maecenas. " +
				"Consectetuer velit enim. Blandit hymenaeos suspendisse, nam ad ipsum phasellus " +
				"amet ipsum sit, tristique amet vitae leo, id enim. Cum sed, praesent nunc in egestas " +
				"sed quam augue, commodo in nulla dictum dapibus mollis, odio dis etiam ac" +
		"Vitae lacus urna aenean eget ac laoreet, fuga sem volutpat, vivamus eu senectus commodo " +
		"maecenas proin in. Dolor mauris, elementum class. Sapien orci, nullam at, iaculis non " +
		"vel eros euismod consectetuer facilisis, ut id quis, quam a sed blandit " +
		"leo vehicula. Nunc gravida vivamus velit nam, posuere ipsum purus wisi faucibus,"+
		"duis platea id arcu ante, erat ac egestas justo amet velit. Nec magna lobortis " +
		"interdum lorem felis. Hendrerit ac nullam interdum habitant, leo vel velit ornare" +
		"Incididunt cursus et nec, sem quis eros";
		
		
	}



function addMarkers(){
	
	
	var locData = locationdata;
	for (var key in locData)
	{
		
		var lat= locData[key].coordinates[0];
		var long=locData[key].coordinates[1];
		
		//create marker
		var marker = L.marker([lat, long]);
		
		
		marker["info"]= locData[key];
		marker.addTo(map);
		
		marker.on('click', onMapClick);
	}
	
	
}

function goHome(){
	
	
	
	lastLocation = currentLocation;
			
			countriesVisited[currentLocation.countryName]= currentLocation;
			console.log("you just visited " + currentLocation.countryName);
			
			if (currentLocation.disasterType=="ice"){
				icePoints+=15;
				$('#ice span').text(icePoints);
			
			}
			
			else if (currentLocation.disasterType=="water"){
				console.log("water");
				waterPoints+=15;
				$('#water span').text(waterPoints);
				
				
			}
			else if (currentLocation.disasterType=="storm"){
				console.log("storm");
				stormPoints +=15;
				$('#storm span').text(stormPoints);
				
			}
			else if (currentLocation.disasterType=="trees"){
				console.log("trees");
				treePoints +=15;
				$('#trees span').text(treePoints);
				
			}
			
			
			
			
			
			
			$("#panel_welcome").empty();
			$("#panel_facts").empty();
			$("#panel").hide();
			$("#places").append(currentLocation.countryName + "<br/>");
			console.log(countriesVisited);
			
			
		
}

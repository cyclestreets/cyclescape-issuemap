/* Contants and utility functions for use in IssueMap app */

var colourTable = ["blue", "red", "green", "lime", "maroon", "navy", "olive", "orange", "purple", "fuchsia", "teal"];
var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

/* Utility functions */

function ajaxFailure(event) {
	alert('Failed to establish connection to Cyclescape server. Please try later.');
}

function customDateString(dateInSecs) {
	var dateObject = new Date(parseInt(dateInSecs, 10) * 1000);
	return (dateObject.getDate() + ' ' + monthNames[dateObject.getMonth()] + ' ' + dateObject.getFullYear());
}

function contains(anArray, aValue) {
	for(i in anArray) {
		if(anArray[i] == aValue) return true;
	}
	return false;
}

function datePassed(intervalInDays, dateInSecs) { // true if timeInSecs  
	var today = new Date();
	var dateObject = new Date(parseInt(dateInSecs, 10) * 1000);
	var intervalInMillisecs = intervalInDays*24*60*60*1000;
	if(today.getTime() > (dateObject.getTime() + intervalInMillisecs)) return true;
	else return false;
}

function urlParam(name){
// get a named parameter from the URL string
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    if (results==null){
       return null;
    }
    else{
       return decodeURIComponent(results[1]) || 0;
    }
}

/* string manipulations to convert URL parameters to  config fields */
function tagsToNames(tags) {
// convert something like 'alpha-beta,gamma-delta' to 'Alpha Beta, Gamma Delta'
	var tagwords, result = '';

	for ( i in tags) {
		var aTag = tags[i], words;
		if(i > 0) result += ', ';
		// replace '-' with ' ' and make first char UC
		words = aTag.split('_');
		for (j in words) {
			if(j > 0) result += ' ';
			words[j] = words[j].charAt(0).toUpperCase() + words[j].substring(1);
			result += words[j]
		}
	}
	return result;
}

function processTags(aTagString) {
	var status = 'off', menuString, tags = aTagString, portions;

	// if there is an '*' the initial status is 'on' and we reject anything beyond the '*'	
	if((portions = tags.split('*')).length > 1) {
		status = 'on';
		tags = portions[0];
	}
	// if there is a ':' the first portion is a menuString
	if((portions = tags.split(':')).length > 1) {
		menuString = portions[0];
		tags = portions[1];
	}
	if(tags == 'ALL' || tags == 'OTHER') {
		menuString = tags;
		tags = null;
	} else {
		// get an array of the tags
		var tagStrings = tags.split(',');
		if(menuString == null) menuString = tagsToNames(tagStrings);
		var tagsForUrl = '"' + tagStrings[0] + '"';
		for(i = 1; i < tagStrings.length; i++) {
			tagsForUrl += ',"' + tagStrings[i] + '"';
		}
	}
	return {'tags': tagsForUrl, 'menuItem': menuString, 'onOff': status};
}


/* copied from leaflet.geometryutil.js but not yet used
 *	returns distance between two latlngs in pixels on the given map

latLngDistance = function (map, latlngA, latlngB) {
	return map.latLngToLayerPoint(latlngA).distanceTo(map.latLngToLayerPoint(latlngB));
}
 */

/* Constants and default config record for Issue Map
 * 11 Feb 2017
 */

/* UI Constants */
const deadlineWidth = 12;
const noDeadlineWidth = 5;
const rolloverWidth = 20;
const lineOpacity = 0.5;
const rolloverOpacity = 1;
const dashArray = '1, 20';
const thickDashArray = '15, 5';
const thinDashArray = '10, 5';
const areaFill = 0.15;
const areaFillColor = 'gray';
const circleMarkerRadius = 8;
const thePopupOptions = {maxHeight: 300, maxWidth: 400, autoPan: true, className: "custom-popup"};
toolTipOptions = {className: "tooltip"};

/* URL for AJAX calls to the Cyclescape API */
const cyclescapeApiUrl = "https://www.cyclescape.org/api/issues/?order=size";

/*
	George's Mapbox access token seems to be needed for access to the mapbox tile server only
L.mapbox.accessToken = null; 	// the code seems to work without a token even though
								// it uses a couple of mapbox-specific functions
								// but the token is needed to use the api.tiles.mapbox.com server
*/
mapboxAccessToken = 'pk.eyJ1IjoibnV0dHl4YW5kZXIiLCJhIjoiOGJXbjNMWSJ9.ckqRbehjO-rU86vPSGzMpQ';

/* base map layers */
const mapboxAttribution = 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
		'<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
		'Imagery © <a href="http://mapbox.com">Mapbox</a>',
	osmAttribution = 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
	cyclescapeAttribution = 'Issue data:<a href="http://blog.cyclescape.org/about/"> Cyclescape </a> | ',
	cartoDbAttribution = 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, Map tiles by CartoDB, under CC BY 3.0',
	mapboxUrl = 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=' + mapboxAccessToken,
	mapQuestUrl = 'http://otile1.mqcdn.com/tiles/1.0.0/osm/{z}/{x}/{y}.png',
	cartoDbLightUrl = 'http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png',
	OSMUrl = "http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
	cycleMapUrl = 'http://{s}.tile.opencyclemap.org/cycle/{z}/{x}/{y}.png',
	mapnikBwUrl ='http://{s}.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png',
	// following URL found at http://korona.geog.uni-heidelberg.de/contact.html
	// adminBoundariesUrl = 'http://129.206.66.245:8007/tms_b.ashx?x={x}&y={y}&z={z}'; 
	adminBoundariesUrl = 'http://korona.geog.uni-heidelberg.de/tiles/adminb/x={x}&y={y}&z={z}'; 

const streets = L.tileLayer(mapboxUrl, {id: 'mapbox.streets', 
		attribution: L.Browser.mobile ? '' : cyclescapeAttribution + mapboxAttribution});
const cartoDbLight = L.tileLayer(cartoDbLightUrl, 
		{attribution: L.Browser.mobile ? '' : cyclescapeAttribution + cartoDbAttribution});
const mapQuest = L.tileLayer(mapQuestUrl, 
		{attribution: L.Browser.mobile ? '' : cyclescapeAttribution + osmAttribution});
const openStreetMap = L.tileLayer(OSMUrl, 
		{attribution: L.Browser.mobile ? '' : cyclescapeAttribution + osmAttribution, opacity:0.7});
const opencyclemap = L.tileLayer(cycleMapUrl, 
		{attribution: L.Browser.mobile ? '' : cyclescapeAttribution + osmAttribution, opacity:0.7});
const mapnik_BlackAndWhite = L.tileLayer(mapnikBwUrl, 
		{maxZoom: 18, attribution: L.Browser.mobile ? '' : cyclescapeAttribution + osmAttribution, opacity: 0.8});
const adminBoundaries = L.tileLayer(adminBoundariesUrl);

const baseLayers = {
	"OSM": openStreetMap,
	"Greyscale" : mapnik_BlackAndWhite,
	"MapBox": streets,
	"OpenCycleMap": opencyclemap
};

const baseOverlays = {
	"Borough Boundaries" : adminBoundaries
};

/* 
	 Default settings for London Cycling Campaign (see http://lcc.org.uk/pages/consultation-map)
*/
// NB this is a var because it can be modified according to the URL parameters
var config = {
	"mapTitle": "LCC – related consultations on Cyclescape",
	"mapCenter": [51.51, -0.12],
	"bbox": "-0.5534,51.2702,0.2565,51.6936",
	"info": "./docs/info.html",
	"mapZoom": "13",
	"baseLayer": "MapBox",
	"staleMargin": 365, // no. of days without posts
	"expiredMargin": 30, // extra days beyond expiry date
	'dateFilters': {
		"showFuture": true,
		"showNoDeadline": true,
		"showExpired": false,
		"showStale": false
	},
	"firstMenu": {
		"name": "Mayors Vision",
		"specialTag": 
			{
				"name": "Consultations",
				"tag": "\"consultation\"",
				"otherName": "Other Discussions",
				"specialOnOff":"on",
				"otherOnOff": "on"
			},
		"selectors": [  
		   {  
			  "tags":"\"cycle-superhighway\"",
			  "menuItem":"Superhighways",
			  "onOff":"on"
		   },
		   {  
			  "tags":"\"better-junction\"",
			  "menuItem":"Better Junctions",
			  "onOff":"on"
		   },
		   {  
			  "tags":"\"mini-holland\"",
			  "menuItem":"Mini-Hollands",
			  "onOff":"on"
		   },
		   {  
			  "tags":"\"quietway\"",
			  "menuItem":"Quietways",
			  "onOff":"on"
		   },
		   {  
			  "tags":"\"car-free-places\"",
			  "menuItem":"Car Free Places",
			  "onOff":"on"
		   },
		],
	},
	"secondMenu": {
		"name": "Boroughs",
		"specialTag": 
			{
				"name": "Consultations",
				"tag": "\"consultation\"",
				"otherName": "Other Issues",
				"specialOnOff":"on",
				"otherOnOff": "off"
			},
		"selectors": [  
		   {  
			  "tags":"\"tfl\"",
			  "menuItem":"TfL",
			  "onOff":"on"
		   },
		   {  
			  "tags":"\"barking-and-dagenham\"",
			  "menuItem":"Barking & Dagenham",
			  "onOff":"on"
		   },
		   {  
			  "tags":"\"Barnet\"",
			  "menuItem":"Barnet",
			  "onOff":"on"
		   },
		   {  
			  "tags":"\"bexley\"",
			  "menuItem":"Bexley",
			  "onOff":"on"
		   },
		   {  
			  "tags":"\"brent\"",
			  "menuItem":"Brent",
			  "onOff":"on"
		   },
		   {  
			  "tags":"\"bromley\"",
			  "menuItem":"Bromley",
			  "onOff":"on"
		   },
		   {  
			  "tags":"\"camden\"",
			  "menuItem":"Camden",
			  "onOff":"on"
		   },
		   {  
			  "tags":"\"city-of-london\"",
			  "menuItem":"City of London",
			  "onOff":"on"
		   },
		   {  
			  "tags":"\"croydon\"",
			  "menuItem":"Croydon",
			  "onOff":"on"
		   },
		   {  
			  "tags":"\"ealing\"",
			  "menuItem":"Ealing",
			  "onOff":"on"
		   },
		   {  
			  "tags":"\"enfield\"",
			  "menuItem":"Enfield",
			  "onOff":"on"
		   },
		   {  
			  "tags":"\"greenwich\"",
			  "menuItem":"Greenwich",
			  "onOff":"on"
		   },
		   {  
			  "tags":"\"hackney\"",
			  "menuItem":"Hackney",
			  "onOff":"on"
		   },
		   {  
			  "tags":"\"hammersmith-and-fulham\"",
			  "menuItem":"Hammersmith & Fulham",
			  "onOff":"on"
		   },
		   {  
			  "tags":"\"haringey\"",
			  "menuItem":"Haringey",
			  "onOff":"on"
		   },
		   {  
			  "tags":"\"harrow\"",
			  "menuItem":"Harrow",
			  "onOff":"on"
		   },
		   {  
			  "tags":"\"havering\"",
			  "menuItem":"Havering",
			  "onOff":"on"
		   },
		   {  
			  "tags":"\"hillingdon\"",
			  "menuItem":"Hillingdon",
			  "onOff":"on"
		   },
		   {  
			  "tags":"\"hounslow\"",
			  "menuItem":"Hounslow",
			  "onOff":"on"
		   },
		   {  
			  "tags":"\"islington\"",
			  "menuItem":"Islington",
			  "onOff":"on"
		   },
		   {  
			  "tags":"\"kensington-and-chelsea\"",
			  "menuItem":"Ken & Chelsea",
			  "onOff":"on"
		   },
		   {  
			  "tags":"\"kingston\",\"kingston-upon-thames\"",
			  "menuItem":"Kingston upon Thames",
			  "onOff":"on"
		   },
		   {  
			  "tags":"\"lambeth\"",
			  "menuItem":"Lambeth",
			  "onOff":"on"
		   },
		   {  
			  "tags":"\"lewisham\"",
			  "menuItem":"Lewisham",
			  "onOff":"on"
		   },
		   {  
			  "tags":"\"merton\"",
			  "menuItem":"Merton",
			  "onOff":"on"
		   },
		   {  
			  "tags":"\"newham\"",
			  "menuItem":"Newham",
			  "onOff":"on"
		   },
		   {  
			  "tags":"\"redbridge\"",
			  "menuItem":"Redbridge",
			  "onOff":"on"
		   },
		   {  
			  "tags":"\"richmond\",\"richmond-upon-thames\"",
			  "menuItem":"Richmond upon Thames",
			  "onOff":"on"
		   },
		   {  
			  "tags":"\"southwark\"",
			  "menuItem":"Southwark",
			  "onOff":"on"
		   },
		   {  
			  "tags":"\"sutton\"",
			  "menuItem":"Sutton",
			  "onOff":"on"
		   },
		   {  
			  "tags":"\"tower-hamlets\"",
			  "menuItem":"Tower Hamlets",
			  "onOff":"on"
		   },
		   {  
			  "tags":"\"waltham-forest\"",
			  "menuItem":"Waltham Forest",
			  "onOff":"on"
		   },
		   {  
			  "tags":"\"wandsworth\"",
			  "menuItem":"Wandsworth",
			  "onOff":"on"
		   },
		   {  
			  "tags":"\"westminster\"",
			  "menuItem":"Westminster",
			  "onOff":"on"
		   }
		]
	}
}
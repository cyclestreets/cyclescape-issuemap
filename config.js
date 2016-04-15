/* Default configuration for Issue Map
 * settings for London Cycling Campaign
 * equivalent to URL parameters:
http://maps.camdencyclists.org.uk/issuemap/issuemap_test.html?title=LCC-related%20consultations%20on%20Cyclescape&center=51.51,-0.12&zoom=13&bbox=-0.5534,51.29,0.2565,51.6936&categories=TfL:tfl* /camden/islington/Richmond:rcc/wandsworth/westminster

 * 12 Jan 2016
 */

var config = {
	"mapTitle": "LCC – related consultations on Cyclescape",
	"mapCenter": [51.51, -0.12],
	"bbox": "-0.5534,51.2702,0.2565,51.6936",
	"info": "./docs/info.html",
	"mapZoom": "13",
	"baseLayer": "MapBox",
	"staleMargin": 365, // no. of days without posts
	"expiredMargin": 15, // extra days beyond expiry date
	"showExpired": true,
	"showStale": false,
	"firstMenu": {
		"name": "Mayors Vision",
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
			},
		"selectors": [  
		   {  
			  "tags":"\"tfl\"",
			  "menuItem":"TfL",
			  "onOff":"off"
		   },
		   {  
			  "tags":"\"bromley\"",
			  "menuItem":"Bromley",
			  "onOff":"off"
		   },
		   {  
			  "tags":"\"camden\"",
			  "menuItem":"Camden",
			  "onOff":"off"
		   },
		   {  
			  "tags":"\"croydon\"",
			  "menuItem":"Croydon",
			  "onOff":"off"
		   },
		   {  
			  "tags":"\"ealing\"",
			  "menuItem":"Ealing",
			  "onOff":"off"
		   },
		   {  
			  "tags":"\"enfield\"",
			  "menuItem":"Enfield",
			  "onOff":"off"
		   },
		   {  
			  "tags":"\"hackney\"",
			  "menuItem":"Hackney",
			  "onOff":"off"
		   },
		   {  
			  "tags":"\"hounslow\"",
			  "menuItem":"Hounslow",
			  "onOff":"off"
		   },
		   {  
			  "tags":"\"kensington-and-chelsea\"",
			  "menuItem":"Ken & Chelsea",
			  "onOff":"off"
		   },
		   {  
			  "tags":"\"lambeth\"",
			  "menuItem":"Lambeth",
			  "onOff":"off"
		   },
		   {  
			  "tags":"\"newham\"",
			  "menuItem":"Newham",
			  "onOff":"off"
		   },
		   {  
			  "tags":"\"islington\"",
			  "menuItem":"Islington",
			  "onOff":"off"
		   },
		   {  
			  "tags":"\"richmond\"",
			  "menuItem":"Richmond",
			  "onOff":"off"
		   },
		   {  
			  "tags":"\"southwark\"",
			  "menuItem":"Southwark",
			  "onOff":"off"
		   },
		   {  
			  "tags":"\"tower-hamlets\"",
			  "menuItem":"Tower Hamlets",
			  "onOff":"off"
		   },
		   {  
			  "tags":"\"waltham-forest\"",
			  "menuItem":"Waltham Forest",
			  "onOff":"off"
		   },
		   {  
			  "tags":"\"wandsworth\"",
			  "menuItem":"Wandsworth",
			  "onOff":"off"
		   },
		   {  
			  "tags":"\"westminster\"",
			  "menuItem":"Westminster",
			  "onOff":"off"
		   },
		]
	}
}
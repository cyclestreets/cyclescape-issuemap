/* 
	modified by @georgio to:
		- eliminate timeout if no timeout option is set
		- add new methods: load, hide, toggle
		- modified show(messge) so that the content is unchanged if message is null
*/
L.Control.Messagebox = L.Control.extend({
    options: {
        position: 'topright',
        timeout: 3000
    },

    onAdd: function (map) {
        this._container = L.DomUtil.create('div', 'leaflet-control-messagebox');
        L.DomEvent.disableClickPropagation(this._container);
        return this._container;
    },
    
    load: function (message) {
    	this._container.innerHTML = message;
    },

    show: function (message) {
        var elem = this._container;
        if(message) elem.innerHTML = message;
        elem.style.display = 'block';

		if(this.options.timeout) {
			if (typeof this.timeoutID == 'number') {
				clearTimeout(this.timeoutID);
			}
			var timeout = this.options.timeout;
			this.timeoutID = setTimeout(function () {
				elem.style.display = 'none';
			}, timeout);
        }
    },
    
    hide() {
        this._container.style.display = 'none';
    },
    
    toggle() {
    	if(this._container.style.display == 'none') this._container.style.display = 'block';
    	else this._container.style.display = 'none';
    }
});

L.Map.mergeOptions({
    messagebox: false
});

L.Map.addInitHook(function () {
    if (this.options.messagebox) {
        this.messagebox = new L.Control.Messagebox();
        this.addControl(this.messagebox);
    }
});

L.control.messagebox = function (options) {
    return new L.Control.Messagebox(options);
};

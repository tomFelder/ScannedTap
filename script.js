var iframe = document.getElementById( 'api-frame' );
var version = '1.0.0';
var client = new Sketchfab( version, iframe );


var urlid = '7w7pAfrCfjovwykkEeRFLGw5SXS';

client.init( urlid, {
    success: function onSuccess( api ){
        //API is ready to use
        api.start();
    },
    error: function onError() {
        console.log( 'Viewer error' );
    }
} );

var urlid = '7w7pAfrCfjovwykkEeRFLGw5SXS';

client.init( urlid, {
    success: function onSuccess( api ){ },
    error: function onError() { },
    camera: 0,
    blending: 1,
    autospin: 4,
    annotation_cycle: 4,
    transparent: 0
} );

api.lookat(
    [ 0, 13, 10], // eye position
    [0, 10, 0],   // target to lookat
    4.3           // duration of the animation in seconds
);
var iframe = $( '#api-frame' )[ 0 ];
var version = '1.0.0';
var urlid = '6cd4dd83c8f84e098271e8b43330753c';

var client = new Sketchfab( version, iframe );

var error = function () {
    console.error( 'Error api Sketchfab !' );
};

var success = function ( api ) {

    var currentCamera = 1;

    var loop = function () {
        currentCamera++;
        api.lookat( [-1000,-1000,1000],[0,0,0], 0);
        setTimeout( loop, 0 );
    }

    api.start( loop );



console.log('api started - initialising client')

};

client.init( urlid, {
    success: success,
    error: error
} );
    
console.log('client intialised')    


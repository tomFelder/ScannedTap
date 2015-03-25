var iframe = $( '#api-frame' )[ 0 ];
var version = '1.0.0';
var urlid = '6cd4dd83c8f84e098271e8b43330753c';

var client = new Sketchfab( version, iframe );

var error = function () {
    console.error( 'Error api Sketchfab !' );
};

console.log('pre api start')

var success = function ( api ) {

    api.start( function () {
        $( '#start' ).click( function () {
            api.start();
        } );

        $( '#stop' ).click( function () {
            api.stop();
        } );
    } );

};

console.log('api started - initialising client')

client.init( '6cd4dd83c8f84e098271e8b43330753c', {
    success: function onSuccess( api ){
        //API is ready to use
        api.start();
    },
    error: function onError() {
        console.log( 'Viewer error' );
    }
} );
    
console.log('client intialised')    


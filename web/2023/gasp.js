// gsap.from ('.turning span', {y:20, opacity:1, stagger:0.5 });
$( document ).ready( function() {
  var jbTime = 600;
  $( '.turning1' ).animate( {
    opacity: '1'
  }, jbTime, function() {
    $( '.turning2' ).animate( {
      opacity: '1'
    }, jbTime, function() {
      $( '.turning3' ).animate( {
        opacity: '1'
      }, jbTime );
    } );
  } );
} );
function initMap() {

var infowindow = new google.maps.InfoWindow(
  { 
    size: new google.maps.Size(150,50)
  });


        var mapDiv = document.getElementById('map');
        var map = new google.maps.Map(mapDiv, {
            center: {lat: 24.2458783,  lng: 55.7205202},
            
            zoom: 18,
scrollwheel: false,
    navigationControl: false,
    mapTypeControl: false,
    scaleControl: false,
    draggable: false,
    styles: []

        });
var marker = new google.maps.Marker({
    position: {lat: 24.2458783,  lng: 55.7205202},
    map: map,
    visible: true,
    /*icon: '/assets/images/fav/favicon-32x32.png',
	animation: google.maps.Animation.BOUNCE,*/
	
    title: '<p>  Street 31, Al Jimi, opposite to fertility center  <br>\n Al Ain, U.A.E <br>\n <a href="https://www.google.com/maps/place/Royal+Health+Rehabilitation+Hospital+Al+Ain/@24.2458799,55.7208761,18z/data=!3m1!4b1!4m5!3m4!1s0x3e8ab3ce349bfe71:0xa7a693ac018d29a!8m2!3d24.2458783!4d55.7216145?hl=en" target="_blank">View On Google</a></p>',
infoWindowContent : '<p> Street 31, Al Jimi, opposite to fertility center  <br>\n Al Ain, U.A.E <br>\n <a href="https://www.google.com/maps/place/Royal+Health+Rehabilitation+Hospital+Al+Ain/@24.2458799,55.7208761,18z/data=!3m1!4b1!4m5!3m4!1s0x3e8ab3ce349bfe71:0xa7a693ac018d29a!8m2!3d24.2458783!4d55.7216145?hl=en" target="_blank">View On Google</a></p>'
  });
 google.maps.event.addListener(marker, 'click', function() {
            

        infowindow.setContent('<p> Street 31, Al Jimi, opposite to fertility center <br>\n Al Ain, U.A.E <br>\n <a href="https://www.google.com/maps/place/Royal+Health+Rehabilitation+Hospital+Al+Ain/@24.2458799,55.7208761,18z/data=!3m1!4b1!4m5!3m4!1s0x3e8ab3ce349bfe71:0xa7a693ac018d29a!8m2!3d24.2458783!4d55.7216145?hl=en" target="_blank">View On Google</a></p>'); 
        
                  
        infowindow.open(map,marker);

        });
      }

var aplication = angular.module('hotelApp', []);
aplication.controller('hotelController',function(){
  var hoteles = [
    {
      name:'Hotel Emperador',
      stars:'3',
      price:'1596',
      img:'assets/img/HotelEmperador.jpg'},
    {
      name:'Petit Palace San Bernardo',
      stars:'4',
      price:'2145',
      img:'assets/img/HotelEmperador.jpg'},
    {
      name:'Hotel Nuevo Boston',
      stars:'2',
      price:'861',
      img:'assets/img/HotelEmperador.jpg',
    }];
    this.hoteles = hoteles;
});

var aplication = angular.module('hotelApp', []);
aplication.controller('hotelController',function($scope){
  $scope.hoteles = [
    {
      name:'Hotel Emperador',
      stars:'3',
      price:'1596',
      img:'assets/img/HotelEmperador.jpg',
      aviso01: 'Precio por noche por habitación',
      aviso02: 'Impuestos y tasas no incluidos',
      pago01: 'Pagá en cuotas',
      pago02: 'Pagá en destino'},
    {
      name:'Petit Palace San Bernardo',
      stars:'4',
      price:'2145',
      img:'assets/img/HotelSanBernardo.jpg',
      aviso01: 'Precio por noche por habitación',
      aviso02: 'Impuestos y tasas no incluidos',
      pago02: 'Pagá en destino'},
    {
      name:'Hotel Nuevo Boston',
      stars:'2',
      price:'861',
      img:'assets/img/HotelNuevoBoston.jpg',
      aviso01: 'Precio por noche por habitación',
      aviso02: 'Impuestos y tasas no incluidos',
      detalle01: 'Precio sin promo',
      sinPromo: 'ARS 1,118',
      pago01: 'Pagá en cuotas'
    }];
});

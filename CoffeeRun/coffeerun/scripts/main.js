(function(window) {
  'use strict';
  var FORM_SELECTOR = '[data-coffee-order="form"]';
  var App = window.App;
  var Truck = App.Truck;
  var DataStore = App.DataStore;
  var FormHandler = App.FormHandler;
  // console.log("-------------Testing------------");
  // console.log($($(document.body).children()[0]).attr("data-coffee-order"));
  var myTruck = new Truck('ncc-1701', new DataStore());
  window.myTruck = myTruck;
  try {
    var formHandler = new FormHandler(FORM_SELECTOR);
    formHandler.addSubmitHandler(myTruck.createOrder.bind(myTruck));
    console.log(formHandler);
  } catch (e) {
    //console.log('Unable to create formhandler, as index.html of tests doesn"t have form element');
  }
})(window);

// var html_index_page=require('fs').readFileSync('./index.html','utf-8');
// var formhandler_test_script=require('fs').readFileSync('./scripts/formhandler.js','utf-8');
var data_script=require('fs').readFileSync('./scripts/datastore.js','utf-8');
var truck_script=require('fs').readFileSync('./scripts/truck.js','utf-8');
var main_script=require('fs').readFileSync('./scripts/main.js','utf-8');
var truckdata_test_script=require('fs').readFileSync('./tests/test_datastore.js','utf-8');
var truck_test_script=require('fs').readFileSync('./tests/test_truck.js','utf-8');



var window=global;

//
// const jsdom= require('jsdom');
// const {JSDOM}=jsdom;
// const { wind } = new JSDOM(`...`);
//
// const { document } = (new JSDOM(`...`)).wind;
// var $ = jQuery = require('jQuery')(wind);
// var form_elem=$('<form data-coffee-order="form"></form>');
// $(document.body).append(form_elem);
// console.log($(document.body).children());
// var selector=form_elem;
// console.log(window.document)
// console.log($);
eval(data_script);
eval(truck_script);
// console.log('You are there');
// eval(formhandler_test_script);
eval(main_script);
// // console.log('You are there');

eval(truckdata_test_script);
eval(truck_test_script);
console.log(window.App);

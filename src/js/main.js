// require("./lib/social");
// require("./lib/ads");
// var track = require("./lib/tracking");

require("component-responsive-frame/child");

var dot = require("./lib/dot");
var template = dot.compile(require("./_items.html"));

var Tabletop = require("tabletop");


var public_spreadsheet_url = 'https://docs.google.com/spreadsheets/d/1TxCIhCYx1XGiPAZZfysHDCUeQetez3hJq0M5dlh5oas/pubhtml';

var articles = [];
var title = document.querySelector(".title"); 
var table = Tabletop.init({
  key: public_spreadsheet_url,
  simpleSheet: true,
  callback: function(data, tabletop) {
    
    //Reverses the data so the newest articles are loaded at top.
    data.reverse();
    
    for (var i = 0; i < 10; i++) {
      
      articles.push({
        title: data[i].Title,
        url: data[i].URL,
        author: data[i].Developer,
        category: data[i].Section,
        date: data[i].Published
      
      });
    
//      var node = document.createTextNode(data[i].Title);
//      title.appendChild(node);
    }
    
    var html = template({ articles });
    var section = document.querySelector(".content");
    section.innerHTML = html;
  }
  
});


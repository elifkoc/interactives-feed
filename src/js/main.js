// require("./lib/social");
// require("./lib/ads");
// var track = require("./lib/tracking");

require("component-responsive-frame/child");

var Tabletop = require("tabletop");

console.log(Tabletop);

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
    console.log(data[i].Title);
      
      articles.push({
        title: data[i].Title,
        url: data[i].URL,
        author: data[i].Developer,
        section: data[i].Section,
        date: data[i].Published
      
      });
    
      var node = document.createTextNode(data[i].Title);
      title.appendChild(node);
       console.log(articles);
    }  
  }
  
});


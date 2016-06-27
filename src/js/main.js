// require("./lib/social");
// require("./lib/ads");
// var track = require("./lib/tracking");

require("component-responsive-frame/child");

var dot = require("./lib/dot");
var template = dot.compile(require("./_items.html"));

var moment = require("moment");
var Tabletop = require("tabletop");


var public_spreadsheet_url = 'https://docs.google.com/spreadsheets/d/1TxCIhCYx1XGiPAZZfysHDCUeQetez3hJq0M5dlh5oas/pubhtml';

var articles = [];
var title = document.querySelector(".title"); 
var table = Tabletop.init({
  key: public_spreadsheet_url,
  simpleSheet: true,
  callback: function(data, tabletop) {
    
    var articles = data.map(function(article) {
      
      var [month, day, year] = article.Published.split("/");
      var published = moment([year, month - 1, day]);
      
      return {
        title: article.Title,
        date: published
      };
    
    }).sort((a, b) => b.date - a.date);
    
    var html = template({ articles: articles.slice(0, 10) });
    var more = template({ articles: articles});
    var section = document.querySelector(".content");
    section.innerHTML = html;
  }
  
});


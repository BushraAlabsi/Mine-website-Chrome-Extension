// var $ = require("jquery");

$(document).ready(function() {

$("button").click(function(){
	var name = $('#name').val();
var category = $('#category').val();
chrome.tabs.query({'active': true}, function (tabs) {
	console.log(tabs)
    var url = tabs[0].url; console.log("hi",name,category,url)
    $.ajax({
    	url: "http://mine-green-field.herokuapp.com//add",
    	type: "POST",
    	data: JSON.stringify({urlName: name, category:category, url:url}),
    	contentType: "application/json",
    	success : function(result) {
        alert("added to your Mine ",result); // result is an object which is created from the returned JSON
    }
    })

});
	
});
})

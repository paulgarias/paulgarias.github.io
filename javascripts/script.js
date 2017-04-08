
var makeHeader = function(){
	menuLinks = [{"name":"Home","hyperlink":"http://paulgarias.github.io/index.html"},{"name":"About","hyperlink":"http://paulgarias.github.io/about.html"}];
	imgsrc = "http://paulgarias.github.io/images/profile.jpg";
	var innerHTMLtext = "";
	innerHTMLtext = innerHTMLtext+'<img src=\"'+imgsrc+'\"'
	innerHTMLtext = innerHTMLtext+' style=\"width:160px ; box-shadow: 0px 0px 5px #888888;\">'
	innerHTMLtext = innerHTMLtext+'  <h1 style=\"text-shadow: -1px 1px 5px #888888;\">PaulGArias</h1> <p>Sharing my adventures in computing and data science since 2014</p> <p> ' 
	innerHTMLtext = innerHTMLtext+'<a href="http://github.com/paulgarias"> <img class="socmed" src="http://paulgarias.github.io/images/socialmediaicons/github-9-xxl.png" /> </a> '
	innerHTMLtext = innerHTMLtext+'<a href="http://twitter.com/paulgarias"> <img class="socmed" src="http://paulgarias.github.io/images/socialmediaicons/twitter-4-xxl.png" /> </a> '
	innerHTMLtext = innerHTMLtext+'</p>'
	for (var i=0; i < menuLinks.length ; i++) {
		innerHTMLtext = innerHTMLtext + '<p><a href=\"'+menuLinks[i]['hyperlink'] + '\">' + menuLinks[i]['name'] + '</a></p>'
	}
	return innerHTMLtext
};

document.querySelectorAll("#profileAndNavigation")[0].innerHTML = makeHeader();

(function () {
	var socmedicons = document.querySelectorAll(".socmed")
	for (var i=0; i<socmedicons.length; i++) {
		socmedicons[i].style.transition="all 0.25s";
	}
})();

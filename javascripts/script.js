(function(){
	menuLinks = [{"name":"Home","hyperlink":"http://paulgarias.github.io/index.html"},{"name":"About","hyperlink":"http://paulgarias.github.io/about.html"}];
	imgsrc = "http://paulgarias.github.io/images/profile.jpg";
	var innerHTMLtext = "";
	innerHTMLtext += '<img src=\"'+imgsrc+'\"';
	innerHTMLtext += ' style=\"width:160px ; box-shadow: 0px 0px 5px #888888;\">';
	innerHTMLtext += '  <h1 style=\"text-shadow: -1px 1px 5px #888888;\">PaulGArias</h1> <p>Sharing my adventures in computing and data science since 2014</p> <p> ';
	innerHTMLtext += '<a href="http://github.com/paulgarias"><img class="socmed" src="http://paulgarias.github.io/images/socialmediaicons/github-9-xxl.png" /></a> ';
	innerHTMLtext += '<a href="http://twitter.com/paulgarias"><img class="socmed" src="http://paulgarias.github.io/images/socialmediaicons/twitter-4-xxl.png" /></a> ';
	innerHTMLtext += '</p>';
	for (var i=0; i < menuLinks.length ; i++) {
		innerHTMLtext += '<p><a href=\"'+menuLinks[i]['hyperlink'] + '\">' + menuLinks[i]['name'] + '</a></p>';
	}
	document.querySelectorAll("#profileAndNavigation")[0].innerHTML = innerHTMLtext;
})();

(function () {
	var socmedicons = document.querySelectorAll(".socmed");
	for (var i=0; i<socmedicons.length; i++) {
		socmedicons[i].style.transition="all 0.25s";
	}
})();

(function () {
	var linklist = document.querySelectorAll("a");
	for (var i=0;i<linklist.length; i++){
		linklist[i].style.transition = "all 0.25s";
		//console.log(linklist[i].innerText=="");
	}
	
})();

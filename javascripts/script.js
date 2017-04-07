//document.getElementById("profileAndNavigation").innerHTML = '<img src=\"http://paulgarias.github.io/images/profile.jpg\" style=\"width:160px ; box-shadow: 0px 0px 5px #888888;\"> <h1 style=\"text-shadow: -1px 1px 5px #888888;\">PaulGArias</h1> <p>Sharing my adventures in computing and data science since 2014</p> <p>  <iframe src=\"http://ghbtns.com/github-btn.html?user=paulgarias&amp;type=follow\" allowtransparency=\"true\" frameborder=\"0\" scrolling=\"0\" width=\"172px\" height=\"28px\"></iframe></p> <p><a href=\"http://paulgarias.github.io/index.html\">Home</a></p> <p><a href=\"http://paulgarias.github.io/about.html\">About</a></p> '

var makeHeader = function(){
	menuLinks = [{"name":"Home","hyperlink":"http://paulgarias.github.io/index.html"},{"name":"About","hyperlink":"http://paulgarias.github.io/about.html"}];
	imgsrc = "http://paulgarias.github.io/images/profile.jpg";
	var innerHTMLtext = "";
	innerHTMLtext = innerHTMLtext+'<img src=\"'+imgsrc+'\"'
	innerHTMLtext = innerHTMLtext+' style=\"width:160px ; box-shadow: 0px 0px 5px #888888;\">'
	innerHTMLtext = innerHTMLtext+'  <h1 style=\"text-shadow: -1px 1px 5px #888888;\">PaulGArias</h1> <p>Sharing my adventures in computing and data science since 2014</p> <p>  <iframe src=\"http://ghbtns.com/github-btn.html?user=paulgarias&amp;type=follow\" allowtransparency=\"true\" frameborder=\"0\" scrolling=\"0\" width=\"172px\" height=\"28px\"></iframe></p>'
	for (var i=0; i < menuLinks.length ; i++) {
		console.log(i,menuLinks[i])
		innerHTMLtext = innerHTMLtext + '<p><a href=\"'+menuLinks[i]['hyperlink'] + '\">' + menuLinks[i]['name'] + '</a></p>'
	}
	return innerHTMLtext
};

document.querySelectorAll("#profileAndNavigation")[0].innerHTML = makeHeader()

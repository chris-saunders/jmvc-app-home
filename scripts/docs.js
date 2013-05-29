//js home/scripts/doc.js

load('steal/rhino/rhino.js');
steal("documentjs").then(function(){
	DocumentJS('home/home.html', {
		markdown : ['home']
	});
});
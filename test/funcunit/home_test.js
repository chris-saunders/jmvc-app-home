steal("funcunit", function(){
	module("home test", { 
		setup: function(){
			S.open("//home/home.html");
		}
	});
	
	test("Copy Test", function(){
		equals(S("h1").text(), "Welcome to JavaScriptMVC 3.2!","welcome text");
	});
})
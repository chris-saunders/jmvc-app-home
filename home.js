steal(
	'./home.css', 			// application CSS file
	'./models/models.js',		// steals all your models
	'./fixtures/fixtures.js',	// sets up fixtures for your models
	'jquery/controller',
	'jquery/controller/view',
	'jquery/view/ejs',
    '//table/models/models.js',
	'//table/table',
    '//infinitescroll/infinitescroll',
function(){					// configure your application
	$.Controller('Home',
    {

    }, {
        init: function() {
            var self = this;
            
            User.findAll( {}, function( users ){
                self.users = users;
                self.render();    
            });
        },

        render: function() {
            this.element.html(this.view('homeView.ejs'));
            var $table = this.element.find('table.tableWrapper');
            
            $table.table({
                rows: this.users,
                headers: { 
                    name: "Name",
                    age: "Age"
                },
                //template: '//home/views/tableOverrideView.ejs'
            });
            $table.infinitescroll({
                limit: 10,
                model: User,
                template: '<tr <%= model %>><td><%= model.attr("name") %></td><td><%= model.attr("age") %></td</tr>'
            });
        }

    });

    $('.container').home();
});
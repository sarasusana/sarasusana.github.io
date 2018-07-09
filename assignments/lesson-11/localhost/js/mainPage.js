$(function(){
    
    // All jQuery code goes here - Lesson #3

			$('#alcoveLogo').css('opacity', 0.4);

			$('.servicesBtn').css('color', '#FFF');
            
            $('button').css('border', '1px solid DeepSkyBlue');
            
            $('h2').css('border', '1px solid transparent');
            
            //$('input').css('backgroundColor', 'rgba(255, 0, 0, 0.5)')
            
            //$('#alcoveLogo').next().css('background', 'rgba(255,0,0,0.2)');
    
            //$('.box1').nextAll().css('background', 'rgba(255,0,0,0.2)'); 
    
            //$('.header').children().css('background-color', 'rgba(255,0,0,0.2)');
    
            //$(".navigation > li:eq(2)").parent().css('opacity', '0.3');
    
            //$('.servicesBtn').closest('div').css('background-color', 'rgba(255,0,0,0.2)');
		

		// Toggle function
        var toggleStyle = function() {
            
            var inputFields = $('input[type="text"]');
            if( inputFields.css('background-color') === 'rgb(255,0,0)') {
                // Set background color to white
                inputFields.css('background-color', 'rgb(255, 255, 255)');
            } else {
                // Set background color to red
                inputFields.css('background-color', 'rgb(255, 0, 0)');
            }
        }
        
        $('#ReqAQuoteBtn').click( toggleStyle );
    
        $('.coreValues').prepend("<li><strong>This is brand new !!</strong></li>");
    
        $("<li><strong>This is also great !!</strong></li>").prependTo(".coreValues");
    
    //placeholder: John Doe in input tag
    var nameVal = $('input[name="nameVal"]');
    
    function FillEmpty(){
        if( nameVal.val() == '' ){
            nameVal.val( 'John Doe' );
        }
    }
    
    $('#ReqAQuoteBtn').click( FillEmpty );
    
    
    // Lesson 4.2: Insert Content
        var box1 = $('.box1');
        var box2 = $('.box2');
        
        function LeftToRight(){
            if(box2.html() == ''){
                // Get content from box1 and put it into box2
                // Empty out box1
                box2.html( box1.html() );
                box1.html( '' );
            }
        }
        
        $('#LeftToRight').click( LeftToRight );
        
        function RightToLeft(){
            if(box1.html() == ''){
                // Get content from box2 and put it into box1
                // Empty out box2
                box1.html( box2.html() );
                box2.html( '' );
            }
        }
        
        $('#RightToLeft').click( RightToLeft );
    
    
    
    // Lesson 4.3: Playing with Classes 
        $('.navigation > li').hover(function(){
            //This code executes when the mouse pointer is over the list item
            
            $(this).addClass('openSesame');
        
        }, function(){
            // This code executes when the mouse pointer leaves the list item
            
            $(this).removeClass('openSesame');
            
        });
    
    // Toggle a class from Lesson 4.3
            $('.toggleBtn').click(function(){
                $(this).toggleClass("toggleOn");
            } );
    
    
    // Lesson 4.4: Slide Effects
        //$('.dropdownMenu > li').hover( function(){
            // Mousover
            
        //    $(this).children("ul").slideDown(200);
            
        //}, function(){
            // Mouseout
            
        //    $(this).children("ul").slideUp(200);
        //})
        
        $('.dropdownMenu > li').hover(function(){
            $(this).children("ul").slideToggle(200);
        })
    
    
    
    // Lesson 4.5: Iterating Over Collections
		// Array containing Objects with Fruit names & quantities
		var fruitBasket = [	{title:'Apples', quantity:20},
							{title:'Oranges', quantity:25},
							{title:'Kiwis', quantity:50},
							{title:'Strawberries', quantity:45},
							{title:'Bananas', quantity:10},
							{title:'Mangoes', quantity:5},
							{title:'Tomatoes', quantity:30} ];

		// Your jQuery code goes here
        $.each( fruitBasket, function( index, element){
            $('.fruits').append('<li>We have ' + element.quantity + " " + element.title + '</li>');
        })
        
        $('.fruits > li').each(function(index, element){
            $(element).css('background-color', 'rgb(100,200,0)');
        })

	})
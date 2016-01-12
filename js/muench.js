var Muench = (function (window, document) {

    that = this;

    mySwipe = Swipe(document.getElementById('mySwipe'), {
        startSlide: 0,
        speed: 300,
        continuous: false,
        blockInsteadOfResist: false,
        disableScroll: true,
        callback: function() {
            $('#emoji_footer_' + that.current_slide).removeClass('selected');
            $('#emoji_footer_' + that.current_slide).addClass('unselected');
            that.current_slide = String(mySwipe.getPos() + 1);
            $('#emoji_footer_' + that.current_slide).removeClass('unselected');
            $('#emoji_footer_' + that.current_slide).addClass('selected');
        }
        
    });
	
	// endEvent = hasTouch ? 'touchend' : 'mouseup',
	
	Muench = function (opts) {
	
	    that = this;
		
	    // ********************************************************
		// ************* Skimmin-specific variables ****************
		// ********************************************************
		
		this.current_slide = '1';
		
		// ---------------------------------------------------------
		// Muench launch
		// ---------------------------------------------------------
				
		// Options from user
		for (i in opts) this.options[i] = opts[i];
		
		// ---------------------------------------------------------
		// Skimmin launch
		// ---------------------------------------------------------
          
        $('#masthead').on('click', this.fn_tap_menu_button.bind(this));
        $('.menu_container').on('click', this.fn_tap_name.bind(this));
        $('#menu_footer_text').on('click', this.fn_tap_name.bind(this));
        
        emojis_footer = $('#emojis_footer');
        masthead = $('#masthead');
        menu_screen = $('#menu_screen');
        swipe_wrapper = $('#swipe_wrapper');
        
        this.fn_check_for_non_mobile_browser();
    	this.fn_convert_emoji();
    	this.fn_convert_made_with_love();
		
		window.addEventListener('load', function() {
		    FastClick.attach(document.body);
		}, false);
       
    };
    
	Muench.prototype = {

		// ------------------------------------------------------
		// Skimmin Core Functions
		// ------------------------------------------------------
        
        fn_check_for_non_mobile_browser: function() {
        	
  			var check = false;
  			(function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
  			if (check == false) {
  				$('#desktop_message_headline').fadeIn(0);
  				$('#desktop_message_headline').addClass('animated bounceInRight');
  				$('#desktop_message_text').fadeIn(0);
  				$('#desktop_message_text').addClass('animated bounceInRight');
  			}
  			else {
  				$('#desktop_message_screen').fadeOut(0);
  			}
  			
    	},
        
       	fn_convert_emoji: function() {
			
			$(".emoji").each(function() {
    			var input = $(this).html();
    			var output = emojione.shortnameToImage(input);
    			$(this).html(output);
			});
		},
		
		fn_convert_made_with_love: function() {
			$(".made_with_love").each(function() {
    			var input = $(this).html();
    			var output = emojione.shortnameToImage(input);
    			$(this).html(output);
			});
		},
        
        fn_tap_name: function(e) {
        	
            int_person = e.target.id.substr(-1);
        	
        	if (int_person == 1) {
        	
        		$('#heading_name').html('NANCY');
        	
        		str_swipe_slides =
        		'<div id="slide1">' +
            		'<div class="feed_element">' +
            			'<span class="memory_headline emoji">KATY PERRY</span><span class="emoji_text emoji" style="top:-.4rem;">:dancer:</span>' +
                		'<div class="memory_body emoji">To my blue-haired mother, thanks for showing me that age is just a number. Your spunk is an inspiration. Katy would be proud of your style, as am I!</div>' +
            		'</div>' +
       			'</div>' +
       			'<div id="slide2">' +
            		'<div class="feed_element">' +
            			'<span class="memory_headline emoji">TENNIS</span><span class="emoji_text emoji">:tennis:</span>' +
                		'<div class="memory_body emoji">I love watching grand slam tennis with you. It always makes me chuckle when you get excited for a point and clap. (They can\'t hear you.)</div>' +
            		'</div>' +
       			'</div>' +
       			'<div id="slide3">' +
            		'<div class="feed_element">' +
            			'<span class="memory_headline emoji">TAXES</span><span class="emoji_text emoji">:file_cabinet:</span>' +
                		'<div class="memory_body emoji">I really appreciate you doing my taxes - both personal and business. Tim is lucky to have you as an employee, and I am lucky to have you as a mother.</div>' +
            		'</div>' +
       			'</div>' + 
       			'<div id="slide4">' +
            		'<div class="feed_element">' +
            			'<span class="memory_headline emoji">CHOCOLATE</span><span class="emoji_text emoji">:chocolate_bar:</span>' +
                		'<div class="memory_body emoji">I won\'t lie, it stinks not being able to eat chocolate. But luckily I can get my fix just from watching your consumption habits. You\'re a true professional.</div>' +
            		'</div>' +
       			'</div>' +
       			'<div id="slide5">' +
            		'<div class="feed_element">' +
            			'<span class="memory_headline emoji">COOKING</span><span class="emoji_text emoji">:stew:</span>' +
                		'<div class="memory_body emoji">Your food is always delicious and I love the new "clean eating" meals you\'ve been making lately. Your fastball hasn\'t lost its velocity!</div>' +
                	'</div>' +
           		'</div>';
           			
           		str_emojis_footer = 
           		'<span id="emoji_footer_1" class="selected emoji"><i style="font-size:.6rem;" class="fa fa-circle"></i></span>' +
    			'<span>&nbsp;</span>' +
    			'<span>&nbsp;</span>' +
    			'<span>&nbsp;</span>' +
    			'<span>&nbsp;</span>' +
    			'<span id="emoji_footer_2" class="unselected emoji"><i style="font-size:.6rem;" class="fa fa-circle"></i></span>' +
    			'<span>&nbsp;</span>' +
    			'<span>&nbsp;</span>' +
    			'<span>&nbsp;</span>' +
    			'<span>&nbsp;</span>' +
    			'<span id="emoji_footer_3" class="unselected emoji"><i style="font-size:.6rem;" class="fa fa-circle"></i></span>' +
    			'<span>&nbsp;</span>' +
    			'<span>&nbsp;</span>' +
    			'<span>&nbsp;</span>' +
    			'<span>&nbsp;</span>' +
    			'<span id="emoji_footer_4" class="unselected emoji"><i style="font-size:.6rem;" class="fa fa-circle"></i></span>' +
    			'<span>&nbsp;</span>' +
    			'<span>&nbsp;</span>' +
    			'<span>&nbsp;</span>' +
    			'<span>&nbsp;</span>' +
    			'<span id="emoji_footer_5" class="unselected emoji"><i style="font-size:.6rem;" class="fa fa-circle"></i></span>';
           		
        	}
        	else if (int_person == 2) {
        	
        		$('#heading_name').html('STEVEN');
        	
        		str_swipe_slides =
        		'<div id="slide1">' +
                	'<div class="feed_element">' +
                		'<span class="memory_headline emoji">ROAD TRIPS</span><span class="emoji_text emoji">:hockey:</span>' +
                		'<div class="memory_body emoji">I\'ll always remember riding up to hockey games as a kid. On Sundays we\'d listen to worship music if we missed church. Thanks for committing so much time and energy to my life.</div>' +
                	'</div>' +
           		'</div>' +
           		'<div id="slide2">' +
                	'<div class="feed_element">' +
                		'<span class="memory_headline emoji">NURSERY</span><span class="emoji_text emoji">:baby:</span>' +
                		'<div class="memory_body emoji">I see how much work you put into our community, both through church and through town & school-based committees. Your volunteer effort hasn\'t gone unnoticed.</div>' +
                	'</div>' +
           		'</div>' +
           		'<div id="slide3">' +
            		'<div class="feed_element">' +
            			'<span class="memory_headline emoji">INVESTMENT</span><span class="emoji_text emoji">:dollar:</span>' +
                		'<div class="memory_body emoji">I\'ll always be grateful for the opportunities you\'ve given me. Many kids leave college with hundreds of thousands of dollars of student loans. Not me...</div>' +
                	'</div>' +
           		'</div>' +
           		'<div id="slide4">' +
            		'<div class="feed_element">' +
            			'<span class="memory_headline emoji">POSITIVITY</span><span class="emoji_text emoji">:grin:</span>' +
                		'<div class="memory_body emoji">You\'re slow to anger and you\'re quick to forgive. I can\'t remember the last time you yelled at anyone in our family. Your attitude towards life is inspiring.</div>' +
                	'</div>' +
           		'</div>' +
           		'<div id="slide5">' +
            		'<div class="feed_element">' +
            			'<span class="memory_headline emoji">HANDIMAN</span><span class="emoji_text emoji">:hammer:</span>' +
                		'<div class="memory_body emoji">When something goes wrong with one of our cars, one of our appliances, or just about anything else, you\'re the one who fixes it. Thank you for your service!</div>' +
                	'</div>' +
           		'</div>';
           			
           		str_emojis_footer = 
           		'<span id="emoji_footer_1" class="selected emoji"><i style="font-size:.6rem;" class="fa fa-circle"></i></span>' +
    			'<span>&nbsp;</span>' +
    			'<span>&nbsp;</span>' +
    			'<span>&nbsp;</span>' +
    			'<span>&nbsp;</span>' +
    			'<span id="emoji_footer_2" class="unselected emoji"><i style="font-size:.6rem;" class="fa fa-circle"></i></span>' +
    			'<span>&nbsp;</span>' +
    			'<span>&nbsp;</span>' +
    			'<span>&nbsp;</span>' +
    			'<span>&nbsp;</span>' +
    			'<span id="emoji_footer_3" class="unselected emoji"><i style="font-size:.6rem;" class="fa fa-circle"></i></span>' +
    			'<span>&nbsp;</span>' +
    			'<span>&nbsp;</span>' +
    			'<span>&nbsp;</span>' +
    			'<span>&nbsp;</span>' +
    			'<span id="emoji_footer_4" class="unselected emoji"><i style="font-size:.6rem;" class="fa fa-circle"></i></span>' +
    			'<span>&nbsp;</span>' +
    			'<span>&nbsp;</span>' +
				'<span>&nbsp;</span>' +
				'<span>&nbsp;</span>' +
    			'<span id="emoji_footer_5" class="unselected emoji"><i style="font-size:.6rem;" class="fa fa-circle"></i></span>';
           			
        	}
        	
        	else if (int_person == 3) {
        	
        		$('#heading_name').html('KAITLIN');
        	
        		str_swipe_slides =
        		'<div id="slide1">' +
            		'<div class="feed_element">' +	            		
            			'<span class="memory_headline emoji">DIPLOMAT</span><span class="emoji_text emoji">:flag_us:</span>' +
                		'<div class="memory_body emoji">You represent our country as Kerry\'s Little Helper, but you also represent our family, and you\'ve done a great job of that. I\'m extremely proud of you!</div>' +
            		'</div>' +
           		'</div>' +
           		'<div id="slide2">' +
            		'<div class="feed_element">' +
            			'<span class="memory_headline emoji">ICE CREAM</span><span class="emoji_text emoji">:ice_cream:</span>' +
                		'<div class="memory_body">You scream. I scream. WE BOTH SCREAM... FOR ICE CREAM! Ok, so maybe you scream for Pinkberry. Same thing, right?</div>' +
            		'</div>' +
       			'</div>' +
           		'<div id="slide3">' +
            		'<div class="feed_element">' +
            			'<span class="memory_headline emoji">TRAVELER</span><span class="emoji_text emoji">:beach_umbrella:</span>' +
                		'<div class="memory_body">I love the fact that your friends think you vacation for a living. On that same note, power move choosing Colombia as your next post. Beaches & blow, baby!</div>' +
            		'</div>' +
           		'</div>' +
           		'<div id="slide4">' +
            		'<div class="feed_element">' +
            			'<span class="memory_headline emoji">PRAYER</span><span class="emoji_text emoji">:pray_tone2:</span>' +
                		'<div class="memory_body">Thanks for your strong faith. We are a product of our environment, so I\'m grateful that I grew up with siblings who respect God and pray for me. Your love is tangible.</div>' +
            		'</div>' +
           		'</div>' +
           		'<div id="slide5">' +
            		'<div class="feed_element">' +
            			'<span class="memory_headline emoji">BOLDNESS</span><span class="emoji_text emoji">:raising_hand_tone2:</span>' +
                		'<div class="memory_body">Your level of confidence is incredible. It takes serious cahonas to live abroad for a year as a freshman in high school! I genuinely believe you would make a tremendous President of the United States.</div>' +
            		'</div>' +
           		'</div>';
           			
           		str_emojis_footer = 
           		'<span id="emoji_footer_1" class="selected emoji"><i class="fa fa-circle" style="font-size:.6rem;"></i></span>' +
    			'<span>&nbsp;</span>' +
    			'<span>&nbsp;</span>' +
    			'<span>&nbsp;</span>' +
    			'<span>&nbsp;</span>' +
    			'<span id="emoji_footer_2" class="unselected emoji"><i class="fa fa-circle" style="font-size:.6rem;"></i></span>' +
    			'<span>&nbsp;</span>' +
    			'<span>&nbsp;</span>' +
    			'<span>&nbsp;</span>' +
    			'<span>&nbsp;</span>' +
    			'<span id="emoji_footer_3" class="unselected emoji"><i class="fa fa-circle" style="font-size:.6rem;"></i></span>' +
    			'<span>&nbsp;</span>' +
    			'<span>&nbsp;</span>' +
    			'<span>&nbsp;</span>' +
    			'<span>&nbsp;</span>' +
    			'<span id="emoji_footer_4" class="unselected emoji"><i class="fa fa-circle" style="font-size:.6rem;"></i></span>' +
    			'<span>&nbsp;</span>' +
    			'<span>&nbsp;</span>' +
    			'<span>&nbsp;</span>' +
    			'<span>&nbsp;</span>' +
    			'<span id="emoji_footer_5" class="unselected emoji"><i class="fa fa-circle" style="font-size:.6rem;"></i></span>';
           		
        	}
        	
        	else {
        		
        		$('#heading_name').html('GRISWOLD');
        	
        		str_swipe_slides = 
        		'<div id="slide1">' +
            		'<div class="feed_element">' +
            			'<span class="memory_headline emoji">JUICING</span><span class="emoji_text emoji" style="top:-.44rem;">:green_apple:</span>' +
                		'<div class="memory_body emoji">Thanks for getting me into juicing. My body feels better than ever and it\'s always funny to clarify with people: "No, not with a needle... Fruit and vegetable... Obviously..."</div>' +
            		'</div>' +
           		'</div>' +
           		
           		'<div id="slide2">' +
            		'<div class="feed_element" id="feed_element2">' +
            			'<span class="memory_headline emoji">POKER</span><span class="emoji_text emoji">:black_joker:</span>' +
                		'<div class="memory_body emoji">I cherish the memories of our poker playing days. If only we had known about the Twilight Zone Strategy sooner. When are we going to Vegas in 2016?</div>' +
            		'</div>' +
           		'</div>' +
           		'<div id="slide3">' +
            		'<div class="feed_element" id="feed_element3">' +
            			'<span class="memory_headline emoji">DESIGN</span><span class="emoji_text emoji">:art:</span>' +
                		'<div class="memory_body emoji">I appreciate all the design advice you\'ve given me over the years. Let me know when you want to set up a VR design shop in Brooklyn. I\'m in!</div>' +
            		'</div>' +
           		'</div>' +
           		'<div id="slide4">' +
            		'<div class="feed_element" id="feed_element4">' +
            			'<span class="memory_headline emoji">DJ GRIZ</span><span class="emoji_text emoji">:notes:</span>' +
                		'<div class="memory_body emoji">You talk a big game. I\'m excited to see if you can back it up. Griswold needs to be a household name by 2020.</div>' +
            		'</div>' +
           		'</div>' +
           		'<div id="slide5">' +
            		'<div class="feed_element" id="feed_element5">' +
            			'<span class="memory_headline emoji">HARLEM</span><span class="emoji_text emoji">:muscle_tone5:</span>' +
                		'<div class="memory_body emoji">I know it\'s impossible to pass up a deal as good as your rent, but I still find it funny that you live amongst the brothas. Have they stopped spitting on you yet? #ThanksObama</div>' +
            		'</div>' +
           		'</div>';
           			
           		str_emojis_footer = 
           		'<span id="emoji_footer_1" class="selected emoji"><i style="font-size:.6rem;" class="fa fa-circle"></i></span>' +
    			'<span>&nbsp;</span>' +
    			'<span>&nbsp;</span>' +
    			'<span>&nbsp;</span>' +
				'<span>&nbsp;</span>' +
    			'<span id="emoji_footer_2" class="unselected emoji"><i style="font-size:.6rem;" class="fa fa-circle"></i></span>' +
    			'<span>&nbsp;</span>' +
    			'<span>&nbsp;</span>' +
    			'<span>&nbsp;</span>' +
				'<span>&nbsp;</span>' +
    			'<span id="emoji_footer_3" class="unselected emoji"><i style="font-size:.6rem;" class="fa fa-circle"></i></span>' +
    			'<span>&nbsp;</span>' +
    			'<span>&nbsp;</span>' +
    			'<span>&nbsp;</span>' +
				'<span>&nbsp;</span>' +
    			'<span id="emoji_footer_4" class="unselected emoji"><i style="font-size:.6rem;" class="fa fa-circle"></i></span>' +
    			'<span>&nbsp;</span>' +
    			'<span>&nbsp;</span>' +
    			'<span>&nbsp;</span>' +
				'<span>&nbsp;</span>' +
    			'<span id="emoji_footer_5" class="unselected emoji"><i style="font-size:.6rem;" class="fa fa-circle"></i></span>';
           		
        	}
        	
        	swipe_wrapper.empty();
        	swipe_wrapper.append(str_swipe_slides);
        	$('#mySwipe').fadeIn(0);
        	mySwipe.setup();
    		mySwipe.slide(0,0);
        	
        	emojis_footer.html('');
        	emojis_footer.empty();
        	emojis_footer.append(str_emojis_footer);
        	
        	this.fn_convert_emoji();
        	
			emojis_footer.fadeIn(0);
			masthead.fadeIn(0);
			 
			emojis_footer.addClass('animated bounceInLeft');
			$('#mySwipe').addClass('animated bounceInLeft');
			masthead.addClass('animated bounceInLeft');
		
			menu_screen.addClass('animated bounceOutRight');
		
			setTimeout(function() {
			
				menu_screen.fadeOut(0);
				menu_screen.removeClass('animated bounceOutRight');
			
				$('#mySwipe').removeClass('animated bounceInRight');
			
				masthead.removeClass('animated bounceInRight');
			
				emojis_footer.removeClass('animated bounceInRight');
		
			}, 1000);
			
		},
		
		fn_tap_menu_button: function() {
			  
			$('#mySwipe').addClass('animated bounceOutRight');
			masthead.addClass('animated bounceOutRight');
			emojis_footer.addClass('animated bounceOutRight');
		
			menu_screen.fadeIn(0);
			menu_screen.addClass('animated bounceInLeft');
		
			setTimeout(function() {
			
				$('#mySwipe').fadeOut(0);
				$('#mySwipe').removeClass('animated bounceOutRight');
			
				masthead.fadeOut(0);
				masthead.removeClass('animated bounceOutRight');
			
				emojis_footer.fadeOut(0);
				emojis_footer.removeClass('animated bounceOutRight');
			
				menu_screen.removeClass('animated bounceInLeft');
		
			}, 1000);
		
		},
		
	};

	return Muench;

})(window, document);

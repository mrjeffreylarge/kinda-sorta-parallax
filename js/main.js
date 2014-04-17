$(function () {

	var win   		    = $(window),
		doc		    	= $(document),
		hero 		    = $("#heroUnit"),
		contentNode     = $(".content"),
		fixedImage	    = $(".fixedImage"),
		leftContentPane = $(".leftContentPane");

	var parallax = {

		initHero : function() {
			windowHeight  = win.height();
			hero.css({"height" : windowHeight + "px"});
		},
		initPanels: function() {
			fixedImage.css({"height" : win.height() + "px"});
		},
		fixPanels: function() {
			contentNode.each(function(){
				/*
					compare scrollTop to node offset
					toggle fixMe class depending on results
				*/
				var thisNode = $(this);
				if(doc.scrollTop() >= thisNode.offset().top) {
					if(doc.scrollTop() >= (thisNode.offset().top + thisNode.innerHeight())) {
						thisNode.find(".fixedImage")
								.removeClass("fixMe");
					}
					else {
						thisNode.find(".fixedImage")
								.addClass("fixMe");
					}
				}
				else if(doc.scrollTop() < (thisNode.offset().top)) {
					thisNode.find(".fixedImage")
							.removeClass("fixMe");
				}
			});
		},
		initContentPane: function() {
			leftContentPane.css({"marginTop" : win.height() + "px"});
		}

	}

	parallax.initHero();
	parallax.initContentPane();
	parallax.initPanels();

	win.resize(function(){
		parallax.initHero();
		parallax.initContentPane();
		parallax.initPanels();
	});

	doc.scroll(function(){
		parallax.fixPanels();
		parallax.initPanels();
	});

});
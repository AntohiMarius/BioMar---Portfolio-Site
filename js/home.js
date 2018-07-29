$(document).ready(function(){
	let navBtnHover = $(".nav-button-content .line");
	let navBtn = $(".nav-button-content");
	let navBtn2 = $(".nav-button-close");
	let navMenu = $(".nav");
	let line1 = $(".nav-button .line:nth-last-child(3)");
	let line2 = $(".nav-button .line:nth-last-child(2)");
	let line3 = $(".nav-button .line:nth-last-child(1)");
	
	//Click on navBtn: add class active to NavMenu and second navBtn; animate lines
	navBtn.on("click", function() {
		navMenu.addClass("active");
		navBtn2.addClass("active");
		line1.addClass("line1");
		line2.addClass("line2");
		line3.addClass("line3");
	});

	//Click on second navBtn: remove class active from NavMenu and second navBtn; animate lines
	navBtn2.on("click", function() {
		navMenu.removeClass("active");
		navBtn2.removeClass("active");
		line1.removeClass("line1");
		line2.removeClass("line2");
		line3.removeClass("line3");
	});

	//Hover navBtn2: add class active to lines from navBtn
	navBtn2.mouseenter(function() {
		navBtnHover.addClass("active");
	});

	//Hover navBtn2: remove class active from lines from navBtn
	navBtn2.mouseleave(function() {
		navBtnHover.removeClass("active");
	});

	//Press Escape: remove class active from NavMenu and second navBtn; animate lines
	$(document).keyup(function(e) {
		if (e.keyCode === 27) {
			navMenu.removeClass("active");
			navBtn2.removeClass("active");
			line1.removeClass("line1");
			line2.removeClass("line2");
			line3.removeClass("line3");
		}
	});

	let bgdJumbo = $(".jumbotron .overlay");
	//Click everywhere: remove class active from navMenu
	bgdJumbo.on("click", function() {
		navMenu.removeClass("active");
		navBtn2.removeClass("active");
		line1.removeClass("line1");
		line2.removeClass("line2");
		line3.removeClass("line3");
	});

	//SubMenus
	
	//Home
	let menuHome = $(".subnav");
	let subMenuHome = $(".subsubnav");
	let moveDownMenus = $(".moveDown");

	//Hover menuHome: add class active to subMenuHome and moveDownMenus
	menuHome.mouseenter(function() {
		subMenuHome.addClass("active");
		moveDownMenus.addClass("active");
	});
	//Hover subMenuHome: remain class active to subMenuHome and moveDownMenus
	subMenuHome.mouseenter(function() {
		subMenuHome.addClass("active");
		moveDownMenus.addClass("active");
	});
	//Hover menuHome: remove class active from subMenuHome and moveDownMenus
	menuHome.mouseleave(function() {
		subMenuHome.removeClass("active");
		moveDownMenus.removeClass("active");
	});
	//Hover subMenuHome: remove class active to subMenuHome and moveDownMenus
	subMenuHome.mouseleave(function() {
		subMenuHome.removeClass("active");
		moveDownMenus.removeClass("active");
	});

	//Pages
	let menuHome2 = $(".subnav2");
	let subMenuHome2 = $(".subsubnav2");
	let moveDownMenu = $(".moveDown2");

	//Hover menuPages: add class active to subMenuHome2 and moveDownMenu
	menuHome2.mouseenter(function() {
		subMenuHome2.addClass("active");
		moveDownMenu.addClass("active");
	});
	//Hover subMenuHome2: remain class active to subMenuHome2 and moveDownMenu
	subMenuHome2.mouseenter(function() {
		subMenuHome2.addClass("active");
		moveDownMenu.addClass("active");
	});
	//Hover menuPages: remove class active from subMenuHome2 and moveDownMenu
	menuHome2.mouseleave(function() {
		subMenuHome2.removeClass("active");
		moveDownMenu.removeClass("active");
	});
	//Hover subMenuHome2: remove class active to subMenuHome2 and moveDownMenu
	subMenuHome2.mouseleave(function() {
		subMenuHome2.removeClass("active");
		moveDownMenu.removeClass("active");
	});

	//Jumbotron
	
	//Slider
	var x = 0;
	var y = 1;

	$(".jumbo-nav .custom-nav .next-slide").click(function() {
		//x = (x <= 100)?(x+100):0;
		if(x <= 100) {
			x +=100;
			y +=1;
			if ($(".jumbotron:first-child").hasClass("bg1") && y == 1) {
				$(".jumbo-dot-nav:first-child").css("background", "#FFC815");
				$(".jumbo-dot-nav:nth-child(2)").css("background", "#ffffff82");
				$(".jumbo-dot-nav:nth-child(3)").css("background", "#ffffff82");
			}
			if ($(".jumbotron:nth-child(2)").hasClass("bg2") && y == 2) {
				$(".jumbo-dot-nav:first-child").css("background", "#ffffff82");
				$(".jumbo-dot-nav:nth-child(2)").css("background", "#FFC815");
				$(".jumbo-dot-nav:nth-child(3)").css("background", "#ffffff82");
			}
			if ($(".jumbotron:nth-child(3)").hasClass("bg3") && y == 3) {
				$(".jumbo-dot-nav:first-child").css("background", "#ffffff82");
				$(".jumbo-dot-nav:nth-child(2)").css("background", "#ffffff82");
				$(".jumbo-dot-nav:nth-child(3)").css("background", "#FFC815");
			}
		} else {
			//x = 0;
		}

		$(".jumbo-slider-content").css("margin-left", -x+"%");
	});

	$(".jumbo-nav .custom-nav .prev-slide").click(function() {
		//x = (x >= 100)?(x-100):200;
		if(x >= 100) {
			x -=100;
			y -=1;
			if ($(".jumbotron:first-child").hasClass("bg1") && y == 1) {
				$(".jumbo-dot-nav:first-child").css("background", "#FFC815");
				$(".jumbo-dot-nav:nth-child(2)").css("background", "#ffffff82");
				$(".jumbo-dot-nav:nth-child(3)").css("background", "#ffffff82");
			}
			if ($(".jumbotron:nth-child(2)").hasClass("bg2") && y == 2) {
				$(".jumbo-dot-nav:first-child").css("background", "#ffffff82");
				$(".jumbo-dot-nav:nth-child(2)").css("background", "#FFC815");
				$(".jumbo-dot-nav:nth-child(3)").css("background", "#ffffff82");
			}
			if ($(".jumbotron:nth-child(3)").hasClass("bg3") && y == 3) {
				$(".jumbo-dot-nav:first-child").css("background", "#ffffff82");
				$(".jumbo-dot-nav:nth-child(2)").css("background", "#ffffff82");
				$(".jumbo-dot-nav:nth-child(3)").css("background", "#FFC815");
			}
		} else {
			//x = 200;
		}

		$(".jumbo-slider-content").css("margin-left", -x+"%");
	});

	//Jumbo Dots Nav
	
	//Click on dot: 
	//1) background of dot turn to yellow and is changed jumbotron's background too
	//2) value of "y" is changed depending which dot is clicked(in that way i know when, for example, first dot is clicked, first jumbo's bgd is on screen)
	//Value of "y" is used on arrow navigation to check which jumbo's bgd is on screen. Is a method to continue to index the jumbo's bgd even if arrow AND dot navigation is used one after another
	$(".jumbo-dot-nav:first-child").click(function() {
		if (y == 3) { 
			y -=2;
		} else if (y == 2) {
			y -=1;
		}
		$(".jumbo-dot-nav:first-child").css("background", "#FFC815");
		$(".jumbo-dot-nav:nth-child(2)").css("background", "#ffffff82");
		$(".jumbo-dot-nav:nth-child(3)").css("background", "#ffffff82");
		$(".jumbo-slider-content").css("margin-left", "0%");
		x = 0;
	});
	$(".jumbo-dot-nav:nth-child(2)").click(function() {
		if (y == 3) {
			y -=1;
		} else if (y == 1) {
			y +=1;
		}
		$(".jumbo-dot-nav:first-child").css("background", "#ffffff82");
		$(".jumbo-dot-nav:nth-child(2)").css("background", "#FFC815");
		$(".jumbo-dot-nav:nth-child(3)").css("background", "#ffffff82");
		$(".jumbo-slider-content").css("margin-left", "-100%");
		x = 100;
	});
	$(".jumbo-dot-nav:nth-child(3)").click(function() {
		if (y == 2) {
			y +=1;
		} else if (y == 1) {
			y +=2;
		}
		$(".jumbo-dot-nav:first-child").css("background", "#ffffff82");
		$(".jumbo-dot-nav:nth-child(2)").css("background", "#ffffff82");
		$(".jumbo-dot-nav:nth-child(3)").css("background", "#FFC815");
		$(".jumbo-slider-content").css("margin-left", "-200%");
		x = 200;
	});
	

	//Fixed-Columns
	//Change background-image and title text
	let bgImg = $(".scroll-image-bg");
	let fixColTitle = $(".fixed-column-title span");

	$(window).scroll(function() {
		if($(window).scrollTop()+1 >= scrollAbout && $(window).scrollTop()+1 <= scrollResume) {
			bgImg.css("background-image", "url('img/Section1 Photo 2.png')");
			fixColTitle.text("About Me");
			btnAbout.addClass("active");
			btnResume.removeClass("active");
			btnServices.removeClass("active");
			btnSkills.removeClass("active");
			btnClients.removeClass("active");
		} else if($(window).scrollTop()+1 > scrollResume && $(window).scrollTop()+1 < scrollServices) {
			bgImg.css("background-image", "url('img/Section2 Photo.png')");
			fixColTitle.text("My Resume");
			btnAbout.removeClass("active");
			btnResume.addClass("active");
			btnServices.removeClass("active");
			btnSkills.removeClass("active");
			btnClients.removeClass("active");
		} else if($(window).scrollTop()+1 >= scrollServices && $(window).scrollTop()+1 <= scrollSkills) {
			bgImg.css("background-image", "url('img/Section3 Photo.png')");
			fixColTitle.text("My Services");
			btnAbout.removeClass("active");
			btnResume.removeClass("active");
			btnServices.addClass("active");
			btnSkills.removeClass("active");
			btnClients.removeClass("active");
		} else if($(window).scrollTop()+1 >= scrollSkills && $(window).scrollTop()+1 <= scrollClients) {
			bgImg.css("background-image", "url('img/Section4 Photo.png')");
			fixColTitle.text("My Skills");
			btnAbout.removeClass("active");
			btnResume.removeClass("active");
			btnServices.removeClass("active");
			btnSkills.addClass("active");
			btnClients.removeClass("active");
		} else if($(window).scrollTop()+1 >= scrollClients && $(window).scrollTop()) {
			bgImg.css("background-image", "url('img/Section5 Photo.png')");
			fixColTitle.text("My Clients");
			btnAbout.removeClass("active");
			btnResume.removeClass("active");
			btnServices.removeClass("active");
			btnSkills.removeClass("active");
			btnClients.addClass("active");
		}
	});

	//NavBar Scroll
	let body = $("html");

	//About
	let scrollAbout = $("#sec1").offset().top - 67;
	let btnAbout = $(".about");
	let btnStart = $(".btnStart");
	let secAbout = $("#sec1");

	btnAbout.on("click", function() {
		body.animate({
			scrollTop: scrollAbout
		}, 1500);
	});

	//Start
	btnStart.on("click", function() {
		body.animate({
			scrollTop: scrollAbout
		}, 1500);
	});

	//Resume
	let scrollResume = $("#sec2").offset().top - 67;
	let btnResume = $(".resume");
	let secResume = $("#sec2");

	btnResume.on("click", function() {
		body.animate({
			scrollTop: scrollResume
		}, 1500);
	});

	//Services
	let scrollServices = $("#sec3").offset().top - 67;
	let btnServices = $(".services");
	let secServices = $("#sec3");

	btnServices.on("click", function() {
		body.animate({
			scrollTop: scrollServices
		}, 1500);
	});

	//Skills
	let scrollSkills = $("#sec4").offset().top - 67;
	let btnSkills = $(".skills");
	let secSkills = $("#sec4");

	btnSkills.on("click", function() {
		body.animate({
			scrollTop: scrollSkills
		}, 1500);
	});

	//Clients
	let scrollClients = $("#sec5").offset().top - 67;
	let btnClients = $(".clients");
	let secClients = $("#sec5");

	btnClients.on("click", function() {
		body.animate({
			scrollTop: scrollClients
		}, 1500);
	});

	//Section 1 - About Me - Facts

	//Counting
	var a = 0;

	$(window).scroll(function() {
		var Top = $(".facts-content").offset().top - window.innerHeight;
		if(a == 0 && $(window).scrollTop() > Top) {
			$(".num").each(function() {
				var $this = $(this),
				countTo = $this.attr("data-count");
				$({
					countNum: $this.text()
				}).animate({
					countNum: countTo
				},{
					duration: 2000,
					easing: "swing",
					step: function() {
						$this.text(Math.floor(this.countNum));
					},
					complete: function() {
						$this.text(this.countNum);
					}
				});
			});
			a = 1;
		}
	});

	//Section 2 - Resume

	//Accordion
	$(".accordion").on("click", ".accordion-title", function() {
		$(this).toggleClass("active").next().slideToggle();
	});

	//Section 3 - Carousel

	$(".owl-carousel").owlCarousel();

	//Navigation

	$(".owl-stage").css("transition", "0.5s ease-in-out");

	$(".carousel .custom-nav .next-slide").click(function() {
		$(".owl-stage").css("transform", "translate3d(-300px, 0px, 0px)");
	});
	$(".carousel .custom-nav .prev-slide").click(function() {
		$(".owl-stage").css("transform", "translate3d(0px, 0px, 0px)");
	});

});

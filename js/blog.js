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

	//Fixed-Columns
	//Change background-image and title text
	let bgImg = $(".scroll-image-bg");
	let fixColTitle = $(".fixed-column-title span");

	$(window).scroll(function() {
		if(window.pageYOffset > 950 && window.pageYOffset < 1845) {
			//bgImg.css("background-image", "url('img/Section1 Photo 2.png')");
			//fixColTitle.text("About Me");
			btnAbout.addClass("active");
			btnResume.removeClass("active");
			btnServices.removeClass("active");
			btnSkills.removeClass("active");
			btnClients.removeClass("active");
		} else if(window.pageYOffset > 1845 && window.pageYOffset < 2745) {
			//bgImg.css("background-image", "url('img/Section2 Photo.png')");
			//fixColTitle.text("My Resume");
			btnAbout.removeClass("active");
			btnResume.addClass("active");
			btnServices.removeClass("active");
			btnSkills.removeClass("active");
			btnClients.removeClass("active");
		} else if(window.pageYOffset > 2745 && window.pageYOffset < 3709) {
			//bgImg.css("background-image", "url('img/Section3 Photo.png')");
			//fixColTitle.text("My Services");
			btnAbout.removeClass("active");
			btnResume.removeClass("active");
			btnServices.addClass("active");
			btnSkills.removeClass("active");
			btnClients.removeClass("active");
		} else if(window.pageYOffset > 3709 && window.pageYOffset < 4781) {
			//bgImg.css("background-image", "url('img/Section4 Photo.png')");
			//fixColTitle.text("My Skills");
			btnAbout.removeClass("active");
			btnResume.removeClass("active");
			btnServices.removeClass("active");
			btnSkills.addClass("active");
			btnClients.removeClass("active");
		} else if(window.pageYOffset > 4781) {
			//bgImg.css("background-image", "url('img/Section5 Photo.png')");
			//fixColTitle.text("My Clients");
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
	let scrollAbout = 951;
	let btnAbout = $(".about");
	let secAbout = $("#sec1");

	btnAbout.on("click", function() {
		body.animate({
			scrollTop: scrollAbout
		}, 1500);
		btnAbout.addClass("active");
		btnResume.removeClass("active");
		btnServices.removeClass("active");
		btnSkills.removeClass("active");
		btnClients.removeClass("active");
	});

	//Resume
	let scrollResume = 1846;
	let btnResume = $(".resume");
	let secResume = $("#sec2");

	btnResume.on("click", function() {
		body.animate({
			scrollTop: scrollResume
		}, 1500);
		btnAbout.removeClass("active");
		btnResume.addClass("active");
		btnServices.removeClass("active");
		btnSkills.removeClass("active");
		btnClients.removeClass("active");
	});

	//Services
	let scrollServices = 2746;
	let btnServices = $(".services");
	let secServices = $("#sec3");

	btnServices.on("click", function() {
		body.animate({
			scrollTop: scrollServices
		}, 1500);
		btnAbout.removeClass("active");
		btnResume.removeClass("active");
		btnServices.addClass("active");
		btnSkills.removeClass("active");
		btnClients.removeClass("active");
	});

	//Skills
	let scrollSkills = 3710;
	let btnSkills = $(".skills");
	let secSkills = $("#sec4");

	btnSkills.on("click", function() {
		body.animate({
			scrollTop: scrollSkills
		}, 1500);
		btnAbout.removeClass("active");
		btnResume.removeClass("active");
		btnServices.removeClass("active");
		btnSkills.addClass("active");
		btnClients.removeClass("active");
	});

	//Clients
	let scrollClients = 4782;
	let btnClients = $(".clients");
	let secClients = $("#sec5");

	btnClients.on("click", function() {
		body.animate({
			scrollTop: scrollClients
		}, 1500);
		btnAbout.removeClass("active");
		btnResume.removeClass("active");
		btnServices.removeClass("active");
		btnSkills.removeClass("active");
		btnClients.addClass("active");
	});

	//Accordion
	$(".accordion").on("click", ".accordion-title", function() {
		$(this).toggleClass("active").next().slideToggle();
	});

	//Modal Image
	$(".portfolio-gallery-item .img-item").click(function() {
		$(".modal-image").css("display", "block");
		$(".modal-content").css("display", "block");
	});

	$(".portfolio-gallery-item .img-item .overlaymare").click(function() {
		$(".modal-image").css("display", "block");
		$(".modal-content").css("display", "block");
	});

	//Esc Exit Modal
	$(document).keyup(function(e) {
		if (e.keyCode === 27) {
			$(".modal-image").css("display", "none");
			$(".modal-content").css("display", "none");
		}
	});

	//Click on background to Exit Modal
	$(".modal-image").click(function() {
		$(".modal-image").css("display", "none");
		$(".modal-content").css("display", "none");
	});
});

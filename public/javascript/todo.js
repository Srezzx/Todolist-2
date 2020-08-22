$(".header").fadeIn(750, function () {

});


$("ul").on("click", "li", function () {
	$(this).toggleClass("completed");
});


$("ul").on("click", "span", function (event) {
	event.stopPropagation();
	$(this).parent().fadeOut(250, function () {
		$(this).remove();
	});
});
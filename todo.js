$(".header").fadeIn(750,function(){

});

function addelement(){
	var valueinput = document.querySelector(".inputoftodo").value;
	 $('.paratag').innerHTML = valueinput;
	 $("#todolist").append('<li><span class="deletebutton"><i class="fa fa-trash"></i></span>'+valueinput+'</li>');
	 document.querySelector(".inputoftodo").value="";
}
$("input[type='text']").keypress(function(event){
	if(event.which === 13)
	{	
		var valueinput = document.querySelector(".inputoftodo").value;
		$('.paratag').innerHTML = valueinput;
		$("#todolist").append('<li><span class="deletebutton"><i class="fa fa-trash"></i></span>'+valueinput+'</li>');
    	document.querySelector(".inputoftodo").value="";
    }
});

$("ul").on("click" , "li",function(){
	$(this).toggleClass("completed");
});

$("ul").on("click","span",function(event){
	event.stopPropagation();
	$(this).parent().fadeOut(250,function()
		{
			$(this).remove();
		});
});
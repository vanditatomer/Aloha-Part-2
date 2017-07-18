
$(document).ready(function(){
	$(".add-to-cart").click (function() {
		console.log("clicked atc");
		var tc = $("#total-price").text();
		var ct = $(this).data('price');
		console.log(tc);
		var parseCt = parseInt(ct);
		console.log(parseCt);
		var parseTc = parseInt(tc);
		console.log(parseTc);
		$("#total-price").text(parseCt + parseTc);	
	});
	$(".subscribe").click (function(){
		alert("You are now subscribed");
	});
});



// TESTING JQUERY

 // $(".navButton").on("click", function(){
 // 	alert("hi");
 // }); 

 // $("#updates").hide("click", function(){
 // 	alert("hi");
 // }); 

// $(document).ready(function(){
//     $(".product-img").first().css("background-color", "yellow");
// });
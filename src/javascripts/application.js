$(".down-arrow")
	.velocity(
		{ rotateZ: "-45deg" },
		{ duration: 0 }	
	)
	.velocity(
		{ translateY: "18px", translateX: "-18px", opacity: 0 },
		{ duration:5000, easing: "ease", loop: true }
	);		
$("#price")
	.velocity(
		{ color: "#1DE9B6" },
		{ duration: 1500, delay: 500, easing: "ease", loop: true }
	);
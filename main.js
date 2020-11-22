new fullpage("#page", {
	autoScrolling: true,
	navigation: true,
	onLeave: (origin, destination, direction) => {
		const section = destination.item;
		const title = section.querySelector("h1");
		const tl = new TimelineMax({delay: 0.5});
		tl.fromTo(title, 0.5, {y: "50", opacity: 0}, {y: 0, opacity: 1});
		if (destination.index === 1){
			const watch = document.querySelectorAll(".watch");
			const origin = document.querySelector(".origin");
			tl.fromTo(watch, 0.5, {x: "100%"}, {x: "-30%"})
			.fromTo(origin, 0.7, {y: "50", opacity: 0}, {y: 0, opacity: 1})
			.fromTo(watch[0], 0.5, {opacity: 1}, {opacity: 1})
			.fromTo(watch[1], 0.5, {opacity: 0}, {opacity: 1})
		}
		else if (destination.index === 2){
			const dot = document.querySelectorAll(".dot");
			tl.fromTo(dot[0], 0.6, {opacity: 0}, {opacity: 1});
			tl.fromTo(dot[1], 0.7, {opacity: 0}, {opacity: 1});
			tl.fromTo(dot[2], 0.8, {opacity: 0}, {opacity: 1});
		}
	}
});

let interval = 0;
let color = document.getElementsByClassName("watch");
color[1].addEventListener("click", chcolor);

function chcolor(){
	if(!interval){
		if (color[1].style.opacity == 1){
			interval = setInterval(function(){fade(color[1])}, 25);
			console.log(interval);
		}else{
			interval = setInterval(function(){appear(color[1])}, 25);
			console.log(interval);
		}
	}
}

function fade(white){
	console.log("white:", white.style.opacity);
	if (white.style.opacity > 0){
		white.style.opacity -= 0.1;
		console.log("to black");
	}
	else{
		clearInterval(interval);
		interval = 0;
		console.log("clear interval", interval);
	}
}

function appear(white){
	console.log("white:", white.style.opacity);
	if (white.style.opacity < 1){
		white.style.opacity = Number(white.style.opacity) + 0.1;
		console.log("to black");
	}
	else{
		clearInterval(interval);
		interval = 0;
		console.log("clear interval", interval);
	}
}
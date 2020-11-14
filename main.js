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
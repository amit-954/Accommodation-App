(() => {
	("use strict");

	const forms = document.querySelectorAll(".needs-validation");

	Array.from(forms).forEach((form) => {
		form.addEventListener(
			"submit",
			(event) => {
				if (!form.checkValidity()) {
					event.preventDefault();
					event.stopPropagation();
				}
				form.classList.add("was-validated");
			},
			false
		);
	});



	




	const rightArrow = document.querySelector(
		".top-card .filters .right-arrow svg"
	);
	const leftArrow = document.querySelector(
		".top-card .filters .left-arrow svg"
	);
	const tabsList = document.querySelector(".top-card .filters ul");
	const leftArrowContainer = document.querySelector(".top-card .filters .left-arrow");
	const rightArrowContainer = document.querySelector(".top-card .filters .right-arrow");



	const manageIcons = () => {
		if (tabsList.scrollLeft > 0) {
			leftArrowContainer.classList.add("active");
		} else {
			leftArrowContainer.classList.remove("active");
		}

		let maxScrollValue = tabsList.scrollWidth - tabsList.clientWidth;
		if (tabsList.scrollLeft >= maxScrollValue) {
			rightArrowContainer.classList.remove("active");
		} else {
			rightArrowContainer.classList.add("active");
		}
	}


	rightArrow.addEventListener("click", () => {
		tabsList.scrollLeft += 200;
		manageIcons();
	})
	leftArrow.addEventListener("click", () => {
		tabsList.scrollLeft -= 200;
		manageIcons();
	})

	tabsList.addEventListener("scroll", manageIcons);



	let dragging = false;

	const drag = (e) => {
		if (!dragging) return;
		tabsList.classList.add("dragging");
		tabsList.scrollLeft -= e.movementX;
	}

	tabsList.addEventListener("mousedown", () => {
		dragging = true;
	})


	tabsList.addEventListener("mousemove", drag);

	document.addEventListener("mouseup", () => {
		dragging = false;
		tabsList.classList.remove("dragging");
	})





	let taxSwitch = document.getElementById("flexSwitchCheckDefault");
	taxSwitch.addEventListener("click", () => {
		let taxInfo = document.getElementsByClassName("tax-info");
		for (info of taxInfo) {
			if (info.style.display != "inline") {
				info.style.display = "inline";
			} else {
				info.style.display = "none";
			}
		}
	});

})();

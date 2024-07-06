<script setup>
onMounted(() => {
	const carouselEl = document.querySelector(".custom-carousel");
	const arrowBtns = document.querySelectorAll(".custom-arrow");
	const wrapper = document.querySelector(".custom-wrapper");

	const firstCard = carouselEl.querySelector(".custom-card");
	const firstCardWidth = firstCard.offsetWidth;

	let isDragging = false,
		startX,
		startScrollLeft,
		timeoutId;

	const dragStart = (e) => {
		isDragging = true;
		carouselEl.classList.add("dragging");
		startX = e.pageX;
		startScrollLeft = carouselEl.scrollLeft;
	};

	const dragging = (e) => {
		if (!isDragging) return;

		const newScrollLeft = startScrollLeft - (e.pageX - startX);

		if (
			newScrollLeft <= 0 ||
			newScrollLeft >= carouselEl.scrollWidth - carouselEl.offsetWidth
		) {
			isDragging = false;
			return;
		}

		carouselEl.scrollLeft = newScrollLeft;
	};

	const dragStop = () => {
		isDragging = false;
		carouselEl.classList.remove("dragging");
	};

	const autoPlay = () => {
		if (window.innerWidth < 800) return;

		const totalCardWidth = carouselEl.scrollWidth;
		const maxScrollLeft = totalCardWidth - carouselEl.offsetWidth;

		if (carouselEl.scrollLeft >= maxScrollLeft) return;

		timeoutId = setTimeout(
			() => (carouselEl.scrollLeft += firstCardWidth),
			2500
		);
	};

	carouselEl.addEventListener("mousedown", dragStart);
	carouselEl.addEventListener("mousemove", dragging);
	document.addEventListener("mouseup", dragStop);
	wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
	wrapper.addEventListener("mouseleave", autoPlay);

	arrowBtns.forEach((btn) => {
		btn.addEventListener("click", () => {
			carouselEl.scrollLeft +=
				btn.id === "custom-left" ? -firstCardWidth : firstCardWidth;
		});
	});
});

const reviews = [
	{
		id: "1",
		userName: "John Smith",
		city: "USA,New York",
		description:
			"The team at Lyricz Softwares delivered a high-quality product with excellent support. Highly recommended.",
		image: "/services/testimonial/testimonial-1.jpg",
	},
	{
		id: "2",
		userName: "Jessica Lee",
		city: "USA,New York",
		description:
			"Lyricz Softwares completed our project on time and within budget. Highly skilled and creative team.",
		image: "/services/testimonial/testimonial-2.jpg",
	},
	{
		id: "3",
		userName: "David Martinez",
		city: "USA,New York",
		description:
			"Lyricz Softwares transformed our platform, improving user experience and functionality. Fantastic service and results.",
		image: "/services/testimonial/testimonial-3.jpg",
	},
	{
		id: "4",
		userName: "Sarah Thompson",
		city: "USA,New York",
		description:
			"Lyricz Softwares' innovative approach improved our efficiency and productivity. Outstanding work!",
		image: "/services/testimonial/testimonial-4.jpg",
	},
	{
		id: "5",
		userName: "Michael Brown",
		city: "USA,New York",
		description:
			"Lyricz Softwares' dedication to our project was impressive. They delivered  results on time and within budget.",
		image: "/services/testimonial/testimonial-5.jpg",
	},
	{
		id: "6",
		userName: "Emily Carter",
		city: "USA,New York",
		description:
			"The Lyricz Softwares team delivered a top-notch app, Highly skilled and professional, recommended.",
		image: "/services/testimonial/testimonial.jpg",
	},
];
</script>

<template>
	<section class="relative py-10 md:py-24">
		<!-- Title -->
		<CommonServiceTitle
			heading="Testimonial"
			title="From getting "
			title2="started"
			:reverse="false"
		/>
		<!-- Carousel  -->
		<div class="custom-wrapper max-w-7xl mx-auto px-8 mt-9">
			<!-- Left Arrow Button -->
			<i id="custom-left" class="custom-arrow flex items-center justify-center">
				<svg
					width="35px"
					height="35px"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M6 12H18M6 12L11 7M6 12L11 17"
						stroke="#000000"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</svg>
			</i>

			<ul class="custom-carousel">
				<!-- Cards -->
				<div v-for="review in reviews" :key="review.id">
					<!-- Single Card -->
					<li class="custom-card">
						<div class="rounded-xl bg-white p-6 text-center shadow-xl">
							<div
								class="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center"
							>
								<img
									:src="review.image"
									class="rounded-full object-cover h-full w-full"
									alt="user-image"
								/>
							</div>
							<h1 class="text-darken mb-3 text-xl font-medium lg:px-14">
								{{ review.userName }}
							</h1>
							<p class="px-4 text-gray-500">
								{{ review.description }}
							</p>
						</div>
					</li>
				</div>
			</ul>

			<!-- Right Arrow Button -->
			<i
				id="custom-right"
				class="custom-arrow flex items-center justify-center rotate-180"
			>
				<svg
					width="35px"
					height="35px"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M6 12H18M18 12L13 7M18 12L13 17"
						stroke="#000000"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</svg>
			</i>
		</div>

		<!-- Background Div -->
		<div
			class="hidden md:block absolute -z-40 bg-[#DDD9F8] size-[450px] top-0 rounded-full blur-3xl"
		></div>
		<div
			class="hidden md:block absolute -z-40 bg-[#00AEF03D] size-[450px] right-0 bottom-0 rounded-full blur-3xl"
		></div>
	</section>
</template>

<style scope>
.custom-wrapper {
	width: 100%;
	position: relative;
}

.custom-arrow {
	height: 50px;
	width: 50px;
	background: #c3ebfb;
	text-align: center;
	line-height: 50px;
	border-radius: 50%;
	cursor: pointer;
	position: absolute;
	top: 50%;
	font-size: 1.25rem;
	transform: translateY(-50%);
	box-shadow: 0 3px 6px rgba(0, 0, 0, 0.23);
}

.custom-arrow:first-child {
	left: 1px;
}

.custom-arrow:last-child {
	right: 7px;
}

.custom-carousel {
	display: grid;
	grid-auto-flow: column;
	grid-auto-columns: calc((100% / 3) - 12px);
	gap: 16px;
	overflow-x: auto;
	scroll-snap-type: x mandatory;
	scroll-behavior: smooth;
	scrollbar-width: 0;
}

.custom-carousel::-webkit-scrollbar {
	display: none;
}

.custom-carousel :where(.custom-card, .custom-img) {
	display: flex;
	align-items: center;
	justify-content: center;
}

.custom-carousel.dragging {
	scroll-snap-type: none;
	scroll-behavior: auto;
}

.custom-carousel.no-transition {
	scroll-behavior: auto;
}

.custom-carousel.dragging .custom-card {
	cursor: grab;
	user-select: none;
}

.custom-carousel .custom-card {
	scroll-snap-align: start;
	height: 415px;
	list-style: none;
	background: transparent;
	border-radius: 8px;
	display: flex;
	cursor: pointer;
	width: 98%;
	padding-bottom: 15px;
	align-items: center;
	justify-content: center;
	flex-direction: column;
}

@media screen and (max-width: 900px) {
	.custom-wrapper .custom-carousel {
		grid-auto-columns: calc((100% / 2) - 9px);
	}
}

@media screen and (max-width: 600px) {
	.custom-wrapper .custom-carousel {
		grid-auto-columns: 100%;
	}
}
</style>

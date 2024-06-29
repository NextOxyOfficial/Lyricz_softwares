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
    userName: "Hello",
    city: "USA,New York",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, quibusdam?",
  },
  {
    id: "2",
    userName: "Hello",
    city: "USA,New York",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, quibusdam?",
  },
  {
    id: "3",
    userName: "Hello",
    city: "USA,New York",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, quibusdam?",
  },
  {
    id: "4",
    userName: "Hello",
    city: "USA,New York",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, quibusdam?",
  },
  {
    id: "5",
    userName: "Hello",
    city: "USA,New York",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, quibusdam?",
  },
  {
    id: "6",
    userName: "Hello",
    city: "USA,New York",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, quibusdam?",
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
                class="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full bg-teal-400 shadow-lg shadow-teal-500/40"
              >
                <svg
                  viewBox="0 0 33 46"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 text-white"
                >
                  <path
                    d="M24.75 23H8.25V28.75H24.75V23ZM32.3984 9.43359L23.9852 0.628906C23.5984 0.224609 23.0742 0 22.5242 0H22V11.5H33V10.952C33 10.3859 32.7852 9.83789 32.3984 9.43359ZM19.25 12.2188V0H2.0625C0.919531 0 0 0.961328 0 2.15625V43.8438C0 45.0387 0.919531 46 2.0625 46H30.9375C32.0805 46 33 45.0387 33 43.8438V14.375H21.3125C20.1781 14.375 19.25 13.4047 19.25 12.2188ZM5.5 6.46875C5.5 6.07164 5.80766 5.75 6.1875 5.75H13.0625C13.4423 5.75 13.75 6.07164 13.75 6.46875V7.90625C13.75 8.30336 13.4423 8.625 13.0625 8.625H6.1875C5.80766 8.625 5.5 8.30336 5.5 7.90625V6.46875ZM5.5 12.2188C5.5 11.8216 5.80766 11.5 6.1875 11.5H13.0625C13.4423 11.5 13.75 11.8216 13.75 12.2188V13.6562C13.75 14.0534 13.4423 14.375 13.0625 14.375H6.1875C5.80766 14.375 5.5 14.0534 5.5 13.6562V12.2188ZM27.5 39.5312C27.5 39.9284 27.1923 40.25 26.8125 40.25H19.9375C19.5577 40.25 19.25 39.9284 19.25 39.5312V38.0938C19.25 37.6966 19.5577 37.375 19.9375 37.375H26.8125C27.1923 37.375 27.5 37.6966 27.5 38.0938V39.5312ZM27.5 21.5625V30.1875C27.5 30.9817 26.8847 31.625 26.125 31.625H6.875C6.11531 31.625 5.5 30.9817 5.5 30.1875V21.5625C5.5 20.7683 6.11531 20.125 6.875 20.125H26.125C26.8847 20.125 27.5 20.7683 27.5 21.5625Z"
                    fill="white"
                  ></path>
                </svg>
              </div>
              <h1 class="text-darken mb-3 text-xl font-medium lg:px-14">
                TREE AND SHRUB PRUNING
              </h1>
              <p class="px-4 text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                iure inventore amet modi accusantium vero perspiciatis, incidunt
                dicta sed aspernatur!
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

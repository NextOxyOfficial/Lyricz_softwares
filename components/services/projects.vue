<script setup lang="">
const tabItems = [
  {
    id: 1,
    name: "Upcoming",
    values: [
      {
        id: "1",
        userName: "1",
        city: "USA,New York",
        description:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque, quibusdam?",
      },
      {
        id: "1",
        userName: "Hello",
        city: "USA,New York",
        description:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque, quibusdam?",
      },
      {
        id: "1",
        userName: "Hello",
        city: "USA,New York",
        description:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque, quibusdam?",
      },
      {
        id: "1",
        userName: "Hello",
        city: "USA,New York",
        description:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque, quibusdam?",
      },
      {
        id: "1",
        userName: "Hello",
        city: "USA,New York",
        description:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque, quibusdam?",
      },
      {
        id: "1",
        userName: "Hello",
        city: "USA,New York",
        description:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque, quibusdam?",
      },
    ],
  },
  {
    id: 2,
    name: "Development",
    values: [
      {
        id: "1",
        userName: "2",
        city: "USA,New York",
        description:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque, quibusdam?",
      },
      {
        id: "1",
        userName: "Hello",
        city: "USA,New York",
        description:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque, quibusdam?",
      },
      {
        id: "1",
        userName: "Hello",
        city: "USA,New York",
        description:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque, quibusdam?",
      },
      {
        id: "1",
        userName: "Hello",
        city: "USA,New York",
        description:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque, quibusdam?",
      },
      {
        id: "1",
        userName: "Hello",
        city: "USA,New York",
        description:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque, quibusdam?",
      },
      {
        id: "1",
        userName: "Hello",
        city: "USA,New York",
        description:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque, quibusdam?",
      },
    ],
  },
  {
    id: 3,
    name: "Completed",
    values: [
      {
        id: "1",
        userName: "3",
        city: "USA,New York",
        description:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque, quibusdam?",
      },
      {
        id: "1",
        userName: "Hello",
        city: "USA,New York",
        description:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque, quibusdam?",
      },
      {
        id: "1",
        userName: "Hello",
        city: "USA,New York",
        description:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque, quibusdam?",
      },
      {
        id: "1",
        userName: "Hello",
        city: "USA,New York",
        description:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque, quibusdam?",
      },
      {
        id: "1",
        userName: "Hello",
        city: "USA,New York",
        description:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque, quibusdam?",
      },
      {
        id: "1",
        userName: "Hello",
        city: "USA,New York",
        description:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque, quibusdam?",
      },
    ],
  },
];

const activeTab = ref(1);
const activeTabItems = ref(tabItems[activeTab.value - 1].values);

const handleClick = (n) => {
  console.log("oh no it is not clickable", n);
  activeTab.value = n;
  console.log(activeTab.value);
  activeTabItems.value = tabItems[n - 1].values;
  console.log(activeTabItems);
};

onMounted(() => {
  const carousel = document.querySelector(".carousel");
  const arrowBtns = document.querySelectorAll(".wrapper i");
  const wrapper = document.querySelector(".wrapper");

  const firstCard = carousel.querySelector(".card");
  const firstCardWidth = firstCard.offsetWidth;

  let isDragging = false,
    startX,
    startScrollLeft,
    timeoutId;

  const dragStart = (e) => {
    isDragging = true;
    carousel.classList.add("dragging");
    startX = e.pageX;
    startScrollLeft = carousel.scrollLeft;
  };

  const dragging = (e) => {
    if (!isDragging) return;

    // Calculate the new scroll position
    const newScrollLeft = startScrollLeft - (e.pageX - startX);

    // Check if the new scroll position exceeds
    // the carousel boundaries
    if (
      newScrollLeft <= 0 ||
      newScrollLeft >= carousel.scrollWidth - carousel.offsetWidth
    ) {
      // If so, prevent further dragging
      isDragging = false;
      return;
    }

    // Otherwise, update the scroll position of the carousel
    carousel.scrollLeft = newScrollLeft;
  };

  const dragStop = () => {
    isDragging = false;
    carousel.classList.remove("dragging");
  };

  const autoPlay = () => {
    // Return if window is smaller than 800
    if (window.innerWidth < 800) return;

    // Calculate the total width of all cards
    const totalCardWidth = carousel.scrollWidth;

    // Calculate the maximum scroll position
    const maxScrollLeft = totalCardWidth - carousel.offsetWidth;

    // If the carousel is at the end, stop autoplay
    if (carousel.scrollLeft >= maxScrollLeft) return;

    // Autoplay the carousel after every 2500ms
    timeoutId = setTimeout(() => (carousel.scrollLeft += firstCardWidth), 2500);
  };

  carousel.addEventListener("mousedown", dragStart);
  carousel.addEventListener("mousemove", dragging);
  document.addEventListener("mouseup", dragStop);
  wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
  wrapper.addEventListener("mouseleave", autoPlay);

  // Add event listeners for the arrow buttons to
  // scroll the carousel left and right
  arrowBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      carousel.scrollLeft +=
        btn.id === "left" ? -firstCardWidth : firstCardWidth;
    });
  });
});
</script>

<template>
  <section
    class="pt-28 relative bg-gradient-to-b from-[#f7f7f717] to-[#E4F7FF] z-10"
  >
    <!-- Title -->
    <CommonServiceTitle
      heading="Featured Case Study"
      title="Design startup "
      title2="movement"
      :reverse="false"
    />

    <!-- Tabs -->
    <div class="container md:pt-10 flex items-center justify-center mx-auto">
      <div class="tabs shadow-lg shadow-blue-100">
        <!-- tab 1 -->
        <input type="radio" id="radio-1" name="tabs" checked />
        <label @click="handleClick(1)" class="tab" for="radio-1"
          >Upcoming<span class="notification">2</span></label
        >
        <!-- tab 2 -->
        <input type="radio" id="radio-2" name="tabs" />
        <label @click="handleClick(2)" class="tab" for="radio-2"
          >Development</label
        >
        <!-- tab 3 -->
        <input type="radio" id="radio-3" name="tabs" />
        <label @click="handleClick(3)" class="tab" for="radio-3"
          >Completed</label
        >
        <span class="glider"></span>
      </div>
    </div>

    <!-- Carousel -->
    <div class="wrapper max-w-7xl mx-auto px-8 mt-4">
      <!-- Left Arrow Button -->
      <i id="left" class="flex items-center justify-center">
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

      <ul class="carousel">
        <!-- Cards -->
        <div v-for="items in activeTabItems" :key="items.id">
          <!-- Single Card -->
          <li class="card">
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
                {{ items.userName }}
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
      <i id="right" class="flex items-center justify-center rotate-180">
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
      class="hidden md:block absolute -z-10 bg-[#DDD9F8] size-[300px] bottom-0 left-0 rounded-full blur-3xl"
    ></div>
  </section>
</template>

<style scoped>
.wrapper {
  width: 100%;
  position: relative;
}

.wrapper i {
  height: 50px;
  width: 50px;
  background: #c3ebfb;
  text-align: center;
  line-height: 50px;
  border-radius: 50%;
  cursor: pointer;
  position: absolute;
  top: 50%;
  font-size: 1.25 rem;
  transform: translateY(-50%);
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.23);
}

.wrapper i:first-child {
  left: 1px;
}

.wrapper i:last-child {
  right: 7px;
}

.wrapper .carousel {
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: calc((100% / 3) - 12px);
  gap: 16px;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  scrollbar-width: 0;
}

.carousel::-webkit-scrollbar {
  display: none;
}

.carousel :where(.card, .img) {
  display: flex;
  align-items: center;
  justify-content: center;
}

.carousel.dragging {
  scroll-snap-type: none;
  scroll-behavior: auto;
}

.carousel.no-transition {
  scroll-behavior: auto;
}

.carousel.dragging .card {
  cursor: grab;
  user-select: none;
}

.carousel .card {
  scroll-snap-align: start;
  height: 400px;
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

/* .card .img {
  background: green;
  width: 145px;
  height: 145px;
  border-radius: 50%;
}

.card .img img {
  width: 140px;
  height: 140px;
  object-fit: cover;
  border-radius: 50%;
  border: 4px solid #fff;
}

.card h2 {
  font-weight: 500;
  font-size: 1.56rem;
  margin: 30px 0 5px;
}

.card span {
  color: #6a6d78;
  font-size: 1.31rem;
} */

.tabs {
  display: flex;
  /* position: absolute; */
  background-color: #fff;
  box-shadow: 0 0 1px 0 rgba(#185ee0, 0.15), 0 6px 12px 0 rgba(#185ee0, 0.15);
  padding: 0.75rem;
  border-radius: 99px;
  z-index: 2;
}

input[type="radio"] {
  display: none;
}

.tab {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 54px;
  width: 160px;
  font-size: 1.25rem;
  font-weight: 500;
  border-radius: 99px;
  cursor: pointer;
  transition: color 0.15s ease-in;
}

.notification {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  margin-left: 0.75rem;
  border-radius: 50%;
  background-color: #e6eef9;
  transition: 0.15s ease-in;
}

input[type="radio"] {
  &:checked {
    & + label {
      color: #185ee0;
      & > .notification {
        background-color: #185ee0;
        color: #fff;
      }
    }
  }
}

input[id="radio-1"] {
  &:checked {
    & ~ .glider {
      transform: translateX(0);
    }
  }
}

input[id="radio-2"] {
  &:checked {
    & ~ .glider {
      transform: translateX(100%);
    }
  }
}

input[id="radio-3"] {
  &:checked {
    & ~ .glider {
      transform: translateX(200%);
    }
  }
}

.glider {
  position: absolute;
  display: flex;
  height: 54px;
  width: 160px;
  background-color: #e6eef9;
  z-index: -1;
  border-radius: 99px;
  transition: 0.25s ease-out;
}

@media (max-width: 700px) {
  .tabs {
    transform: scale(0.6);
  }
}

@media screen and (max-width: 900px) {
  .wrapper .carousel {
    grid-auto-columns: calc((100% / 2) - 9px);
  }
}

@media screen and (max-width: 600px) {
  .wrapper .carousel {
    grid-auto-columns: 100%;
  }
}
</style>

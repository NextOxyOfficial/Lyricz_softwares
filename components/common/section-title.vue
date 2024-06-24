<template>
  <div
    class="text-center mb-10"
    :class="alignment"
    data-aos-delay="150"
    data-aos="fade-up"
    data-aos-duration="800"
  >
    <span
      class="uppercase text-gray-600 font-medium text-sm"
      :class="preTitleClass"
      v-if="preTitle"
      >{{ preTitle }}
    </span>
    <h2 class="text-3xl font-bold text-black">{{ title }}</h2>
    <span v-if="!disableMark">
      <svg
        class="mx-auto"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        version="1.1"
        id="Layer_1"
        x="0px"
        y="0px"
        width="120"
        viewBox="0 0 132 51"
        enable-background="new 0 0 132 51"
        xml:space="preserve"
      >
        <path
          fill="#2BB19A"
          opacity="1.000000"
          stroke="none"
          d=" M61.257637,20.988007   C49.614521,22.657246 38.446239,24.329664 27.277020,25.995779   C22.780058,26.666590 18.294348,27.466917 13.773657,27.886843   C12.632564,27.992836 11.376680,26.863062 9.779851,26.117296   C28.372417,11.210532 90.181541,11.778693 106.433144,22.281807   C106.418999,22.755913 106.404861,23.230019 106.390717,23.704126   C99.077766,23.124041 91.771301,22.436943 84.450073,21.993483   C76.884880,21.535240 69.305351,21.313726 61.257637,20.988007  z"
        />
      </svg>
    </span>
    <p v-if="subTitle">{{ subTitle }}</p>
  </div>
</template>

<script>
export default {
  props: {
    preTitle: {
      type: String,
    },
    preTitleClass: {
      type: String,
    },
    title: {
      type: String,
      required: true,
    },
    subTitle: {
      type: String,
    },
    alignment: {
      type: String,
    },
    disableMark: {
      type: Boolean,
    },
  },
};
</script>

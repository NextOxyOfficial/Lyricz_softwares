<script setup></script>

<template>
  <div class="pb-20 sm:py-32">
    <UContainer>
      <div
        class="mt-16 grid grid-cols-1 gap-4 rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4 mx-4"
      >
        <CommonStat
          value="20.5"
          tailwindClassColor="text-green-500 font-bold"
          postfix="K"
          title="WEBSITE TRAFFIC"
        />
        <CommonStat
          value="17000"
          tailwindClassColor="text-red-500 font-bold"
          postfix=""
          title="MONTHLY TRAFFIC"
        />
        <CommonStat
          value="97"
          tailwindClassColor="text-purple-500 font-bold"
          postfix="%"
          title="SATISFACTION RATE"
        />
        <CommonStat
          value="20"
          tailwindClassColor="text-orange-500 font-bold"
          postfix="+"
          title="TOP DEVELOPERS"
        />
      </div>
    </UContainer>
  </div>
</template>

<script setup></script>

<template>
  <div class="py-20 bg-gradient-to-b from-[#00AEF03D] to-[#8541CC17]">
    <UContainer>
      <CommonServiceTitle
        heading="Featured Case Study"
        title="Design startup "
        title2="movement"
        :reverse="false"
      />
      <div
        class="mt-16 grid grid-cols-1 gap-4 rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4 mx-4"
      >
        <CommonStat
          value="12"
          tailwindClassColor="text-green-500 font-bold"
          postfix="+"
          title="Years Of Opearation"
        />
        <CommonStat
          value="3500"
          tailwindClassColor="text-red-500 font-bold"
          postfix="+"
          title="Successful Project"
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

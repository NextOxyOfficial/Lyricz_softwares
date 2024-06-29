<script setup>
const stats = [
  { id: 1, title: "12+", description: "YEARS OF OPATRATION" },
  { id: 2, title: "3500+", description: "PROJECT DELIVERD" },
  { id: 3, title: "100+", description: "SPECIALIST" },
  { id: 4, title: "95%", description: "SUCCESS RATE" },
];
</script>

<template>
  <div
    class="w-full flex justify-center items-center bg-gradient-to-b from-[#00AEF03D] to-[#8541CC17]"
  >
    <div class="max-w-7xl mx-auto px-4 py-8 sm:px-6 sm:pt-28 sm:pb-36">
      <PublicTitle
        heading="Featured Case Study"
        title="Design startup "
        title2="movement"
        :reverse="false"
      />
      <div class="grid grid-cols-1 gap-5 sm:grid-cols-4 mt-[31px]">
        <div v-for="stat in stats" :key="stat.id">
          <div
            class="bg-gradient-to-b from-[#8541CC17] to-white overflow-hidden shadow rounded-lg"
          >
            <div class="px-4 py-5 sm:pt-12 sm:pb-8 h-[202px]">
              <div class="flex flex-col items-center gap-3">
                <div class="text-[40px] font-bold">{{ stat.title }}</div>
                <div class="font-bold text-xl w-[90%] px-8 text-center">
                  {{ stat.description }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

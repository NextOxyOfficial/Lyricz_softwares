<script lang="" setup>
const products = [
	{
		id: "1",
		img: "/home/our-products/project-banner3.jpg",
		name: "OXYMANAGER",
		title: "OxyManager is a Business all in one Management Tool",
		description:
			"A complete business management tool - which will make your life easier",
		website: "www.oxymanager.com",
	},
	{
		id: "2",
		img: "/home/our-products/project-banner-1.jpg",
		name: "NextOxy",
		title: "Build your Website with NextOxy",
		description:
			"NextOxy brings your business online in just 10 minutes without hassle.",
		website: "www.nextoxy.com",
	},
	{
		id: "3",
		img: "/home/our-products/project-banner2.jpg",
		name: "LYRICZ MOTORS",
		title: "Lyricz Motors is a Bike servicing and reparing...",
		description:
			"Bike servicing and reparing showroom Lyricz Motors. Premium modified bike for you.",
		website: "www.lyriczmotors.com.com",
	},
];
</script>

<template>
	<section
		class="bg-[url('/home/our-products/bg-image.svg')] bg-cover bg-no-repeat py-8 md:pt-20 md:pb-48 relative"
	>
		<UContainer>
			<CommonHomeTitle
				alignment="text-center"
				preTitle="OUR PRODUCTS"
				title="See Best of Our Developer"
			/>

			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
				<div v-for="product in products" :key="product.id" class="flex">
					<div class="relative flex flex-col justify-between group w-full">
						<img
							class="rounded-2xl mx-2 group-hover:scale-105 transition-all duration-1000 group-hover:opacity-50"
							:src="product.img"
							alt="Image"
						/>
						<div
							class="md:absolute -bottom-5 bg-white -mt-10 mb-12 mx-4 md:mx-8 p-8 rounded-2xl shadow-lg space-y-4 md:-bottom-52 flex flex-col"
						>
							<h1
								class="uppercase text-gray-700 text-xl font-medium hover:text-[#1ab69d] cursor-pointer"
							>
								{{ product.name }}
							</h1>
							<h1
								class="text-2xl font-semibold hover:text-[#1ab69d] cursor-pointer"
							>
								{{ product.title }}
							</h1>
							<p class="hover:text-[#1ab69d] cursor-pointer flex-1">
								{{ product.description }}
							</p>
							<p class="hover:text-[#1ab69d] cursor-pointer">
								{{ product.website }}
							</p>
						</div>
					</div>
				</div>
			</div>
		</UContainer>

		<CommonParallaxScene class="absolute top-20 md:left-40">
			<div data-depth="0.2">
				<NuxtImg src="/home/our-products/shape.png" alt="Image" />
			</div>
		</CommonParallaxScene>
	</section>
</template>

<style></style>

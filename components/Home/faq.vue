<script setup lang="ts">
const items = [
	{
		label: "What Business does Lyricz Softwares Offer?",
		icon: "i-heroicons-information-circle",
		defaultOpen: true,
		content:
			"Lyricz Softwares is the parent company of several successful tech and engineering business projects. We provide business management software, website development, and motor engineering services. ",
	},
	{
		label: "How can I get benefit from this company?",
		icon: "i-heroicons-arrow-down-tray",
		content:
			"You can benefit from Lyricz Softwares by utilizing our software development services for your own business or personal projects. By partnering with a reputable software development company like us, you can access our expertise and technology to build custom software solutions that meet your specific needs and goals. This can help you to streamline your operations, improve efficiency, and achieve your desired outcomes more effectively.",
	},
	{
		label: "Lyricz Software's services and products?",
		icon: "i-heroicons-eye-dropper",
		content:
			"At Lyricz Softwares, we offer a wide range of services and products designed to help businesses improve their operations and increase their efficiency. Our services include custom software development, web development, mobile application development, digital marketing, cloud computing, and business intelligence solutions. Our products include enterprise resource planning (ERP) solutions, customer relationship management (CRM) systems, and business intelligence software. We also provide consulting and training services to help our clients maximize their investment in our products and services. We strive to create tailored solutions that meet our clients' unique needs.",
	},
	{
		label:
			"How does Lyricz Softwares ensure the quality of its software products?",
		icon: "i-heroicons-rectangle-group",
		content:
			" Quality is our top priority at Lyricz Softwares. We follow a rigorous development process that includes thorough requirement analysis, design, coding, testing, and deployment phases. Our experienced team utilizes the latest technologies and best practices to deliver reliable and efficient software solutions. Additionally, we conduct extensive testing, including unit tests, integration tests, and user acceptance testing, to ensure our products meet the highest standards.",
	},
	{
		label: "How long does it take to develop a custom software solution?",
		icon: "i-heroicons-square-3-stack-3d",
		content:
			"The timeline for developing a custom software solution at Lyricz Softwares varies depending on the complexity and scope of the project. Typically, small to medium-sized projects can take anywhere from a few weeks to a few months. During our initial consultation, we work closely with clients to understand their requirements and provide a detailed project timeline and milestones. We are committed to delivering projects on time while maintaining the highest quality standards.",
	},
	{
		label: "What technologies does Lyricz Softwares use for development?",
		icon: "i-heroicons-wrench-screwdriver",
		content:
			" Lyricz Softwares employs a wide range of technologies to cater to different project needs. For web development, we use HTML, CSS, JavaScript, and frameworks like React, Angular, and Vue.js. For backend development, we utilize Node.js, Python, Ruby on Rails, and PHP. For mobile app development, we work with Swift for iOS and Kotlin for Android, as well as cross-platform frameworks like Flutter and React Native. Our technology stack is chosen based on the project requirements and client preferences.",
	},
];
</script>

<template>
	<section id="faq" class="md:pb-20">
		<UContainer>
			<section class="flex flex-col gap-4 mx-2 p-4 md:flex-row items-center">
				<!-- Image -->
				<div class="flex-1 md:w-1/2">
					<NuxtImg class="w-full" src="/home/faq/faq.jpg" />
				</div>

				<!-- Faq -->
				<div class="flex-1 md:w-1/2">
					<CommonHomeTitle
						alignment="text-center"
						preTitle="FAQ"
						title="Frequently Asked Questions"
					/>
					<UAccordion color="sky" variant="solid" size="xl" :items="items" />
				</div>
			</section>
		</UContainer>
	</section>
</template>

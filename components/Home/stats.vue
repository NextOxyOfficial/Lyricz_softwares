<script setup></script>

<template>
	<div class="pb-20 sm:py-32">
		<UContainer>
			<div
				class="mt-16 grid grid-cols-1 gap-4 rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4"
			>
				<CommonStat
					value="20.5"
					tailwindClassColor="text-green-500 font-bold"
					postfix="K"
					title="WEBSITE TRAFFIC"
				/>
				<CommonStat
					value="20.5"
					tailwindClassColor="text-green-500 font-bold"
					postfix="K"
					title="MONTHLY TRAFFIC"
				/>
				<CommonStat
					value="20.5"
					tailwindClassColor="text-green-500 font-bold"
					postfix="K"
					title="SATISFACTION RATE"
				/>
				<CommonStat
					value="20.5"
					tailwindClassColor="text-green-500 font-bold"
					postfix="K"
					title="TOP DEVELOPERS"
				/>
			</div>
		</UContainer>
	</div>
</template>

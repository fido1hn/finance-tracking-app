<template>
  <section class="bg-[#F9FAFB] px-5 py-16 dark:bg-[#161B26] lg:p-28">
    <div class="flex flex-col items-center">
      <img
        src="/quotient.svg"
        alt="Quotient company logo"
        class="mb-8 w-[160px] md:w-auto"
      />
      <h3 class="mb-8 w-10/12 text-center text-3xl font-medium">
        We've been using Finace tracker for all our terminals and can't imagine
        working without it.
      </h3>

      <NuxtImg
        provider="cloudinary"
        src="user-14_jpa2r9.jpg"
        width="64"
        :modifiers="{ roundCorner: 'max' }"
        class="mb-3 rounded-full"
      />

      <p class="text-lg font-semibold">Carole Ofor</p>
      <p class="text-gray-700 dark:text-gray-400">CEO, Quotient enterprise</p>
    </div>
  </section>
</template>

<script lang="ts" setup></script>

<style></style>

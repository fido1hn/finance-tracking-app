<template>
  <section class="flex flex-col items-center">
    <div class="mt-16 flex max-w-7xl flex-col items-center justify-center">
      <h1
        class="px-3 text-center text-3xl font-semibold sm:text-3xl md:text-4xl lg:text-5xl"
      >
        Beautiful POS Transactions Tracking & Analytics
      </h1>
      <p
        class="mt-4 w-3/4 text-center text-sm font-medium text-gray-500 dark:text-gray-400 md:text-base"
      >
        Powerful transactions recording and financial reports to help you
        understand your business metrics, gain an edge and never lose your
        records.
      </p>
      <div class="mt-6 flex items-center justify-center gap-3">
        <UButton
          label="Demo"
          icon="i-heroicons-play-circle"
          variant="solid"
          color="white"
          size="lg"
        />
        <UButton
          to="/login"
          label="Sign up"
          variant="solid"
          color="primary"
          size="lg"
        />
      </div>
    </div>
    <div class="mt-16 flex justify-center">
      <img
        src="/macbook-pro.png"
        class="w-[320px] sm:w-[450px] md:w-[535px]"
        alt="Macbook Pro Image of The Dashboard"
      />
    </div>
  </section>
</template>

<script lang="ts" setup></script>

<style></style>

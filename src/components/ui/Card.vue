<template>
  <div id="card" class="bg-white rounded-md shadow px-5 py-3">
    <h3 class="text-md font-semibold text-gray pb-6">
      <slot name="title"></slot>
    </h3>
    <slot></slot>
  </div>
</template>

<script setup></script>

<script setup lang="ts">
const props = defineProps<{
  href: string;
  blank?: boolean;
}>();
</script>

<template>
  <a :href="props.href" :target="props.blank ? '_blank' : '_self'" />
</template>

<script setup lang="ts">
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'
import WhatsAppFloat from '@/components/WhatsAppFloat.vue'
</script>

<template>
  <AppHeader />
  <RouterView />
  <AppFooter />
  <WhatsAppFloat />
</template>

<style scoped></style>

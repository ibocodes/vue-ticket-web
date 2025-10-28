<template>
  <footer class="footer container">
    <p>&copy; {{ year }} TicketApp. All rights reserved.</p>
  </footer>
</template>

<script setup>
import { ref } from "vue";

const year = ref(new Date().getFullYear());
</script>

<style scoped>
.footer {
  margin-top: auto;
  padding: 24px;
  text-align: center;
  color: #64748b;
}
</style>

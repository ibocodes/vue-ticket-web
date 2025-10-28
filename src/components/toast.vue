<template>
  <div class="toast-wrap">
    <Transition name="toast">
      <div v-if="message" class="toast" role="alert">
        {{ message }}
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { defineProps, onMounted, ref, watch } from "vue";

const props = defineProps({
  message: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    default: 3000,
  },
});

const message = ref(props.message);

// Watch for message changes
watch(
  () => props.message,
  (newVal) => {
    message.value = newVal;
  }
);

// Auto dismiss
onMounted(() => {
  if (props.message) {
    setTimeout(() => {
      message.value = "";
    }, props.duration);
  }
});
</script>

<style scoped>
.toast-wrap {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 100;
}

.toast {
  background: #1e293b;
  color: white;
  padding: 12px 20px;
  border-radius: 8px;
  margin-top: 8px;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}

/* Animation */
.toast-enter-active,
.toast-leave-active {
  transition: all 0.3s ease;
}

.toast-enter-from,
.toast-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
</style>

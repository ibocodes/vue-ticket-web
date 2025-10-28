<template>
  <div class="container">
    <div class="card login-card">
      <h2>Login</h2>
      <form @submit.prevent="handleSubmit" aria-label="Login form">
        <div class="form-group">
          <label for="username">Username</label>
          <input
            id="username"
            v-model="username"
            type="text"
            required
            autocomplete="username"
          />
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input
            id="password"
            v-model="password"
            type="password"
            required
            autocomplete="current-password"
          />
        </div>
        <div v-if="error" class="error" role="alert">{{ error }}</div>
        <div class="form-actions">
          <button type="submit" class="btn-primary">Login</button>
          <router-link to="/auth/signup" class="btn-ghost">
            Sign up
          </router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useTicketStore } from "../../store";

const router = useRouter();
const store = useTicketStore();

const username = ref("");
const password = ref("");
const error = ref("");

const handleSubmit = () => {
  error.value = "";

  if (!username.value || !password.value) {
    error.value = "Please fill all fields";
    return;
  }

  // In a real app, you'd validate against a backend
  // For demo, we'll simulate auth
  try {
    const userData = {
      id: 1,
      username: username.value,
      displayName: username.value,
    };
    store.login(userData);
    router.push("/dashboard");
  } catch (err) {
    error.value = "Login failed. Please try again.";
  }
};
</script>

<style scoped>
.login-card {
  max-width: 520px;
  margin: 32px auto;
}

.form-group {
  margin-bottom: 16px;
}

.form-group label {
  display: block;
  font-weight: 500;
  margin-bottom: 8px;
}

.form-group input {
  width: 100%;
  padding: 10px;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  font-size: inherit;
}

.error {
  color: #dc2626;
  margin: 8px 0;
  font-size: 14px;
}

.form-actions {
  display: flex;
  gap: 12px;
  margin-top: 24px;
}

.btn-primary {
  background: var(--accent);
  color: white;
  padding: 10px 24px;
  border-radius: 8px;
  border: none;
  font-size: inherit;
  font-weight: 500;
  cursor: pointer;
}

.btn-ghost {
  padding: 10px 24px;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
  background: transparent;
  color: inherit;
  text-decoration: none;
  font-weight: 500;
}
</style>

<template>
  <header class="container">
    <nav class="nav">
      <router-link to="/" class="logo"> TicketApp </router-link>

      <div class="nav-links">
        <template v-if="store.user">
          <router-link to="/dashboard">Dashboard</router-link>
          <router-link to="/tickets">Tickets</router-link>
          <button @click="handleLogout" class="btn-ghost">Logout</button>
        </template>
        <template v-else>
          <router-link to="/auth/login" class="btn-ghost"> Login </router-link>
          <router-link to="/auth/signup" class="btn-primary">
            Sign Up
          </router-link>
        </template>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { useRouter } from "vue-router";
import { useTicketStore } from "../store";

const router = useRouter();
const store = useTicketStore();

const handleLogout = () => {
  store.logout();
  router.push("/auth/login");
};
</script>

<style scoped>
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 72px;
}

.logo {
  font-weight: 700;
  font-size: 20px;
  color: var(--accent);
  text-decoration: none;
}

.nav-links {
  display: flex;
  gap: 16px;
  align-items: center;
}

.nav-links a {
  text-decoration: none;
  color: inherit;
  font-weight: 500;
}

.btn-primary {
  background: var(--accent);
  color: white !important;
  padding: 10px 18px;
  border-radius: 8px;
}

.btn-ghost {
  padding: 10px 18px;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
  background: transparent;
  font-weight: 500;
  font-family: inherit;
  font-size: inherit;
  cursor: pointer;
}

@media (max-width: 768px) {
  .nav-links a:not(.btn-primary):not(.btn-ghost) {
    display: none;
  }
}
</style>

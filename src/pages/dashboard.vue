<template>
  <div class="container">
    <div class="dashboard">
      <header class="page-header">
        <h1>Dashboard</h1>
        <div class="stats">
          <div class="stat-card">
            <h3>Open Tickets</h3>
            <p>{{ openCount }}</p>
          </div>
          <div class="stat-card">
            <h3>In Progress</h3>
            <p>{{ inProgressCount }}</p>
          </div>
          <div class="stat-card">
            <h3>Closed</h3>
            <p>{{ closedCount }}</p>
          </div>
        </div>
      </header>

      <section class="recent-tickets">
        <div class="section-header">
          <h2>Recent Tickets</h2>
          <router-link to="/tickets" class="btn-ghost">View All</router-link>
        </div>

        <div v-if="recentTickets.length === 0" class="empty-state">
          <p>No tickets yet</p>
          <router-link to="/tickets" class="btn-primary">
            Create Ticket
          </router-link>
        </div>

        <div v-else class="ticket-list">
          <div
            v-for="ticket in recentTickets"
            :key="ticket.id"
            class="card ticket-card"
          >
            <div class="ticket-meta">
              <h3 class="ticket-title">{{ ticket.title }}</h3>
              <p class="ticket-desc">{{ ticket.description }}</p>
            </div>
            <span :class="['status', 'status-' + ticket.status]">
              {{ ticket.status }}
            </span>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useTicketStore } from "../store";

const store = useTicketStore();

// Get last 5 tickets
const recentTickets = computed(() => store.tickets.slice(0, 5));

// Status counts
const openCount = computed(
  () => store.tickets.filter((t) => t.status === "open").length
);
const inProgressCount = computed(
  () => store.tickets.filter((t) => t.status === "in_progress").length
);
const closedCount = computed(
  () => store.tickets.filter((t) => t.status === "closed").length
);
</script>

<style scoped>
.page-header {
  margin-bottom: 32px;
}

.page-header h1 {
  font-size: 32px;
  margin: 0 0 24px;
}

.stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
}

.stat-card {
  background: white;
  padding: 24px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(16, 24, 40, 0.06);
}

.stat-card h3 {
  font-size: 14px;
  color: #64748b;
  margin: 0 0 8px;
}

.stat-card p {
  font-size: 32px;
  font-weight: 700;
  color: var(--accent);
  margin: 0;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}

.section-header h2 {
  font-size: 20px;
  margin: 0;
}

.ticket-list {
  display: grid;
  gap: 12px;
}

.ticket-card {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 16px;
}

.ticket-meta {
  flex: 1;
}

.ticket-title {
  margin: 0 0 4px;
  font-size: 16px;
}

.ticket-desc {
  margin: 0;
  color: #64748b;
  font-size: 14px;
}

.status {
  padding: 6px 12px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 500;
  text-transform: uppercase;
}

.status-open {
  color: var(--green);
}
.status-in_progress {
  color: var(--amber);
}
.status-closed {
  color: var(--gray);
}

.empty-state {
  text-align: center;
  padding: 48px;
  background: white;
  border-radius: 12px;
}

.empty-state p {
  margin: 0 0 16px;
  color: #64748b;
}

@media (max-width: 768px) {
  .stats {
    grid-template-columns: 1fr;
  }
  .stat-card {
    text-align: center;
  }
}
</style>

<template>
  <div class="container">
    <div class="tickets-page">
      <header class="page-header">
        <h1>Tickets</h1>
        <button class="btn-primary" @click="showNewTicketForm = true">
          Create Ticket
        </button>
      </header>

      <!-- New Ticket Dialog -->
      <div v-if="showNewTicketForm" class="dialog-overlay">
        <div class="dialog card">
          <h2>Create New Ticket</h2>
          <form @submit.prevent="handleCreateTicket">
            <div class="form-group">
              <label for="title">Title</label>
              <input
                id="title"
                v-model="newTicket.title"
                type="text"
                required
              />
            </div>
            <div class="form-group">
              <label for="description">Description</label>
              <textarea
                id="description"
                v-model="newTicket.description"
                required
                rows="4"
              ></textarea>
            </div>
            <div class="form-group">
              <label for="status">Status</label>
              <select id="status" v-model="newTicket.status">
                <option value="open">Open</option>
                <option value="in_progress">In Progress</option>
                <option value="closed">Closed</option>
              </select>
            </div>
            <div class="dialog-actions">
              <button type="submit" class="btn-primary">Create</button>
              <button
                type="button"
                class="btn-ghost"
                @click="showNewTicketForm = false"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>

      <!-- Ticket List -->
      <div v-if="store.tickets.length === 0" class="empty-state">
        <p>No tickets yet</p>
        <button class="btn-primary" @click="showNewTicketForm = true">
          Create Your First Ticket
        </button>
      </div>

      <div v-else class="ticket-list">
        <div
          v-for="ticket in store.tickets"
          :key="ticket.id"
          class="card ticket-card"
        >
          <div class="ticket-meta">
            <h3 class="ticket-title">{{ ticket.title }}</h3>
            <p class="ticket-desc">{{ ticket.description }}</p>
          </div>
          <div class="ticket-actions">
            <span :class="['status', 'status-' + ticket.status]">
              {{ ticket.status }}
            </span>
            <button
              v-if="ticket.status !== 'closed'"
              class="btn-icon"
              @click="updateTicketStatus(ticket.id, 'closed')"
              title="Mark as closed"
            >
              ✓
            </button>
            <button
              class="btn-icon delete"
              @click="deleteTicket(ticket.id)"
              title="Delete ticket"
            >
              ×
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useTicketStore } from "../store";

const store = useTicketStore();
const showNewTicketForm = ref(false);
const newTicket = ref({
  title: "",
  description: "",
  status: "open",
});

const handleCreateTicket = () => {
  store.addTicket({
    id: Date.now(),
    ...newTicket.value,
  });
  showNewTicketForm.value = false;
  newTicket.value = { title: "", description: "", status: "open" };
};

const updateTicketStatus = (id, status) => {
  const ticket = store.tickets.find((t) => t.id === id);
  if (ticket) {
    store.updateTicket(id, { ...ticket, status });
  }
};

const deleteTicket = (id) => {
  if (confirm("Are you sure you want to delete this ticket?")) {
    store.deleteTicket(id);
  }
};
</script>

<style scoped>
.page-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
}

.page-header h1 {
  margin: 0;
  font-size: 32px;
}

.ticket-list {
  display: grid;
  gap: 16px;
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

.ticket-actions {
  display: flex;
  align-items: center;
  gap: 8px;
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

.btn-icon {
  width: 32px;
  height: 32px;
  border-radius: 6px;
  border: 1px solid #e2e8f0;
  background: white;
  color: #64748b;
  font-size: 18px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
}

.btn-icon.delete:hover {
  background: #fee2e2;
  color: #dc2626;
  border-color: #fecaca;
}

.dialog-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  z-index: 50;
}

.dialog {
  width: 100%;
  max-width: 480px;
}

.dialog h2 {
  margin: 0 0 24px;
}

.form-group {
  margin-bottom: 16px;
}

.form-group label {
  display: block;
  font-weight: 500;
  margin-bottom: 8px;
}

.form-group input,
.form-group textarea,
.form-group select {
  width: 100%;
  padding: 10px;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  font-size: inherit;
  font-family: inherit;
}

.dialog-actions {
  display: flex;
  gap: 12px;
  margin-top: 24px;
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
</style>

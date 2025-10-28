import { defineStore } from 'pinia'

export const useTicketStore = defineStore('ticket', {
  state: () => ({
    user: JSON.parse(localStorage.getItem('ticketapp_session')) || null,
    tickets: [] // persisted only in-memory for now; you can optionally persist to localStorage
  }),
  actions: {
    login(userData) {
      this.user = userData
      localStorage.setItem('ticketapp_session', JSON.stringify(userData))
    },
    logout() {
      this.user = null
      localStorage.removeItem('ticketapp_session')
    },
    addTicket(ticket) { this.tickets.push(ticket) },
    updateTicket(id, updated) {
      const i = this.tickets.findIndex(t => t.id === id)
      if (i !== -1) this.tickets[i] = updated
    },
    deleteTicket(id) { this.tickets = this.tickets.filter(t => t.id !== id) }
  }
})

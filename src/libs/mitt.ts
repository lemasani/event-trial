import mitt from 'mitt'
import type { Emitter } from 'mitt'

// Define the events and their payload types
type Events = {
  buttonClicked: { message: string }
  userAction: { action: string; timestamp: number }
  notification: { type: 'success' | 'error' | 'info'; message: string }
}

// Create the event emitter with type safety
const eventEmitter: Emitter<Events> = mitt<Events>()

// Export the emitter for use in components
export default eventEmitter

// Example usage (commented out for production)
/*
// Listen to a specific event
eventEmitter.on('buttonClicked', (data) => {
  console.log('Button clicked with message:', data.message)
})

// Listen to all events
eventEmitter.on('*', (type, data) => {
  console.log('Event fired:', type, data)
})

// Emit an event
eventEmitter.emit('buttonClicked', { message: 'Hello from mitt!' })

// Working with handler references for cleanup
function handleNotification(data: { type: 'success' | 'error' | 'info'; message: string }) {
  console.log(`${data.type}: ${data.message}`)
}

eventEmitter.on('notification', handleNotification)   // listen
eventEmitter.off('notification', handleNotification)  // unlisten

// Clear all events (useful for cleanup)
// eventEmitter.all.clear()
*/
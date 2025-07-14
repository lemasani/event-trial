# Mitt Event Bus Demo

A comprehensive React + TypeScript + Vite application demonstrating the usage of [mitt](https://github.com/developit/mitt) - a functional event emitter for cross-component communication.

## 🚀 Features

- **Type-Safe Event Bus** - Full TypeScript support with event type definitions
- **Cross-Component Communication** - Components communicate without direct dependencies
- **Real-time Notifications** - Auto-dismissing notification system
- **Global Event Debugging** - Wildcard listener for monitoring all events
- **Proper Cleanup** - Memory leak prevention with proper event listener cleanup
- **Multiple Event Types** - Demonstrates various event patterns and use cases

## 📋 Table of Contents

- [Getting Started](#getting-started)
- [How It Works](#how-it-works)
- [Project Structure](#project-structure)
- [Event Types](#event-types)
- [Components](#components)
- [Usage Examples](#usage-examples)
- [Development](#development)

## 🏃‍♂️ Getting Started

### Prerequisites

- Node.js (v22 or higher)
- pnpm, npm, or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/lemasani/event-trial
cd event-trial
```

2. Install dependencies:

```bash
pnpm install
# or
npm install
# or
yarn install
```

3. Start the development server:

```bash
pnpm dev
# or
npm run dev
# or
yarn dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🔧 How It Works

This demo showcases **mitt**, a tiny 200-byte functional event emitter that enables powerful cross-component communication in React applications.

### Core Concept

Instead of prop drilling or complex state management, components communicate through events:

```typescript
// Component A emits an event
eventEmitter.emit("buttonClicked", { message: "Hello!" });

// Component B listens for the event
eventEmitter.on("buttonClicked", (data) => {
  console.log(data.message); // 'Hello!'
});
```

### Key Benefits

- **Decoupled Architecture** - Components don't need direct references to each other
- **Type Safety** - TypeScript ensures event data integrity
- **Performance** - Lightweight library with minimal overhead
- **Flexibility** - Easy to add, remove, or modify event listeners
- **Debugging** - Global event listener for monitoring all events

## 📁 Project Structure

```
src/
├── components/
│   ├── Button.tsx              # Basic event emitter
│   ├── messageDisplay.tsx      # Event listener
│   ├── NotificationCenter.tsx  # Advanced event handling
│   └── DemoControls.tsx        # Multiple event types
├── libs/
│   ├── mitt.ts                 # Event bus configuration
│   └── eventbus.ts            # Custom implementation (legacy)
├── App.tsx                     # Main application
└── App.css                     # Styling
```

## 🎯 Event Types

The application defines the following TypeScript event types:

```typescript
type Events = {
  buttonClicked: { message: string };
  userAction: { action: string; timestamp: number };
  notification: { type: "success" | "error" | "info"; message: string };
};
```

## 🧩 Components

### Button.tsx

Basic event emitter that sends a message when clicked.

```typescript
const handleClick = () => {
  eventEmitter.emit("buttonClicked", { message: "Hello from mitt!" });
};
```

### MessageDisplay.tsx

Listens for button click events and displays the message.

```typescript
useEffect(() => {
  const handleButtonClick = (data: { message: string }) => {
    setMessage(data.message);
  };

  eventEmitter.on("buttonClicked", handleButtonClick);

  return () => {
    eventEmitter.off("buttonClicked", handleButtonClick);
  };
}, []);
```

### NotificationCenter.tsx

Advanced component that:

- Listens to multiple event types
- Auto-dismisses notifications after 3 seconds
- Monitors all events with wildcard listener (`*`)
- Demonstrates proper cleanup patterns

### DemoControls.tsx

Showcases different event types:

- Success notifications
- Error notifications
- Info notifications
- User action events

## 💡 Usage Examples

### Basic Event Emission

```typescript
import eventEmitter from "../libs/mitt";

// Emit an event
eventEmitter.emit("buttonClicked", { message: "Hello World!" });
```

### Event Listening with Cleanup

```typescript
import { useEffect } from "react";
import eventEmitter from "../libs/mitt";

useEffect(() => {
  const handler = (data) => {
    console.log("Received:", data);
  };

  // Listen to event
  eventEmitter.on("buttonClicked", handler);

  // Cleanup on unmount
  return () => {
    eventEmitter.off("buttonClicked", handler);
  };
}, []);
```

### Global Event Monitoring

```typescript
// Listen to ALL events for debugging
eventEmitter.on("*", (type, data) => {
  console.log(`Event: ${type}`, data);
});
```

### Multiple Event Types

```typescript
// Success notification
eventEmitter.emit("notification", {
  type: "success",
  message: "Operation completed!",
});

// User action tracking
eventEmitter.emit("userAction", {
  action: "button_click",
  timestamp: Date.now(),
});
```

## 🛠 Development

### Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm lint` - Run ESLint
- `pnpm preview` - Preview production build

### Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **mitt** - Event emitter library
- **ESLint** - Code linting

### Key Features Demonstrated

1. **Type-Safe Events** - Event payloads are strictly typed
2. **Memory Management** - Proper event listener cleanup
3. **Cross-Component Communication** - No prop drilling required
4. **Real-time Updates** - Instant UI updates across components
5. **Debugging Support** - Global event monitoring
6. **Auto-cleanup** - Notifications auto-dismiss after timeout

## 🎮 Interactive Demo

The demo includes:

1. **Basic Button** - Click to emit a simple message event
2. **Demo Controls** - Various notification types and user actions
3. **Live Notifications** - Real-time notification display with auto-cleanup
4. **Console Logging** - Check browser console for all event activity

Try clicking different buttons and watch how events flow between components in real-time!

## 📚 Learn More

- [mitt GitHub Repository](https://github.com/developit/mitt)
- [React Documentation](https://react.dev)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
- [Vite Documentation](https://vitejs.dev)

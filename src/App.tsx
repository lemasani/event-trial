import "./App.css";
import Button from "./components/Button";
import MessageDisplay from "./components/messageDisplay";
import NotificationCenter from "./components/NotificationCenter";
import DemoControls from "./components/DemoControls";

function App() {
  return (
    <>
      <section>
        <h1>Mitt Event Bus Demo</h1>

        <p style={{ marginBottom: "1.5rem", color: "#666" }}>
          This is a comprehensive example of using the mitt event bus library in
          React. Click the buttons below to see different types of events in
          action.
        </p>

        <div className="container">
          <div className="grid grid-cols-2">
            <div>
              <div className="card">
                <h2>Basic Event Example</h2>
                <Button />
                <div className="message-display">
                  <strong>Message:</strong> <MessageDisplay />
                </div>
              </div>

              <div className="card">
                <DemoControls />
              </div>
            </div>

            <div className="card">
              <NotificationCenter />
            </div>
          </div>

          <div className="info-box">
            <h3>How it works:</h3>
            <ul>
              <li>
                <strong>Basic Button:</strong> Emits a 'buttonClicked' event
                with a message
              </li>
              <li>
                <strong>Notifications:</strong> Demonstrates different event
                types with auto-cleanup
              </li>
              <li>
                <strong>User Actions:</strong> Shows how to emit events for
                analytics/logging
              </li>
              <li>
                <strong>Global Listener:</strong> The notification center
                listens to all events for debugging
              </li>
              <li>
                <strong>Type Safety:</strong> Uses TypeScript for event type
                definitions
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;

import { useEffect, useState } from "react";
import eventEmitter from "../libs/mitt";

interface Notification {
  id: number;
  type: "success" | "error" | "info";
  message: string;
  timestamp: number;
}

const NotificationCenter = () => {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  useEffect(() => {
    // Listen to notification events
    const handleNotification = (data: {
      type: "success" | "error" | "info";
      message: string;
    }) => {
      const newNotification: Notification = {
        id: Date.now(),
        type: data.type,
        message: data.message,
        timestamp: Date.now(),
      };

      setNotifications((prev) => [...prev, newNotification]);

      // Auto-remove notification after 3 seconds
      setTimeout(() => {
        setNotifications((prev) =>
          prev.filter((n) => n.id !== newNotification.id)
        );
      }, 3000);
    };

    // Listen to user actions
    const handleUserAction = (data: { action: string; timestamp: number }) => {
      console.log("User action:", data.action, "at", new Date(data.timestamp));
    };

    // Listen to all events for debugging
    const handleAllEvents = (type: string, data: unknown) => {
      console.log("Event emitted:", type, data);
    };

    eventEmitter.on("notification", handleNotification);
    eventEmitter.on("userAction", handleUserAction);
    eventEmitter.on("*", handleAllEvents);

    return () => {
      eventEmitter.off("notification", handleNotification);
      eventEmitter.off("userAction", handleUserAction);
      eventEmitter.off("*", handleAllEvents);
    };
  }, []);

  const getNotificationClass = (type: string) => {
    switch (type) {
      case "success":
        return "notification notification-success";
      case "error":
        return "notification notification-error";
      case "info":
        return "notification notification-info";
      default:
        return "notification";
    }
  };

  return (
    <div className="notification-center">
      <h3>Notifications</h3>
      {notifications.length === 0 ? (
        <p style={{ color: "#666" }}>No notifications</p>
      ) : (
        <div>
          {notifications.map((notification) => (
            <div
              key={notification.id}
              className={getNotificationClass(notification.type)}
            >
              <strong>{notification.type.toUpperCase()}:</strong>{" "}
              {notification.message}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default NotificationCenter;
